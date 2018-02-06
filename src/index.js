import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search'
import SearchBar from './components/search_bar'
import VideoList from './components/videoList'
import apiKey from '../passwords.js'
import VideoDetail from './components/videoDetail'

const API_KEY = apiKey;

// Create a new component to make some html.

// Take this generated html and put it on the page.



class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            videos: [],
            selectedVideo: null
         }
        YTSearch({ key: API_KEY, term: 'cats' }, data => {
            this.setState({
                videos: data,
                selectedVideo: data[0]
            })})
    }
    render() {
        return (
            <div>
                <SearchBar />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList 
                onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                videos={this.state.videos} />
            </div>)
    }
}


//  <App /> creates an instance of App.... 
ReactDOM.render(<App />, document.querySelector(".container"))