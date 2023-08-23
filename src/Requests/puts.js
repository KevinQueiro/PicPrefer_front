import axios from 'axios';

export const PutFavorite = async (id) => {
    const res = await axios.put(`http://localhost:4000/favorite/${id}`, {
        headers: {
            "Content-Type": "multipart/form-data",
        }
    })
    return res
}

export const AceptPhoto = async (id) => {
    const res = await axios.put(`http://localhost:4000/authorize/${id}`, {
        headers: {
            "Content-Type": "multipart/form-data",
        }
    })
    return res
}