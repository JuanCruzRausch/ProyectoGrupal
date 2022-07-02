const multer = require('multer');

//definiendo el storage engine

const storage = multer.diskStorage({
    destination: function (req, file, cb){
        cb(null,'./uploads')
    },
    filename: function(req,file,cb){
        cb(null,new Date().getTime() + '-' + file.originalname)
    }
})

//validacion del archivo

const fileFilter = (req,file,cb) => {
    if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png'){
        cb(null,true);
    }else{
        //prevent the upload
        cb({message:'Unsupported file format'},false);
    }
}

const upload = multer({
    storage: storage,
    limits: {
        fileSize:1024*1024
    },
    fileFilter: fileFilter
});

module.exports = upload;