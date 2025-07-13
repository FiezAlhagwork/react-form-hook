import type { InputFieldProps } from "../types";

const InputField = ({
  label,
  registration,
  error,
  ...props
}: InputFieldProps) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
      {label && <label>{label}</label>}
      <input {...registration} {...props} />
      {error && (
        <span style={{ color: "red", fontSize: "0.8rem" }}>
          {error.message}
        </span>
      )}
    </div>
  );
};

export default InputField;
