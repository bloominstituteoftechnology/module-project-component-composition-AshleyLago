import React, {useState, useEffect} from 'react';
import axios from 'axios';
import NasaApod from './NasaApod';

const endpoint = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY"; //http://localhost:9009/api/apod?api_key=DEMO_KEY

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

  return (
    <div>
      <NasaApod title={nasaData.title} explanation={nasaData.explanation} imgUrl={nasaData.url} mediaType={nasaData.media_type} date={nasaData.date} copyright={nasaData.copyright}/>
      <p>{console.log(nasaData)}</p>
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