const mongoose=require("mongoose");
var childsubcategory=mongoose.model('childsubcategories',{
    name:{
        type:String,
        required:true,
    },
    categoryid:{
        type:String,
        required:true,
    },
    subcategoryid:{
        type:String,
        required:true,
    },
    imgpath:{
        type:String,
        require:true
    },
    status:{
        type:Boolean
    },
    created_at:{
        type:Date
    },
    update_at:{
        type:Date
    }
    

});
module.exports= childsubcategory ;