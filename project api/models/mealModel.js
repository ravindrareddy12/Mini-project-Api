var mongoose = require("mongoose");

const restaurantSchema = mongoose.Schema([{
    meal_type: String,
    image: String,
    name: String,
    content: String 
}])

const meallist = mongoose.model("meallist", restaurantSchema);

module.exports = meallist;