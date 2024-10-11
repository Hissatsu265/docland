import logo from "@assets/logo/Docland.png";
import FormInput from "@components/FormInput";

import ZimbraIcon from "@assets/icon/Zimbra.png";
import InputPassword from "@components/InputPassword";
import Button from "@src/components/Button";
import CustomCheckbox from "@src/components/Checkbox";
import Container from "@src/components/Container/Container";
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
    // <div className="flex justify-center items-center w-full h-full mb-6">
    <Container style={{ paddingTop: "24px" }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col items-center">
          <img src={logo} className="w-[162px] h-auto object-cover mb-8"></img>
          <div className="border border-solid border-[#D9D9D9] rounded-[24px] flex flex-col items-center justify-start p-[24px] gap-[24px] shadow-md">
            <span className="firstTitle text-[#000000] text-2xl font-semibold">
              Đăng nhập
            </span>

            <FormInput
              label="Email"
              {...register("email")}
              placeholder={"Nhập email của bạn"}
              style={{ width: "400px" }}
            />

            <InputPassword
              label="Mật khẩu"
              {...register("password")}
              placeholder={"Nhập mật khẩu"}
              style={{ width: "400px" }}
            />

            {/* Checkbox và Quên mật khẩu */}
            <div className="flex items-center justify-between w-full ">
              <div className="flex items-center">
                <div className="inline-flex items-center">
                  <CustomCheckbox
                    labelStyle="text-black text-xs font-normal"
                    label=" Ghi nhớ cho lần đăng nhập tiếp theo"
                  ></CustomCheckbox>
                </div>
              </div>
              <a
                href="#"
                className="text-blue-600 hover:none font-semibold text-[14px] ml-auto"
              >
                Quên mật khẩu?
              </a>
            </div>

            <div className="w-full ">
              <Button
                variant="primary"
                className="w-full h-12"
                textStyle="text-white text-[18px] font-[500]"
              >
                Đăng nhập
              </Button>
              <Button
                variant="secondary"
                className="w-full h-12 mt-4 border-primary"
                icon={
                  <img
                    src={ZimbraIcon}
                    alt="Zimbra Icon"
                    className="w-[35px]"
                  />
                }
                textStyle="text-primary text-[18px] font-[600]"
              >
                Đăng nhập bằng Zimbra
              </Button>
            </div>
          </div>
        </div>
      </form>
    </Container>
  );
};

export default Login;
