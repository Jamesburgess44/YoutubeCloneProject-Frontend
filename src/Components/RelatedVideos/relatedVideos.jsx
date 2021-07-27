import React from 'react';

const RelatedVideos = (props) => {
    return (
        <React.Fragment>
            <div className="col d-flex justify-content-center">
            <table>
                <thead>
                    <tr></tr>
                    <tr>
                        <th>Related Videos</th>
                    </tr>
                    <tr></tr>
                </thead>
                <tbody>
                    <tr>
                    {
                        props.relatedVideos.map((video) => {
                            return(
                                <React.Fragment key={video.id.videoId}>
                                <tr>
                                    <td>
                                        <img onClick={() => { props.setVideo(video) }} 
                                        src={video.snippet.thumbnails.default.url} 
                                        alt="A Thumbnail" />   
                                    </td>
                                </tr>
                                </React.Fragment>
                            )
                        })
                    }
                    </tr>
                </tbody>
            </table>
            </div>
        </React.Fragment>
    );
}
 
export default RelatedVideos;