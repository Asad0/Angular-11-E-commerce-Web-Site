const mongoose=require("mongoose");
var category=mongoose.model('categories',{
    name:{
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
module.exports= category ;