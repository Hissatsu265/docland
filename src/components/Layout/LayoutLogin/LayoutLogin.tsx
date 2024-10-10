import AuthFrame from "@src/components/AuthFrame";
import React from "react";
import { Outlet, useNavigate } from "react-router";

const LayoutLogin: React.FC = (): JSX.Element => {
  const navigate = useNavigate();

  return <AuthFrame children={<Outlet />} />;
};

export default LayoutLogin;
