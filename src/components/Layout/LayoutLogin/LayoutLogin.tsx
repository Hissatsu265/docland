import AuthFrame from "@src/components/AuthFrame";
import React from "react";
import { Outlet } from "react-router-dom";

const LayoutLogin: React.FC = (): JSX.Element => {
  return <AuthFrame><Outlet /></AuthFrame>;
};

export default LayoutLogin;
