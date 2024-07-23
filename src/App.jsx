import { DictionaryProvider } from "./context/DictionaryProvider";
import Main from "./containers/Main";

const App = () => {
  return (
    <DictionaryProvider>
      <Main />
    </DictionaryProvider>
  );
};

export default App;
