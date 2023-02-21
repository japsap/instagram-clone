const router = require('express').Router();


router.post('/login', async (req, res) => {
    const { username, password} = req.body;

})



router.post('/register', async (req, res) => {
    const { username, password, email} = req.body;

})

module.exports = router;