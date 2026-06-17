var express=require('express');
var query1=require('../db.js');

var router=express.Router();

router.get('/',async(req,res)=>{
       // res.send('Welcome Website Panel');
       var sql='select * from blog';
       var blog=await query1(sql);
   res.render('web/index.ejs',{blog:blog});
})
router.get('/whyus',(req,res)=>{
   res.render('web/whyus.ejs')
})
router.get('/service',(req,res)=>{
   res.render('web/service.ejs')
})
router.get('/team',(req,res)=>{
   res.render('web/team.ejs')
})
router.get('/Pricing',(req,res)=>{
   res.render('web/Pricing.ejs')
})
router.get('/DentalSolutions',async(req,res)=>{
   var sql=`select * from dentalsolutions`;
    var data=await query1(sql);
    res.render('web/DentalSolutions.ejs',{data:data});
})

module.exports=router;
