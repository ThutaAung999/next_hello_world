"use client";

import { useFormStatus } from "react-dom";

const CustomButton = ({ label }: { label: string }) => {
  const { pending } = useFormStatus();
  return (
    <button
      className="border-2 border-blue-600 p-2  
      rounded-md block mt-2 text-white bg-blue-600
      disabled:bg-transparent disabled:text-gray-300 
    text-sm font-medium"
      disabled={pending}
    >
      {label || "Submit"}
    </button>
  );
};

export default CustomButton;
