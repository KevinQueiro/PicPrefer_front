import React, { useEffect, useState } from 'react'
import { GetLength, GetPhoto } from '../../Requests/gets'
import { PutFavorite } from '../../Requests/puts'
import generarParesTodosContraTodos from '../../utils/pairs'
import numeroRandom from '../../utils/random'
import { useNavigate } from 'react-router-dom';

import './Dashboard.css'

const Dashboard = () => {
  const navigate = useNavigate();

  const [tct, setTct] = useState()
  const [photo_1, setPhoto_1] = useState()
  const [photo_2, setPhoto_2] = useState()

  useEffect(() => {
    generarPares()
  }, [])

  const listLength = async () => {
    let res = await GetLength()
    return res.data.size
  }

  const generarPares = async () => {
    let size = await listLength()
    setTct(generarParesTodosContraTodos(size - 1))
  }

  const comparePics = async () => {
    const res = numeroRandom(tct)
    const pic_1 = await GetPhoto(res[0])
    const pic_2 = await GetPhoto(res[1])
    setPhoto_1(pic_1.data)
    setPhoto_2(pic_2.data)
  }

  const favorite = async (event) => {
    switch (event.target.name) {
      case 'photo_1':
        const res_1 = await PutFavorite(photo_1[0]._id)
        if (tct.length === 0) {
          navigate('/end/2')
          break;
        }
        if (res_1.data === 'done') {
          comparePics()
        }
        break;

      case 'photo_2':
        const res_2 = await PutFavorite(photo_2[0]._id)
        if (tct.length === 0) {
          navigate('/end/2')
          break;
        }
        if (res_2.data === 'done') {
          comparePics()
        }
        break;

      default:
        break;
    }
  }

  return (
    <div className="container">
      {photo_1 && photo_2 ? (
        <></>
      ) : (
        <div>
          <p>
            ¡Descubre y elige tus fotos favoritas! <br />
            Bienvenido a nuestra página de elección de fotos. <br />
            Explora dos increíbles imágenes y vota por tu preferida.
          </p>
          <button className="compare-button" onClick={comparePics}> Comenzar </button>
          <p>
            ¿Tienes tu propia foto para compartir?  <br />
            ¡Sube la tuya y déjanos maravillados! <br />
            Tu visión única cuenta.
          </p>
          <button className="compare-button" onClick={()=>navigate('/new')}> Subir </button>
          <p>
            Mira el ranking aqui.
          </p>
          <button className="compare-button" onClick={()=>navigate('/end/1')}> Top </button>
        </div>
      )}
      <div className="photo-container">
        {photo_1 ? (
          <div className="photo-space" >
            <h4 className="photo-name">{photo_1[0].name}</h4>
            <img className="custom-img" name='photo_1' src={`${photo_1[0].secure_url}`} alt={`${photo_1[0].name}`} onClick={favorite} />
          </div>
        ) : (
          <></>
        )}
        {photo_2 ? (
          <div className="photo-space">
            <h4 className="photo-name">{photo_2[0].name}</h4>
            <img className="custom-img" name='photo_2' src={`${photo_2[0].secure_url}`} alt={`${photo_2[0].name}`} onClick={favorite} />
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  )
}

export default Dashboard