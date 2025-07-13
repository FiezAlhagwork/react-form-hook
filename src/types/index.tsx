// const num: number[] = [1,23,4]
// const  string : string[] = ["d", "s" , "sa"]

import type { InputHTMLAttributes } from "react";
import type { FieldError, UseFormRegisterReturn } from "react-hook-form";

// const user:{name:string , age:number} =  {
//     name:"fiez",
//     age:12
// }

// interface User {
//     name:string
//     age: number
// }

// interface admin extends User {
//     phone:number
// }

// type Person = {
//   name: string;
//   age: number;
// };

// type Employee = Person & {
//   jobTitle: string;
// };

// type BaseButtonProps = Omit<React.ComponentProps<"button">, "type"> & {
//   type: "submit" | "reset";
//   customStyle?: React.CSSProperties;
// };

// type User = {
//   id: number;
//   name: string;
//   email: string;
// };

// type UserWithoutEmail = Omit<User, "email">;
// type UsetwithEmailAndName = Pick<User, "email" | "name">;



 export type InputFieldProps = {
  label?: string;
  error?: FieldError;
  registration: UseFormRegisterReturn;
} & InputHTMLAttributes<HTMLInputElement>;
