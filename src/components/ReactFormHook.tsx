// import { zodResolver } from "@hookform/resolvers/zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, type SubmitHandler } from "react-hook-form";
import { minLength, success, z } from "zod";

const schema = z.object({
  firstName: z.string().min(8),
  lastName: z.string(),
  email: z.email(),
  password: z.number(),
  age: z.number(),
  friend: z.array(z.string()).max(3),
  url: z.url(),
  setting: z.object({
    issub: z.boolean(),
  }),
});

type UserInput = z.infer<typeof schema>;

// const user:UserInput = {
//   firstName: "fiez",
//   lastName: "ahmad",
//   email: "ahmad@gmail.com",
//   password: 1302131,
//   age: 121,
//   friend: ["friend 1", "friend 2", "friend 3 "],
//   url: "https://loacalhost3000",
//   setting: {
//     issub: false,
//   },
// };

// console.log(schema.safeParse(user));

const ReactFormHook = () => {
  const {register , handleSubmit , formState:{errors}} = useForm<UserInput>({resolver:zodResolver(schema)})

  const onSubmit:SubmitHandler<UserInput> = (data:UserInput) => {
    const result = schema.safeParse(data)
    if (result.success) {
      // handle success
      console.log("success");
      
    } else {
      console.log(result.error);
      
    }

    
    
  }

  return <form onSubmit={handleSubmit(onSubmit)}>
    <input {...register("firstName")} type="text" />
    {errors.firstName && <span>{errors.firstName.message}</span> }
    <button type="submit">submit</button>
  </form>;
};  

export default ReactFormHook;
