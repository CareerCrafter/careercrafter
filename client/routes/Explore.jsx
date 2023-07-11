import React from 'react'
import Carousel from '../components/Carousel.jsx'

const Explore = () => {

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
      
      alignItems: 'center',
      justifyContent:'center',
      backgroundColor: '#370B1B',
      border: '4px double #8B6E51',
      padding: '25px',
      margin: '30px',
      color: 'white',
      borderRadius: '20px'
    }}
    >
    
      <h1
        style={{
          textAlign:'center',
          border:"2px solid white",
          backgroundColor: 'rgba(50, 75, 95, 0.15)',
          borderRadius: '5px',
          fontStyle:'italic',
          margin:'5px',
          padding:'5px'
        }}
      >Explore</h1>

    <div
      style={{
        display:'flex',
        flexDirection:'column',
        backgroundColor: "#F7E7CE",
        color: 'black',
        borderRadius:'5px',
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