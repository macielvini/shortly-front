import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyles from "./assets/css/globalStyles";
import UserStyles from "./assets/css/userStyles";
import Container from "./components/Container";
import SignUp from "./pages/Sign/SignUp";
import SignIn from "./pages/Sign/SignIn";
import Ranking from "./pages/Ranking/RankingPage";
import { AuthProvider } from "./hooks/authContext";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyles />
        <UserStyles />
        <AuthProvider>
          <Container>
            <Routes>
              <Route path="/ranking" element={<Ranking />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/signin" element={<SignIn />} />
            </Routes>
          </Container>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}
