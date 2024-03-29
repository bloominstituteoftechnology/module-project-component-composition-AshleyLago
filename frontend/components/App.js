import React, {useState, useEffect} from 'react';
import axios from 'axios';
import NasaApod from './NasaApod'; 

const endpoint = "http://localhost:9009/api/apod?api_key=DEMO_KEY"; //https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY

function App() {
  const [nasaData, setNasaData] = useState({});

  useEffect(() => {
    function getURL() {
      axios.get(endpoint)
        .then(res => {
          setNasaData(res.data);
        })
        .catch(err => {console.log(err.message)});
    }
    getURL();
  }, []);

  if (!nasaData) return <h3>Loading...</h3>;
  return (
    <div>
      <NasaApod title={nasaData.title} explanation={nasaData.explanation} imgUrl={nasaData.url} mediaType={nasaData.media_type} date={nasaData.date} copyright={nasaData.copyright}/>
    </div>
  )
}

export default App

/*
NASA APOD

HEADER
title
explanation

IMAGE DETAILS
(image) url
media_type
date
copyright

service_version
*/