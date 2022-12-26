import * as C from './App.styles';
import logo from './assets/devmemory_logo.png'

const App = () => {
  return (
    <div>
      <C.Container>
        <C.Info>
          <C.LogoLink href="">
            <img src={logo} width="200" alt="" />
          </C.LogoLink>

          <C.InfoArea>
            ...
          </C.InfoArea>

          <button>Reiniciar</button>
        </C.Info>

        <C.GridArea>
          ...
        </C.GridArea>
      </C.Container>
    </div >
  );
}

export default App;