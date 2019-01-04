import express from 'express';
import meetupController from '../controllers/meetup';
import meetupvalidator from '../validators/meetupvalidator';

const {
    createMeetup, getMeetups} = meetupController;

const router = express.Router();

router.post('/', meetupvalidator, createMeetup);
router.get('/', getMeetups);
router.get('/:id', idValidator, getMeetup);

export default router;