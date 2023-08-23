import React, { useEffect, useState } from 'react'
import { GetPhotos } from '../../Requests/gets'
import { sort } from '../../utils/sort'

import './Top.css'

const Top = () => {

    const [photos, setPhotos] = useState()

    const bringPhotos = async () => {
        const res = await GetPhotos()
        setPhotos(sort(res.data))
    }
    console.log(photos);
    useEffect(() => {
        bringPhotos()
    }, [])

    return (
        <div className="container">
            {photos ? (
                <ul className="photo-list">
                    {photos.map((photo, index) => (
                        <li key={index} className="photo-item">
                            <div className="photo-name">{index+1}. {photo.name}</div>
                            <div className="photo-likes">likes: {photo.prefered}</div>
                            <img className="photo-image" src={photo.secure_url} alt={photo.name} />
                            <div className="photo-author"> by: {photo.author}</div>
                        </li>
                    ))}
                </ul>
            ) : (
                <></>
            )}

        </div>
    )
}

export default Top