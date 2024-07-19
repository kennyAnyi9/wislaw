"use client";
import axios from "axios";
import { useState } from "react";

export interface OutPut {
  command: string;
  result?: string[];
}
export interface CommandHandlerReturn {
  initialPrompt: string;
  command: string;
  output: OutPut[];
  handleCommandChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleCommandSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  userData: UserData;
}
export interface UserData {
  name: string;
  telephone: string;
  age: string;
  guardian: string;
  guardianTel: string;
}

export default function useCommandHandler(): CommandHandlerReturn {
  const [name, setName] = useState("");
  const [telephone, setTelephone] = useState("");
  const [age, setAge] = useState("");
  const [guardian, setGuardian] = useState("");
  const [guardianTel, setGuardianTel] = useState("");
  const [command, setCommand] = useState("");
  const [output, setOutput] = useState<OutPut[]>([]);
  const [step, setStep] = useState(0); // Step to track the registration process

  const initialPrompt = `Type 'register' to begin.`;
  const clearTerminal = () => {
    setOutput([]);
    setStep(0);
    setCommand("");
  };

  const handleCommandChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCommand(e.target.value);
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

  const validateName = (name: string) => /^[a-zA-Z-]+$/.test(name);
  const validateAge = (age: string) => /^\d+$/.test(age);
  const validateTelephone = (telephone: string) => /^\d{10}$/.test(telephone);

  const handleCommandSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (command.toLowerCase() === "clear") {
      clearTerminal();
      return;
    }

    if (step === 0) {
      if (command.toLowerCase() === "register") {
        superCommandHandler(["Please enter your full name:"]);
        setStep(1);
      } else {
        superCommandHandler([
          "Please type 'register' or 'clear' to start over.",
        ]);
      }
    } else {
      switch (step) {
        case 1:
          if (validateName(command)) {
            setName(command);
            superCommandHandler(["Please enter your telephone number:"]);
            setStep(2);
          } else {
            superCommandHandler([
              "Invalid name! Please use only letters and hyphens.",
            ]);
          }
          break;
        case 2:
          if (validateTelephone(command)) {
            setTelephone(command);
            superCommandHandler(["Please enter your age:"]);
            setStep(3);
          } else {
            superCommandHandler([
              "Invalid telephone! Must be exactly 10 digits.",
            ]);
          }
          break;
        case 3:
          if (validateAge(command)) {
            setAge(command);
            superCommandHandler(["Please enter your guardian's name:"]);
            setStep(4);
          } else {
            superCommandHandler(["Invalid age! Please enter a valid number."]);
          }
          break;
        case 4:
          if (validateName(command)) {
            setGuardian(command);
            superCommandHandler([
              "Please enter your guardian's telephone number:",
            ]);
            setStep(5);
          } else {
            superCommandHandler([
              "Invalid name! Please use only letters and hyphens.",
            ]);
          }
          break;
        case 5:
          if (validateTelephone(command)) {
            setGuardianTel(command);

            const newUser: UserData = {
              name,
              telephone,
              age,
              guardian,
              guardianTel: command,
            };

            const saveUser = async () => {
              try {
                await axios.post(
                  "https://wislaw-server-1.onrender.com/api/users",
                  newUser
                );
                superCommandHandler([
                  `Registration complete! We have your details as:
            - Full Name: ${name}
            - Telephone: ${telephone}
            - Age: ${age}
            - Guardian: ${guardian}
            - Guardian's Telephone: ${command}`,
                ]);
                clearTerminal();
              } catch (error) {
                console.error("Error saving user:", error);
                superCommandHandler([
                  "An error occurred while saving the user.",
                ]);
              }
            };

            saveUser();
          } else {
            superCommandHandler([
              "Invalid telephone! Must be exactly 10 digits.",
            ]);
          }
          break;
        default:
          superCommandHandler(["Invalid command. Please try again."]);
          break;
      }
    }
  };

  // Exporting user data for rendering on another page
  const userData = {
    name,
    telephone,
    age,
    guardian,
    guardianTel,
  };

  return {
    initialPrompt,
    command,
    output,
    handleCommandChange,
    handleCommandSubmit,
    userData, // Exporting current user data
  };
}
