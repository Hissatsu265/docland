import logo from "@assets/logo/Docland.png";
import FormInput from "@components/FormInput";
import InputPassword from "@components/InputPassword";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
const Login: React.FC = (): JSX.Element => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<any>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  //function
  const onSubmit = (data: any) => {};

  const getUserID = (tokenString: string) => {};

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
      }}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img src={logo} className="w-162 h-auto object-cover"></img>
          <div className="border border-solid border-[#D9D9D9] rounded-[8px]  flex flex-col items-center justify-start p-[24px] gap-[24px]">
            <span className="firstTitle text-[#000000] mb-[45px] uppercase">
              Đăng nhập
            </span>
            <FormInput
              label="Email"
              {...register("email")}
              style={{ width: 414 }}
            />
            <InputPassword
              label="Password"
              {...register("password")}
              style={{ width: 414 }}
            />
            <button
              className="w-full  bg-[#2C2C2C] text-white rounded-[8px] flex items-center justify-center p-[12px] border border-solid border-[#2C2C2C] leading-[16px]"
              type="submit"
            >
              Đăng nhập
            </button>

            <div
              className="text-left w-full underline cursor-pointer"
              onClick={() => {}}
            >
              Quên mật khẩu?
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
