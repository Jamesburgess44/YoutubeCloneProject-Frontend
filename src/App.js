import React, { Component } from 'react';
import axios from 'axios';
import NavBar from './Components/Navbar/navBar';
import SearchBar from './Components/SearchBar/searchBar';
import SearchResults from './Components/SearchResults/searchResults';
import ChosenVideoPlayer from './Components/ChosenVideoPlayer/chosenVideoPlayer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      searchResults: [], 
      selectedVideo: [],
      key: 'AIzaSyC9cwy6-96d7rXbAtyRO5DkUyJ-y62rCNs'
    }
  }

  getSearchResults = async searchTerm => {
    try {
      let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${searchTerm}&type=video&maxResults=5&key=${this.state.key}`)
      let tempVideoArray = response.data.items
      this.setState({
        searchResults: tempVideoArray
      })
    } catch (err) {
      console.log(err);
    } 
  }

  setVideo = (video) => {
    this.setState({
      selectedVideo: video
    })
    // Video object
    this.props.playVideo(this.state.selectedVideo);
  }

  collapseSearchResults = () => {
    this.setState({
      searchResults: []
    })
  }

  render() {
    console.log(this.state.selectedVideo);
    return (
      <div>
        <NavBar />
        <SearchBar searchRequest={this.state.searchRequest}
        handleChange={this.handleChange} 
        handleSubmit={this.handleSubmit} 
        getSearchResults={this.getSearchResults} 
        />
        <SearchResults searchResults={this.state.searchResults} setVideo={this.setVideo} />
        <ChosenVideoPlayer selectedVideo={this.state.selectedVideo} collapseSearchResults={this.collapseSearchResults} />
    </div>
    );
  }
}
 
export default App;
