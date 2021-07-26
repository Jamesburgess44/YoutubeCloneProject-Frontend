import React, { Component } from 'react';
import LandingPageVideo from './Components/LandingPageVideo/landingPageVideo';
import NavBar from './Components/Navbar/navBar';
import SearchBar from './Components/SearchBar/searchBar';
import axios from 'axios';
import RelatedVideos from './Components/RelatedVideos/relatedVideos';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      searchRequest: '',
      searchResults: [],
      videoId: '',
      key: 'AIzaSyCd7FQZqAY6rYQg9E4vHWrUGC2lYtLkV-8'
    }
  }

  componentDidMount = () => {
    this.getVideoByID();
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
    let tempVideo = response.data.items[0].id.videoId
    this.setState({
      videoId: tempVideo // Getting the random video for landing page.
    })
  }


  handleChange = (event) => {
    // this.filterSearch(event.target.value);
    // console.log(event.target.value);
  }


  render() { 
    return (
      <div>
        <NavBar />
        <LandingPageVideo videoId={this.state.videoId} />
        <RelatedVideos videoId={this.state.videoId}/>
        <SearchBar handleChange={this.handleChange} />
    </div>
    );
  }
}
 
export default App;
