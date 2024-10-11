import React from "react";

interface ButtonProps {
  variant: "primary" | "secondary";
  children: React.ReactNode;
  icon?: React.ReactNode;
  onClick?: () => void;
  className?: string;
  textStyle?: string; // Thuộc tính để truyền style cho nội dung
}

const Button: React.FC<ButtonProps> = ({
  variant,
  children,
  icon,
  onClick,
  className = "",
  textStyle = "", // Mặc định là chuỗi rỗng
}) => {
  const baseClasses =
    "flex items-center justify-center px-4 py-2 rounded-[16px] transition-colors duration-300 ease-in-out";

  const variantClasses = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50",
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      onClick={onClick}
    >
      {icon && <span className="mr-2">{icon}</span>}
      <span className={textStyle}>{children}</span>
    </button>
  );
};

export default Button;
