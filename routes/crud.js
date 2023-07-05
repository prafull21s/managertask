var express = require('express'),
 router = express.Router();
const daocreate = require('../dao/connection')



router.post('/create', async(req, res) => {

   console.log("req.body",req.body);
    let ress = await daocreate.createDoc(req.body);
    console.log("safsfassa",ress);
    res.send(ress);
 });



 router.get('/findDoc', async(req, res) => {
    let ress = await daocreate.getAll();
    res.status(200).send(ress)
 });
 

 router.get('/get/:id', async(req, res) => {
   let ress = await daocreate.getOne(req.query.id);
   res.status(200).send(ress)
});



module.exports = router;


