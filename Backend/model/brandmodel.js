const mongoose=require("mongoose");
var webBrand=mongoose.model('brands',{
    name:{
        type:String,
        required:true,
    },
    imgpath:{
        type:String,
        require:true
    },
    status:{
        type:Boolean,
        require:true
    },
    created_at:{
        type:Date
    },
    update_at:{
        type:Date
    }
    

});
module.exports= webBrand ;