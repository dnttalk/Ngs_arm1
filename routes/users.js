const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

// 登入路由
router.post('/login', (req, res) => {
    const { user, pwd } = req.body;
    const dataPath = path.join(__dirname, '../data/data.json');

    fs.readFile(dataPath, 'utf-8', (error, data) => {
        if (error) {
            res.send("<h1 style='color:orange'>! Server Error</h1>" + error);
            return;
        }

        const arr = JSON.parse(data);
        const userObj = arr.find(obj => obj.user === user && obj.pwd === pwd);

        if (userObj) {
            res.render('first', { user, title: 'Login success' });
        } else {
            res.send(`<h1 style='color:red'>! Login fail</h1> Login failed! After 3 seconds, it will automatically return to the login interface.....<script>setTimeout(() => {window.location = '/login.html';}, 3000);</script>`);
        }
    });
});

// 登入頁面路由
// router.get('/login', (req, res) => {
//     res.render('tp53');
// });



module.exports = router;