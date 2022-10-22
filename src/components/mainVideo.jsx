import React from "react";

const MainVideo = ({ video }) => {
  if (video == undefined) return <h1>Loading ...</h1>;
  return (
    <>
      <iframe
        width="100%"
        height="600"
        src={`https://www.youtube.com/embed/${video.id.videoId}`}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen></iframe>
    </>
  );
};
export default MainVideo;
