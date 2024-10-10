import React from "react";

import customStyle from "./style.module.scss";

interface AuthFrameProps {
  children: React.ReactNode;
}

const AuthFrame: React.FC<AuthFrameProps> = ({ children }): JSX.Element => {
  return (
    <div className={customStyle.container}>
      <div className={customStyle.content}>
        <div className={customStyle.children}>{children}</div>
      </div>
    </div>
  );
};

export default AuthFrame;
