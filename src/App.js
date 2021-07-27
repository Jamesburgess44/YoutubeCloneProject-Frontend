import React, { Component } from 'react';
import axios from 'axios';
import NavBar from './Components/Navbar/navBar';
import SearchBar from './Components/SearchBar/searchBar';
import SearchResults from './Components/SearchResults/searchResults';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      searchResults: [], 
      selectedVideo: [],
      defaultVideo: 'VE-_L3A45jo',
      title: '',
      description: '',
      key: 'AIzaSyC9cwy6-96d7rXbAtyRO5DkUyJ-y62rCNs',
    }
  }

  getSearchResults = async (searchTerm) => {
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
    this.collapseSearchResults();
    this.defineDefaultValues(video.id.videoId, video.snippet.title, video.snippet.description)
  }

  collapseSearchResults = () => {
    this.setState({
      searchResults: []
    })
  }

  defineDefaultValues = (id, name, des) => {
    this.setState({
      defaultVideo: id,
      title: name,
      description: des
    })
  }

  render() {
    console.log(this.state.defaultVideo);
    let url = `https://www.youtube.com/embed/${this.state.defaultVideo}?autoplay=0`
    return (
      <div>
        <NavBar />
        <SearchBar searchRequest={this.state.searchRequest}
        handleChange={this.handleChange} 
        handleSubmit={this.handleSubmit} 
        getSearchResults={this.getSearchResults} 
        />
        <SearchResults searchResults={this.state.searchResults} setVideo={this.setVideo} />
        <div className="text-center">
          <h1>{this.state.title}</h1>
          <iframe id="player" 
          type="text/html" 
          width="640" height="390"
          src={url}
          alt="Else Statement"
          frameborder="0" > 
          </iframe>
          <h2>{this.state.description}</h2>
        </div>
      </div>
    );
  }
}
 
export default App;
