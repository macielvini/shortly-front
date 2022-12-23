import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Nav from "../../components/Nav";
import Logo from "../../components/Logo";
import Form from "../../components/Form";
import { signIn } from "../../services/api";
import { useAuth } from "../../hooks/authContext";

export default function SignIn() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const { setUser } = useAuth();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  useEffect(() => setIsLoading(false), []);

  function formSubmit(e) {
    e.preventDefault();

    setIsLoading(true);

    const body = form;

    signIn(body)
      .then((res) => {
        localStorage.setItem("user", JSON.stringify(res.data));
        setUser({ ...res.data });
        navigate("/ranking");
      })
      .catch((err) => {
        const messages = err.response.data.message.map(
          (message) => `\n${message}\n`
        );

        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: messages,
        });

        setIsLoading(false);
      });
  }

  function formHandler(e) {
    e.preventDefault();
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  return (
    <>
      <Nav />
      <Logo />
      <Form onSubmit={formSubmit}>
        <input
          type="text"
          name="email"
          value={form.email}
          onChange={(e) => formHandler(e)}
          placeholder="E-mail"
          maxLength="55"
          required
        />
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={(e) => formHandler(e)}
          placeholder="Senha"
          required
        />

        <button type="submit" disabled={isLoading}>
          Entrar
        </button>
      </Form>
    </>
  );
}
