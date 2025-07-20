"use client";
import React, { useRef, useState } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";
import { HoverBorderGradientDemo } from "./HoverBorderGradientDemo";
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const formRef = useRef(null);

  setTimeout(() => {
    if (emailSubmitted) {
      setEmailSubmitted(false);
    }
  }, 5000);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };

    var templateParams = {
      user_name: e.target.name.value,
      user_email: data.email,
      subject: data.subject,
      message: data.message,
    };

    emailjs
      .send("service_s3wf9kk", "template_6kin9uu", templateParams, {
        publicKey: "XSch4Im3fFEIO9vEp",
      })
      .then(
        (response) => {
          if (response.status == 200) {
            toast.success("You did it!");
            setEmailSubmitted(true);
            formRef.current.reset();
          }
        },
        (err) => {
          console.log("FAILED...", err);
        }
      );
  };

  return (
    <section
      id="contacts"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="absolute bottom-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-52 w-80 z-0 blur-lg top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>

      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">
          Let&apos;s Connect
        </h5>

        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          If you&apos;re interested in hiring me, feel free to explore my resume and
          profile. I&apos;m always open to exciting opportunities and would be happy
          to connect.
        </p>

        <div className="socials flex flex-row gap-2">
          <Link
            href="https://github.com/Nirmaljyts"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>

          <Link
            href="https://www.linkedin.com/in/nirmal-jyothis-benny"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
        </div>
      </div>

      <div className="h-full">
        <form ref={formRef} className="flex flex-col" onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-white block mb-2 text-sm font-medium"
            >
              Your email <span className="text-red-600">*</span>
            </label>

            <input
              name="email"
              type="email"
              title="email"
              id="email"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="jacob@google.com"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="subject"
              className="text-white block text-sm mb-2 font-medium"
            >
              Subject <span className="text-red-600">*</span>
            </label>

            <input
              name="subject"
              type="text"
              id="subject"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Just saying hi"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white block text-sm mb-2 font-medium"
            >
              Message <span className="text-red-600">*</span>
            </label>

            <textarea
              name="message"
              id="message"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Let&apos;s talk about..."
              required
            />
          </div>

          <div className="w-full float-right flex items-end justify-end">
            <button type="submit" className="font-medium py-2.5 px- rounded-lg">
              <HoverBorderGradientDemo text={"Sent Message"} />
            </button>
          </div>
        </form>

        {emailSubmitted && (
          <p className="text-blue-500 text-sm">Email sent successfully!</p>
        )}
      </div>
    </section>
  );
};

export default EmailSection;
