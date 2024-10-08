import { TarefaProvider } from "./context/TarefaContext";
import ListTarefa from "./pages/ListTarefa";

function App() {
  return (
    <TarefaProvider>
      <ListTarefa />
    </TarefaProvider>
  );
}

export default App;