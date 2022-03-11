
const express =require('express')
const router = express.Router()
const multer = require('multer')
// const  upload  =  multer ( {  dest : 'uploads/'  } )

// router.get('/multer' ,(req ,res)=>{
//     res.render('../views/multer')
// })

// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, '../Public/avatar')
//     },
//     filename: function (req, file, cb) {
//         const mimeExtension ={
//             'image/jpeg':'.jpeg',
//             'image/jpg':'.jpg',
//             'image/png':'.png',
//             'image/jpeg':'.gif',

//         }
//       cb(null, file.fieldname + '-' + Date.now() + mimeExtension[file.mimetype]);
//     }
//   })
  
//   const  uploadAvatar = multer({ 
//       storage: storage,
//       fileFilter: (req,file,cb) =>{
//           if(file.mimetype === 'image/jpeg' ||
          
//           file.mimetype === 'image/jpg' ||
//           file.mimetype === 'image/png' ||
//           file.mimetype === 'image/gif' ){
//               cb(null, true);
//           }else{
//               cb(null,false);
//               req.fileError = 'format du fichier invalid'
//           }
          
          
//       }
    
//     })