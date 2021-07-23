import React from 'react';


const LandingPageVideo = (props) => {
    console.log(props.currentVideos);
    return (
        <React.Fragment>
            <div>
            <iframe id="player" type="text/html" width="640" height="390"
            src={`http://www.youtube.com/embed/AAxz0gLMx6Q?enablejsapi=1&origin=http://example.com`}
            frameborder="0"></iframe>
                <h2>Joe Rogan</h2>
                    <h3>Super Kicks...</h3>
            </div>
            <div>
                <h1>Welcome to OurTube!</h1>
                <table>
                    <thead>
                        <th></th>
                    </thead>
                    <tbody>
                    <td>
                    {
                        props.currentVideos.map((video) => {
                            return(
                                <React.Fragment>
                                    <h1>Video Title</h1>
                                    <iframe id="player" type="text/html" width="640" height="390"
                                    src={`http://www.youtube.com/embed/${video.id.videoId}?enablejsapi=1&origin=http://example.com`}
                                    frameborder="0"></iframe>
                                    <h2>Video Description</h2>
                                </React.Fragment>
                            )
                        })
                    }
                    </td>
                    </tbody>        
                </table>
            </div>
       </React.Fragment>
    );
}
 
export default LandingPageVideo;