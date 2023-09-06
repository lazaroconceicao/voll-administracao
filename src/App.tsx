import Container from './components/Container';
import './App.css';
import Cabecalho from './components/Cabecalho';
import Titulo from './components/Titulo';
import Rodape from './components/Rodape';

function App() {
  return (
    <>
      <Cabecalho />
      <Container>
        <Titulo>Área Adminstrativa</Titulo>
      </Container>
      <Rodape />
    </>
  );
}

export default App;
