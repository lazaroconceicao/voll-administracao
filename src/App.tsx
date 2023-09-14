import Container from './components/Container';
import './App.css';
import Cabecalho from './components/Cabecalho';
import Titulo from './components/Titulo';
import Rodape from './components/Rodape';
import Tabela from './components/Tabela';

function App() {
  return (
    <>
      <Cabecalho />
      <Container>
        <Titulo>Área Adminstrativa</Titulo>
        <Tabela/>
      </Container>
      <Rodape />
    </>
  );
}

export default App;
