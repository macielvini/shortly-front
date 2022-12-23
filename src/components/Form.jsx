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
`;
