import { useForm, useWatch } from "react-hook-form";
import IForm, { emailRegex } from "../../interface/ILoginForm";
import { useState } from "react";
import {
  FormButton,
  FormButtonContainer,
  Header,
  InputBox,
  LoginFormContainer,
  Title,
} from "../../style/GlobalStyleComponents";
import styled from "styled-components";
import { Helmet } from "react-helmet";

const ForgotPassword = styled.div`
  margin: 10px 0px;
  text-align: center;
`;

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<IForm>({});

  const [isLogined, setIsLogined] = useState("not Logined");

  const onValid = (data: IForm) => {
    console.log("login!", data);
    setIsLogined("Logined");
  };

  return (
    <>
      <Helmet>
        <title>Sign In</title>
      </Helmet>
      <Header>
        <Title>Sign In!</Title>
      </Header>
      <LoginFormContainer
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit(onValid)}
      >
        <InputBox
          hasContent={!!useWatch({ control, name: "email" })}
          error={!!errors.email}
        >
          <input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: emailRegex,
                message: "not Email form",
              },
            })}
            id="Email"
          />
          <label htmlFor="Email">Email</label>
          <span>{errors?.email?.message}</span>
        </InputBox>

        <InputBox
          hasContent={!!useWatch({ control, name: "password" })}
          error={!!errors.password}
        >
          <input
            {...register("password", {
              required: "write password",
              minLength: {
                value: 8,
                message: "password should be longer than 8 letters",
              },
            })}
          />
          <label htmlFor="Password">Password</label>
          <span>{errors?.password?.message}</span>
        </InputBox>
        <ForgotPassword>
          <a href="findAccount">Forgot your Account?</a>
        </ForgotPassword>
        <FormButtonContainer>
          <FormButton>Sign In</FormButton>
        </FormButtonContainer>
        <span>{errors?.extraError?.message}</span>
        <span>{isLogined}</span>
      </LoginFormContainer>
    </>
  );
};
export default SignIn;
