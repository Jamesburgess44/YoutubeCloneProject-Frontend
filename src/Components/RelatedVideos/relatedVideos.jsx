import React from 'react';

const RelatedVideos = (props) => {
    return (
        <React.Fragment>
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
                                        <button>
                                            <img onClick={() => { props.setVideo(video) }} 
                                            src={video.snippet.thumbnails.default.url} 
                                            alt="A Thumbnail" />   
                                        </button>
                                    </td>
                                </tr>
                                </React.Fragment>
                            )
                        })
                    }
                    </tr>
                </tbody>
            </table>
        </React.Fragment>
    );
}
 
export default RelatedVideos;