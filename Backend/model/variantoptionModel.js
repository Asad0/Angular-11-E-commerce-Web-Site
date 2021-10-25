const mongoose=require("mongoose");
var variantoptions=mongoose.model('variantoptions',{
    name:{
        type:String,
        required:true,
    },
    product_id:{
        type:String,
        require:true
    },
    variant_id:{
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
module.exports= variantoptions ;