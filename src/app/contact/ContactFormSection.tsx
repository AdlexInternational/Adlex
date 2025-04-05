"use client";
import React, { useCallback, useState } from "react";
import { BiSolidPhoneCall } from "react-icons/bi";
import { IoMailSharp } from "react-icons/io5";
import { FaMapMarkerAlt } from "react-icons/fa";
import Link from "next/link";
import { BsFacebook, BsInstagram, BsWhatsapp } from "react-icons/bs";
import Input from "@/components/inputs/Input";
import Checkbox from "@/components/inputs/Checkbox";
import Textarea from "@/components/inputs/Textarea";

interface Props {}
const socialLinks = [
  {
    label: "facebook",
    icon: <BsFacebook />,
    link: "https://facebook.com",
  },
  {
    label: "instagram",
    icon: <BsInstagram />,
    link: "https://instagram.com",
  },
  {
    label: "whatsapp",
    icon: <BsWhatsapp />,
    link: "https://wa.me/",
  },
];

export const SocialLinks = () => {
  return (
    <ul className="flex items-center gap-4">
      {socialLinks.map((platform) => {
        return (
          <li key={platform.label}>
            <Link
              href={platform.link}
              target="_blank"
              className="p-2 bg-orange-gradient block rounded-full text-green-600"
            >
              {platform.icon}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

const inquiryTypes = [
  "General Inquiry",
  "Package Inquiry",
  "Destination Inquiry",
  "Company Inquiry",
];

let initialData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  inquiry: ["general"] as string[],
  subject: "", // Add subject to the initial data
  message: "",
};

function ContactFormSection(props: Props) {
  const {} = props;
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    inquiry: ["general"] as string[],
    subject: "", // Add subject to the form state
    message: "", // Ensure message is properly initialized
  });
  const [error, setError] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false); // Track form submission state
  const [submitMessage, setSubmitMessage] = useState(""); // Success or error message

  const handleChangeInput = useCallback(
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, id } = event.target as HTMLInputElement;
      const checked = (event.target as HTMLInputElement).checked;

      if (name === "inquiry") {
        setForm((prevForm) => {
          const updatedInquiry = checked
            ? [...prevForm.inquiry, id] // Add if checked
            : prevForm.inquiry.filter((item) => item !== id); // Remove if unchecked

          return {
            ...prevForm,
            inquiry: updatedInquiry, // Store as an array
          };
        });
      } else {
        setForm((prevForm) => ({
          ...prevForm,
          [name]: event.target.value,
        }));
      }

      setError((prevError) => ({
        ...prevError,
        [name]: "",
      }));
    },
    []
  );

  const handleSubjectChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, checked } = event.target;

    setForm((prevForm) => {
      const updatedInquiry = checked
        ? [...prevForm.inquiry, id] // Add to array if checked
        : prevForm.inquiry.filter((item) => item !== id); // Remove if unchecked

      return { ...prevForm, inquiry: updatedInquiry };
    });
  };

  // const validateForm = () => {
  //   const newError: any = {};
  //   if (!form.firstName) {
  //     newError.firstName = "First name is required.";
  //   }
  //   if (!form.email) {
  //     newError.email = "Email is required.";
  //   } else if (!/\S+@\S+\.\S+/.test(form.email)) {
  //     newError.email = "Email address is invalid.";
  //   }
  //   if (!form.phone) {
  //     newError.phone = "Phone number is required.";
  //   }
  //   setError(newError);
  //   return Object.keys(newError).length === 0; // Returns true if no errors
  // };

  const handleSubmit = useCallback(
    async (event: React.FormEvent) => {
      event.preventDefault();

      // if (!validateForm()) return;

      const mailTo = `https://mail.google.com/mail/?view=cm&fs=1&to=info@arowlexpaperwaste.com&su=${encodeURIComponent(
        form.subject || "New Inquiry"
      )}&body=${encodeURIComponent(
        `Name: ${form.firstName} ${form.lastName}\nEmail: ${form.email}\nPhone: ${form.phone}\nMessage:\n${form.message}`
      )}`;

      window.open(mailTo, "_blank");

      setForm(initialData);
    },
    [form]
  );

  return (
    <div className="relative w-full min-h-screen">
      {/* Map Background */}
      <div className="absolute inset-0 z-0">
        <iframe
          className="w-full h-full grayscale"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3480.2782838791904!2d77.72671621137528!3d29.27415727521771!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390c13d573e53c67%3A0xf170c4cc81423bbf!2sArolex%20Pharmaceuticals%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1743848202546!5m2!1sen!2sin"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-6">
        <div className="bg-white rounded-lg shadow-lg grid lg:grid-cols-2 w-full max-w-6xl overflow-hidden">
          {/* Left Green Box */}
          <div className="bg-[#003d29] text-white p-8 space-y-4">
            <h2 className="text-2xl font-semibold">Contact Us</h2>
            <ul className="space-y-4">
              <li className="flex gap-3 items-start">
                <FaMapMarkerAlt className="mt-1" />
                <span>
                  Villa 198, Street 26, Khalifa City A, Abu Dhabi, UAE
                </span>
              </li>
              <li className="flex gap-3 items-start">
                <FaMapMarkerAlt className="mt-1" />
                <span>
                  R11, Turquoise 7, Mamsha Al Saadiyat, Abu Dhabi, UAE
                </span>
              </li>
              <li className="flex gap-3 items-start">
                <FaMapMarkerAlt className="mt-1" />
                <span>
                  Daytona House, Exit 8 DKC Veterinary Clinic, Motor City -
                  Dubai
                </span>
              </li>
              <li className="flex gap-3 items-start">
                <IoMailSharp className="mt-1" />
                <span>info@arowlexpaperwaste.com</span>
              </li>
              <li className="flex gap-3 items-start">
                <BiSolidPhoneCall className="mt-1" />
                <span>0012 3456 789</span>
              </li>
            </ul>
          </div>

          {/* Right Form Box */}
          <div className="p-8">
            <h2 className="text-2xl font-semibold mb-2">Send A Message</h2>
            <p className="text-sm text-gray-600 mb-6">
              At vero eos et accusamus et iusto odio dignissimos ducimus
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                id="first_name"
                label="Your Name"
                onChange={handleChangeInput}
                name="firstName"
                value={form.firstName}
                error={{ message: error.firstName }}
              />
              <Input
                id="email"
                label="Your Email"
                onChange={handleChangeInput}
                name="email"
                value={form.email}
                error={{ message: error.email }}
              />
              <Input
                id="phone"
                label="Your Phone Number"
                onChange={handleChangeInput}
                name="phone"
                value={form.phone}
                error={{ message: error.phone }}
              />
              <Textarea
                id="message"
                label="Message"
                placeholder="Type your message..."
                onChange={handleChangeInput}
                name="message"
                value={form.message}
                error={{ message: error.message }}
              />

              <div className="flex items-center justify-between">
                {/* <div className="border p-2 flex items-center gap-2">
                  <input type="checkbox" id="recaptcha" />
                  <label htmlFor="recaptcha">I'm not a robot</label>
                </div> */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-[#003d29] text-white px-6 py-2 rounded hover:bg-green-800 transition"
                >
                  Submit
                </button>
              </div>
              {submitMessage && (
                <p
                  className={`text-sm ${
                    submitMessage.includes("successfully")
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {submitMessage}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactFormSection;
