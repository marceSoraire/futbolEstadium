import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

const Cards = ( { data }) => {
  return (
    <Card sx={{ maxWidth: 350}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="280"
          image={data.img}
          alt="cancha"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {`Cancha: ${data.estadio}`}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            {`Valor xhs: $${data.precio}`}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Detalles
        </Button>
      </CardActions>
    </Card>
  );
}

export default Cards;