import React from 'react';

const VideoListItem = (props) => {
    const video = props.video
    const img = video.snippet.thumbnails.default.url;
    const onVideoSelect = props.onVideoSelect;

    console.log("CATSSSSS")
    return (
        <li onClick={() => onVideoSelect(video)} className="list-group-item">
            <div className="media-left">
                <img className="media-object" src={img}/>
            </div>
            <div className="media-body">
                <div className="media-heading">{video.snippet.title}</div>
            </div>
        </li>
    )
}

export default VideoListItem