var express = require('express');
var router = express.Router();
const fs = require("fs")
const path = require("path")

var globalpath = path.join(__dirname,"../","public","uploads")


/* GET home page. */
router.get('/', function(req, res, next) {
  const files = fs.readdirSync(globalpath)
  res.render('index',{files:files, filedata: ""});
});

router.get('/feel/:filename', function(req, res, next) {
  const filedata = fs.readFileSync(
    path.join(globalpath, req.params.filename), "utf-8"
  )
  const files = fs.readdirSync(globalpath)
  res.render('index',{files:files,filedata: filedata});
});




router.post('/file', function(req, res, next) {

const {filecreate }= req.body

fs.writeFileSync(path.join(globalpath,filecreate),"")
res.redirect(`/feel/${filename}`)
});
module.exports = router;
