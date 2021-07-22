import React from 'react';


const LandingPageVideo = (props) => {
    return (
        <div>
            <h1>Welcome to OurTube!</h1>
        <iframe id="player" type="text/html" width="640" height="390"
  src="http://www.youtube.com/embed/M7lc1UVf-VE?enablejsapi=1&origin=http://example.com"
  frameborder="0"></iframe>
        <h2>Video Title</h2>
        <h3>Video Description...</h3>
       </div>
    );
}
 
export default LandingPageVideo;