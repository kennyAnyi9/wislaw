"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Bird } from "lucide-react";
import { RegisteredUsers } from "../_components/user-table";
import { UserData } from "../robotics/_components/use-command";
import Loading from "../_components/loading";

const RegistersPage = () => {
  const [users, setUsers] = useState<UserData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          "https://wislaw-server-1.onrender.com/api/users"
        );
        setUsers(response.data);
        setError(null);
      } catch (error) {
        console.error("Error fetching users:", error);
        setError("Failed to fetch users. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading)
    return (
      <div className="min-h-screen flex justify-center items-center">
        <Loading />
      </div>
    );

  return (
    <div className="z-20 px-5 max-w-4xl mx-auto justify-center items-center min-h-screen flex flex-col">
      <h1 className="text-3xl lg:text-4xl font-bold mb-5 lg:mb-10 text-center">
        Registered Robotics Students
      </h1>

      {error ? (
        <p className="text-red-500">{error}</p>
      ) : users.length === 0 ? (
        <div
          className="text-muted-foreground/60 flex h-60 flex-col items-center justify-center gap-y-4"
          data-testid="empty-document-state"
        >
          <Bird className="h-12 w-12" strokeWidth={1.5} />

          <div className="text-center">
            <h3 className="text-lg font-semibold">We're all empty</h3>

            <p className="mt-2 max-w-[60ch]">
              There are no registered users yet. Check back later.
            </p>
          </div>
        </div>
      ) : (
        <RegisteredUsers users={users} />
      )}
    </div>
  );
};

export default RegistersPage;
