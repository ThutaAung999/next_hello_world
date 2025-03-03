"use client";

import { useFormStatus } from "react-dom";

const CustomButton = ({label}:{label:string}) => {
  const { pending } = useFormStatus();
  return (
    <button
      className="border border-green-600 p-2  rounded-md block mt-2 disabled:border-gray-300 disabled:text-gray-300"
      disabled={pending}
    >
      {label || "Submit"}
    </button>
  );
};

export default CustomButton;
