const express=require("express");
var router=express.Router();
var cors = require('cors')
var ObjectId=require("mongoose").Types.ObjectId;
const multer = require("multer");

var brand=require("../model/childsubcategoryModel");

// const storage = multer.diskStorage({
//     destination: (req, file, callBack) => {
//         callBack(null, 'images')
//     },
//     filename: (req, file, callBack) => {
//         callBack(null, `/images/${file.originalname}`)
//     }
//   })
const MIME_TYPE_MAP = {
    "image/png": "png",
    "image/jpeg": "jpg",
    "image/jpg": "jpg",
    "image/gif": "gif"
};
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const isValid = MIME_TYPE_MAP[file.mimetype];

        let error = new Error("Invalid mime type");
        if (isValid) {
            error = null;
        }
        cb(error, "images");
    },
    filename: (req, file, cb) => {
        const name = file.originalname
            .toLowerCase()
            .split(" ")
            .join("-");
        const ext = MIME_TYPE_MAP[file.mimetype];
        cb(null, name + "-" + Date.now() + "." + ext);
    }
});
const upload = multer({ storage: storage })

// router.post('/file', upload.single('file'), (req, res, next) => {
//     const file = "/images/"+req.file.fielename;
//     console.log(file.filename);
//     if (!file) {
//       const error = new Error('No File')
//       error.httpStatusCode = 400
//       return next(error)
//     }
//       res.send(file);
//   })



router.get('/getchildSubcategory', (req, res) => {
    brand.find({}, (err, data) => {
        if(!err) {
            res.send(data);
        } else {
            console.log(err);
        }
    });
});
router.post("/addchildSubcategory",
upload.single('imgpath'),
    (req, res, next) => {
        console.log(req.file);
        const emp = new brand({
            name:req.body.name,
            // imgpath: "/images/" +req.file.filename,
            imgpath:req.file.originalname,
            categoryid:req.body.categoryid,
            subcategoryid:req.body.subcategoryid,
            status:req.body.status,
            created_at:new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '')
            
        })
        emp.save().
            then(post => {
                if(post){
                    res.status(201).json({
                        message: "Post added successfully",
                        post: {
                            ...post,
                            id: post._id
                        }
                    })
                }
                else{
                    res.status(500).json({ message: "Error Adding category" });
                }
                
            })
            .catch(e => {
            })
    })




router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    brand.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving category :' + JSON.stringify(err, undefined, 2)); }
    });
});





router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    var emp = {
        name: req.body.name,
        categoryid:req.body.categoryid,
        subcategoryid:req.body.subcategoryid,
        status:req.body.status,
        update_at:new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '')
        
    };
    brand.findByIdAndUpdate(req.params.id, { $set: emp }, { new: true }, (err, data) => {
        if (!err) { res.send(data); }
        else { console.log('Error in category Update :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    brand.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Employee Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});
    

module.exports=router;