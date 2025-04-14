import React from "react";

interface SubmitButtonProps {
  label: string;
  onClick?: () => void;
  type?: "submit" | "button";
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ label, onClick, type = "submit" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="w-full mt-4 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded"
    >
      {label}
    </button>
  );
};

export default SubmitButton;
