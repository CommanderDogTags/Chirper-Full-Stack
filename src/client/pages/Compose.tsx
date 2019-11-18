import * as React from 'react';
import { useState, useEffect } from 'react';
import { json } from '../utils/api';
import { RouteComponentProps } from 'react-router-dom';

const Compose: React.FC<ComposeProps> = props => {
    const [userid, setUserid] = useState<string>('1');
    const [text, setText] = useState<string>('');
    const [users, setUsers] = useState<{id:number, name:string}[]>([]);

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

	const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
		try {
            let response = await json('/api/chirps', 'POST', { userid, text });
            console.log(response);
            props.history.push('/');
        } catch (error) {
            console.log(error);
        }
    };
    
    return (
        <>
                <div className="bg-secondary">
                    <main className="container py-5">
                        <h1 className="text-center text-white">Add a Chirp!</h1>
                    </main>
                </div>

                <div className="col-md-6 offset-md-3 py-3">
                    <article className="card my-2 shadow-sm border border-primary">
                        <div className="card-body text-center">

                            <select value={userid} onChange={e => setUserid(e.target.value)} className="form-control my-1 shadow-sm">
                                {users.map(user => (
                                    <option key={user.id} value={user.id}>{user.name}</option>
                                ))}
                            </select>
                            
                            <textarea rows={8} value={text} onChange={e => setText(e.target.value)} 
                            placeholder="Type your chirp here..." className="form-control my-1 shadow-sm" />
                        </div>
                        <div className="container text-center">
                            <button className="btn btn-outline-primary btn-md mb-3" onClick={handleSubmit}>Chirp away!</button>
                        </div>
                    </article>
                </div>
            </>
        );
}

interface ComposeProps extends RouteComponentProps {}

export default Compose;