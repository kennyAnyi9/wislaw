import { useState } from "react";

export interface OutPut {
  command: string;
  result?: string[];
}

export default function useCommandHandler() {
  const [command, setCommand] = useState("");
  const [output, setOutput] = useState<OutPut[]>([]);
  const [step, setStep] = useState(0); // Step to track the registration process

  const handleCommandChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCommand(e.target.value.trim());
  };

  const superCommandHandler = (result: string[]) => {
    setOutput((prev) => [
      ...prev,
      {
        command,
        result,
      },
    ]);
    setCommand("");
  };

  const handleCommandSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    switch (step) {
      case 0:
        if (command.toLowerCase() === "register") {
          superCommandHandler(["Please enter your full name:"]);
          setStep(1);
        } else {
          superCommandHandler(["Wrong command! Please type 'register'."]);
        }
        break;
      case 1:
        superCommandHandler([
          `Hello ${command}, please enter your telephone number:`,
        ]);
        setStep(2);
        break;
      case 2:
        superCommandHandler([
          `Thank you! We have registered your telephone number: ${command}`,
        ]);
        setStep(0);
        break;
      default:
        superCommandHandler(["Invalid command. Please try again."]);
        break;
    }
  };

  return {
    command,
    output,
    handleCommandChange,
    handleCommandSubmit,
  };
}
