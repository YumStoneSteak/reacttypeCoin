import { useForm, useWatch } from "react-hook-form";
import IForm from "../../interface/ILoginForm";
import { useState } from "react";
import { Header, Title } from "../../style/GlobalStyleComponents";
import {
  FormContainer,
  InputBox,
  emailRegex,
} from "../../style/sign/SignStyleComponents";
import styled from "styled-components";

const FormButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    width: 130px;
    font-size: 1.05rem;
  }
`;

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
      <Header>
        <Title>Sign In!</Title>
      </Header>
      <FormContainer
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
          <button>Sign In</button>
        </FormButtonContainer>
        <span>{errors?.extraError?.message}</span>
        <span>{isLogined}</span>
      </FormContainer>
    </>
  );
};
export default SignIn;
