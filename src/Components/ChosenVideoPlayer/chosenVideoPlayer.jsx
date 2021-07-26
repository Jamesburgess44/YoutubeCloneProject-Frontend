import React from 'react';

const ChosenVideoPlayer = (props) => {
    return ( 
        <React.Fragment>
            <iframe width="560" 
            height="315" 
            src={`https://www.youtube.com/embed/${props.videoId}`} 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen></iframe>
        </React.Fragment>
        
    );
}
 
export default ChosenVideoPlayer;