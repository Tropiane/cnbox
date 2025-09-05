import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Footer from './components/footer/footer'
import Header from './components/header/header'
import Main from './components/main/main'
import ScrollView from './components/animations/scrollView'

function App() {

  return (
    <>
    <BrowserRouter>
      <Header></Header>
      <ScrollView>
        <Main></Main>
      </ScrollView>
      <Footer></Footer>
    </BrowserRouter>
    </>
  )
}

export default App
