import axios from 'axios';

export const DeletePhoto = async (id) => {
    const res = await axios.delete(`http://localhost:4000/delete/${id}`, {
        headers: {
            "Content-Type": "multipart/form-data",
        }
    })
    return res
}