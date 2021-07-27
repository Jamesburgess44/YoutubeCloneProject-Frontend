import React from 'react';

const SearchResults = (props) => {
    return (
        <React.Fragment>
            <table>
                <thead>
                    <tr></tr>
                    <tr>
                        <th>Search Results</th>
                    </tr>
                    <tr></tr>
                </thead>
                <tbody>
                    <tr>
                    {
                        props.searchResults.map((video) => {
                            return(
                                <React.Fragment key={video.id.videoId}>
                                <tr>
                                    <td><h1 className="lead">{video.snippet.title}</h1></td>
                                    <td><h2 className="lead">{video.snippet.description}</h2></td>
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
 
export default SearchResults;