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

router.delete('/delete/:id', async function(req,res){
    console.log('YO')
    var id = req.body.id;
    db.query(`DELETE FROM nacionalni_parkovi WHERE id = $1`, [id]);

})


router.put('/edit/:id', async function(req,res){
    var id = req.body.id;
    var naziv_parka = req.body.naziv_parka;
    var drzava = req.body.drzava;
    var lokacija = req.body.lokacija;
    var godina_osnutka = req.body.godina_osnutka;
    var wikipedia_stranica = req.body.wikipedia_stranica;
    var prosj_broj = req.body.prosj_broj;
    var povrsina = req.body.povrsina;
    var nativna_vrsta = req.body.nativna_vrsta;
    var klima = req.body.klima;
    var sluzbena_stranica = req.body.sluzbena_stranica;
    db.query(`UPDATE nacionalni_parkovi 
              SET nazivparka = $1,
                  drzava = $2,
                  lokacija = $3,
                  wikipediastranica = $4,
                  prosjbrposjetiteljagodisnje = $5,
                  povrsina = $6,
                  sluzbenastranica = $7,
                  klima = $8,
                  godinaosnutka = $9,
                  nativnavrsta = $10   
              WHERE id = $11`, [naziv_parka,drzava, lokacija, wikipedia_stranica, prosj_broj, povrsina, sluzbena_stranica,
                klima, godina_osnutka, nativna_vrsta,id]);

})
router.post('/add', async function(req,res){
    var naziv_parka = req.body.naziv_parka;
    var drzava = req.body.drzava;
    var lokacija = req.body.lokacija;
    var godina_osnutka = req.body.godina_osnutka;
    var wikipedia_stranica = req.body.wikipedia_stranica;
    var prosj_broj = req.body.prosj_broj;
    var povrsina = req.body.povrsina;
    var nativna_vrsta = req.body.nativna_vrsta;
    var klima = req.body.klima;
    var sluzbena_stranica = req.body.sluzbena_stranica;
    db.query(`INSERT INTO nacionalni_parkovi (nazivparka, drzava,lokacija, wikipediastranica, prosjbrposjetiteljagodisnje, povrsina, sluzbenastranica, klima,godinaosnutka,nativnavrsta)
            VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)`, [naziv_parka,drzava, lokacija, wikipedia_stranica, prosj_broj, povrsina, sluzbena_stranica,
                klima, godina_osnutka, nativna_vrsta]);

})
module.exports = router;