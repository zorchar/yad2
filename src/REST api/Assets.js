import axios from "axios"

const apiUrl = process.env.REACT_APP_API_URL

export const getAllAssets = async () => {
    try {
        const course = await axios.get(apiUrl + '/realestate/')
        return course.data.data
    } catch (error) {
        console.log(error);
    }
}

export const getAssets = async (newAdState) => {
    const urlParams = new URLSearchParams(newAdState)

    try {
        const course = await axios.get(apiUrl + '/realestate/assets?' + urlParams.toString())
        return course.data.data
    } catch (error) {
        console.log(error);
    }
}
