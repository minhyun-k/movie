import React, { useEffect, useState } from 'react'
import { Button_content } from '../Button'
import '../../css/component/content.scss'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
// import required modules
import { FreeMode } from 'swiper/modules';
import Content_card from './Content_card';
import apiFun from '../../api/apiFun';
import { Link } from 'react-router-dom';


const Content = (props) => {

    // 애니메이션 제어 할 상태 변수
    const [animate, setAnimate] = useState(true);
    // 마우스가 슬라이더 진입 시 호출, false값으로 애니메이션 중지
    const onStop = () => setAnimate(false);
    // 마우스가 슬라이더 떠날 때 호출, true값으로 애니메이션 재시작
    const onRun = () => setAnimate(true);

    const [items, setItems] = useState([]);


    useEffect(() => {        
        apiFun.List(props.url)
        .then(res=>{
            // console.log(res.data.results, props.cateType)
            setItems(res.data.results)
        })
    }, [props]);


    return (
        <div className='wrapper content container'>
            <div 
            onMouseEnter={onStop}
            onMouseLeave={onRun}
            className='content_grid1 slide_container'>
                <div className='grid_title'>
                    <h2>{props.title}</h2>
                    <Link to='/movies' state={{type:`${props.cateType}`}}>
                        <Button_content/>
                    </Link>
                </div>
                <Swiper 
                    slidesPerView={'auto'}
                    spaceBetween={10}
                    loop={true}
                    freeMode={true}
                    modules={[FreeMode]}

                    className="mySwiper"
                >
                {/* <div className='content_cardbox'> */}
                <div
                
                className="slide_wrapper">
                    {
                    items.map((item)=>(
                        <SwiperSlide style={{width: '13%'}} className={"slide original" + (
                            animate ? "" : " stop"
                        )} key={item.id}>
                            <Content_card item={item} cateType={props.cateType} />
                        </SwiperSlide>
                    ))
                    }
                </div>
                {/* </div> */}
                </Swiper>
            </div>
        </div>
    )
}

export default Content