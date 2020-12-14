const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/', async function (req, res) {
    
    const nac_parkovi = (await db.query('SELECT * FROM nacionalni_parkovi'));
    


    res.render('add_park', {
        title: 'Add_park',
        linkActive: 'add_park',
        nac_parkovi: nac_parkovi,
        
    });
});
router.post('/add', async function(req, res){
    

})
module.exports = router;