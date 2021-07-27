import React from 'react';

const RelatedVideos = (props) => {
    return (
        <React.Fragment>
            <table>
                <thead>
                    {
                        props.relatedVideos.map((video) => {
                            return(
                                <React.Fragment key={video.id.videoId}>
                                <tr>
                                    <th>
                                        <button>
                                            <img onClick={() => { props.setVideo(video) }} 
                                            src={video.snippet.thumbnails.default.url} 
                                            alt="A Thumbnail" />   
                                        </button>
                                    </th>
                                </tr>
                                </React.Fragment>
                            )
                        })
                    }
                </thead>
            </table>
        </React.Fragment>
    );
}
 
export default RelatedVideos;