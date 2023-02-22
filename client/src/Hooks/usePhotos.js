import { useEffect, useState } from "react";
import { createClient }  from 'pexels'

const usePhotos = () => {

    const [ photos, setPhoto ] = useState()

    const client = createClient('zyDKEY23HOC7L48dxrBShcSkEon9D2THx4tkuzcfNbIeULETYJ88qN1q');

    useEffect(() => {
        client.photos.curated({ per_page: 6 }).then(photo => {
            setPhoto(Object.values(photo.photos))
        });
    }, [])
 
    return [
        photos
    ]
}

export default usePhotos;