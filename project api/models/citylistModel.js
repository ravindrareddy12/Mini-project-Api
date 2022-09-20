var mongoose = require("mongoose");

const restaurantSchema = mongoose.Schema([{
    location_id: String,
    name: String,
    city: String 
}])

const citylist = mongoose.model("citylist", restaurantSchema);

module.exports = citylist;