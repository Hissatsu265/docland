import React from "react";

interface PopupProps {
  message: string;
  buttonText: string;
  onClose: () => void;
}

const Popup: React.FC<PopupProps> = ({ message, buttonText, onClose }) => {
  return (
    <div className="fixed inset-0  bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-[24px]  p-6 w-80 max-w-sm">
        <p className="text-center font-[600] text-lg font-semibold mb-8">
          {message}
        </p>
        <button
          onClick={onClose}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-[16px] hover:bg-blue-700 transition duration-200"
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default Popup;
