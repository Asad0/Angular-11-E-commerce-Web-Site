const mongoose=require("mongoose");
var optionvalue=mongoose.model('optionvalues',{
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
    option_id:{
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
module.exports= optionvalue ;