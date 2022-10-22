import axios from "axios";
import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import MainVideo from "./components/mainVideo";
import SearchComponent from "./components/searchComponet";
import SideList from "./components/sideList";

const App = () => {
  const [allVideo, setAllVideo] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState();

  const fetchAPI = async (data) => {
    const res = await axios.get(
      "https://www.googleapis.com/youtube/v3/search",
      {
        params: {
          q: data,
          part: "snippet",
          type: "video",
          maxResults: 10,
          key: "",
        },
      }
    );
    setSelectedVideo(res.data.items[0]);
    setAllVideo(res.data.items);
  };
  useEffect(() => {
    fetchAPI("SUPEMAN");
  }, []);

  return (
    <>
      <Container>
        <SearchComponent fetchFunction={fetchAPI} />
        <Row>
          <Col md={8}>
            <MainVideo video={selectedVideo} />
          </Col>
          <Col md={4}>
            {allVideo.map((data, index) => {
              return (
                <SideList data={data} key={index} onSelect={setSelectedVideo} />
              );
            })}
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default App;
