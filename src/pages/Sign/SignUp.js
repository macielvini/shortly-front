import Nav from "../../components/Nav";
import Logo from "../../components/Logo";
import Form from "../../components/Form";
import { useState } from "react";

export default function SignUp() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  function formHandler(e) {
    e.preventDefault();

    setForm({ ...form, [e.target.name]: e.target.value });
  }

  return (
    <>
      <Nav />
      <Logo />
      <Form>
        <input
          type="text"
          placeholder="Nome"
          name="name"
          value={form.name}
          onChange={(e) => formHandler(e)}
          maxLength="55"
        />
        <input
          type="text"
          name="email"
          value={form.email}
          onChange={(e) => formHandler(e)}
          placeholder="E-mail"
          maxLength="55"
        />
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={(e) => formHandler(e)}
          placeholder="Senha"
        />
        <input
          type="password"
          name="confirmPassword"
          value={form.confirmPassword}
          onChange={(e) => formHandler(e)}
          placeholder="Confirme sua senha"
          maxLength="55"
        />
        <button type="submit">Criar conta</button>
      </Form>
    </>
  );
}
