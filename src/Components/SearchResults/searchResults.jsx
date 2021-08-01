import React from 'react';

const SearchResults = ({ searchResults, setSearchedVideo, searchedVideo }) => {
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
                                        <img onClick={() => 
                                            { 
                                                setSearchedVideo(
                                                    {
                                                        ...searchedVideo, 
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