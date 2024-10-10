import React from "react";
import customStyle from "./style.module.scss";

interface CustomFormInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  type?:
    | "text"
    | "password"
    | "email"
    | "number"
    | "date"
    | "time"
    | "file"
    | "month";
  message?: string | undefined;
  icons?: React.ReactNode;
}

const FormInput = React.forwardRef<HTMLInputElement, CustomFormInputProps>(
  ({ label, type, message, icons, ...props }, ref) => {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <label htmlFor="">{label}</label>
        <div className={customStyle.inputContainer}>
          <input
            type={type}
            className={`${customStyle.inputContent} formStyle`}
            ref={ref}
            {...props}
          />
          <div className={customStyle.iconContainer}>{icons}</div>
        </div>
        <span
          style={{
            color: "red",
            fontSize: "0.81rem",
            transition: "all 0.3s ease",
          }}
        >
          {message}
        </span>
      </div>
    );
  }
);
FormInput.displayName = "FormInput";
export default FormInput;
