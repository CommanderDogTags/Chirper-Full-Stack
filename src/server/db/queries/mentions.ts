import { Query } from '../index';

const one = (usermentionid: string) => Query<{}[]>('SELECT c.id, c._created, u.name AS author, c.text FROM mentions m JOIN chirps c ON c.id = m.chirpid JOIN users u ON u.id = c.userid WHERE m.usermentionid = ?;' ,[usermentionid]);

export default {
    one
}