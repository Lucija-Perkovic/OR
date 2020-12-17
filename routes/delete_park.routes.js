const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/', async function (req, res) {
    
    const nac_parkovi = (await db.query('SELECT * FROM nacionalni_parkovi'));
    


    res.render('delete_park', {
        title: 'Delete_park',
        linkActive: 'delete_park',
        nac_parkovi: nac_parkovi,
        
    });
});

module.exports = router;