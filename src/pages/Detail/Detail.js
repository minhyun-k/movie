import React, { useEffect } from 'react'
import Header from '../../component/Header'
import Footer from '../../component/Footer'
import Content from '../../component/Content/Content'
import store from '../../component/Store'
import '../../css/pages/detail.scss'
import Detail_casts from './Detail_casts'
import Detail_video from './Detail_video'
import { useLocation } from 'react-router-dom'
import apiConfig from '../../api/apiConfig'
import 'boxicons'


const Detail = (props) => {
    
    const location = useLocation()
    const {detail,dataCtrl} = store();


    console.log(location);
    useEffect(()=>{
        async function fetchData(){
            await dataCtrl({type:"detail", location})
        }
        fetchData();
    },[location])

    if(!detail.genres) return<>로딩중..</>
    
    console.log(detail);
    const genres = detail.genres
    const castLi = detail.casts?.cast
    const creatLi = detail?.created_by
    const videoLi = detail.videos.results
    const url = detail.homepage
    
    console.log(detail.seasons)

    
  return (
    <div className='detail'>
        <Header/>
        <div className='banner12' style={{backgroundImage:`url(${apiConfig.l(detail.backdrop_path)})`}}></div>
        <div className='content1 container'>
            <div className='content1-poster'>
                <div className='content-poster-img' style={{backgroundImage:`url(${apiConfig.l(detail.poster_path)})`}}></div>
            </div>
            <div className='content1-info'>
                <h1>{detail.title}</h1>
                <div className='category'>
                    {
                        genres.map((idx)=>
                            <span className='category_item' key={idx.id}>{idx.name}</span>
                        )
                    }
                </div>
                <p className='desc'>{detail.overview}</p>
                <div className='cast'>
                    <div className='cast-title'>
                        <h2>출연진</h2>
                    </div>
                    <div className='casts'>
                        {
                            castLi && castLi.slice(0,6).map((item)=>
                                <Detail_casts item={item} key={item.id}/>
                            )
                        }
                        {
                            creatLi && creatLi.slice(0,6).map((item)=>
                                <Detail_casts item={item} key={item.id}/>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
        <div className='main container'>
            <div className='main_content'>
                {
                    castLi && videoLi.map((item)=>
                        <Detail_video item={item} key={item.id}/>                        
                    )
                }
                {
                    creatLi &&                     
                    <div className='tv_card_box'>
                        {detail.seasons.map((item)=>
                            <button className='tv_card' onClick={()=>{window.open(url)}} key={item.id}>
                                <div className='c_img_detail' style={{backgroundImage: `url(${apiConfig.s(item.poster_path)}`}}>                
                                <div className='card-btn_detail'>
                                    <box-icon name='play_detail' animation='tada'></box-icon>
                                </div>
                                </div>
                                <div className='c_title_detail'>
                                    <p>{item.name}</p>
                                </div>
                            </button>
                        )}
                    </div>
                }
            </div>
            <div className='main_content'>
                {/* <div className='main_content_header'>
                    <h2>Hot!</h2>
                </div> */}
                <div className='main_content_list'>
                    {castLi && <Content url={`movie/${detail.id}/similar`} cateType="movie" title="Similar"/>}
                    {creatLi && <Content url={`tv/${detail.id}/similar`} cateType="tv" title="Similar"/>}
                </div>
            </div>
        </div>
    </div>
  )
}


export default Detail