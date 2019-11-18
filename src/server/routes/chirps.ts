import { Router } from 'express';
import db from '../db';

const router = Router();

// get all chirps or individual chirp by id
router.get('/:chirpid?', async (req, res) => {
	const chirpid = req.params.chirpid;
	if (chirpid) {
		try {
            const [chirp] = await db.chirps.one(chirpid);
            res.json(chirp);
		} catch (error) {
			console.log(error);
			res.status(500).json('My code sucks.');
		}
	} else {
		try {
			const chirps = await db.chirps.all();
			res.json(chirps);
		} catch (error) {
			console.log(error);
			res.status(500).json('My code sucks.');
		}
	}
});

router.post('/', async (req, res) => {
    try {
        res.json(await db.chirps.post(req.body.userid, req.body.text))
    } catch (e) {
        console.log(e)
        res.sendStatus(500)
    }
})

router.put('/:chirpid', async (req, res) => {
	let id = req.params.chirpid;
	let chirptext = req.body.text;
    try {
        return res.json(await db.chirps.put(id, chirptext))
    } catch (e) {
        console.log(e)
        res.status(500).json('My code sucks.');
    }
})

router.delete('/:chirpid', async (req, res) => {
    let chirpid = req.params.chirpid
    try {
        res.json(await db.chirps.remove(chirpid))
    } catch (e) {
        console.log(e)
        res.status(500).json('My code sucks.');
    }
})

export default router;