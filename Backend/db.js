const mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017/testing",
{
    useNewUrlParser:true,
    useUnifiedTopology:true}
    ,(err)=>{
if(!err){
    console.log("db connection succeeded")
}
else{
    console.log("error in db connection :"+ Json.stingify(err,undefined,2));
}
});
module.exports=mongoose;