import * as React from 'react';
import { useState, useEffect } from 'react';
import { json } from '../utils/api';
import { RouteComponentProps } from "react-router-dom";

const Edit: React.FC<EditProps> = props => {
    const [userid, setUserid] = useState<string>('');
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

    const handleDelete = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        try {
            let response = await json(`/api/chirps/${props.match.params.id}`, 'DELETE', { userid, text });
            console.log(response);
            props.history.push('/');
        } catch (error) {
            console.log(error);
        }
    };

    const handleEdit = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        try {
            let response = await json(`/api/chirps/${props.match.params.id}`, 'PUT', { userid, text });
            console.log(response);
            props.history.push('/');
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <div className="bg-secondary">
                <main className="container py-5">
                    <h1 className="text-center text-white">Edit a Chirp!</h1>
                </main>
            </div>
            <div>
                <div className="col-md-6 offset-md-3">
                    <article className="card my-2 shadow-sm border border-primary">
                        <div className="card-body text-center py-4">

                            <select value={userid} onChange={e => setUserid(e.target.value)} className="form-control my-1 shadow-sm">
                                {users.map(user => (
                                    <option key={user.id} value={user.id}>{user.name}</option>
                                ))}
                            </select>

                            <textarea rows={8} value={text} onChange={e => setText(e.target.value)} 
                            placeholder={} className="form-control my-1 shadow-sm" />

                        </div>

                        <div className="container text-center">
                            <button className="btn btn-outline-primary btn-lg mb-3" onClick={handleEdit}>Edit Chirp!</button>
                        </div>
                        <div className="container text-center">
                            <button className="btn btn-outline-info btn-sm mb-4" onClick={handleDelete}>Delete Chirp!</button>
                        </div>

                    </article>
                </div>
                <div>

                </div>
            </div>
        </>
    );
}

export interface EditProps extends RouteComponentProps<{ id: string, userid: string, text: string }> {}

export default Edit;