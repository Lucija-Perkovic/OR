const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/:id', async function (req, res) {
    var ID = req.params.id;
    const nac_parkovi = (await db.query(`SELECT * FROM nacionalni_parkovi WHERE id = ${ID}`));
    if(nac_parkovi.length == 0){
        res.status(404).send("There is no national park with that ID.")
    }
    res.send(nac_parkovi);
});

module.exports = router;