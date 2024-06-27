"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import { motion } from "framer-motion";
import { sendEmail } from "../actions/actions";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const containerVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "tween",
      ease: "easeOut",
      duration: 0.5,
    },
  },
};
export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isLoading, setIsLoading] = useState(false);
  const [sentStatus, setSentStatus] = useState("");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors: FormErrors = {};
    try {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!formData.name) validationErrors.name = "Name is required";
      if (!formData.email) {
        validationErrors.email = "Email is required";
      } else if (!emailRegex.test(formData.email)) {
        validationErrors.email = "Invalid email address";
      }
      if (!formData.subject) validationErrors.subject = "Subject is required";
      if (!formData.message) validationErrors.message = "Message is required";

      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
      } else {
        // Submit form logic here
        console.log("Form submitted", formData);
        setErrors({});
        setIsLoading(true);
        const response = await sendEmail(formData);
        if (response.status === 200) {
          setSentStatus("We have received your message. Thank you!");
        } else if (response.status === 500) {
          setSentStatus("Oops! Something went wrong. Please try again later.");
        }
      }
    } catch (error) {
      console.log("Error:", error);
      setSentStatus("Oops! Something went wrong. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.form
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      onSubmit={handleSubmit}
      className="mt-4 flex w-full max-w-lg flex-col gap-3 font-inter font-extralight"
    >
      <div>
        <motion.h1
          className="font-cormorantGaramond text-4xl text-alternative"
          variants={itemVariants}
        >
          Contact Us
        </motion.h1>
        <motion.p
          className="font-cormorantGaramond text-lg"
          variants={itemVariants}
        >
          Got any questions for us? We&apos;d love to hear from you!
        </motion.p>
      </div>

      <motion.div variants={itemVariants} className="space-y-1">
        <label>Name</label>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          className="formInput"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <p className="text-red-500">{errors.name}</p>}
      </motion.div>
      <motion.div variants={itemVariants} className="space-y-1">
        <label>Email</label>
        <input
          type="text"
          name="email"
          placeholder="Email Address"
          className="formInput"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <p className="text-red-500">{errors.email}</p>}
      </motion.div>
      <motion.div variants={itemVariants} className="space-y-1">
        <label>Subject</label>
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          className="formInput"
          value={formData.subject}
          onChange={handleChange}
        />
        {errors.subject && <p className="text-red-500">{errors.subject}</p>}
      </motion.div>
      <motion.div variants={itemVariants} className="space-y-1">
        <label>Message</label>
        <textarea
          name="message"
          placeholder="Your Message"
          className="formInput max-h-[20rem] min-h-[6rem]"
          value={formData.message}
          onChange={handleChange}
        />
        {errors.message && <p className="text-red-500">{errors.message}</p>}
      </motion.div>
      {sentStatus && !isLoading && (
        <motion.p
          variants={itemVariants}
          className="text-center text-sm text-gray-500"
        >
          {sentStatus}
        </motion.p>
      )}
      <motion.button
        variants={itemVariants}
        type="submit"
        className="mt-3 w-full bg-alternative px-4 py-2 font-light text-white transition-colors hover:bg-alternative/90"
      >
        {isLoading ? "Sending..." : "Send Message"}
      </motion.button>
    </motion.form>
  );
}
