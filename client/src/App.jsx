import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'
import Streamlit from './components/Streamlit/Streamlit'
import './styles/styles.scss';
import { UserLogged } from './context/UserLogged'
import { useState } from 'react'

function App() {

  // let userExists = axios.get('ruta/api/user').queries.userExists;
  // SELECT *
  // FROM alumnos
  // WHERE email = $1

  // userIsAdmin = axios.get('ruta').queries.userIsAdmin
  // SELECT *
  // FROM alumnos 
  // WHERE email = $1 AND rol = $2

  const [user, setUser] = useState({
    id: 1, 
    name: "Jhon",
    roles: "admin"  /* "user"  */
  }
/* null */
  );

  /*   ({
      id: 1,
      name: "Jhon",
      roles: ['admin'] // ['user']
    }) 

    
    */
  const updateUser = (newUser) => {
    setUser(newUser)
  };

  const UserData = {
    user,
    updateUser
  }



  return (
    <>

      <BrowserRouter>
        <UserLogged.Provider value={UserData}>
          <Header />
          <Main />
        </UserLogged.Provider>
        <Footer />
      </BrowserRouter>

      <Streamlit />

    </>
  )
}

export default App
