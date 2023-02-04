import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { app } from './Firebase/Firebase';

///// Componenst////////
import Nav from './Components/Nav/Nav';
import Main from './Components/Main/Main';
import Footer from './Components/Footer/Footer';

//////views//////
import Inicio from './views/Inicio/Inicio';
import Reservas from './views/Reservas/Reservas';
import Eventos from './views/Eventos/Eventos';
import Escuelas from './views/Escuelas/Escuelas';
import Login from './views/Login/Login';

const App = () => {

  const [ usuario, setUsuario ] = useState(null);

  useEffect (() =>{
    app.auth().onAuthStateChanged((user)=> {
    setUsuario(user);
    })
  } ,[]);

  return (
    <>{ usuario ?
    <Router>
      <Main />
      <Nav />
      <Routes>
        <Route path='/' element={<Inicio />}></Route>
        <Route path='/detail/:id' element={<Reservas />}></Route>
        <Route path='/eventos' element={<Eventos />}></Route>
        <Route path='/escuelas' element={<Escuelas />}></Route>
      </Routes>
      <Footer />
    </Router>
      : <Login userDate={setUsuario}/>}
    </>
  );
}

export default App;
