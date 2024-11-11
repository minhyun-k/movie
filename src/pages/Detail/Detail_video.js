import React, { useEffect, useRef } from 'react'

import '../../css/pages/detail.scss'

const Detail_video = (props) => {



  const iframeRef = useRef(null);

    useEffect(() => {
        const height = iframeRef.current.offsetWidth * 9 / 16 + 'px';
        iframeRef.current.setAttribute('height', height);
    }, []);

  return (
    <div className='video'>
        <div className='video_title'>
            <h2>{props.item.name}</h2>
        </div>
        <iframe src={`https://www.youtube.com/embed/${props.item.key}`}
                ref={iframeRef}
                width="100%"
                height="569.8125px"
                title="video"></iframe>
    </div>
  )
}

export default Detail_video