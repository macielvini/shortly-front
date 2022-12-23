import styled from "styled-components";

export default function Form(props) {
  return (
    <>
      <StyledForm {...props}>{props.children}</StyledForm>
    </>
  );
}

const StyledForm = styled.form`
  width: 70%;
  min-width: 300px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;

  button {
    width: max-content;
    height: 60px;

    padding-inline: 50px;

    background: #09f282;
    border-radius: 12px;

    font-weight: 700;

    &:hover {
      filter: brightness(0.9);
    }
  }

  input {
    width: 100%;
    height: 60px;

    padding-left: 21px;

    background: #000000;
    border: 1px solid #31c86d;
    box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
    border-radius: 12px;

    font-weight: 400;
    font-size: 14px;

    color: #c4ccdc;
  }

  /* Change autocomplete styles in WebKit */
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover,
  textarea:-webkit-autofill:focus,
  select:-webkit-autofill,
  select:-webkit-autofill:hover,
  select:-webkit-autofill:focus {
    box-shadow: 0 0 0px 1000px #000 inset;
    border: 1px solid #31c86d;
    -webkit-text-fill-color: white;
    -webkit-box-shadow: 0 0 0px 1000px #000 inset;
    transition: background-color 5000s ease-in-out 0s;
  }
`;
