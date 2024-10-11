import React from "react";
import { useNavigate } from "react-router-dom";
import Container from "@src/components/Container/Container";
import Button from "@src/components/Button";

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/auth");
  };

  return (
    <Container>
      <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Welcome to DocLand</h1>
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
              <h2 className="text-2xl leading-6 font-medium text-gray-900">Home Page</h2>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">This is a simple home page for DocLand.</p>
            </div>
            <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
              <dl className="sm:divide-y sm:divide-gray-200">
                <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Feature 1</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">Description of feature 1</dd>
                </div>
                <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Feature 2</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">Description of feature 2</dd>
                </div>
                <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Feature 3</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">Description of feature 3</dd>
                </div>
              </dl>
            </div>
          </div>
          <div className="mt-8">
            <Button
              variant="secondary"
              className="w-full sm:w-auto"
              onClick={handleLogout}
            >
              Đăng xuất
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default HomePage;