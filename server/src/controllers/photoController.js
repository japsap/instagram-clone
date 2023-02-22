const Photo = require('../Schemas/Photo');


exports.getPhoto = (req, res) => {
    const photos = Photo.find().lean();
    res.json({ photos })
}

exports.postPhoto = async (req, res) => {
    const { image, description, owner} = req.body; 

    let photo = new Photo({
        image,
        description,
        owner
    })

    await photo.save();
}

