const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/', async function (req, res) {
    
    const nac_parkovi = (await db.query('SELECT * FROM nacionalni_parkovi'));
    


    res.render('datatable', {
        title: 'Datatable',
        linkActive: 'datatable',
        nac_parkovi: nac_parkovi,
        
    });
});
router.get('/JSONDownload', async function(req,res){
    const nac_parkovi = (await db.query('SELECT * FROM nacionalni_parkovi'));
    res.json(nac_parkovi);
    
});
router.get('/CSVDownload', async function(req,res){
    const nac_parkovi = (await db.query('SELECT * FROM nacionalni_parkovi'));
    
    res.send(nac_parkovi);
    
    
    
});
module.exports = router;