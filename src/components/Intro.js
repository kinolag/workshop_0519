import React from 'react';


export default class Intro extends React.Component {

    render() {
        return(
        <>
            <h3 className='is-orange'>Basic <s>portfolio</s> workshop page</h3>
            {/* <h5 className='is-white'>developed in React.js</h5> */}
            <h5 className="is-white">Connect with the {'<audio>'} tag</h5>
            <audio className="pad-10 mar-10" controls>
            <source src="http://www.fotonix.it/temp/dial-up-sound.mp3" type="audio/mpeg" />
            Your browser does not support the HTML5 audio tag.
            </audio>
        </>
        );
    }
}