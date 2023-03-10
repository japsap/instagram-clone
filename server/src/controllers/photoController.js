const Photo = require('../Schemas/Photo');
const photoService = require('../services/photoService');

//------------------------------------------------------------------------------------------------------------//

exports.getPhoto = async (req, res) => {
    let photos = await Photo.find().lean();

    res.json({ photos })
}

//------------------------------------------------------------------------------------------------------------//

exports.postPhoto = async (req, res) => {
    const { image, description, uid, likes, ownerName } = req.body.image; 


    let photo = new Photo({
        image,
        description,
        ownerName,
        uid,
        likes
    })

    await photo.save();
}

//------------------------------------------------------------------------------------------------------------//

exports.updatePhotoLikes = async (req, res) => {
    
   const { likes, _id, liked: likeId } = req.body.likes;

   await photoService.updateOne(_id, {
        likes,
    })

    const photo = await photoService.getOne(_id)
    photo.liked.push(likeId);
    photo.save()
}
//------------------------------------------------------------------------------------------------------------//


exports.getPhotoDetails = async (req, res) => {
    const photo = await Photo.findById(req.params.photoId).lean();
    console.log(photo);
}


