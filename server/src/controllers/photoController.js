const Photo = require('../Schemas/Photo');


exports.getPhoto = (req, res) => {
    const photos = Photo.find().lean();
    res.json({ photos })
}

exports.postPhoto = async (req, res) => {
    const { image, description, uid } = req.body.image; 

    console.log(req.body.image);

    let photo = new Photo({
        image,
        description,
        uid
    })

    await photo.save();
}

