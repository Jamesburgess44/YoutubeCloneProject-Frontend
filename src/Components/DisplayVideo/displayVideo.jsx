import React from 'react';

export default function DisplayVideo({ selectedVideo, defaultId, setQueryRelated }) {
    let url = '';
    if (selectedVideo.snippet.title === "Welcome To OurTube") {
        url = `https://www.youtube.com/embed/${defaultId}?autoplay=0`
        setQueryRelated(defaultId);
    }
    else {
        url = `https://www.youtube.com/embed/${selectedVideo.id.videoId}?autoplay=0`
        setQueryRelated(selectedVideo.id.videoId)
    }
    return (
        <>
            <div class="container-fluid">
                <div className="row">
                    <div className="col d-flex justify-content-center align-items-center">
                        <h1 class="display-5 text-center p-2">{selectedVideo.snippet.title}</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col d-flex justify-content-center align-items-center">
                        <iframe id="player" 
                            type="text/html" 
                            width="640" height="390"
                            src={url}
                            alt="Else Statement"
                            frameborder="0" > 
                        </iframe>
                    </div>
                </div>
                <div className="row">
                    <div className="col d-flex justify-content-center align-items-center">
                        <p class="lead text-center">{selectedVideo.snippet.description}</p>
                    </div>
                </div>
            </div>
        </>
    )
}