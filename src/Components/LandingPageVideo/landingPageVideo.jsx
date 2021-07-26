import React, { Component } from 'react';


class LandingPageVideo extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() { 
        return (
            <React.Fragment>
            <div>
            <iframe id="player" type="text/html" width="640" height="390"
            src={`http://www.youtube.com/embed/${this.props.videoId}?enablejsapi=1&origin=http://example.com`}
            frameBorder="0"></iframe>
                <h2>Joe Rogan</h2>
                    <h3>Super Kicks...</h3>
            </div>
            
       </React.Fragment>
        );
    }
}
 
export default LandingPageVideo;
