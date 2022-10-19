var express = require('express');
var router = express.Router();
var resturants = require('../models/restaurantModel')




router.get('/getAllResturants', (req, res) =>{
    resturants.find((err,response)=>{
        if(err)
          res.send("error found")
        else
           res.send(response)  
    })  
})
router.post('/addresturants', (req, res) =>{
    const itemToAdd = new resturants({
        name : req.body.name,
       description: req.body.description,
        address: req.body.address,
        location: req.body.location,
        image: req.body.image,
        cuisine: req.body.cuisin,
        min_price: req.body.min_price,
        contact: req.body. contact,
        locality: req.body.locality,
        city: req.body.city, 
    })
    itemToAdd.save((err,response)=>{
        if(err)
         res.send("error found")
        else
          res.send({status:200 , message : "item sucessfully", item:response}) 

    })
})
router.get('/GetRestaurantByID',(req, res)=>{
    resturants.findById(req.query.id,(err, response)=>{
        if (err)
          res.send("error found")
        else
          res.send(response)
    })
})
router.get('/restaurantGetByName',(req, res)=>{
    resturants.find({"name" : req.query.name},(err, response)=>{
        if(err)
          res.send("error found")
        else
        res.send(response)  
    })
})
router.put('/:id',(req, res)=>{
    resturants.updateMany({"name" : req.query.name},{"name" : req.body.name,"price" : req.body.price},(err, response)=>{
        if(err)
          res.send("error found")
        else
        res.send(response)  
    })
})
router.delete('/deleteId',(req, res)=>{
    resturants.findByIdAndRemove(req.query.id,(err, response)=>{
        if(err)
          res.send("error found")
        else
        res.send(response)  
    })
})
router.delete('/deleteName',(req, res)=>{
    resturants.remove({"name": req.query.name},(err, response)=>{
        if(err)
          res.send("error found")
        else
        res.send(response)  
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
