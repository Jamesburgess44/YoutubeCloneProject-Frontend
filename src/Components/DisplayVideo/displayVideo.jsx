import React from 'react';

export default function DisplayVideo({ currentVideo, defaultId }) { //, setQueryRelated 
    let url = '';
    if (currentVideo.title === "Welcome To OurTube") {
        url = `https://www.youtube.com/embed/${defaultId}?autoplay=0`
        // setQueryRelated(defaultId);
    }
    else {
        url = `https://www.youtube.com/embed/${currentVideo.videoId}?autoplay=0`
        // setQueryRelated(currentVideo.videoId)
    }
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col d-flex justify-content-center align-items-center">
                        <h1 class="display-5 text-center p-2">{currentVideo.title}</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col d-flex justify-content-center align-items-center">
                        <iframe id="player" 
                            type="text/html" 
                            width="640" height="390"
                            src={url}
                            title={currentVideo.title}
                            alt="Else Statement"
                            frameborder="0" > 
                        </iframe>
                    </div>
                </div>
                <div className="row">
                    <div className="col d-flex justify-content-center align-items-center">
                        <p class="lead text-center">{currentVideo.description}</p>
                    </div>
                </div>
            </div>
        </>
    )
}