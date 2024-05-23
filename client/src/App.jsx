import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'
import Streamlit from './components/Streamlit/Streamlit'
import './styles/styles.scss';

function App() {

  return (
    <>

      <BrowserRouter>
        <Header />
        <Main />
        <Footer />
      </BrowserRouter>

      <Streamlit />

    </>
  )
}

export default App
