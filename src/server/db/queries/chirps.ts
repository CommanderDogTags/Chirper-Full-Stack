import { Query } from '../index';

const all = () => Query<[]>('SELECT c.id, u.name AS author, c.text, c._created FROM chirps c JOIN users u ON u.id = c.userid ORDER BY _created DESC;');
const one = (id: string) => Query<{}[]>('SELECT * FROM chirps WHERE id = ?', [id]);
const remove = (id: string) => Query<{}>(`DELETE FROM chirps WHERE id =?`, [id]);
const post = async (userid: string, text: string) => Query<{}>(`INSERT INTO Chirps ( userid, text) VALUES (?)`, [[userid, text]]);
const put = async (id: string, text: string) => Query<{}>(`UPDATE chirps SET text =? WHERE id=?`, [text, id]);

export default {
    all,
    one,
    remove,
    post,
    put
}