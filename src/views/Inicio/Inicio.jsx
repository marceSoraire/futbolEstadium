import { useState, useEffect } from 'react';
import Cards from '../../Components/Cards/Cards';
import { Link } from 'react-router-dom';
import { db } from '../../Firebase/Firebase';
import { collection, query, getDocs } from 'firebase/firestore';
const Inicio = () => {

  const [producto, setProducto] = useState([]);
  useEffect(() => {
    const getCanchas = async () => {
      const q = query(collection(db, 'canchas'));
      const querySnapshot = await getDocs(q)
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setProducto(docs);
    }
    getCanchas()
  }, [])

  return (
    <div className='flex flex-wrap justify-around'>
      {producto.map((data) => {
        return (
          <div key={data.id} className='w-66 m-3 md:m-8 md:p-8'>
            <Link to={`detail/${data.id}`} className='justify-center text-center font-poppins'>
              <Cards data={data}/>
            </Link>
          </div>
        )
      })}
    </div>
  )
}

export default Inicio
