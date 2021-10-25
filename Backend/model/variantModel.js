const mongoose=require("mongoose");
var variants=mongoose.model('provariants',{
    name:{
        type:String,
        required:true,
    },
    product_id:{
        type:String,
        require:true
    },
    
    created_at:{
        type:Date
    },
    update_at:{
        type:Date
    }
    

});
module.exports= variants ;