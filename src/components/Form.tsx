import { useState } from "react";
import Button from "./Button";

const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{
    email: string;
    password: string;
  }>({ email: "", password: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setErrors({ email: "", password: "" });

    if (!email.includes("@")) {
      setErrors({ ...errors, email: "Email must include @" });
      return;
    }

    if (password.length < 8) {
      setErrors({ ...errors, password: "Password must be least 8 chars" });
      return;
    }

    console.log("Form submitted");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {errors.email && <div>{errors.email}</div>}
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {errors.password && <div>{errors.password}</div>}

      <Button type="submit" style={{background:"red"}}></Button>
    </form>
  );
};

export default Form;
