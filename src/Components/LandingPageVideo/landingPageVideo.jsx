import React from 'react';

const LandingPageVideo = (props) => {
    // We were going to pass props.videoId...
    return ( 
        <React.Fragment>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Search Results</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        props.searchResults.map((video) => {
                            return(
                                <React.Fragment key={video.id.videoId}>
                                <tr>
                                    <td><h1 className="lead">{video.snippet.title}</h1></td>
                                    <td><h2 className="lead">{video.snippet.description}</h2></td>
                                    <td>
                                        <button>
                                            <img onClick={() => {props.setVideo(video)}} 
                                            src={video.snippet.thumbnails.default.url} />   
                                        </button>
                                    </td>
                                </tr>
                                </React.Fragment>
                            )
                        })
                    }
                    </tbody>
                </table>
            </div>
       </React.Fragment>
    );
}
 
export default LandingPageVideo;
