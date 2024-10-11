import React, { CSSProperties } from "react";

interface HeaderProps {
  style?: CSSProperties;
  className?: string;
}

const LoginHeader: React.FC<HeaderProps> = ({ style, className }) => {
  
  return (
    <div
      className={`border-b-[4px] border-solid border-[#D9D9D9] h-[133px] ${className}`}
      style={style}

    >
      <div className="flex justify-start items-center gap-[25px] p-3 ">
        <div className=" rounded-[50%] bg-yellow-600 w-[96px] h-[96px] flex justify-center items-center"></div>
        <div className="firstTitle">This is title</div>
      </div>
    </div>
  );
};

export default LoginHeader;
