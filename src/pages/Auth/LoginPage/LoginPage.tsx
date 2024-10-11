import logo from "@assets/logo/Docland.png";
import FormInput from "@components/FormInput";
import ZimbraIcon from "@assets/icon/Zimbra.png";
import InputPassword from "@components/InputPassword";
import Button from "@src/components/Button";
import CustomCheckbox from "@src/components/Checkbox";
import Container from "@src/components/Container/Container";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import PATH from "@routes/path";
import fetcherApi from "@src/apis/axiosClient";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "@src/constants";
import { setLocalStorage } from "@src/helpers";

const Login: React.FC = (): JSX.Element => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit } = useForm<any>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: { email: string; password: string }) => {
    setIsLoading(true);
    try {
      const response = await fetcherApi.post("http://127.0.0.1:5000/login", data);
      if (response.data && response.data.accessToken && response.data.refreshToken) {
        setLocalStorage(ACCESS_TOKEN, response.data.accessToken);
        setLocalStorage(REFRESH_TOKEN, response.data.refreshToken);
        // Thay đổi cách navigate
        navigate(PATH.HOME, { replace: true });
      } else {
        throw new Error("Invalid response from server");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Đăng nhập thất bại. Vui lòng kiểm tra lại email và mật khẩu.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container style={{ paddingTop: "24px" }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col items-center">
          <img src={logo} className="w-[162px] h-auto object-cover mb-8" alt="Logo" />
          <div className="border border-solid border-[#D9D9D9] rounded-[24px] flex flex-col items-center justify-start p-[24px] gap-[24px] shadow-md">
            <span className="firstTitle text-[#000000] text-2xl font-semibold">
              Đăng nhập
            </span>

            <FormInput
              label="Email"
              {...register("email", { required: true })}
              placeholder={"Nhập email của bạn"}
              style={{ width: "400px" }}
            />

            <InputPassword
              label="Mật khẩu"
              {...register("password", { required: true })}
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
                  />
                </div>
              </div>
              <Link
                to={`${PATH.AUTH}/${PATH.FORGET_PASSWORD}`}
                className="text-blue-600 hover:underline font-semibold text-[14px] ml-auto"
              >
                Quên mật khẩu?
              </Link>
            </div>

            <div className="w-full ">
              <Button
                variant="primary"
                className="w-full h-12"
                textStyle="text-white text-[18px] font-[500]"
              >
                {isLoading ? "Đang đăng nhập..." : "Đăng nhập"}
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
