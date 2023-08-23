import React, { useEffect, useState } from 'react'
import { DeletePhoto } from '../../Requests/deletes'
import { GetToManage } from '../../Requests/gets'
import { AceptPhoto } from '../../Requests/puts'

import './Manage.css'

const Manage = () => {

  const [manage, setManage] = useState()

  const bringManage = async () => {
    const res = await GetToManage()
    setManage(res.data)
  }

  useEffect(() => {
    bringManage()
  }, [])

  const cancel = async (e) => {
    DeletePhoto(e.target.id)
  }

  const acept = async (e) => {
    AceptPhoto(e.target.id)
  }

  return (
    <div className="container">
      {manage ? (
        <ul className="photo-list">
          {manage.map((photo, index) => (
            <li key={index} className="photo-item">
              <div id={photo._id} onClick={cancel}> X </div>
              <div id={photo._id} onClick={acept}> ✓ </div>
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

    </div>
  )
}

export default Manage