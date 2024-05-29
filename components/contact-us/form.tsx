"use client";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Loader2 } from "lucide-react";

const ContactForm = () => {
  const { toast } = useToast();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");
  const [source, setSource] = useState("");
  const [formValid, setFormValid] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Check if form is valid
    if (name && email && phone) {
      // Send email
      const data = {
        name,
        email,
        message,
        phone,
        source,
      };

      if (navigator.onLine) {
        // Check if the user is online
        fetch("/api/send", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        })
          .then((res) => {
            if (!res.ok) {
              // Check if the response was successful
              throw new Error("Network response was not ok");
            }
            return res.json();
          })
          .then((data) => {
            console.log(data);
            setLoading(false);
            toast({
              title: "Success",
              description:
                "Thank you for contacting us, we would get back to you as soon as possible",
            });
          })
          .catch((err) => {
            console.log(err);
            toast({
              title: "Error",
              description: "There was a problem sending your message.",
            });
            setLoading(false);
          });
      } else {
        toast({
          title: "Error",
          description: "No internet connection.",
        });
        setLoading(false);
      }

      setFormValid(true);

      // Clear the form
      setName("");
      setEmail("");
      setMessage("");
      setPhone("");
      setSource("");
    }
  };

  const handleNameChange = (e: any) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e: any) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e: any) => {
    setMessage(e.target.value);
  };
  const handlePhoneChange = (e: any) => {
    setPhone(e.target.value);
  };

  const handleSourceChange = (e: any) => {
    setSource(e.target.value);
  };
  return (
    <>
      <form
        className="relative md:top-28 lg:top-0  text-black gap-5 flex flex-col 
                  mx-auto  "
        onSubmit={handleSubmit}
      >
        <input
          name="name"
          type="text"
          placeholder="name"
          maxLength={50}
          className="w-full bg-transparent p-2 border-[#1e352b] text-[#2d5242] dark:text-green-500 dark:border-gray-400 focus:outline-none  border border-opacity-30 rounded-sm text-sm"
          onChange={handleNameChange}
          value={name}
          required
        />

        <input
          name="email"
          type="email"
          placeholder="email"
          maxLength={50}
          className="w-full bg-transparent p-2 border-[#1e352b] text-[#2d5242] dark:text-green-500 focus:outline-none  dark:border-gray-400 border border-opacity-30 rounded-sm text-sm"
          onChange={handleEmailChange}
          value={email}
          required
        />

        <input
          name="phone"
          type="text"
          placeholder="phone"
          maxLength={50}
          className="w-full bg-transparent p-2 border-[#1e352b] text-[#2d5242] dark:text-green-500 focus:outline-none  dark:border-gray-400 border border-opacity-30 rounded-sm text-sm"
          onChange={handlePhoneChange}
          value={phone}
          required
        />

        <label htmlFor="source">{""}</label>
        <select
          name="source"
          id="source"
          value={source}
          onChange={handleSourceChange}
          required
          className="description_2 h-8"
        >
          <option value="-">How did you hear about us?</option>
          <option value="Social Media">Social media</option>
          <option value="Friend">Friend</option>
          <option value="Web">web</option>
        </select>

        <textarea
          name="message"
          className="bg-transparent w-full max-h-28 outline-none text-[#2d5242] dark:text-green-500 border-[#1e352b] dark:border-gray-400  border  rounded-sm border-opacity-30 resize-none flex-grow text-sm p-2"
          placeholder="type your message here"
          onChange={handleMessageChange}
          value={message}
          required
        />

        <button
          type="submit"
          className=" w-full lg:w-36 flex flex-row h-9 px-2 py-2 lg:px-2 bg-orange-600  font-semibold text-sm rounded-sm justify-center items-center  text-white hover:bg-orange-500"
          onClick={() => {
            email !== "" && phone && name !== "" && message !== ""
              ? setLoading(true)
              : null;
          }}
        >
          {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          {!loading ? "Send" : "Sending..."}
        </button>
      </form>
    </>
  );
};

export default ContactForm;
