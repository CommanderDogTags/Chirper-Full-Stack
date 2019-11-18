import * as React from 'react';
import { useState, useEffect } from 'react';
import { json } from '../utils/api';
import { RouteComponentProps } from 'react-router-dom';
import MentionCard from '../components/MentionCard';

const Mentions: React.FC<MentionsProps> = props => {
    const [userid, setUserid] = useState<string>('1');
    const [users, setUsers] = useState<{ id: number, name: string }[]>([]);
    const [mentions, setMentions] = useState<{ id: number, text: string, author: string, _created: string }[]>([]);

    useEffect(() => {
        (async () => {
            try {
                let users = await json('/api/users');
                setUsers(users);
            } catch (error) {
                console.log(error);
            }
        })();
    }, []);

    const getMentions = async() => {
        try {
            let mentions = await json(`/api/mentions/${userid}`)
            setMentions(mentions);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <div className="bg-secondary">
                <main className="container py-5">
                    <h1 className="text-center text-white">Mentions!</h1>
                </main>
            </div>

            <div className="col-md-6 offset-md-3 py-3">
                <article className="card my-2 shadow-sm border border-primary">
                    <div className="card-body text-center">
                        <p className="text-info">Select the user to show mentions for:</p>

                        <select value={userid} onChange={e => setUserid(e.target.value)} className="form-control my-1 shadow-sm">
                            {users.map(user => (
                                <option key={user.id} value={user.id}>{user.name}</option>
                            ))}
                        </select>

                    </div>
                    <div className="container text-center">
                        <button className="btn btn-outline-primary btn-md mb-3" onClick={getMentions}>Show mentions!</button>
                    </div>
                </article>
            </div>

            {mentions.map(mention => (
                <MentionCard key={mention.id} mention={mention} />
            ))}
        </>
    );
}

interface MentionsProps extends RouteComponentProps { }

export default Mentions;