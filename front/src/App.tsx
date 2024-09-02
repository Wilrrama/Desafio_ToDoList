import { ResetStyles } from "./styles/resetStyles";

import { RoutesMain } from "./routes/RoutesMain";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { AppContainer, MainContent } from "./styles/appStyles";

function App() {
  return (
    <>
      <ResetStyles />
      <AppContainer>
        <Header />
        <MainContent>
          <RoutesMain />
        </MainContent>
        <Footer />
      </AppContainer>
    </>
  );
}

export default App;
