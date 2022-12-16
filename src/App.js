import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyles from "./assets/css/globalStyles";
import UserStyles from "./assets/css/userStyles";
import HomePage from "./pages/HomePage";
import Container from "./components/Container";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyles />
        <UserStyles />
        <Container>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </>
  );
}
