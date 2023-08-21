import axios from 'axios';

export const GetPhotos = async () => {
    const res = await axios.get("http://localhost:4000/", {
        headers: {
            "Content-Type": "multipart/form-data",
        }
    })
    return res
}

export const GetLength = async () => {
    const res = await axios.get("http://localhost:4000/list", {
        headers: {
            "Content-Type": "multipart/form-data",
        }
    })
    return res
}

export const GetPhoto = async (sid) => {
    const res = await axios.get(`http://localhost:4000/list/${sid}`, {
        headers: {
            "Content-Type": "multipart/form-data",
        }
    })
    return res
}