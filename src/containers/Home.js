import React, { useState, useRef, useEffect } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

import { Helmet } from "react-helmet";
import ApexCharts from "react-apexcharts";
import { Link } from "react-router-dom";

const Home = () => {
  const [count, setCount] = useState(0);
  const AudioContext = window.AudioContext || window.webkitAudioContext; // Handle browser compatibility
  const [isChartShown, setIsChartShown] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const startSound = () => {
    const interval = setInterval(() => {
      setCount((prevCount) => {
        const nextCount = prevCount + 1;
        return nextCount > 22000 ? 22000 : nextCount;
      });
    }, 20);
    if (isPlaying) return; // Prevent redundant oscillator creation
    const context = new AudioContext();
    const oscillator = context.createOscillator();
    oscillator.type = "sine"; // Adjust waveform as needed (sine, square, triangle, sawtooth)
    oscillator.frequency.setValueAtTime(1000, context.currentTime); // Set frequency to 1000Hz
    oscillator.connect(context.destination);
    oscillator.start();
    audioRef.current = oscillator;
    setIsPlaying(true);
  };

  const stopSound = () => {
    if (!isPlaying) return; // Prevent errors when already stopped
    audioRef.current.stop();
    audioRef.current = null;
    setIsPlaying(false);
    setIsChartShown(true);
  };
  const options = {
    chart: {
      id: "frequency-chart",
    },
    xaxis: {
      title: "Dates",
      type: "datetime",
    },
    yaxis: {
      title: "Frequency (Hz)",
    },
    title: {
      text: "Frequency Over Time",
    },
  };

  const series = [
    {
      name: "Sensor 1",
      data: [
        [new Date(2024, 2, 18).getTime(), 1000], // Adjust dates and Hz values as needed
        [new Date(2024, 2, 19).getTime(), 1020],
        [new Date(2024, 2, 20).getTime(), 1015],
        [new Date(2024, 2, 21).getTime(), 1032],
        [new Date(2024, 2, 22).getTime(), 1028], // Added additional data points
        [new Date(2024, 2, 23).getTime(), 1012],
        [new Date(2024, 2, 24).getTime(), 1007],
        [new Date(2024, 2, 25).getTime(), 1019],
        [new Date(2024, 2, 26).getTime(), 1035],
        [new Date(2024, 2, 27).getTime(), 1040],
        [new Date(2024, 2, 28).getTime(), 1023],
        [new Date(2024, 2, 29).getTime(), 1010],
      ],
    },
    {
      name: "Sensor 2",
      data: [
        [new Date(2024, 2, 18).getTime(), 980], // Adjust dates and Hz values as needed
        [new Date(2024, 2, 19).getTime(), 995],
        [new Date(2024, 2, 20).getTime(), 1008],
        [new Date(2024, 2, 21).getTime(), 1025],
        [new Date(2024, 2, 22).getTime(), 1017], // Added additional data points
        [new Date(2024, 2, 23).getTime(), 999],
        [new Date(2024, 2, 24).getTime(), 1003],
        [new Date(2024, 2, 25).getTime(), 1014],
        [new Date(2024, 2, 26).getTime(), 1029],
        [new Date(2024, 2, 27).getTime(), 1033],
        [new Date(2024, 2, 28).getTime(), 1016],
        [new Date(2024, 2, 29).getTime(), 995],
      ],
    },
  ];

  return (
    <>
      <Helmet>
        <title> - Home</title>
        <meta name="description" content="sign up page" />
      </Helmet>
      <Container>
        {!isChartShown ? (
          <Col className="justify-content-center mt-4">
            <Row className="justify-content-center">{count}Hz</Row>
            <Row className="justify-content-center mt-4">
              <Button
                style={{ marginRight: "10px" }}
                variant="primary"
                onClick={startSound}
                disabled={isPlaying}
              >
                Start
              </Button>
              <Button
                variant="danger"
                onClick={stopSound}
                disabled={!isPlaying}
              >
                Stop
              </Button>
            </Row>
          </Col>
        ) : (
          <Col className="justify-content-center mt-4">
            <ApexCharts
              options={options}
              series={series}
              type="line"
              height={350}
            />
            <center style={{ marginTop: "30px" }}>
              <Link to="/doctors">
                <Button>Contact Doctors</Button>
              </Link>
            </center>
          </Col>
        )}
      </Container>
    </>
  );
};

export default Home;
