import React, { FC } from "react";
import styled from "@emotion/styled";

const Form = styled.form`
  background: white;
  border: 1px solid #eaeaea;
  border-radius: 20px;
  max-width: 400px;
  max-height: 500px;
  padding: 20px 30px;
`;

const Container = styled.div`
  font-family: "Montserrat", sans-serif;
  width: 400px;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 0px;

  & div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 15px;
  }

  & div > h1 {
    font-weight: black;
    color: #47ab43;
    margin: 0px;
  }

  & a {
    color: black;
    margin: 10px;
    text-decoration: none;
    &:hover {
      color: #47ab43;
    }
  }
`;

const Input = styled.input`
  font-size: 1em;
  height: 60px;
  width: calc(100% - 10px);
  min-width: 300px;
  margin: 10px 0px;
  padding-left: 10px;
  border-radius: 10px;
  border: 1px solid #eaeaea;
`;

const ButtonSummit = styled.button`
  font-size: 1em;
  height: 60px;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;
  background: #47ab43;
  color: white;
  border-radius: 10px;
  border: 1px solid #47ab43;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

interface LoginFormProps {}

export const LoginForm: FC<LoginFormProps> = () => {
  return (
    <Form action="action_page.js" method="post">
      <Container>
        <div>
          <h1>LOGIN</h1>
          <p>Identificarse con una cuenta existente</p>
        </div>
        <Input type="email" placeholder="Email" name="email" id="emailLogin" required />
        <Input type="password" placeholder="Contraseña" name="email" id="emailLogin" required />
        <ButtonSummit type="submit">Iniciar Sesión</ButtonSummit>
        <a href="#">¿Has olvidado la contraseña?</a>
        <a href="#">
          ¿No tienes cuenta todavia? <strong>Registrarse</strong>
        </a>
      </Container>
    </Form>
  );
};
