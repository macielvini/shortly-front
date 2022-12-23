import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyles from "./assets/css/globalStyles";
import UserStyles from "./assets/css/userStyles";
import HomePage from "./pages/Home/HomePage";
import Container from "./components/Container";
import SignUp from "./pages/Sign/SignUp";
import SignIn from "./pages/Sign/SignIn";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyles />
        <UserStyles />
        <Container>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </>
  );
}
