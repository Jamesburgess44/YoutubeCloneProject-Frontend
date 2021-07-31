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

// (5 points) As a user, I want to see a collection of videos related to my search. You can see a collection of videos related to the search, but it is a bit buggy. 
// We think it may be a timing issue (getting data, but not all the time). It feels like data isn't being passed consistently.

// (5 points) As a user, I want to see the title and description of the currently playing video. This was met, but due to previous bug, there are inconsistencies.

// (5 points) As a user, I want to be able to select a video to be played from a list of related videos to my search. You can play a video, but there are bugs regarding
// the reliability of consistently clicking/playing on new video icons. 

import axios from 'axios';
import React, { useState, useEffect } from 'react';
import NavBar from './Components/Navbar/navBar';
import SearchBar from './Components/SearchBar/searchBar';
import SearchResults from './Components/SearchResults/searchResults';
import DisplayVideo from './Components/DisplayVideo/displayVideo';
import RelatedVideos from './Components/RelatedVideos/relatedVideos';


export default function App() {
  const defaultId = '5qap5aO4i9A';
  const key = 'AIzaSyCvtDVHokDZ8G-pZq1U4IxHoTZkEv3oqoA';
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(
    {
      kind: '',
      etag: '',
      id: {
        kind: '',
        videoId: defaultId
      },
      snippet: {
        title: 'Welcome To OurTube',
        description: 'Enjoy'
      }
    }
  );
  const [queryRelated, setQueryRelated] = useState('');
  const [relatedVideos, setRelatedVideos] = useState([]);
  // const [allComments, setAllComments] = useState([]);
  // const [clickedResult, setClickedResult] = useState(false);

  useEffect(
    () => {
      if (searchTerm !== '') {
        axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${searchTerm}&type=video&maxResults=5&key=${key}`)
        .then(response => setSearchResults(response.data.items)
        )
      } else {
        setSearchResults([]);
      }
    }, [searchTerm])

  useEffect(
    () => {
      if (queryRelated !== '') {
        axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${queryRelated}&type=video&maxResults=5&key=${key}`)
        .then(response => setRelatedVideos(response.data.items)
        )
      } else {
        setSearchResults([]);
      }
    }, [queryRelated])

    // {console.log(searchTerm)}
    // {console.log(searchResults)}
    // {console.log(selectedVideo)}
  return (
    <>
      <NavBar />
      <div className="container-fluid">
        <div className="row">
          <div className="col d-flex justify-content-center align-items-center p-5">
            <DisplayVideo selectedVideo={selectedVideo} defaultId={defaultId} setQueryRelated={setQueryRelated} />
          </div>
        </div>
        <div className="row">
          <div className="col d-flex justify-content-center align-items-center p-2">
            <SearchBar setSearchTerm={setSearchTerm} />
          </div>
        </div>
        <div className="row">
          <div className="col col-sm-12 col-md-6 col-lg-6 p-5">
            <SearchResults searchResults={searchResults} setSelectedVideo={setSelectedVideo} />
          </div>
          <div className="col col-sm-12 col-md-6 col-lg-6 p-5">
            <RelatedVideos relatedVideos={relatedVideos} setSelectedVideo={setSelectedVideo}  />
          </div>
        </div>
      
        
        
      </div>
    </>
  )
}
