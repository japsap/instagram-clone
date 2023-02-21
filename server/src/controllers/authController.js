const router = require('express').Router();

const authService = require('../services/authService');

//---------------------------------------------------------------------------//
router.get('/login', (req, res) => {
})


router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        const token = await authService.login(username, password);
        res.cookie('auth', token);

    } catch(err) {
        console.log(err);
        res.json({ error: err.message })
    }

})

//---------------------------------------------------------------------------//

router.get('/register', (req, res) => {
})


router.post('/register', async (req, res) => {
    const { username, password, email } = req.body.username;

    const existingUser = await authService.getOne(username);

    if(existingUser){
        res.json({ error: 'User already exists!'})
    }

    try{
        const user = await authService.register(username, password, email);
        res.json({ user })

    } catch(err){
        const errors = Object?.keys(err.errors).map(keys => err.errors[keys].message);

        return res.json({ error: errors[0]})
    }

})

//---------------------------------------------------------------------------//

module.exports = router;