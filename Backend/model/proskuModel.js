const mongoose=require("mongoose");
var prosku=mongoose.model('productsku',{
    pro_code:{
        type:String,
    },
    pro_price:{
        type:String,
    },
    pro_qty:{
        type:String,
    },
    product_id:{
        type:String,
    },
    variant_id:{
        type:String,
    },
    option_id:{
        type:String,
    },
    optionval_id:{
        type:String,
    },
    created_at:{
        type:Date
    },
    update_at:{
        type:Date
    }
    

});
module.exports= prosku ;