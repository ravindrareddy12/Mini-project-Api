var express = require('express');
var router = express.Router();
var meallist = require('../models/mealModel')



router.get('/getAllmeals', (req, res) =>{
    meallist.find((err,response)=>{
        if(err)
          res.send("error found")
        else
           res.send(response)  
    })  
})
router.post('/addmeals', (req, res) =>{
    const itemToAdd = new meallist({
        name : req.body.name,
        meal_type: req.body.meal_type,
        image: req.body.image,
        content: req.body.content
    })
    itemToAdd.save((err,response)=>{
        if(err)
         res.send("error found")
        else
          res.send({status:200 , message : "item sucessfully", item:response}) 

    })
})

/* router.get('/', function (req, res, next) {
  res.send("default")
});

router.get('/getRestaurants', function (req, res, next) {
    res.send("restaurants")
});

router.get('/getRestaurantByName', function (req, res, next) {
    res.send("restaurants By name")
});

router.get('/getRestaurantById/:id', function (req, res, next) {
    res.send("restaurants by id")
}); */

/* router.post('/addRestaurant', function (req, res, next) {
    addRestaurant(req, res, next);
});

router.put('/updateRestaurant', function (req, res, next) {
    updateRestaurant(req, res, next);
});

router.delete('/deleteRestaurantByName', function (req, res, next) {
    deleteRestaurantByName(req, res, next);
});
module.exports = router; */
module.exports = router;