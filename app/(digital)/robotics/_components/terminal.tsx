"use client";
import axios from "axios";
import { useState } from "react";
import confetti from "canvas-confetti";
import { BorderBeam } from "./border-beam";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Loading from "../../_components/loading";

const formSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters long")
    .regex(
      /^[a-zA-Z-\s]+$/,
      "Name must only contain letters, hyphens, and spaces"
    )
    .refine((val) => val.trim().length > 0, "Name cannot be only whitespace"),

  telephone: z
    .string()
    .regex(/^\d{10}$/, "Telephone must be exactly 10 digits"),

  age: z
    .string()
    .refine((val) => !isNaN(parseInt(val)), "Age must be a valid number")
    .refine((val) => parseInt(val) > 0, "Age must be a positive number"),

  guardian: z
    .string()
    .min(2, "Guardian name must be at least 2 characters long")
    .regex(
      /^[a-zA-Z-\s]+$/,
      "Guardian name must only contain letters, hyphens, and spaces"
    )
    .refine(
      (val) => val.trim().length > 0,
      "Guardian name cannot be only whitespace"
    ),

  guardianTel: z
    .string()
    .regex(/^\d{10}$/, "Guardian telephone must be exactly 10 digits"),
});

type FormData = z.infer<typeof formSchema>;

export interface UserData {
  name: string;
  telephone: string;
  age: string;
  guardian: string;
  guardianTel: string;
}
export default function Form() {
  const [isSubmitting, formIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    formIsSubmitting(true);

    try {
      await axios.post("https://wislaw-server-1.onrender.com/api/users", data);
      reset(); // Clear the form
      // Trigger confetti
      const duration = 5 * 1000;
      const animationEnd = Date.now() + duration;
      const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

      const randomInRange = (min: number, max: number) =>
        Math.random() * (max - min) + min;

      const interval = window.setInterval(() => {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
          return clearInterval(interval);
        }

        const particleCount = 50 * (timeLeft / duration);
        confetti({
          ...defaults,
          particleCount,
          origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        });
        confetti({
          ...defaults,
          particleCount,
          origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        });
      }, 250);
      formIsSubmitting(false);
    } catch (error) {
      console.error("Error saving user:", error);
      // Handle error (e.g., show error message to user)
    }
  };

  return (
    <div>
      <Card className="relative flex h-full w-full flex-col  overflow-hidden rounded-lg border bg-background md:shadow-xl">
        <BorderBeam size={250} duration={12} delay={9} />
        <CardHeader>
          <CardTitle className="text-center">Register</CardTitle>
          <CardDescription className="text-center">
            Fill the form to register for our robotics lessons
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit(onSubmit)}>
          <CardContent className="space-y-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                {...register("name")}
                placeholder="Enter your full name"
              />
              {errors.name && (
                <p className="text-red-500">{errors.name.message}</p>
              )}
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="age">Age</Label>
                <Input
                  id="age"
                  {...register("age")}
                  placeholder="Enter your age"
                />
                {errors.age && (
                  <p className="text-red-500">{errors.age.message}</p>
                )}
              </div>
              <div className="grid gap-2">
                <Label htmlFor="telephone">Telephone</Label>
                <Input
                  id="telephone"
                  {...register("telephone")}
                  placeholder="Enter your telephone"
                />
                {errors.telephone && (
                  <p className="text-red-500">{errors.telephone.message}</p>
                )}
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="guardian">Guardian Name</Label>
              <Input
                id="guardian"
                {...register("guardian")}
                placeholder="Enter your guardian's name"
              />
              {errors.guardian && (
                <p className="text-red-500">{errors.guardian.message}</p>
              )}
            </div>
            <div className="grid gap-2">
              <Label htmlFor="guardianTel">Guardian Telephone</Label>
              <Input
                id="guardianTel"
                {...register("guardianTel")}
                placeholder="Enter your guardian's telephone"
              />
              {errors.guardianTel && (
                <p className="text-red-500">{errors.guardianTel.message}</p>
              )}
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full">
              {isSubmitting ? <Loading /> : "Register"}
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
