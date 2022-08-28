import "./App.css";
import FirstComponent from "./components/FirstComponent";
import AnotherComponent from "./components/AnotherComponent";
import Hooks from "./components/HooksComponent";
import List from "./components/ListComponent";
import RenderCond from "./components/RenderCondComponent";
import Fragment from "./components/FragmentComponent";
import Container from "./components/ContainerComponet";
import MeuNome from "./components/MeuNome";

function App() {
  return (
    <div className="App">
      <FirstComponent />
      <AnotherComponent />
      <Hooks />
      <List/>
      <RenderCond x={17} y={28} z={18}/>
      <Fragment/>
      <Container>
        <h1>Este é filho do container</h1>
      </Container>
      <MeuNome x={"Props"}/>
    </div>
  );
}

export default App;
