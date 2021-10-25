const mongoose=require("mongoose");
var Product=mongoose.model('products',{
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
    childsubcatid:{
        type:String,
        required:true,
    },
    maxPrice:{
        type:String,
        required:true,
    },
    minPrice:{
        type:String,
        required:true,
    },
    prodisc:{
        type:String,
        required:true,
    },
    proshortdisc:{
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
module.exports= Product ;