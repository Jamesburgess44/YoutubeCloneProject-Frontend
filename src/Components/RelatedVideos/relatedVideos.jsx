import React from 'react';

const RelatedVideos = (props) => {
    return ( 
        <React.Fragment>
            <div>
                <h1>Welcome to OurTube!</h1>
                <table>
                    <thead>
                        <th></th>
                    </thead>
                    <td>
                    {
                        props.currentVideos.map((video) => {
                            return(
                                <React.Fragment key={video.videoId}>
                                    <h1>Video Title</h1>
                                    <iframe id="player" type="text/html" width="640" height="390"
                                    src={`http://www.youtube.com/embed/${video.videoId}?enablejsapi=1&origin=http://example.com`}
                                    frameBorder="0"></iframe>
                                    <h2>Video Description</h2>
                                </React.Fragment>
                            )
                        })
                    }
                    </td>        
                </table>
            </div>
        </React.Fragment>    
    );
}
 
export default RelatedVideos;
