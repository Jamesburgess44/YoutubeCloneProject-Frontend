// Friday of last week we created a render loop in our app and it took us until Monday after our lunch break to actually understand what was happening.
// We corrected the issue but lost a little more than a day of work tyring to fix problems that were actually just expired API Key's.
// Today (tues/27th) we started the day with very little working but managed to get a default video to play, 
// user can search and will be shown a list of 10 videos that they can then click on and have play on the player. 
// Also, the user can click on a related video and it will start playing in the video player.

// (7.5 points) As a user, I want to add a comment to a video in the comment section. 
//   in the last our of our day today (tues/27th) we attempted to get our POST component working so that we could add a comment using a form into our database. 
//   we were attempting to use similar methods that we had previously used in the music database. 
//   in its current state attempting to add a video results in a "[27/Jul/2021 14:11:46] "POST /youtube_app/ HTTP/1.1" 400 81" Error that we did not have time to figure out.
//   we looked to make sure that we are passing all required data with the POST request and the next thing we were going to check is to console.log(this.props.defautVideo)
//   to see how it's passing the videoId in. 

// (5 points) As a user, I want to like or dislike a comment in the comment section.
//   the basic logic that we had planned on using for this was to have it start with a default value of 0 and when you click like or dislike it simply gives a +1 
//   to the current value of like or dislike to keep a running total. this would require the info from the GET to know what the couter was currently at and then 
//   ading 1 and using a PATCH request we had worked on in POSTMAN "http://127.0.0.1:8000/youtube_app/like/2"

// (7.5 points) As a user, I want to reply to another comment in the comment section.
//   the logic we were planning on using would use the videoId as a FK, the database also would store the origionalComment so they could be displayed in the correct order.
//   we played aroud with the idea of having reply button in the origional comment or spending some time researching the best way to make this user friendly and look 
//   like other comment sections work in youtbue or compareable applications. 


import React, { Component } from 'react';
import axios from 'axios';
import NavBar from './Components/Navbar/navBar';
import SearchBar from './Components/SearchBar/searchBar';
import SearchResults from './Components/SearchResults/searchResults';
import RelatedVideos from './Components/RelatedVideos/relatedVideos';
import DisplayComments from './Components/DisplayComments/displayComments';
import AddComment from './Components/AddComment/addComment';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      searchResults: [], 
      selectedVideo: [],
      relatedVideos: [],
      allComments: [],
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

  getRelatedVideos = async (chosenVideoId) => {
    try {
      let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=5&relatedToVideoId=${chosenVideoId}&key=${this.state.key}`)
      let tempVideoArray = response.data.items
      this.setState({
        relatedVideos: tempVideoArray
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
    this.getRelatedVideos(video.id.videoId)
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

  commentTable = async() => {
    let response = await axios.get(`http://127.0.0.1:8000/youtube_app/`)
        let temp = response.data
        this.setState ({
            allComments: temp,
        });
  }

  render() {
    console.log(this.state.defaultVideo);
    console.log(this.state.relatedVideos);
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
        <AddComment commentTable={this.commentTable} defaultVideo={this.state.defaultVideo} />
        <DisplayComments allComments={this.state.allComments}/>
        <RelatedVideos relatedVideos={this.state.relatedVideos} setVideo={this.setVideo} /> 
      </div>
    );
  }
}
 
export default App;
