import apiConfig from './apiConfig'
import axiosGet from './axiosGet'
import 'boxicons'

export const category = {
    movie:'movie',
    tv:'tv'
}

export const categoryType = {
    upcoming: 'upcoming',
    popular: 'popular',
    top_rated:'top_rated'
}

const apiFun =  {
    List : async function (url){
        return await axiosGet.get(url)
    },    
    List1 : async function (ab, cateType, type){
        return await axiosGet.get(`/${cateType}/${type}`)
    },    
    Search : async function (ab, cateType, keyword){
        return await axiosGet.get(`/search/${category[cateType]}`,{params:{query:keyword}});
    },
    
    Detail: async function (ab, cateType, id){
        return await axiosGet.get(`/${cateType}/${id}`);
    }
}

export default apiFun
