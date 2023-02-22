const Photo = require('../Schemas/Photo');

exports.getOne = (photoId) => Photo.findById(photoId)

exports.updateOne = (photoId, data) => Photo.findByIdAndUpdate(photoId, data);