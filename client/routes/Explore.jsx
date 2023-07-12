import React, {useState} from 'react'
import Carousel from '../components/Carousel.jsx'
import { Form } from "react-router-dom"
import axios from "axios";

export async function loader({ params }) {  
  return null;
}

export async function action({ request, params}) {
  const searchEntries = Object.fromEntries(await request.formData());
  const location = searchEntries.location
  const results = searchEntries.results; 
  const winetype = searchEntries.type;
  const searchTerms = { location, results, winetype }
  
  axios.post('/api/test', searchTerms, {
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response => {
      const data = response.data;
      setApiData(data)
    })
    console.log(data);
    return data;
}

const Explore = () => {
  
  const [location, setLocation] = useState("");
  const [results, setResults] = useState("10");
  const [wineType, setWineType] = useState("red");
  const [apiData, setApiData] = useState([]);

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleResultsChange = (event) => {
    setResults(event.target.value);
  };

  const handleWineTypeChange = (event) => {
    setWineType(event.target.value);
  };

  let data = [
      {
          "winery": "Domaine de La Romanée-Conti",
          "wine": "Montrachet Grand Cru 2010",
          "rating": {
              "average": "4.9",
              "reviews": "37 ratings"
          },
          "location": "France\n·\nMontrachet Grand Cru",
          "image": "https://images.vivino.com/thumbs/rORmihtxSrKG7SfuI0bD6w_pb_x300.png",
          "id": 1
      },
      {
          "winery": "Domaine de La Romanée-Conti",
          "wine": "Montrachet Grand Cru 2014",
          "rating": {
              "average": "4.9",
              "reviews": "33 ratings"
          },
          "location": "France\n·\nMontrachet Grand Cru",
          "image": "https://images.vivino.com/thumbs/rORmihtxSrKG7SfuI0bD6w_pb_x300.png",
          "id": 2
      },
  ]
  data = data.concat(data);
  data = data.concat(data);

  return (
  
    <div
      style={{    
        display:'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent:'center',
        backgroundColor: '#370B1B',
        border: '4px double #8B6E51',
        padding: '15px',
        margin: '15px',
        color: 'white',
        borderRadius: '20px',
        
      }}
    >
    
      <h1
        style={{
          textAlign:'center',
          backgroundColor: 'rgba(50, 75, 95, 0.15)',
          borderRadius: '5px',
          fontStyle:'italic',
          margin:'5px',
          padding:'5px'
        }}
      >
        Explore
      </h1>
      
          <Form id="search-form" method="post">
            <input
              id="q"
              aria-label="Search wine"
              placeholder="Region"
              type="search"
              name="q"
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
            
       
          <label
            style={{
              margin:'15px',
              padding: '10px'
            }}
          >
            Results to show:
          </label>
          <select 
            id="wine" 
            value={results} 
            onChange={handleResultsChange}
            style={{
              margin:'5px',
              padding: '5px'
            }}
          >
            <option className = "option" value="50">50</option>
            <option className = "option" value="100">100</option>
            <option className = "option" value="500">200+</option>
          </select>
         
          <div className = "wine-type">
          <label
             style={{
              margin:'15px',
              padding: '10px'
            }}
          >

            Wine Selection:
          </label>
          <select 
            id="wine" 
            value={wineType} 
            onChange={handleWineTypeChange}
            style={{
              margin:'5px',
              padding: '5px'
            }}
          >
            <option className = "option" value="red">Red</option>
            <option className = "option" value="rose">Rosé</option>
            <option className = "option" value="white">White</option>
          </select>
          </div>
          <div className="button-container"></div>
          </Form>
        
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
          marginTop:'30px'
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