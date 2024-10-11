import logo from "@assets/logo/Docland.png";
import FormInput from "@components/FormInput";

import Button from "@src/components/Button";
import Container from "@src/components/Container/Container";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

const ForgetPassword: React.FC = (): JSX.Element => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<any>({
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (data: any) => {
    const email = data.email; // Get the email from the form data
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email && emailPattern.test(email)) {
      navigate("/auth/verify-email");
    } else {
      alert("Vui lòng nhập email hợp lệ.");
    }
  };

  return (
    <Container
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "0 20px",
      }}
    >
      <form style={{ margin: "auto" }} onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col items-center justify-center">
          <img src={logo} className="w-[162px] h-auto object-cover mb-8"></img>
          <div className="border border-solid border-[#D9D9D9] rounded-[24px] flex flex-col items-center justify-start p-[24px] gap-[24px] shadow-md">
            <span className="firstTitle text-[#000000] text-2xl font-semibold">
              Quên mật khẩu
            </span>

            <FormInput
              label="Email"
              {...register("email")}
              placeholder={"Nhập email của bạn"}
              style={{ width: "400px" }}
            />

            <div className="w-full mt-4">
              <Button
                variant="primary"
                className="w-full h-12"
                textStyle="text-white text-[18px] font-[500]"
                type="submit" 
              >
                Lấy mã
              </Button>
              <Button
                variant="secondary"
                className="w-full h-12 mt-4 border-0"
                textStyle="text-[18px] font-[600]"
                onClick={() => navigate("/auth")}
              >
                Huỷ bỏ
              </Button>
            </div>
          </div>
        </div>
      </form>
    </Container>
  );
};

export default ForgetPassword;
