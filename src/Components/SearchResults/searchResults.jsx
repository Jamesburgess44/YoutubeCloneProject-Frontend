import React from 'react';

const SearchResults = ({ searchResults, setSelectedVideo }) => {
    return (
        <React.Fragment>
            <div className="col d-flex justify-content-center">
                <table>
                <thead>
                    <tr>Search Results</tr>
                </thead>
                <tbody>
                    <tr>
                    {
                        searchResults.map((video) => {
                            return(
                                <React.Fragment key={video.id.videoId}>
                                <tr>
                                    <td>
                                        <img onClick={() => { setSelectedVideo(video)}} 
                                        src={video.snippet.thumbnails.default.url} 
                                        alt="A Thumbnail" />   
                                    </td>
                                    <td><h1 className="lead">{video.snippet.title}</h1></td>
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
 
export default SearchResults;