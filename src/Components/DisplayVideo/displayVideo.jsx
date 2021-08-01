import React from 'react';

export default function DisplayVideo({ currentVideo, defaultId, setCurrentVideoToCommentOn }) { //, setQueryRelated 
    let url = '';
    if (currentVideo.title === "Welcome To OurTube") {
        url = `https://www.youtube.com/embed/${defaultId}?autoplay=0`
    }
    else {
        url = `https://www.youtube.com/embed/${currentVideo.videoId}?autoplay=0`
        setCurrentVideoToCommentOn(currentVideo);
    }
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col d-flex justify-content-center align-items-center p-4">
                        <h1 class="display-3 text-center p-2">{currentVideo.title}</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col d-flex justify-content-center align-items-center p-4">
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
                    <div className="col d-flex justify-content-center align-items-center p-4">
                        <p class="lead text-center">{currentVideo.description}</p>
                    </div>
                </div>
            </div>
        </>
    )
}