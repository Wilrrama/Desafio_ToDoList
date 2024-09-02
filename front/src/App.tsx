import { ResetStyles } from "./styles/resetStyles";

import { RoutesMain } from "./routes/RoutesMain";
import { Header } from "./components/header";

function App() {
  return (
    <>
      <ResetStyles />
      <Header />
      <RoutesMain />
    </>
  );
}

export default App;
