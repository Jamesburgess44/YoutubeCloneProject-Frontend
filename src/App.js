import React, { Component } from 'react';
import LandingPageVideo from './Components/LandingPageVideo/landingPageVideo';
import NavBar from './Components/Navbar/navBar';
import SearchBar from './Components/SearchBar/searchBar';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      searchRequest: '',
      searchResults: [],
      currentVideos: [],
      videoId: '',
      key: 'AIzaSyCd7FQZqAY6rYQg9E4vHWrUGC2lYtLkV-8'
    }
  }

  componentDidMount = () => {
    this.getVideoByID();
    this.relatedVideos();
  }

    /* 
  filterSearch = () => {

  }
  */
  
  getVideoByID = async () => {
    let choices = ['gaming', 'news', 'trending', 'dogs']
    let rand = Math.floor(Math.random() * 4);
    let temp = '';
    for (let index = 0; index < choices.length; index++) {
      if (choices[index] === choices[rand]) {
        temp = choices[index];
      }
    }
    // console.log(this.state.landingPageDefault); // 'gaming' or 'news'...
    let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${temp}&type=video&videoDuration=long&maxResults=1&key=${this.state.key}`)
    console.log(response.data)
    this.setState({
      videoId: response.data.items.id.videoId // Getting the random video for landing page.
    })
  }

  handleChange = (event) => {
    // this.filterSearch(event.target.value);
    // console.log(event.target.value);
  }

  relatedVideos = async () => {
    /**
     * The main screen on landing page. Has a video id that is passed into the axios.get url via this.state.videoId.
     * Populates an array of 5 other videos related to the current video displaying.
     */
    let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=5&relatedToVideoId=${this.state.videoId}&key=${this.state.key}`)
    // console.log(response.data.items);
    this.setState({
      currentVideos: response.data.items // Gets an array of five videos to display in render.
    })
  }

  render() { 
    console.log(this.state.videoId);
    return (
      <div>
        <NavBar />
        <LandingPageVideo currentVideos={this.state.currentVideos} />
        <SearchBar handleChange={this.handleChange} />
    </div>
    );
  }
}
 
export default App;
