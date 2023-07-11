import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function MatchCard(props) {

  const { 
    winery,
    wine,
    rating,
    location,
    image,
    id
  } = props;

  const {
    average,
    reviews
  } = rating;


  return (
  <div>
      <Card 
        sx={{ 
          maxWidth: 345,
          display:"flex",
          flexDirection:"column",
          margin:'10px',
          fontSize: '10px'
        }}>
     
        <CardHeader
          style={{
            textAlign:'center',
            fontSize: '14px'
          }}
          
          subheader={wine}
         
        />
        <CardMedia
          component="img"
          sx={{ height: 140, widht: 'auto'}}
          image={image}
          alt="wine image"
        />
        <CardContent
          style={{
            textAlign:'center'
          }}
        >
          <Typography variant="h7" color="black">
            {winery}
          </Typography>
          <br></br>
          <Typography variant="h7" color="bordeaux">
            {location}
          </Typography>
        </CardContent>
      
    </Card>
    </div>
    
    
  );
}
