import { Query } from '../index';

const all = () => Query<{}[]>('SELECT id, name FROM users');

export default {
    all
}