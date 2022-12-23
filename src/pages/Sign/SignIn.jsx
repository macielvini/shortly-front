import Nav from "../../components/Nav";
import Logo from "../../components/Logo";
import Form from "../../components/Form";
import { useState } from "react";

export default function SignIn() {
  const [form, setForm] = useState({
    email: "",
    password: "",
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

        <button type="submit">Entrar</button>
      </Form>
    </>
  );
}
