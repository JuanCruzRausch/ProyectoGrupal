const User = require('../models/User');

exports.getUser= async (req, res, next) => {
    try {
        const {idSeller} = req.params;
        let sellerInfo = await User.find({_id:idSeller})
        res.status(201).json({
            status: "success",
            data: {
              sellerInfo: sellerInfo,
            },
          });
    } catch (error) {
        console.log(error);
        res.status(400).json({
            status: "fail",
            message: error,
        });
    }
}