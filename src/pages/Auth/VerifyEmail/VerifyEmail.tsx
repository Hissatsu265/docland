import logo from "@assets/logo/Docland.png";
import FormInput from "@components/FormInput";

import Button from "@src/components/Button";
import Container from "@src/components/Container/Container";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

const VerifyEmail: React.FC = (): JSX.Element => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<any>({
    defaultValues: {
      code: "",
    },
  });

  const onSubmit = (data: any) => {};

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
          <div className="border border-solid border-[#D9D9D9] rounded-[24px] flex flex-col items-center justify-start p-[24px] shadow-md">
            <span className="firstTitle text-[#000000] text-2xl font-semibold mb-12">
              Xác thực Email
            </span>

            <div className="">
              <div className="font-semibold text-lg mb-2 ">Mã xác thực</div>
              <div className="text-left text-base">
                Chúng tôi đã gửi mã xác thực qua email *********thd@gmail.com.
              </div>
              <div className="text-left text-base mb-2">
                Bạn vui lòng kiểm tra email và nhập mã bên dưới.
              </div>
              <FormInput
                {...register("code")}
                placeholder={"Nhập mã xác thực"}
                style={{ textAlign: "center" }}
              />
            </div>

            <div className="w-full mt-10 ">
              <Button
                variant="primary"
                className="w-full h-12"
                textStyle="text-white text-[18px] font-[500]"
              >
                Xác thực
              </Button>
              <Button
                variant="secondary"
                className="w-full h-12 mt-4 border-0"
                textStyle="text-[18px] font-[600]"
              >
                Gửi lại mã
              </Button>
            </div>
          </div>
        </div>
      </form>
    </Container>
  );
};

export default VerifyEmail;
