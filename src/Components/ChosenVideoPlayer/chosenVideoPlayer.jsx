import React, { Component } from "react";
import App from "../../App";

class ChosenVideoPlayer extends Component {
    constructor(props) {
    super(props);
        this.state = {
            loading: true,
            key: 'AIzaSyC9cwy6-96d7rXbAtyRO5DkUyJ-y62rCNs',
            defaultVideo: 'G6E4crjcHq4',
            currentVideo: []
        };
    }

    clearSearchResults = () => {
        this.props.collapseSearchResults();
    }

    playVideo = (temp) => {
        this.setState({
            currentVideo: temp,
        });
        this.clearSearchResults();
    }

    render() {
        if (typeof currentVideo !== 'undefined') {
            console.log(this.state.currentVideo);
            return (
                <div>
                    <iframe id="player" type="text/html" width="640" height="390"
                    src={`http://www.youtube.com/embed/G6E4crjcHq4?enablejsapi=1&origin=http://example.com`}
                    frameborder="0"></iframe>
                    <App playVideo={this.playVideo} />
                </div>
            );
        }
        else {
            return (
                <div>
                    <iframe id="player" type="text/html" width="640" height="390"
                    src={`http://www.youtube.com/embed/${this.state.defaultVideo}?enablejsapi=1&origin=http://example.com`}
                    alt="Else Statement"
                    frameborder="0"></iframe>
                    <App playVideo={this.playVideo} />
                </div>
            );
        }
    }
}

export default ChosenVideoPlayer;