const catchAsync = require("../utils/catchAsync");
const cloudinary = require('../../cloudinary');
const fs = require('fs');

exports.postImages = catchAsync(async (req, res, next) => {
    try {
      const uploader = async (path) => await cloudinary.uploads(path, 'Images');
      const urls = [];
      const files = req.files;
      console.log(files);
      for (const file of files) {
        const { path } = file;
        const newPath = await uploader(path);
        urls.push(newPath);
        fs.unlinkSync(path);
      }
  
      res.status(200).json({
        message: 'Images uploaded successfully',
        data: urls,
      });
      console.log('urls', urls);
      // await Image.insertMany(urls);
    } catch (e) {
      res.status(405).json({
        err: 'Images not uploaded successfully',
      });
    }
  });