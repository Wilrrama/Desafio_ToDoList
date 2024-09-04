import { ResetStyles } from "./styles/resetStyles";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RoutesMain } from "./routes/RoutesMain";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { AppContainer, MainContent } from "./styles/appStyles";
import { UserProvider } from "./providers/UserContext/UserContext";

function App() {
  return (
    <>
      <ResetStyles />
      <AppContainer>
        <Header />
        <MainContent>
          <UserProvider>
            <RoutesMain />
          </UserProvider>
        </MainContent>
        <Footer />
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </AppContainer>
    </>
  );
}

export default App;
