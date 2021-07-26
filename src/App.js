import React, { Component } from 'react';
import LandingPageVideo from './Components/LandingPageVideo/landingPageVideo';
import NavBar from './Components/Navbar/navBar';
import SearchBar from './Components/SearchBar/searchBar';
import axios from 'axios';
import RelatedVideos from './Components/RelatedVideos/relatedVideos';
import CommentSection from './Components/CommentSection/commentSection';
import ChosenVideoPlayer from './Components/ChosenVideoPlayer/chosenVideoPlayer';

class App extends Component {
  constructor(props) {
    super(props);
    this.videoId = '';
    this.state = { 
      searchRequest: '', // Initial search from handleSubmit
      searchResults: [],
      currentVideos: [],
      key: 'AIzaSyC9cwy6-96d7rXbAtyRO5DkUyJ-y62rCNs'
    }
  }

  getSearchResults = async searchTerm => {
    try {
      let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${searchTerm}&type=video&videoDuration=long&maxResults=10&key=${this.state.key}`)
      let tempVideos = response.data.items // Array of 10 
      this.setState({
        searchResults: tempVideos // Getting the random video for landing page.
      })
    } catch (err) {
      console.log("An error has occurred.");
    }
    
  }

  relatedVideos = async () => { 
  /**
   * The main screen on landing page. Has a video id that is passed into the axios.get url via this.state.videoId.
   * Populates an array of 5 other videos related to the current video displaying.
   */
    let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=5&relatedToVideoId=${this.props.videoId}&key=${this.state.key}`)
    console.log(response.data.items);
    let tempVideos = response.data.items;
    this.setState({
      currentVideos: tempVideos // Gets an array of 5 videos to display in render.
    })
  }

  requestedVideo = id => {
    this.videoId = id;
    console.log(this.videoId);
  }

  handleChange = (event) => {
    this.setState({
      searchRequest: event.target.value // a dog
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    // get parameter
    this.getSearchResults(this.state.searchRequest)
  }

  render() {
    // console.log(this.state.searchRequest) // Search Term
    // console.log(this.state.searchResults) // Search Array of 10 videos
    return (
      <div>
        <NavBar />
        <RelatedVideos currentVideos={this.state.currentVideos} />
        <LandingPageVideo searchResults={this.state.searchResults} requestedVideo={this.requestedVideo} />
        <ChosenVideoPlayer videoId={this.videoId} />
        <SearchBar handleChange={this.handleChange} handleSubmit={this.handleSubmit} searchRequest={this.searchRequest} />
        <CommentSection />
    </div>
    );
  }
}
 
export default App;
