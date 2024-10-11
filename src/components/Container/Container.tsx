import React from "react";
import customStyle from "./style.module.scss";

type BreakpointsType = {
  lg: 1280;
  xl: 1920;
  xxl: 2560;
};

interface ContainerProps {
  maxWidth?: keyof BreakpointsType;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

const Container: React.FC<ContainerProps> = ({
  maxWidth = "lg",
  children,
  style,
}) => {
  return (
    <div className={customStyle.containerBox} style={style}>
      {children}
    </div>
  );
};

export default Container;
