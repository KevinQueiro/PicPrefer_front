import React, { useEffect, useState } from 'react'
import { GetLength, GetPhoto } from '../../Requests/gets'
import generarParesTodosContraTodos from '../../utils/pairs'
import numeroRandom from '../../utils/random'

import './Dashboard.css'

const Dashboard = () => {

  const [tct, setTct] = useState()
  const [photo_1, setPhoto_1] = useState()
  const [photo_2, setPhoto_2] = useState()

  useEffect(() => { 
    generarPares()
  }, [])
  
  const listLength = async () => {
    console.log('listLength');
    let res = await GetLength()
    return res.data.size
  }
  
  const generarPares = async () => {
    console.log('generarPares 1');
    let size = await listLength()
    console.log('generarPares 2');
    console.log(size);
    setTct(generarParesTodosContraTodos(size-1))
  }

  const comparePics = async () => {
      const res = numeroRandom(tct)
      const pic_1 = await GetPhoto(res[0])
      const pic_2 = await GetPhoto(res[1])
      setPhoto_1(pic_1.data)
      setPhoto_2(pic_2.data)
  }

  return (
    <div>
      <button onClick={comparePics}> Comparar </button>
      {photo_1 ? (
                <img src={`${photo_1[0].secure_url}`} alt={`${photo_1[0].name}`} className='custom-img'/>
            ) : (
                <p>...</p>
            )}
      {photo_2 ? (
                <img src={`${photo_2[0].secure_url}`} alt={`${photo_1[0].name}`} className='custom-img'/>
            ) : (
                <p>...</p>
            )}
    </div>
  )
}

export default Dashboard