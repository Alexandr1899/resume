import { ContainerApp } from "./App.styled";
import { Contacts } from "./components/Contacts/Contacts";
import { Info } from "./components/Info/Info";


function App() {
  return (
    <ContainerApp>
      <Contacts/>
      <Info/>
    </ContainerApp>
  );
}

export default App;
