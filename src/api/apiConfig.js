import React from 'react'

const apiConfig ={
    baseURL: 'https://api.themoviedb.org/3',
    api_key: 'f89a6c1f22aca3858a4ae7aef10de967',
    language:'ko-kr',
    append_to_response:'videos,images,casts',
    l: (imgpath) => `https://image.tmdb.org/t/p/original${imgpath}`,
    s: (imgpath) => `https://image.tmdb.org/t/p/w500${imgpath}`
}

export default apiConfig