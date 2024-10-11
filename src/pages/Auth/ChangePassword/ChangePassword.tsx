import logo from "@assets/logo/Docland.png";

import Button from "@src/components/Button";
import Container from "@src/components/Container/Container";
import InputPassword from "@src/components/InputPassword";
import Popup from "@src/components/Popup/Popup";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

const ChangePassword: React.FC = (): JSX.Element => {
  const [isOpen, setIsOpen] = React.useState(false);

  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<any>({
    defaultValues: {
      password: "",
      confirmPassword: "",
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
          <div className="border border-solid border-[#D9D9D9] rounded-[24px] flex flex-col items-center justify-start p-[24px] gap-[40px] shadow-md">
            <span className="firstTitle text-[#000000] text-2xl font-semibold mb-2">
              Đổi mật khẩu
            </span>

            <InputPassword
              label="Mật khẩu mới"
              {...register("password")}
              placeholder={"Nhập mật khẩu mới"}
              style={{ width: "400px" }}
            />
            <InputPassword
              label="Xác nhận mật khẩu mới"
              {...register("confirmPassword")}
              placeholder={"Nhập lại mật khẩu mới"}
              style={{ width: "400px" }}
            />

            <div className="w-full">
              <Button
                variant="primary"
                className="w-full h-12"
                textStyle="text-white text-[18px] font-[500]"
              >
                Đổi mật khẩu
              </Button>
              <Button
                variant="secondary"
                className="w-full h-12 mt-4 border-0"
                textStyle="text-[18px] font-[600]"
              >
                Huỷ bỏ
              </Button>
            </div>
          </div>
        </div>
      </form>
      {isOpen && (
        <Popup
          message="Đổi mật khẩu thành công"
          buttonText="Về màn hình đăng nhập"
          onClose={() => {}}
        ></Popup>
      )}
    </Container>
  );
};

export default ChangePassword;
