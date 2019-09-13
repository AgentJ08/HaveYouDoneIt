const express = require('express');
const router = express.Router();

const User = require('../../models/user');

router.get('/', (req, res) => {
	User.find()
		.sort({ username: 1 })
		.then(users => res.json(users))
});

router.post('/', (req, res) => {
	const newUser = new User({
		username: request.body.username,
		password: request.body.password
	});

	newuser.save().then(user => res.json(user));
});

router.delete('/:id', (req,res) => {
	User.findById(req.params.id)
		.then(user => user.remove().then(() => res.json({ success: true })))
		.catch(err => res.status(404).json({ success: false }))
});

module.exports = router;