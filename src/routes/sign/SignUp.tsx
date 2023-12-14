import { useState } from "react";
import IForm from "../../interface/ILoginForm";
import { useForm, useWatch } from "react-hook-form";
import styled from "styled-components";
import { Header, Title } from "../../style/GlobalStyleComponents";
import {
  FormContainer,
  InputBox,
  emailRegex,
} from "../../style/sign/SignStyleComponents";

const FormButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  button {
    width: 130px;
  }
`;

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    reset,
    control,
  } = useForm<IForm>({});
  const [isLogined, setIsLogined] = useState("not Logined");

  const onValid = (data: IForm) => {
    console.log("login!", data);
    setIsLogined("Logined");
  };
  console.log("!!errors.email", !!errors.email);
  return (
    <>
      <Header>
        <Title>Sign UP!</Title>
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
          hasContent={!!useWatch({ control, name: "firstName" })}
          error={!!errors.firstName}
        >
          <input
            {...register("firstName", { required: "firstName is required" })}
            id="firstName"
          />
          <label htmlFor="firstName">First Name</label>
          <span>{errors?.firstName?.message}</span>
        </InputBox>
        <InputBox
          hasContent={!!useWatch({ control, name: "lastName" })}
          error={!!errors.lastName}
        >
          {" "}
          <input
            {...register("lastName", { required: "lastName is required" })}
          />{" "}
          <label htmlFor="lastName">Last Name</label>
          <span>{errors?.lastName?.message}</span>
        </InputBox>
        <InputBox
          hasContent={!!useWatch({ control, name: "username" })}
          error={!!errors.username}
        >
          <input
            {...register("username", {
              required: "username is required",
              minLength: {
                value: 5,
                message: "Your username is too short.",
              },
            })}
          />
          <label htmlFor="username">Username</label>
          <span>{errors?.username?.message}</span>
        </InputBox>
        <InputBox
          hasContent={!!useWatch({ control, name: "password" })}
          error={!!errors.password}
        >
          <input
            {...register("password", {
              required: "password is required",
              minLength: {
                value: 8,
                message: "password should be longer than 8 letters",
              },
            })}
          />
          <label htmlFor="Password">Password</label>
          <span>{errors?.password?.message}</span>
        </InputBox>
        <InputBox
          hasContent={!!useWatch({ control, name: "passwordConfirm" })}
          error={!!errors.passwordConfirm}
        >
          <input
            {...register("passwordConfirm", {
              required: "password Confirm is required",
              validate: (value) =>
                value !== getValues("passwordConfirm")
                  ? "Password Confirm are not the same"
                  : true,
            })}
          />
          <label htmlFor="passwordConfirm">Password Confirm</label>
          <span>{errors?.passwordConfirm?.message}</span>
        </InputBox>
        <FormButtonContainer>
          <button
            onClick={(e) => {
              e.preventDefault();
              reset();
            }}
          >
            Reset
          </button>
          <button>Sign Up!</button>
        </FormButtonContainer>
        <span>{errors?.extraError?.message}</span>
        <span>{isLogined}</span>
      </FormContainer>
    </>
  );
};
export default SignUp;
