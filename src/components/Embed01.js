import React from 'react';


export default class Embed01 extends React.Component {

    render() {

        return(
        <div className="pad-10">

            <p className='is-orange'>Embedded music from mixcloud ({'<iframe> tag'})</p>
            <iframe className='pad-10 mar-10' width="40%" height="120" src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&feed=%2Fjazzameianoite%2Fjazz-a-meia-noite-with-enrico-rava%2F" frameborder="0" title="Jazz A Meia Noite"></iframe>


            {/* <p className='is-white'>Embedded music on bandcamp</p>
            <iframe title='bandcamp' className="bcStyle" src="https://bandcamp.com/EmbeddedPlayer/album=924058308/size=small/bgcol=333333/linkcol=e99708/transparent=true/" seamless><a href="http://volchestra.bandcamp.com/album/nessuna-traccia">Nessuna traccia by Volchestra</a></iframe> */}

            {/* original bandcamp iframe code uses inline style, but React would want style as an object, however still only width with percent seemed to work, the other bits wouldn't */}

            {/* <iframe style="border: 0; width: 100%; height: 42px;" src="https://bandcamp.com/EmbeddedPlayer/album=924058308/size=small/bgcol=333333/linkcol=e99708/transparent=true/" seamless><a href="http://volchestra.bandcamp.com/album/nessuna-traccia">Nessuna traccia by Volchestra</a></iframe> */}
            
        </div>
        );
    }
}

