import { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Progress from '../Progress/Progress';
import Datee from '../Date/Date';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const CardsDetails = ({ data }) => {
    const [load, setLoad] = useState(false);
    useEffect(() => {
        setLoad(true)
        setTimeout(() => {
            setLoad(false)
        }, 3000)
    }, [])

    const onClick = () => {
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Su turno fue registrado',
            showConfirmButton: false,
            timer: 1500
        })
    }

    return (
        <>
            {load ? (<Progress />) :
                (<Card className='flex flex-col m-4 md:m-12 lg:mx-60'>
                    <CardMedia
                        component="img"
                        alt="cancha"
                        image={data.img}
                    />
                    < CardContent className='block mx-auto p-2'>
                        <Typography gutterBottom variant="h4" >
                            {`Cancha: ${data.estadio}`}
                        </Typography>
                        <Typography gutterBottom variant="h5" component="div">
                            {`Valor xhs: $${data.precio}`}
                        </Typography>
                        <Typography variant="h5" color="text.secondary">
                            {data.descripcion}
                        </Typography>
                    </CardContent>
                    <CardActions className='block mx-auto p-2'>
                        <Datee />
                    </CardActions>
                    <CardActions className='block mx-auto p-2'>
                        <Link to='/' className='rounded-md shadow-sm text-primario mx-2'>
                            <Button >Volver</Button>
                        </Link>
                        <Button className='rounded-md shadow-sm text-primario mx-2' onClick={onClick}>Alquilar</Button>
                    </CardActions>
                </Card >)
            }

        </>
    );
}
export default CardsDetails;