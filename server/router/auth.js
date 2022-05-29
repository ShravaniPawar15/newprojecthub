const express = require('express');
const jwt = require('jsonwebtoken');
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const router = express.Router();
router.use(express.json({ limit: "50mb", extended: true, parameterLimit: 50000 }));
router.use(express.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 }));
require('../db/conn');
router.use(bodyParser.urlencoded({ extended: true }));
const User = require('../models/userSchema');
const Filedb =  require('../models/fileSchema');
const bcrypt = require('bcryptjs');

const multer = require('multer');

const upload = require("../common");

const Upload = require("../upload");
const path = require('path');
const fs = require('fs');
//AWS CONFIGURATIONS

// const { uploadFile } = require("../s3");
// const {getFileStream} =require("../s3");
// const fs = require("fs");
// const util = require("util");
// const unlinkFile = util.promisify(fs.unlink);

// var AWS = require('aws-sdk');


router.use(cookieParser());
router.use(express.static(__dirname + "public/"));

const { google } = require("googleapis");
const oauth2Client = new google.auth.OAuth2(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  process.env.REDIRECT_URI
);
oauth2Client.setCredentials({ refresh_token: process.env.REFRESH_TOKEN });

const drive = google.drive({
    version: 'v3',
    auth: oauth2Client,
  });

const filePath = path.join(__dirname, 'example.jpg');


router.get('/', (req, res) => {
    res.send(`hello world from router js`);
});

// //define storage for the images

// const storage = multer.diskStorage({
//     //destination for files
//     destination: function (request, file, callback) {
//       callback(null, './public/uploads/images');
//     },
  
//     //add back the extension
//     filename: function (request, file, callback) {
//       callback(null, Date.now() + file.originalname);
//     },
//   });
  
//   //upload parameters for multer
//   const uploadd = multer({
//     storage: storage,
//     limits: {
//       fieldSize: 1024 * 1024 * 75,
//     },
//   });
  
// router.post('/register', (req, res) => {
//     console.log(req.body);
//     console.log("hii")
//     const { name, username, email, phone, college, password, cpassword } = req.body;

//     if (!name || !username || !email || !phone || !college || !password || !cpassword) {
//         return res.json({ error: "plz fill the details properly :" })
//     }

//     User.findOne({ email: email })
//         .then((userExist) => {
//             if (userExist) {
//                 return res.status(422).json({ error: "email already exist" });
//             }
//             const user = new User({ name, username, email, phone, college, password, cpassword })

//             user.save().then(() => {

//             }).catch((err) => res.status(500).json({ error: "failed to registred..." }));

//         }).catch(err => { console.log(err) });
// });

// Single file Upload - image key should be passed postman



router.post("/single", upload.single("image"),async (req, res, next) => {
  console.log(req.file);  // UPLOADED FILE DESCRIPTION RECEIVED

//   console.log(__dirname);
  try {
    const response = await drive.files.create({
      requestBody: {
        name: 'tmp.jpg', //This can be name of your choice
        mimeType: 'image/jpg',
      },
      media: {
        mimeType: 'image/jpg',
        body: fs.createReadStream(path.join(req.file.path)),
      },
    });

    fs.unlink(path.join(req.file.path),(err)=>{
        if(err) throw err;
        console.log("file deleted from server");
    });

    console.log(response.data);
    res.send("uploaded successfully");
  } catch (error) {
    console.log(error.message);
  }
});
// Multiple files Upload - images key should be passed in postman
router.post("/multiple", upload.array("images"), (req, res) => {
  console.log(req.files); // UPLOADED FILE DESCRIPTION RECEIVED
  res.send({
    status: "success",
    message: "Files uploaded successfully",
    data: req.files,
  });
});




router.post('/register', async(req, res) => {
    console.log(req.body);
    console.log("hii")

    const name = req.body.name;
    const username = req.body.username;
    const email = req.body.email;
    const phone = req.body.phone;
    const college = req.body.college;
    const password = req.body.password;
    const cpassword = req.body.cpassword;

    if (!name || !username || !email || !phone || !college || !password || !cpassword) {
        console.log("Wrong ");
        return res.json({ error: "plz fill the details properly :" })
    }
    console.log(username);
    try {
        const user = await User.findOne({ email: email });
        if (user) {
            console.log("user found\n");
            return res.status(422).json({ error: "email already exist" });
        } else {
            console.log("NOT FOUND");
        }

        const userD = new User({ name: name, username: username, email: email, phone: phone, college: college, password: password, cpassword: cpassword });
        const success = await userD.save();
        if (success) {
            console.log("Successssss");
            return res.status(201).json({ message: "user registred" });
        } else {
            return res.status(422).json({ message: "Error occured" });
        }
    } catch (err) {
        console.log(err);
    }
});



//login route

router.post('/login', async(req, res) => {
    console.log(req.body);
    let token;
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ error: "please fill the required data.." });
        }

        const userLogin = await User.findOne({ email: email });

        if (userLogin) {
            const isMatch = await bcrypt.compare(password, userLogin.password);

            token = await userLogin.generateAuthToken();
            console.log(token);
            res.cookie("jwtoken", token, {
                expires: new Date(Date.now() + 275489859),
                httpOnly: true
            });


            if (!isMatch) {
                res.status(400).json({ error: "user error" });
            } else {
                res.json({ message: "user signin successfully.." });
            }
        } else {
            res.status(400).json({ error: "invalid credential" });
        }


    } catch (err) {
        console.log(err);
    

    }

});
 
//Form route
router.post("/addinformation",upload.single("files"),async(req, res) => {
    // console.log(req.body);
    console.log(req.file);
    let token;
    const Title = req.body.title;
    const Dept= req.body.department;
    const Domain = req.body.domain;
    const Language = req.body.lang;
    const academicYear =  req.body.academicYear;
    // const File;
    // const Year = req.body.year;
    const Guide= req.body.guideName;

    console.log(JSON.stringify(Title));
console.log("add info route ");
    try{
    //  console.log(filedb);

     const response = await drive.files.create({
        requestBody: {
          name: 'tmp.jpg', //This can be name of your choice
          mimeType: 'image/jpg',
        },
        media: {
          mimeType: 'image/jpg',
          body: fs.createReadStream(path.join(req.file.path)),
        },
      });
  
      fs.unlink(path.join(req.file.path),(err)=>{
          if(err) throw err;
          console.log("file deleted from server");
      });
  
      console.log(response.data);

      var tmp = response.data;
      var fileID = tmp.id;
      console.log(fileID+"   FileID");


      await drive.permissions.create({
        fileId: fileID,
        requestBody: {
          role: "reader",
          type: "anyone",
        },
      });

      const result = await drive.files.get({
        fileId: fileID,
        fields: "webViewLink",
      });

    const File = result.data.webViewLink;
    console.log(File);
    const filedb  =  new Filedb({title:Title,department:Dept,files:File,domain:Domain,lang:Language,academicYear:academicYear,guideName:Guide});
    
    const success = await filedb.save();
     if (success) {
         console.log("Successssss");
         return res.status(201).json({ message: "data saved.." });
     } else {
         return res.status(422).json({ message: "Error occured while saving data" });
     }
    }catch(err){
        console.log(err);
    }

});

router.post("/resumeUpload", Upload.single("pdf"),  async (req, res, next) => {
    try{
      console.log(req.file);
      const stuId = "req.userID";
      const result = await uploadFile(req.file,stuId);
      console.log("S3 response", result);
    
      fs.unlink(path.join(req.file.path), (err) => {
        if (err) throw err;
        console.log("file deleted from server");
      });
    
      const filter={
        _id : stuId,
      };
      stuId= stuId+path.extname(file.originalname);
      const update={
        resume: stuId,
      };
      const user = await Student.findOneAndUpdate(filter,update);
  
      res.send({
        status: "success",
        message: "File uploaded successfully",
        data: req.file,
      });
    }
    catch(err){
      console.log(err);
    }
  });


module.exports = router;