"use client";
import { useState } from "react";

const ContactForm = () => {
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
      fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });

      setFormValid(true);

      // Clear the form
      setName("");
      setEmail("");
      setMessage("");
      setPhone("");
      setSource("");
    }

    console.log(name, email, message);
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
        className="relative min-h-screen lg:h-screen top-28 lg:top-20 w-11/12 md:w-4/5 text-black gap-5 flex flex-col 
                  mx-auto  "
        onSubmit={handleSubmit}
      >
        <h1 className="text-2xl md:text-5xl font-hanken font-bold lg:mt-20 ">
          Get in <span className="text-orange-500">touch</span>{" "}
        </h1>
        <h2 className="desctiptive__text">
          we would be happy to hear from you
        </h2>
        <input
          name="name"
          type="text"
          placeholder="name"
          maxLength={50}
          className="w-full bg-transparent p-2 border-[#1e352b] text-[#2d5242] dark:text-green-500 dark:border-gray-400 border border-opacity-30 rounded-sm text-sm"
          onChange={handleNameChange}
          value={name}
          required
        />

        <input
          name="email"
          type="email"
          placeholder="email"
          maxLength={50}
          className="w-full bg-transparent p-2 border-[#1e352b] text-[#2d5242] dark:text-green-500 dark:border-gray-400 border border-opacity-30 rounded-sm text-sm"
          onChange={handleEmailChange}
          value={email}
          required
        />

        <input
          name="phone"
          type="text"
          placeholder="phone"
          maxLength={50}
          className="w-full bg-transparent p-2 border-[#1e352b] text-[#2d5242] dark:text-green-500 dark:border-gray-400 border border-opacity-30 rounded-sm text-sm"
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
        />

        <button
          type="submit"
          className=" w-full lg:w-36 flex flex-row h-9 px-2 py-2 lg:px-2 bg-orange-600  font-semibold text-sm rounded-sm justify-center items-center  text-white hover:bg-orange-500"
          onClick={() => {
            email !== "" && phone && name !== "" ? setLoading(true) : null;
          }}
        >
          {!loading ? "Send message" : "Sending..."}
        </button>

        <section className="flex flex-col lg:flex-row gap-8 lg:gap-16 mt-5">
          <div className="flex flex-row gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            <h1 className="font-hanken">info@wislawedufund.org</h1>
          </div>
          <div className="flex flex-row gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>

            <h1 className="font-hanken">+233 506 20 1255</h1>
          </div>
        </section>
      </form>
    </>
  );
};

export default ContactForm;
