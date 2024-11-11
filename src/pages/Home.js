import React from 'react'
import Banner from '../component/Banner'
import Content from '../component/Content/Content';
import '../css/component/header.scss'

const Home = () => {
  return (
    <div className='home'>
      <Banner url="movie/upcoming"/>
      <div className='content-box'>
        <Content url="/movie/upcoming" cateType="movie" title="영화 예정작"/>
        <Content url="/tv/popular" cateType="tv" title="Tv시리즈 Hot!"/>
        <Content url="/movie/popular" cateType="movie" title="영화 Hot!"/>
        <Content  url="/tv/top_rated" cateType="tv" title="Tv시리즈"/>
      </div>
    </div>
  )
}

export default Home;