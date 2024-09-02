import { ResetStyles } from "./styles/resetStyles";

import { RoutesMain } from "./routes/RoutesMain";
import { Header } from "./components/header";
import { Footer } from "./components/footer";

function App() {
  return (
    <>
      <ResetStyles />
      <Header />
      <RoutesMain />
      <Footer />
    </>
  );
}

export default App;
