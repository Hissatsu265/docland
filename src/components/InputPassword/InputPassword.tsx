import React from "react";
// import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import customStyle from "./style.module.scss";

interface CustomFormInputPasswordProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  type?: "text" | "password";
  message?: string;
}

const InputPassword = React.forwardRef<
  HTMLInputElement,
  CustomFormInputPasswordProps
>(({ label, type, message, ...props }, ref) => {
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <label className={customStyle.labelStyle} htmlFor="">
        {label}
      </label>
      <div className={customStyle.inputContainer}>
        <input
          type={showPassword ? "text" : "password"}
          className={`${customStyle.inputContent} formStyle`}
          ref={ref}
          {...props}
        />
        {/* {showPassword ? (
          <IoMdEye
            className={customStyle.iconContainer}
            onClick={() => setShowPassword(!showPassword)}
          />
        ) : (
          <IoMdEyeOff
            className={customStyle.iconContainer}
            onClick={() => setShowPassword(!showPassword)}
          />
        )} */}
      </div>
      <span style={{ color: "red", fontSize: "0.81rem" }}>{message}</span>
    </div>
  );
});

export default InputPassword;
