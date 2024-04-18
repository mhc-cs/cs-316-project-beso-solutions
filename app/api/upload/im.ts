var ProductModel = require('../db');


let express = require('express'),
    multer = require('multer'),
    mongoose = require('mongoose'),
    uuidv4 = require('uuid/v4'),
    router = express.Router();

// User model
let User = require('../models/User');

const DIR = './public/';

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, DIR);
    },
    filename: (req, file, cb) => {
        const fileName = file.originalname.toLowerCase().split(' ').join('-');
        cb(null, uuidv4() + '-' + fileName)
    }
});

var upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
            cb(null, true);
        } else {
            cb(null, false);
            return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
        }
    }
});


router.post('/../images', upload.single('image'), (req, res, next) => {
    const url = req.protocol + '://' + req.get('host')
    const user = new ProductModel({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        description: req.body.description, //client description of their product
        category: req.body.categoryv,//shirt, t shirt, 
        material: req.body.material, //jean, cotton, ect
        colors:[
            {
                color: req.body.color, //dark wash/ medium wash
                sizes:[{
                    size: req.body.size,
                    inseams:[{
                        image: url + '/public/' + req.file.filename,
                        inseam: req.body.inseam,
                        price: req.body.price,
                        stock: req.body.stock,
                    }]
                }]
            }
        ],
        
    });
    user.save().then(result => {
        res.status(201).json({
            message: "User registered successfully!",
            userCreated: {
                _id: result._id,
                image: result.image
            }
        })
    }).catch(err => {
        console.log(err),
            res.status(500).json({
                error: err
            });
    })
})


module.exports = router;