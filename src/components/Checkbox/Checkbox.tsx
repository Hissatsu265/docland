// CustomCheckbox.tsx
import React, { useState } from "react";

interface CustomCheckboxProps {
  label: string;
  labelStyle?: string; // Thêm thuộc tính để truyền style cho label
  onChange?: (checked: boolean) => void;
}

const CustomCheckbox: React.FC<CustomCheckboxProps> = ({
  label,
  labelStyle,
  onChange,
}) => {
  const [checked, setChecked] = useState<boolean>(false);

  const handleToggle = () => {
    const newChecked = !checked;
    setChecked(newChecked);
    if (onChange) {
      onChange(newChecked);
    }
  };

  return (
    <label className="flex items-center cursor-pointer">
      <div
        onClick={handleToggle}
        className={`h-5 w-5 border-2 border-blue-300 rounded transition-colors duration-200 flex items-center justify-center ${
          checked ? "bg-blue-600 border-transparent" : ""
        }`}
      >
        {checked && (
          <svg
            className="w-3 h-3 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="white"
            strokeWidth={3} // Thay đổi độ dày của đường vẽ
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 12l5 5L20 7"
            />
          </svg>
        )}
      </div>
      <span onClick={handleToggle} className={`ml-2 ${labelStyle}`}>
        {label}
      </span>
    </label>
  );
};

export default CustomCheckbox;
