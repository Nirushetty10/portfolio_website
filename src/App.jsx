import Container from '@mui/material/Container';
import Nav from './components/Nav';
import Home from './pages/Home';

function App() {

  return (
    <Container>
      <Nav />
      <Home />
      {/*<Highlights />
      <ChooseUs />
      <Plans />
      <FAQ />
      <Footer /> */}
    </Container>
  )
}

export default App
