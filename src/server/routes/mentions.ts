import { Router } from 'express';
import db from '../db';

const router = Router();

router.get('/:mentionid?', async (req, res) => {
	const mentionid = req.params.mentionid;
		try {
            const mentions = await db.mentions.one(mentionid);
            res.json(mentions);
		} catch (error) {
			console.log(error);
			res.status(500).json('My code sucks.');
		}
});

export default router;