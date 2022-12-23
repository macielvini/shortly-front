import Nav from "../../components/Nav";
import Logo from "../../components/Logo";
import Form from "../../components/Form";
import { useEffect, useState } from "react";
import { signUp } from "../../services/api";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function SignUp() {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  useEffect(() => setIsLoading(false), []);

  function formSubmit(e) {
    e.preventDefault();

    setIsLoading(true);

    const body = form;

    signUp(body)
      .then(() => {
        let timerInterval;
        Swal.fire({
          title: "Conta criada com sucesso!",
          icon: "success",
          html: "Voce será redirecionado automaticamente em <b></b> segundos.",
          timer: 3000,
          timerProgressBar: true,
          didOpen: () => {
            Swal.showLoading();
            const b = Swal.getHtmlContainer().querySelector("b");
            timerInterval = setInterval(() => {
              b.textContent = parseInt(Swal.getTimerLeft() / 1000);
            }, 100);
          },
          willClose: () => {
            clearInterval(timerInterval);
          },
        });

        navigate("/signin");
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
          placeholder="Nome"
          name="name"
          value={form.name}
          onChange={(e) => formHandler(e)}
          maxLength="55"
          required
        />
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
        <input
          type="password"
          name="confirmPassword"
          value={form.confirmPassword}
          onChange={(e) => formHandler(e)}
          placeholder="Confirme sua senha"
          maxLength="55"
          required
        />
        <button type="submit" disabled={isLoading}>
          Criar conta
        </button>
      </Form>
    </>
  );
}
