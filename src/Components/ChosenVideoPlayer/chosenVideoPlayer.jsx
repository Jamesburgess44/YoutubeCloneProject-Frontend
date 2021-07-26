import React, { Component } from "react";
import axios from "axios";

class ChosenVideoPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      relatedVideos: [],
      key: 'AIzaSyC9cwy6-96d7rXbAtyRO5DkUyJ-y62rCNs',
    };
    console.log(props)

  }

  componentDidMount() {
    // this.relatedVideos();
    console.log(this.props.selectedVideo)
  }

//   relatedVideos = async () => {
//     let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=${this.props.currentVideo.id}&type=video&maxResults=18&key=${this.state.Key}`)
//     console.log(response);
//     this.setState({
//       relatedVideos: response.data.items,
//       loading: false,
//     })
// }
  
  render() {
    if (this.state.loading) return null;
    else {
    return (
      <div>
      <iframe
        id="ytplayer"
        type="text/html"
        width="640"
        height="360"
        src={`https://www.youtube.com/embed/${this.props.currentVideo.id.videoId}?autoplay=0`}
        frameborder="0"
      ></iframe>
      </div>
    );
    }
  }
}

export default ChosenVideoPlayer;