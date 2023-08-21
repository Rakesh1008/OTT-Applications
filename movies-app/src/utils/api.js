import axios from "axios";

const BASR_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MDJjYjg5NjhiYTBjMDM4ODJmMzQwYzMxMWMwN2FlYiIsInN1YiI6IjY0ZTFlMjRlZGE5ZWYyMDExZmU0YTU3ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Dnt4iYSSYrltXRKVAj0PP_mWB9HCX6Dn6ciXCdVfJTE";

const headers = {
    Authorization: "Bearer " + TMDB_TOKEN,
    accept: "application/json"
}

export const fetchDataFromApi = async (url, params) => {
    try {
        const { data } = await axios.get(BASR_URL + url, {
            headers,
            params
        }) 
        console.log(data);
        return data;
    } catch (error) {
        console.log(error);
        return;
    }
}