import React from "react";
import {cookies} from "next/headers";

const Settings = () => {
  console.log("cookies :",cookies());
  return (
    <>
      <div>Settings Page</div>
    </>
  );
};

export default Settings;
