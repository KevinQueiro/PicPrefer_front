import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { GetPhotos } from '../../Requests/gets'
import { sort } from '../../utils/sort'

import './Top.css'

const Top = () => {

    const { id } = useParams()
    const navigate = useNavigate()

    const [photos, setPhotos] = useState()

    const bringPhotos = async () => {
        const res = await GetPhotos()
        setPhotos(sort(res.data))
    }

    useEffect(() => {
        bringPhotos()
    }, [])

    let contenido

    switch (id) {
        case '1':
            contenido = <p>
                ¿Tienes tu propia foto para compartir?  <br />
                ¡Sube la tuya y déjanos maravillados! <br />
                Tu visión única cuenta.
            </p>
            break;

        case '2':
            contenido = <p>
                ¡¡Gracias por participar!! <br />
                ¿Tienes tu propia foto para compartir? <br />
                Tu visión única cuenta.
            </p>
            break;

        default:
            break;
    }

    return (
        <div className="container">
            <button onClick={() => navigate(-1)}>
                volver
            </button>
            {photos ? (
                <ul className="photo-list">
                    {photos.map((photo, index) => (
                        <li key={index} className="photo-item">
                            <div className="photo-name">{index + 1}. {photo.name}</div>
                            <div className="photo-likes">likes: {photo.prefered}</div>
                            <img className="photo-image" src={photo.secure_url} alt={photo.name} />
                            <div className="photo-author"> by: {photo.author}</div>
                        </li>
                    ))}
                </ul>

            ) : (
                <></>
            )}
            {contenido}
            <button className="compare-button" onClick={() => navigate('/new')}> Subir </button>
        </div>
    )
}

export default Top