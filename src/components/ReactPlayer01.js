import React, { Component } from 'react'
import ReactPlayer from 'react-player'

export default class Player extends Component {
  render() {
    return (
      <>
        <h5 className='is-white'>React Player demo</h5>
        <ReactPlayer url='https://www.youtube.com/watch?v=eNzx3PjJ_MA' controls />
        <br /><br />
        <ReactPlayer url='https://soundcloud.com/modernlove/06-luxury-problems?in=modernlove/sets/andy-stott-luxury-problems-1' controls height='320'/>
        <br /><br />
        <ReactPlayer url='https://www.youtube.com/watch?v=TvEC7A7IoMU&list=PL3wUEM4g4GuI8CdUii3GRALz4p5eeAid-' controls light playlist />

        {/* <br /><br />
        <ReactPlayer url='https://soundcloud.com/cbs-news-radio/web-creator-tim-berners-lee-issues-warnings-on-28th-anniversary-of-world-wide-web' controls height='320'/>
        <br /><br />
        <ReactPlayer url='https://soundcloud.com/user-925359775-464012623/tim-berners-lee-30-years-on-whats-next-fortheweb' controls height='320'/> */} 
        {/* TBL short v. https://www.youtube.com/watch?v=BnXF_O_WjAA */}
        {/* TBL long v. https://www.youtube.com/watch?v=eNzx3PjJ_MA */}  
      </>
      
    );
  }
}