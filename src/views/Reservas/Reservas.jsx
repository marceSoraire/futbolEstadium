import { useState, useEffect } from 'react';
import CardsDetails from '../../Components/CardsDetails/CardsDetails'
import { useParams } from 'react-router-dom';
import { db } from '../../Firebase/Firebase';
import { collection, query, getDocs, where, documentId } from 'firebase/firestore';

const Reservas = () => {

    const [producto, setProducto] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const getCanchas = async () => {
            const q = query(collection(db, 'canchas'), where(documentId(), '==' , id));
            const querySnapshot = await getDocs(q)
            const docs = [];
            querySnapshot.forEach((doc) => {
                docs.push({ ...doc.data(), id: doc.id });
            });
            setProducto(docs);
        }
        getCanchas()
    }, [id])

    return (
        <div className='div-cards'>
            {producto.map((data) => {
                return (
                    <div key={data.id} className='cards'>
                        <CardsDetails data={data} />
                    </div>
                )
            })}
        </div>
    )
}

export default Reservas