import { useRef, type CSSProperties } from "react";

type ButtonProps = {
  style:CSSProperties
  type: "submit" | "reset" 


} & Omit<React.ComponentProps<"button">,"type">


const convertToArray = <T,>(value:T):T[] => {
  return [value]
}

convertToArray<string>("")
convertToArray(5)



const Button = ({style , ...rest }: ButtonProps) => {


  const ref = useRef<HTMLButtonElement>(null)
  return <button {...rest} style={style} ref={ref}>Button </button>;
};

export default Button;
