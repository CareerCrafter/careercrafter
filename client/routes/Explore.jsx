import React, {useState} from 'react'
import Carousel from '../components/Carousel.jsx'
import { useLoaderData, useFetcher } from "react-router-dom"
import axios from "axios";

export async function loader({ params }) {  
  const location = "France";
  const results = 10;
  const winetype = "red";
  const searchTerms = { location, results, winetype }
  
  let data = await axios.get('/api/searchTest', searchTerms, {
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response => {
      const data = response.data;
      return data;
    })
    data = data.concat(data);
    data = data.concat(data);
    data = data.concat(data);
    return data;
}

export async function action({ request, params}) {
  const searchEntries = Object.fromEntries(await request.formData());
  
  const location = searchEntries.region
  const results = searchEntries.results; 
  const winetype = searchEntries.wineType;
  const searchTerms = { location, results, winetype }
  console.log('search terms from form: ', searchTerms)
  const data = await axios.get('/api/searchTest', searchTerms, {
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response => {
      const data = response.data;
      return data;
    })

    return data;
}

const Explore = () => {
  
  const [region, setRegion] = useState("");
  const [results, setResults] = useState(50);
  const [wineType, setWineType] = useState('red');
  const [apiData, setApiData] = useState([]);
  
  const data = useLoaderData();
  const fetcher = useFetcher();

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      region,
      results,
      wineType,
    };
    console.log('submit formdata', formData);
    event.target.getElementsByTagName('input')['q'].value=('')

  }

  const handleLocationChange = (event) => {
    console.log(event.target.value);
    setRegion(event.target.value);
    
  };

  const handleResultsChange = (event) => {
    console.log(event.target.value);
    setResults(event.target.value);
  };

  const handleWineTypeChange = (event) => {
    console.log(event.target.value);
    setWineType(event.target.value);
  };

  
 
  return (
  
    <div
      style={{    
        display:'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent:'center',
        backgroundColor: '#370B1B',
        backgroundColor: 'rgba(50, 75, 95, 0.65)',
        border: '4px double #8B6E51',
        padding: '5px',
        margin: '5px',
        color: 'white',
        borderRadius: '20px',
        textShadow: '2px 2px 4px rgba(0.5, 0.5, 0.5, 1.5)'
        
      }}
    >
    
      <h1
        style={{
          textAlign:'center',
          backgroundColor: 'rgba(50, 75, 95, 0.25)',
          borderRadius: '5px',
          fontStyle:'bold',
          margin:'15px',
          padding:'15px',
          fontSize:'40px'
        }}
      >
        Explore
      </h1>
        <div
          style={{
            display:'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent:'center',
          }}
        >
          <fetcher.Form 
            id="search-form" 
            method="post"
            action="/explore"
            onSubmit={handleSubmit}
          >
            <label
            style={{
              margin:'15px',
              padding: '10px',
              fontSize:'20px',
              fontWeight: '700'
            }}
          >
            Results to show:
          </label>
          <select 
            id="wine" 
            value={results} 
            name="results"
            onChange={handleResultsChange}
            style={{
              margin:'5px',
              padding: '5px'
            }}
          >
            <option className = "option" value="50">50</option>
            <option className = "option" value="100">100</option>
            <option className = "option" value="200">200</option>
          </select>
         
          <div className = "wine-type">
          <label
              style={{
                margin:'15px',
                padding: '10px',
                fontSize:'20px',
                fontWeight: '700'
              }}
          >

            Wine Selection:
          </label>
          
          <select 
            id="wineType" 
            value={wineType} 
            name="wineType"
            onChange={handleWineTypeChange}
            style={{
              margin:'5px',
              padding: '5px'
            }}
          >
            <option className = "option" value="red">Red</option>
            <option className = "option" value="rosé">Rosé</option>
            <option className = "option" value="white">White</option>
          </select>
          </div>
            <input
              id="q"
              aria-label="Search wine"
              placeholder="Region"
              type="search"
              value={region}
              name="region"
              onChange={handleLocationChange}
              required
            />
            <div
              id="search-spinner"
              aria-hidden
              hidden={true}
            />
            <div
              className="sr-only"
              aria-live="polite"
            ></div>
          
          <div style={{ display: 'flex', justifyContent: 'center' }}>
          <button 
            type="submit"
            style={{
              justifyContent:'center'
            }}
          >
            Submit
          </button>
          </div>
          
          </fetcher.Form >
          </div>
        
    <div
      style={{
        backgroundColor: "#F7E7CE",
        color: 'white',
        borderRadius:'5px',
        height: '30rem',
        fontFamily: 'Open Sans, sans-serif'  
      }}
    >
      <div 
        className="carouselDiv"
        style={{
          marginTop:'30px',
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0)'
        }}
      >
        
        <Carousel
          data={data}
        />
      </div>
    </div>
  </div>
  )
}

export default Explore