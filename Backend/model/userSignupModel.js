const mongoose=require("mongoose");
var register=mongoose.model('userregisters',{
    firstName:{
        type:String,
        required:true,
    },
    lastName:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    confirmPassword:{
        type:String,
        require:true
    },
    acceptTerms:{
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
module.exports= register ;