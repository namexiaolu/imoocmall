var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Goods = require('../models/goods');

mongoose.connect("mongodb://localhost:27017/dumall", { useNewUrlParser: true });
// mongoose.connect('mongodb://127.0.0.1:27017/dumall');

mongoose.connection.on("connected",function () {
  console.log("mongodb connected success");
});
mongoose.connection.on("error",function () {
  console.log("mongodb connected fail.");
});
mongoose.connection.on("disconnected",function () {
  console.log("mongodb connected disconnected.");
});
router.get('/',function(req,res,next){
  // res.send('hello,goodslist');

let page = parseInt(req.param("page"));
let pageSize = parseInt(req.param("pageSize"));
let sort = req.param("sort");
let skip = (page-1)*pageSize;

let params ={};
let goodModel = Goods.find(params).skip(skip).limit(pageSize);
goodModel.sort({'salePrice':sort});

  // Goods.find({},function (err,doc) {
goodModel.exec(function (err,doc) {
    if(err){
      res.json({
        status:'1',
        msg:err.message
      });
    }else{
      res.json({
        status:'0',
        msg:'',
        result:{
          count:doc.length,
          list:doc
        }
      });
    }
  })
});
module.exports =  router;
