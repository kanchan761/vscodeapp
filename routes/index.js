var express = require('express');
var router = express.Router();
const fs = require("fs")
const path = require("path")

var globalpath = path.join(__dirname,"../","public","uploads")


/* GET home page. */
router.get('/', function(req, res, next) {
  const files = fs.readdirSync(globalpath)
  res.render('index',{files:files, filedata: "",filename :""});
});

router.get('/feel/:filename', function(req, res, next) {
  const filedata = fs.readFileSync(
    path.join(globalpath, req.params.filename), "utf-8"
  )
  const files = fs.readdirSync(globalpath)
  res.render('index',{files:files,filedata: filedata,filename:req.params.filename});
});

router.get('/delet/:filename', function(req, res, next) {
 fs.unlinkSync(path.join(globalpath, req.params.filename))
  res.redirect("/");
});

router.post('/update/:filename', function(req, res, next) {
 fs.writeFileSync(path.join(globalpath, req.params.filename), req.body.filedata);
   res.redirect(`/feel/${req.params.filename}`);
});

router.post('/file', function(req, res, next) {
const {filecreate }= req.body
fs.writeFileSync(path.join(globalpath,filecreate),"")
res.redirect(`/feel/${filecreate}`)
});

module.exports = router;
