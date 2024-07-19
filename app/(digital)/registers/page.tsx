"use client";
import React from "react";
import { RegisteredUsers } from "../_components/user-table";
import useCommandHandler, {
  CommandHandlerReturn,
} from "../robotics/_components/use-command";

const RegistersPage = () => {
  const { users }: CommandHandlerReturn = useCommandHandler();

  return (
    <div className="max-w-4xl mx-auto flex justify-center items-center min-h-screen ">
      <RegisteredUsers users={users} />
    </div>
  );
};

export default RegistersPage;
