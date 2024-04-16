//ideal image uploading outline.

//TODO: insert to product db




const path = require('node:path');
const apiPath = String(path.join(__dirname, '..'));
const dbPath = String(path.join(apiPath, 'db.ts'));
const imgPath = String(path.join(apiPath, 'images'));
import {NextResponse} from 'next/server';
import {ProductModel} from '../db';

// import {ImageModel} from dbPath;
const ImageModel = require(dbPath);
// Gets all language data from the DB
export async function GET(request: Request) {
    //https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams/URLSearchParams
    const url = new URL(request.url);
    // const res = await fetch(request)
    // const url = await res.url;
    const searchParams = new URLSearchParams(url.search);


    const express = require('express')
    var fs = require('fs');
    const multer  = require('multer')
    const upload = multer({ dest: 'uploads/' })
    const app = express()

    //using the middleware Multer to upload the photo on the server side.
    app.use(multer({ dest: './uploads/',
        rename: function (fieldname, filename) {
            return filename;
            },
    }))

    //post req to our db
    app.post(imgPath,function(req,res){
        var newItem = new ImageModel();
        newItem.img.data = fs.readFileSync(req.files.userPhoto.path)
        newItem.img.contentType = 'image/png';
        newItem.save();
      });


}


