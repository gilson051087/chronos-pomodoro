import './styles/global.css';
import './styles/theme.css';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';

import { Container } from './components/Container';
import { CountDown } from './components/CountDown';
import { Input } from './components/Input';
import { Cycles } from './components/Cycles';



export function App() {
  return (
    <>
      <Container>
        <Logo />
          
      </Container>

      <Container>
        <Menu />
      </Container>

      <Container>
        <CountDown />
      </Container>

      <Container>
        <form className="form" action="">
          <div className="formRow">
            <Input 
              labelText='task' 
              id='input' 
              type='text'
              placeholder='Digite uma tarefa'
              
            />

          </div>

          <div className="formRow">
            <p>
              Lorem ipsum dolor sit amet.
            </p>
          </div>

          <div className="formRow">
            <Cycles />
          </div>

          <div className="formRow">
            <button>Enviar</button>
          </div>

        </form>
      </Container>

    </>
  );
}

