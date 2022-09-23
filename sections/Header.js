// /* eslint-disable @next/next/link-passhref */
/* eslint-disable @next/next/no-img-element */
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { Disclosure, Popover } from "@headlessui/react";
import { FaAngleDown } from "react-icons/fa";
import { RiMenu5Fill } from "react-icons/ri";
import { motion, useScroll, useSpring } from "framer-motion";

import { HiX } from "react-icons/hi";
import { MdLockOutline } from "react-icons/md";
import { BsMoonStarsFill, BsSunFill } from "react-icons/bs";
import Link from "next/link";

const Header = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Change nav color on scroll
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeColor);
  }, []);

  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const navigations = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
  ];
  const renderThemeChanger = () => {
    if (!mounted) return null;

    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <div
          className="rounded-full border-none cursor-pointer"
          onClick={() => setTheme("light")}
        >
          <BsSunFill className="text-3xl" />
        </div>
      );
    } else {
      return (
        <div
          className="rounded-full border-none cursor-pointer"
          onClick={() => setTheme("dark")}
        >
          <BsMoonStarsFill className="text-3xl" />
        </div>
      );
    }
  };

  return (
    <>
      <div className="container mx-auto">
        <motion.div
          className="progress-bar h-1 sticky top-0 z-50 bg-pinkDark"
          style={{ scaleX }}
        />
        <header
          className={
            color
              ? "flex sticky z-50 top-0 text-black dark:text-white marker: transition duration-75 ease-in-out items-center rounded-b-2xl justify-between bg-white dark:bg-darkGray shadow-lg h-16 md:h-20 px-5 md:px-10 py-1 md:py-4"
              : "flex sticky z-50 top-0 text-textColor transition duration-75 ease-in-out items-center justify-between bg-white dark:bg-darkGray h-16 md:h-20 px-5 md:px-10 py-1 md:py-4"
          }
        >
          <div
            data-aos="zoom-in-down"
            data-aos-duration="300"
            className="flex justify-center items-center cursor-pointer"
          >
            <h2 className="text-4xl text-textColor">LAPAAS</h2>
          </div>
          <div className="hidden md:block justify-center items-center space-x-5">
            <button className="flex bg-textColor rounded-full p-2 text-primaryLight text-xl justify-center items-center gap-3">
              <div>
                {isOpen ? (
                  <HiX
                    className="text-3xl"
                    onClick={() => setIsOpen(!isOpen)}
                  />
                ) : (
                  <RiMenu5Fill
                    className="text-3xl"
                    onClick={() => setIsOpen(!isOpen)}
                  />
                )}
              </div>
            </button>
          </div>
          {/* Burger icon standard */}
          <div className="flex md:hidden gap-4">
            <button className="flex bg-textColor rounded-full p-2 text-primaryLight text-xl justify-center items-center gap-3">
              <div>
                {isOpen ? (
                  <HiX
                    className="text-2xl"
                    onClick={() => setIsOpen(!isOpen)}
                  />
                ) : (
                  <RiMenu5Fill
                    className="text-2xl"
                    onClick={() => setIsOpen(!isOpen)}
                  />
                )}
              </div>
            </button>
          </div>
        </header>
        <div className="h-1 w-full bg-textColor dark:bg-pink mx-auto"></div>
      </div>
      {/* :MOBILE MENU */}
      {isOpen && (
        <div className="backdrop-blur-md z-50 flex m-auto py-5 items-center fixed inset-0 h-full w-full">
          <div className="mx-auto p-8 md:p-20 h-full flex-col flex justify-evenly items-center gap-5 w-11/12 rounded bg-textColor relative ">
            <button className="flex top-4 right-2 absolute bg-primaryLight rounded-full p-2 text-textColor text-xl justify-center items-center gap-3">
              <div>
                {isOpen ? (
                  <HiX
                    className="text-3xl"
                    onClick={() => setIsOpen(!isOpen)}
                  />
                ) : (
                  <RiMenu5Fill
                    className="text-3xl"
                    onClick={() => setIsOpen(!isOpen)}
                  />
                )}
              </div>
            </button>
            <div>
              <h2 className="text-5xl text-white">LAPAAS</h2>
            </div>
            <div className="space-y-5">
              <Link href={"/"}>
                <h2 className="bg-primaryLight cursor-pointer text-xl md:text-2xl transition duration-300 ease-in-out p-3 rounded hover:scale-105">
                  Home
                </h2>
              </Link>
              <Link href={"/services"}>
                <h2 className="bg-primaryLight cursor-pointer text-xl md:text-2xl transition duration-300 ease-in-out p-3 rounded hover:scale-105">
                  Services
                </h2>
              </Link>
              <Link href={"/consultancy"}>
                <h2 className="bg-primaryLight cursor-pointer text-xl md:text-2xl transition duration-300 ease-in-out p-3 rounded hover:scale-105">
                  Consultancy
                </h2>
              </Link>
              <h2 className="bg-primaryLight cursor-pointer text-xl md:text-2xl transition duration-300 ease-in-out p-3 rounded hover:scale-105">
                Devlopment
              </h2>
              <h2 className="bg-primaryLight cursor-pointer text-xl md:text-2xl transition duration-300 ease-in-out p-3 rounded hover:scale-105">
                Consultant
              </h2>
              <Link href={"/course"}>
                <h2 className="bg-primaryLight cursor-pointer text-xl md:text-2xl transition duration-300 ease-in-out p-3 rounded hover:scale-105">
                  Course
                </h2>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
