// Friday of last week we created a render loop in our app and it took us until Monday after our lunch break to actually understand what was happening.
// We corrected the issue but lost a little more than a day of work trying to fix problems that were actually just expired API Key's.
// Today (tues/27th) we started the day with very little working but managed to get a default video to play, 
// user can search and will be shown a list of 10 videos that they can then click on and have play on the player. 
// Also, the user can click on a related video and it will start playing in the video player.

// (7.5 points) As a user, I want to add a comment to a video in the comment section. 
//   in the last our of our day today (tues/27th) we attempted to get our POST component working so that we could add a comment using a form into our database. 
//   we were attempting to use similar methods that we had previously used in the music database. 
//   in its current state attempting to add a video results in a "[27/Jul/2021 14:11:46] "POST /youtube_app/ HTTP/1.1" 400 81" Error that we did not have time to figure out.
//   we looked to make sure that we are passing all required data with the POST request and the next thing we were going to check is to console.log(this.props.defaultVideo)
//   to see how it's passing the videoId in. 

// (5 points) As a user, I want to like or dislike a comment in the comment section.
//   the basic logic that we had planned on using for this was to have it start with a default value of 0 and when you click like or dislike it simply gives a +1 
//   to the current value of like or dislike to keep a running total. this would require the info from the GET to know what the counter was currently at and then 
//   adding 1 and using a PATCH request we had worked on in POSTMAN "http://127.0.0.1:8000/youtube_app/like/2"

// (7.5 points) As a user, I want to reply to another comment in the comment section.
//   the logic we were planning on using would use the videoId as a FK, the database also would store the originalComment so they could be displayed in the correct order.
//   we played around with the idea of having reply button in the original comment or spending some time researching the best way to make this user friendly and look 
//   like other comment sections work in youtube or comparable applications. 

import axios from 'axios';
import React, { useState, useEffect } from 'react';
import NavBar from './Components/Navbar/navBar';
import SearchBar from './Components/SearchBar/searchBar';
import SearchResults from './Components/SearchResults/searchResults';
import RelatedVideos from './Components/RelatedVideos/relatedVideos';
import DisplayVideo from './Components/DisplayVideo/displayVideo';
import DisplayComments from './Components/DisplayComments/displayComments';



export default function App() {
  const key = 'AIzaSyB-T7mqOnmmv07uHHhVDCJiucPORnEBRW0';
  const defaultId = '5qap5aO4i9A';
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [searchedVideo, setSearchedVideo] = useState(
    {
      videoId: '5qap5aO4i9A', // response.data.items.id.videoId
      title: '', // response.data.items.snippet.title
      description: '', // response.data.items.snippet.description
      thumbnail: '', // response.data.items.snippet.thumbnails.default.url
    }
  );
  const [queryRelatedId, setQueryRelatedId] = useState('5qap5aO4i9A');
  const [relatedResults, setRelatedResults] = useState(
    [
      {
        videoId: '5qap5aO4i9A', // response.data.items.id.videoId
        title: '', // response.data.items.snippet.title
        description: '', // response.data.items.snippet.description
        thumbnail: '', // response.data.items.snippet.thumbnails.default.url
      }
    ]
  );
  const [relatedVideo, setRelatedVideo] = useState(
    {
      videoId: '5qap5aO4i9A', // response.data.items.id.videoId
      title: '', // response.data.items.snippet.title
      description: '', // response.data.items.snippet.description
      thumbnail: '', // response.data.items.snippet.thumbnails.default.url
    }
  )
  const [currentVideo, setCurrentVideo] = useState(
    {
      videoId: '5qap5aO4i9A', // response.data.items.id.videoId
      title: 'Welcome To OurTube', // response.data.items.snippet.title
      description: 'Enjoy', // response.data.items.snippet.description
      thumbnail: '', // response.data.items.snippet.thumbnails.default.url
    }
  );
  const [currentVideoToCommentOn, setCurrentVideoToCommentOn] = useState({});

  useEffect(
    () => {
      if (searchTerm !== '') {
        axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${searchTerm}&type=video&maxResults=5&key=${key}`)
        .then(response => setSearchResults(response.data.items))
      } else {
        setSearchResults([]);
      }
    }, [searchTerm])

  useEffect(
    () => {
    if (searchedVideo !== {}) {
      setQueryRelatedId(searchedVideo.videoId);
    }
  }, [searchedVideo])

  useEffect(
    () => {
    if (queryRelatedId !== '5qap5aO4i9A') {
      axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=${queryRelatedId}&type=video&maxResults=8&key=${key}`)
      .then(response => setRelatedResults(response.data.items))
    }
  }, [queryRelatedId])

  useEffect(() => {
    if (searchedVideo.videoId !== '5qap5aO4i9A') {
      setCurrentVideo(searchedVideo);
    }
  },[searchedVideo])

  useEffect(() => {
    if (relatedVideo.videoId !== '5qap5aO4i9A') {
      setCurrentVideo(relatedVideo);
    }
  }, [relatedVideo])

    // {console.log(searchTerm)}
    // {console.log(searchResults)}
    // console.log(searchedVideo)}
    // {console.log(queryRelatedId)}
    // {console.log(relatedResults)}
    // {console.log(relatedVideo)}
  return (
    <>
      {console.log(currentVideoToCommentOn.title)}
      <NavBar />
      <div className="container-fluid">
        <div className="row">
          <div className="col d-flex justify-content-center align-items-center p-5">
            <DisplayVideo currentVideo={currentVideo} defaultId={defaultId} setCurrentVideoToCommentOn={setCurrentVideoToCommentOn} />
          </div>
          <div className="col d-flex justify-content-center align-items-start p-4">
            <DisplayComments />
          </div>
        </div>
        <div className="row">
          <div className="col d-flex justify-content-center align-items-center p-2">
            <SearchBar setSearchTerm={setSearchTerm} />
          </div>
        </div>
        <div className="row p-5">
          <div className="col col-sm-12 col-md-1 col-lg-1 p-5"></div>
          <div className="col col-sm-12 col-md-5 col-lg-5 p-5">
            <SearchResults searchResults={searchResults} setSearchedVideo={setSearchedVideo} searchedVideo={searchedVideo} />
          </div>
          <div className="col col-sm-12 col-md-6 col-lg-6 p-5">
            <RelatedVideos relatedResults={relatedResults} setRelatedVideo={setRelatedVideo} relatedVideo={relatedVideo} />
          </div>
        </div> 
      </div>
    </>
  )
}

// const [allComments, setAllComments] = useState([]);