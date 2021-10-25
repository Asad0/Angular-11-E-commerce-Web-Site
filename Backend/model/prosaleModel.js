const mongoose=require("mongoose");
var prosale=mongoose.model('saleproducts',{
    name:{
        type:String,
        required:true,
    },
    product_id:{
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
module.exports= prosale ;