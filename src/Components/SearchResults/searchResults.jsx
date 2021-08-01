import React from 'react';

const SearchResults = ({ searchResults, setSearchedVideo, searchedVideo }) => {
    return (
        <React.Fragment>
            <div className="col d-flex justify-content-center">
                <table>
                <thead>
                    <tr className="display-5">Search Results</tr>
                </thead>
                <tbody>
                    <tr>
                    {
                        searchResults.map((video) => {
                            return(
                                <React.Fragment key={video.id.videoId}>
                                <tr>
                                    <td className="p-2"><p className="bold">{video.snippet.title}</p></td>
                                    <td className="p-2"><p className="bold">{video.snippet.description}</p></td>
                                    <td className="p-2">
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