const express = require('express');
const router = express.Router();
var post={"data":"value"};

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});
router.get("/showValue",(req,res)=>{
  console.log("in api.js",post);
  res.send(post);
});
/*router.get("/showValue",(req,res)=>{
  res.send('angular2 routes-project')
});*/

module.exports = router;
