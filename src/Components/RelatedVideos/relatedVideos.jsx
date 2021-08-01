import React from 'react';

const RelatedVideos = ({ relatedResults, setRelatedVideo, relatedVideo }) => {
    let filteredRelatedResults = relatedResults.filter((video) => {
        if (video.snippet !== undefined) {
            return video;
        }
    })
    return (
        <React.Fragment>
            <div className="col d-flex justify-content-center">
                <table>
                <thead>
                    <tr className="display-5">Related Videos</tr>
                </thead>
                <tbody>
                    <tr>
                    {
                        filteredRelatedResults.map((video) => {
                            return(
                                <React.Fragment key={video.id.videoId}>
                                <tr>
                                    <td className="p-2"><p className="bold">{video.snippet.title}</p></td>
                                    <td className="p-2">
                                        <img onClick={() => 
                                            { 
                                                setRelatedVideo(
                                                    {
                                                        ...relatedVideo, 
                                                        videoId: video.id.videoId,
                                                        title: video.snippet.title,
                                                        description: video.snippet.description,
                                                        thumbnail: video.snippet.thumbnails.default.url
                                                    }
                                                )
                                            }} 
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