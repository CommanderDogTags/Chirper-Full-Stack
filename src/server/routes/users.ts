import { Router } from 'express';
import db from '../db';

const router = Router();

router.get('/', async (req, res) => {
		try {
            const users = await db.users.all();
            res.json(users);
		} catch (error) {
			console.log(error);
			res.status(500).json('My code sucks.');
		}
});

export default router;