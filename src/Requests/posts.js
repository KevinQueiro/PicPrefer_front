import axios from 'axios';

export const PostRequest = async (formData) => {
    const res = await axios.post("http://localhost:4000/save", formData, {
        headers: {
            "Content-Type": "multipart/form-data",
        }
    })
    return res
}