import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, type SubmitHandler } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  email: z.email(),
  password: z.string().min(8),
});

type Input = z.infer<typeof schema>;

// type Input = {
//   email: string;
//   password: string;
// };

const FormWithValidation = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<Input>({
    defaultValues: {
      email: "test@email.com",
    },
    resolver:zodResolver(schema)
  });
  const onSubmit: SubmitHandler<Input> = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log(data);
      throw new Error();
    } catch (error) {
      setError("root", { message: "this email is required" });
    }
    console.log(data);
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <input
        {...register("email", {
          required: "email is required",
          validate: (value) => {
            if (!value.includes("@")) {
              return "Email must include '@'";
            }
            return true;
          },
        })}
        type="text"
        placeholder="Email"
      />
      {errors.email && <div className="">{errors.email.message}</div>}

      <input
        {...register("password", {
          required: "password is required",
          minLength: {
            value: 8,
            message: "Password must have at least 8  characters",
          },
        })}
        type="password"
        placeholder="password"
      />
      {errors.password && <div className="">{errors.password.message}</div>}

      <button
        type="submit"
        style={{ background: "red" }}
        disabled={isSubmitting}
      >
        {isSubmitting ? "loading..." : "submit"}
      </button>
      {errors.root && <div>{errors.root.message}</div>}
    </form>
  );
};

export default FormWithValidation;
