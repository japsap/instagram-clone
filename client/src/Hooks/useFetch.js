import { useState, useEffect } from 'react';


const useFetch = (url, stateCondition ) => {
    const [ data, setData ] = useState(stateCondition);

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(res => setData(res))
    },[])
    
    return [
        data, setData
    ]
}

export default useFetch;