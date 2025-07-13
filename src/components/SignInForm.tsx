import { useForm } from "react-hook-form";
import { signInSchema, type SignupSchemaType } from "../schema/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import InputField from "./InputField";

const SignInForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignupSchemaType>({ resolver: zodResolver(signInSchema) });


  const onSubmit = async (data: SignupSchemaType) => {
    await new Promise((res) => setTimeout(res, 1000));
    console.log(data);
    alert("ok submit form ")
    
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputField
        registration={register("firstName")}
        error={errors.firstName}
      />
      <InputField registration={register("lastName")} error={errors.lastName} />
      <InputField registration={register("email")} error={errors.email} />
      <InputField registration={register("password")} error={errors.password} />
      <button type="submit">submit</button>
    </form>
  );
};

export default SignInForm;
