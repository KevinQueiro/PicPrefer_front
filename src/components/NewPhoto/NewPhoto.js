import React, { useState, useEffect } from "react";
import { PostRequest } from "../../Requests/posts";

import './NewPhoto.css'

const NewPhoto = () => {

  const [image, setImages] = useState([]);
  const [name, setName] = useState();
  const [author, setAuthor] = useState();
  const [file, setFile] = useState();
  const [isDisabled, setIsDisabled] = useState(true);

  const handleChange_1 = (e) => {
    setFile(e.target.files[0])
    setImages([])
    setImages((images_1) => [...images_1, URL.createObjectURL(e.target.files[0])]);
    return URL.revokeObjectURL(e.target.files[0])
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      file,
      name,
      author
    }
    PostRequest(formData)
  }

  useEffect(() => {
    if (!!file && !!name && !!author) {
      console.log(isDisabled)
      setIsDisabled(false)
    }
  }, [image, author, file, isDisabled, name]);

  return (
    <div>
      <button>
        volver
      </button>
      <div className="container">
        <h2>Nueva Foto</h2>
        <form onSubmit={handleSubmit}>
          <label> Nombre:
            <input type="text" onChange={(e) => setName(e.target.value)} />
          </label>
          <label> Autor:
            <input type="text" onChange={(e) => setAuthor(e.target.value)} />
          </label>
          <div>
            <input id='img_1' type="file" onChange={handleChange_1} />
            {image.map((row, index) =>
              <div key={index}>
                <img src={row} alt={row} className='custom-img' />
              </div>
            )}
          </div>
          <button disabled={isDisabled}>
            Registrar
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewPhoto