import React, { Component } from 'react';
import axios from 'axios';

class RelatedVideos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentVideos: [],
            key: 'AIzaSyCd7FQZqAY6rYQg9E4vHWrUGC2lYtLkV-8',
        }
    }

    componentDidMount = () => {
        this.relatedVideos();
      }

    relatedVideos = async () => {
        /**
         * The main screen on landing page. Has a video id that is passed into the axios.get url via this.state.videoId.
         * Populates an array of 5 other videos related to the current video displaying.
         */
        let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=5&relatedToVideoId=Q8KSbct14DI&key=${this.state.key}`)
        console.log(response.data.items);
        this.setState({
        currentVideos: response.data.items // Gets an array of five videos to display in render.
        })
        }


    render() { 
        console.log(this.props.videoId)
        return (
            <React.Fragment>
    <div>
        <h1>Welcome to OurTube!</h1>
        <table>
            <thead>
                <th></th>
            </thead>
            <td>
            {
                this.state.currentVideos.map((video) => {
                    return(
                        <React.Fragment key={video.videoId}>
                            <h1>Video Title</h1>
                            <iframe id="player" type="text/html" width="640" height="390"
                            src={`http://www.youtube.com/embed/${video.videoId}?enablejsapi=1&origin=http://example.com`}
                            frameBorder="0"></iframe>
                            <h2>Video Description</h2>
                        </React.Fragment>
                    )
                })
            }
            </td>        
        </table>
    </div>
</React.Fragment>
        );
    }
}
 
export default RelatedVideos;