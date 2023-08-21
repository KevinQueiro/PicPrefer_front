import axios from 'axios';

export const PutFavorite = async (id) => {
    console.log(id);
    const res = await axios.put(`http://localhost:4000/favorite/${id}`, {
        headers: {
            "Content-Type": "multipart/form-data",
        }
    })
    return res
}