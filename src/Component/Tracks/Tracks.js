import React, { useEffect, useState } from "react";
import Navbars from "../Navbar/Navbar";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";  
import Card from 'react-bootstrap/Card';
import './Tracks.css';
import axios from "axios";
import image3 from "../../Assets/chatbot.png"; // Adjust the path as necessary

function Tracks() {
  const [tracks, setTracks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
  const fetchTracks = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get('https://localhost:7217/api/courses/tracks', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      
      // Correctly access the tracks array from the response
      const tracksData = response.data.data?.tracks || [];
      
      setTracks(tracksData);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
      console.error("Error fetching tracks:", err);
    }
  };

  fetchTracks();
}, []);

  if (loading) return <div className="loading">Loading tracks...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <>
      <Navbars />
      <Row className="m-auto links_pages">
        <Col className="link_learning"><Link to="/home-course" id="link_learning">Home</Link></Col>
        <Col className="link_home"><Link to="/tracks" id="link_home">Tracks</Link> </Col>
        <Col className="link_learning"><Link to="/My-learning" id="link_learning">My learning</Link> </Col>
        {/* <Col className="link_learning"><Link to="/Leaderboard" id="link_learning">Leaderboard</Link> </Col> */}
      </Row>
      <Row>
        <h4 id="learning_track">Your learning journey begins with the right track!</h4>
      </Row>
      <Row>
        {tracks.map((track) => (
          <Col key={track.trackId} md={6} className="mb-4">
            <Card className="card-track">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none" className="ms-auto m-2">
                <path d="M0.500003 4.9769V4.97735C0.499387 5.65621 0.612375 6.33215 0.841474 7.00714C1.06788 7.67421 1.47385 8.44339 2.07579 9.31739C2.67673 10.1899 3.50353 11.2077 4.56183 12.3723L0.500003 4.9769ZM0.500003 4.9769C0.500003 5.67084 0.628461 6.36737 0.879624 7.06421C1.13421 7.77054 1.57856 8.55514 2.19341 9.41422C2.80889 10.2742 3.63958 11.2762 4.68043 12.4185C5.72017 13.5595 7.04214 14.9385 8.64499 16.5547L8.99854 16.9111L9.35355 16.5561C10.9569 14.9528 12.2797 13.5766 13.3204 12.4286C14.3611 11.2806 15.1916 10.275 15.8068 9.41388C16.4215 8.55357 16.8657 7.76916 17.1203 7.06455L17.1204 7.06421C17.3715 6.36737 17.5 5.67084 17.5 4.9769M0.500003 4.9769L9.15115 3.63083M9.15115 3.63083H9.19254C9.71295 2.70382 10.311 1.97184 10.9968 1.45964C11.7514 0.896104 12.5899 0.605978 13.5 0.605978C14.6404 0.605978 15.6088 1.03374 16.3709 1.87662C17.1302 2.71644 17.5 3.76206 17.5 4.9769M9.15115 3.63083L9.4268 3.17914C9.97591 2.27936 10.6016 1.61554 11.2964 1.16646C11.9891 0.718732 12.7205 0.5 13.5 0.5C14.6286 0.5 15.5625 0.916431 16.3331 1.76869C17.1061 2.62356 17.5 3.68165 17.5 4.9769M9.15115 3.63083L17.1583 7.00657M17.5 4.9769C17.5 5.65449 17.387 6.33042 17.1583 7.00657M17.1583 7.00657C16.9319 7.67565 16.5261 8.44536 15.9243 9.31834C15.323 10.1908 14.4987 11.2086 13.4461 12.3735C12.3923 13.539 11.0452 14.9439 9.40331 16.5891L17.1583 7.00657ZM8.5732 3.17914L8.84885 3.63083H8.808C8.27659 2.69215 7.67531 1.95556 6.99354 1.44811L6.99326 1.44789C6.24437 0.891308 5.40934 0.605978 4.501 0.605978C3.37195 0.605978 2.40856 1.03515 1.64179 1.87479C0.875093 2.71434 0.500736 3.76046 0.500003 4.9766C0.500064 3.68149 0.893983 2.62349 1.66688 1.76869C2.43747 0.916431 3.37139 0.5 4.5 0.5C5.27955 0.5 6.01089 0.718732 6.70359 1.16646C7.39838 1.61554 8.0241 2.27936 8.5732 3.17914ZM9.40309 16.5893L8.99977 16.9929L8.59735 16.5907C8.59702 16.5904 8.59669 16.5901 8.59636 16.5897C6.96775 14.9445 5.62335 13.539 4.5619 12.3724L9.40309 16.5893Z" stroke="#CDB4DB"/>
              </svg>
              <Card.Img 
                className="card_img" 
                variant="top" 
                src={track.trackImage || "https://via.placeholder.com/341x200?text=No+Image"} 
                alt={track.trackName}
              />
              <Link id="link-det-track" to={`/track-courses/${track.trackId}`}>
                <Card.Body>
                  <Card.Title className="card_title">{track.trackName}</Card.Title>
                  <p className="track-description">{track.description}</p>
                </Card.Body>
              </Link>
            </Card>
              <Col >
          <Link to="/chat" id="chatbot">
            <img src={image3} alt="Learning" id="chatbot" />
          </Link>
        </Col>
          </Col>
        ))}
      </Row>
    </>
  );
}

export default Tracks;