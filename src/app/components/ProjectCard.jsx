"use client";
import { cn } from "../utils/cn";
import React, { useState, useEffect } from "react";
import { EyeIcon } from "@heroicons/react/24/outline";
import Navbar from "./Navbar";
import Image from "next/image";
import proImg from "../../../public/images/profile_img.jpg";

const Modal = ({
  imgUrl,
  title,
  description,
  technologies,
  onClose,
  showModal,
}) => {
  return (
    <div
      id="popup-modal"
      className={`fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-50 transition-opacity ${
        showModal ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      style={{
        transitionDuration: "1.2s",
        transitionTimingFunction: "ease",
      }}
    >
      <div className="relative p-0 w-full max-w-[65rem] max-h-[80vh] bg-white rounded-lg shadow-lg flex flex-col">
        {/* Close button positioned top right */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white bg-gray-500 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-white font-medium rounded-lg text-sm px-4 py-2 transition-colors"
          type="button"
        >
          X
        </button>

        {/* Scrollable content */}
        <div className="overflow-y-auto pt-10 pb-4 px-2">
          <Image
            src={imgUrl}
            alt={title}
            className="w-full h-auto max-h-[350px] object-contain rounded"
            width={100}
            height={100}
          />

          <h2 className="text-xl font-bold my-4 text-black">{title}</h2>

          <div className="flex flex-col gap-4">
            <p className="text-black font-bold">
              Description:{" "}
              <span className="text-gray-600 font-normal">{description}</span>
            </p>

            <p className="font-bold">
              Technologies:{" "}
              <span className="text-gray-600 font-normal">
                {technologies.join(" , ")}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectCard = ({
  imgUrl,
  title,
  description,
  technologies,
  gitUrl,
  previewUrl,
}) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
      window.addEventListener("scroll", handleScroll);
    } else {
      document.body.style.overflow = "unset";
      window.removeEventListener("scroll", handleScroll);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [showModal]);

  const handleScroll = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <div className="max-w-lg w-full group/card">
        <div
          onClick={toggleModal}
          className={cn(
            "cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl max-w-sm mx-auto flex flex-col justify-between p-4"
          )}
        >
          <div className="relative w-full h-3/5">
            <Image
              src={imgUrl}
              alt={title}
              layout="fill"
              objectFit="cover"
              className="rounded-md"
            />
          </div>
          <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
          <div className="flex flex-row items-center space-x-4 z-10">
            <Image
              height="100"
              width="100"
              alt="Avatar"
              src={proImg}
              className="h-10 w-10 rounded-full border-2 object-cover"
            />
            <div className="flex flex-col">
              <p className="font-normal text-base text-gray-50 relative z-10">
                Nirmal
              </p>
              {/* <p className="text-sm text-gray-400">2 min read</p> */}
            </div>
          </div>
          <div className="text content">
            <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
              {title}
            </h1>
            {/* <p className="font-normal text-sm text-gray-50 relative z-10 my-4">
            Card with Author avatar, complete name and time to read - most
            suitable for blogs.
          </p> */}
          </div>
        </div>
      </div>
      {/* <div
        className="h-52 md:h-72 rounded-t-xl relative group object-contain xl:object-cover"
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover",backgroundRepeat: "round",width: "100%",height: "100"}}
      >
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 hover:transition-colors ">
      
          <button
            className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
            onClick={toggleModal}
          >
            <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
          </button>
        </div>
      </div>
      <div className="text-white rounded-b-xl mt-3 bg-[#181818] py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>

      </div> */}

      {showModal && (
        <>
          <Navbar showModal={showModal} />
          <Modal
            imgUrl={imgUrl}
            title={title}
            description={description}
            technologies={technologies}
            onClose={toggleModal}
            showModal={showModal}
          />
        </>
      )}
    </div>
  );
};

export default ProjectCard;
