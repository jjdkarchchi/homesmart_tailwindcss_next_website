import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [clicked, setClicked] = useState(false);
  // useEffect(() => setClicked(!clicked)[clicked]);
  return (
    <>
      {/* <div className="max-w-[2000px] mx-auto text-neutral-900 dark:text-neutral-200 bg-white dark:bg-neutral-800"> */}
      <nav className="mx-auto p-4 bg-amber-400">
        <div className="container  flex items-center justify-between">
          <a
            href="/"
            aria-label="go-to-home-page"
            className="focus:outline-none focus-visible:ring-4 ring-neutral-900 rounded-sm ring-offset-4 ring-offset-amber-400 lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:top-9 z-50 hover:opacity-75 transition-opacity"
          >
            <img
              src="./assets/logo.svg"
              width="200"
              className="w-48 md:w-64 lg:w-72"
              alt="home-smart-logo"
            />
          </a>
          <button
            id="menu"
            className="lg:hidden focus:outline-none focus-visible:ring-4 ring-neutral-900 rounded-sm ring-offset-4 ring-offset-amber-400 text-neutral-900 hover:text-neutral-600 transition-colors"
            onClick={() => setClicked(!clicked)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
          <div
            role="menubar"
            className={
              clicked
                ? "flex flex-col gap-4 absolute right-0 left-0 top-16 bg-amber-400 shadow-xl items-center text-center text-lg p-6 lg:flex lg:flex-row lg:static lg:shadow-none lg:justify-between lg:w-full z-40"
                : "hidden flex-col gap-4 absolute right-0 left-0 top-16 bg-amber-400 shadow-xl items-center text-center text-lg p-6 lg:flex lg:flex-row lg:static lg:shadow-none lg:justify-between lg:w-full"
            }
          >
            <a
              role="menuitem"
              href="/"
              className="py-1 px-6 dark:text-neutral-900 focus:outline-none focus-visible:ring-4 ring-neutral-900 rounded-sm ring-offset-4 ring-offset-amber-400 text-neutral-900 hover:text-neutral-600 transition-colors"
            >
              Home
            </a>
            <a
              role="menuitem"
              href="/"
              className="py-1 px-6 dark:text-neutral-900 focus:outline-none focus-visible:ring-4 ring-neutral-900 rounded-sm ring-offset-4 ring-offset-amber-400 text-neutral-900 hover:text-neutral-600 transition-colors lg:mr-auto"
            >
              Contact
            </a>
            <a
              role="menuitem"
              href="/"
              className="py-1 px-6 dark:text-neutral-900 focus:outline-none focus-visible:ring-4 ring-neutral-900 rounded-sm ring-offset-4 ring-offset-amber-400 text-neutral-900 hover:text-neutral-600 transition-colors"
            >
              LogIn
            </a>
            <a
              role="menuitem"
              href="/"
              className="py-2 px-6 bg-teal-900 text-white focus:outline-none focus-visible:ring-4 shadow-xl hover:shadow-none transition-shadow ring-neutral-900 rounded-md ring-offset-4 ring-offset-amber-400 hover:text-neutral-600"
            >
              SignUp
            </a>
          </div>
        </div>
      </nav>
      <header className="relative pt-16 md:pt-24 lg:pt-48">
        <div className="absolute inset-0 bottom-8 md:bottom-24 xl:bottom-32 -z-10 bg-gradient-to-b from-amber-400 to-amber-600"></div>
        <div className="container mx-auto grid grid-rows-1 place-items-end px-2">
          <img
            src="./assets/couch.png"
            className="row-start-1 row-end-2 col-start-1 col-end-2 mx-auto"
            alt="Couch"
          />
          <img
            src="./assets/app.svg"
            className="row-start-1 row-end-2 col-start-1 col-end-2 mx-auto w-40 sm:w-52 md:w-64 lg:w-72"
            alt="App"
          />
        </div>
      </header>
      <main className="grid gap-12 sm:gap-12 md:gap-24 lg:gap-32 px-8 overflow-hidden ">
        <a
          href="#"
          className="py-2 px-6 flex gap-2 mx-auto my-12 bg-amber-400 dark:text-neutral-900 focus:outline-none focus-visible:ring-4 shadow-xl  hover:shadow-none transition-shadow ring-neutral-900 rounded-md ring-offset-4 ring-offset-white hover:text-neutral-600 dark:ring-amber-400 dark:ring-offset-neutral-800"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
            />
          </svg>

          <span>Download The App</span>
        </a>

        <section aria-aria-labelledby="qualities" className="relative">
          <img
            src="./assets/dots.svg"
            className="hidden lg:block absolute top-1/2 -translate-y-1/2 -left-24 xl:left-7"
            alt="dots"
            aria-hidden="true"
          />
          <img
            src="./assets/dots.svg"
            className="hidden lg:block absolute top-1/2 -translate-y-1/2 -right-24 xl:right-7"
            alt="dots"
            aria-hidden="true"
          />
          <h2 id="qualities" className="sr-only">
            Our Qualities
          </h2>
          <div className="container mx-auto max-w-5xl flex gap-12 flex-wrap items-start justify-center md:justify-between">
            <div className="grid gap-4 justify-items-center text-center md:flex-1">
              <div className="rounded-full border-8 border-amber-400 p-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-14 h-14"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                  />
                </svg>
              </div>
              <h3 className="text-3xl font-bold">Safe</h3>
              <p>Our products are secure and private out-of-the-box</p>
            </div>
            <div className="grid gap-4 justify-items-center text-center md:flex-1">
              <div className="rounded-full border-8 border-amber-400 p-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  class="w-14 h-14"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                  />
                </svg>
              </div>
              <h3 className="text-3xl font-bold">Efficient</h3>
              <p>Our products are secure and private out-of-the-box</p>
            </div>
            <div className="grid gap-4 justify-items-center text-center md:flex-1">
              <div className="rounded-full border-8 border-amber-400 p-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  class="w-14 h-14"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                  />
                </svg>
              </div>
              <h3 className="text-3xl font-bold">Proven</h3>
              <p>Our products are secure and private out-of-the-box</p>
            </div>
          </div>
        </section>
        <section
          aria-labelledby="partners"
          className="text-center gird gap-8 place-items-center"
        >
          <div className="gird gap-4">
            <h2 id="partners" className="text-4xl font-bold text-amber-400">
              Our Partners
            </h2>
            <p className="w-full max-w-md mx-auto ">
              The quick brown fox jump over the lazy doggies head.The quick
              brown fox jump over the lazy doggies head.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-8 md:gap-x-16 max-w-2xl mx-auto">
            <div className="p-4 bg-white dark:bg-neutral-600 shadow-md dark:shadow-xl rounded-md">
              <img
                src="./assets/partner1.svg"
                alt="Partner"
                className="h-16 w-16"
              />
            </div>
            <div className="p-4 bg-white dark:bg-neutral-600 shadow-md dark:shadow-xl rounded-md">
              <img
                src="./assets/partner2.svg"
                alt="Partner"
                className="h-16 w-16"
              />
            </div>
            <div className="p-4 bg-white dark:bg-neutral-600 shadow-md dark:shadow-xl rounded-md">
              <img
                src="./assets/partner3.svg"
                alt="Partner"
                className="h-16 w-16"
              />
            </div>
            <div className="p-4 bg-white dark:bg-neutral-600 shadow-md dark:shadow-xl rounded-md">
              <img
                src="./assets/partner4.svg"
                alt="Partner"
                className="h-16 w-16"
              />
            </div>
            <div className="p-4 bg-white dark:bg-neutral-600 shadow-md dark:shadow-xl rounded-md">
              <img
                src="./assets/partner5.svg"
                alt="Partner"
                className="h-16 w-16"
              />
            </div>
            <div className="p-4 bg-white dark:bg-neutral-600 shadow-md dark:shadow-xl rounded-md">
              <img
                src="./assets/partner6.svg"
                alt="Partner"
                className="h-16 w-16"
              />
            </div>
            <div className="p-4 bg-white dark:bg-neutral-600 shadow-md dark:shadow-xl rounded-md">
              <img
                src="./assets/partner7.svg"
                alt="Partner"
                className="h-16 w-16"
              />
            </div>
          </div>
        </section>
        <section aria-labelledby="home" className="relative">
          <div className="flex flex-wrap-reverse gap-8 justify-center">
            <div className="flex gap-6 flex-wrap flex-col items-start lg:justify-center">
              <div className="flex flex-wrap flex-col items-start gap-2">
                <h2 className="text-4xl font-bold "> Relax,You are home</h2>
                <p className="max-w-md">
                  The quick brown fox jump over the lazy doggies head.The quick
                  brown fox jump over the lazy doggies head.
                </p>
              </div>

              <a
                href="#"
                className="py-2 px-6 flex gap-2 bg-amber-400 dark:text-neutral-900 focus:outline-none focus-visible:ring-4 shadow-xl  hover:shadow-none transition-shadow ring-neutral-900 rounded-md ring-offset-4 ring-offset-white hover:text-neutral-600 dark:ring-amber-400 dark:ring-offset-neutral-800"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                  />
                </svg>

                <span>Download The App</span>
              </a>
            </div>
            <img src="./assets/table.png" alt="Table" />
          </div>
          <div className="absolute -bottom-6 -right-32 -z-10 aspect-square md:border-8 border-amber-400 rounded-full md:w-64 lg:w-96 xl:max-w-lg"></div>
          <div className="bg-teal-900 h-24 xl:h-48 -mx-8 mt-12 xl:mt-0 xl:absolute w-screen -bottom-8 -z-10"></div>
        </section>
      </main>
      <section
        aria-labelledby="contact"
        className="container mx-auto px-8 overflow-hidden"
      >
        <div className="flex flex-wrap justify-center gap-12 md:gap-6 lg:gap-20">
          <div className="md:flex-1 md:max-w-sm relative">
            <img src="./assets/lamp.png" alt="Lamp" className="mx-auto" />
            <a
              href="#"
              className="py-2 px-6 flex gap-2 mx-auto w-max mt-12 md:mb-12 bg-amber-400 dark:text-neutral-900 focus:outline-none focus-visible:ring-4 shadow-xl  hover:shadow-none transition-shadow ring-neutral-900 rounded-md ring-offset-4 ring-offset-white hover:text-neutral-600 dark:ring-amber-400 dark:ring-offset-neutral-800"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                />
              </svg>

              <span>Download The App</span>
            </a>

            <img
              src="./assets/app.svg"
              alt="app"
              width="240"
              className="hidden md:block drop-shadow-xl mb-24 absolute left-1/2 -translate-x-1/2 max-w-16 xl:max-w-xs"
            />
          </div>
          <div className="absolute -bottom-18 left-1/2 -translate-x-1/2 -z-10 aspect-square md:border-8 border-amber-400 rounded-full md:w-72 lg:w-96"></div>
          {/* <div className="bg-teal-900 h-24 xl:h-48 -mx-8 mt-12 xl:mt-0 xl:absolute w-screen -bottom-8 -z-10"></div> */}
          <form className="relative border-8 border-neutral-900 p-6 rounded-lg grid gap-8 md:flex-1 md:max-w-lg my-4 md:my-12 lg:my-16 bg-white dark:bg-neutral-800 w-full">
            <h2 id="contact" className="text-3xl font-bold ">
              Let's Connect
            </h2>
            <div className="relative">
              <input
                type="text"
                id="name"
                className="peer form-input w-full border-4 border-amber-400 rounded-md focus:ring-4 dark:focus:ring-offset-2 focus:ring-amber-400  focus:border-amber-400 focus:outline-none dark:bg-amber-400 dark:text-neutral-900 placeholder-transparent"
                placeholder="YOUR NAME"
              />
              <label
                for="name"
                className=" text-neutral-500 text-sm font-bold uppercase absolute -top-4 left-2 -translate-y-1/2 transition-all peer-placeholder-shown:left-4 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-neutral-900 peer-focus:-top-4 peer-focus:left-2 peer-focus:text-neutral-600 dark:peer-focus:text-neutral-300"
              >
                Your Name
              </label>
            </div>
            <div className="relative">
              <input
                type="email"
                id="email"
                className="peer form-input w-full border-4 border-amber-400 rounded-md focus:ring-4 dark:focus:ring-offset-2 focus:ring-amber-400  focus:border-amber-400 focus:outline-none dark:bg-amber-400 dark:text-neutral-900 placeholder-transparent"
                placeholder="YOUR NAME"
              />
              <label
                for="email"
                className=" text-neutral-500 text-sm font-bold uppercase absolute -top-4 left-2 -translate-y-1/2 transition-all peer-placeholder-shown:left-4 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-neutral-900 peer-focus:-top-4 peer-focus:left-2 peer-focus:text-neutral-600 dark:peer-focus:text-neutral-300"
              >
                Your Email
              </label>
            </div>
            <div className="relative">
              <textarea
                name="content"
                id="content"
                cols="20"
                rows="5"
                className="peer resize-none form-textarea w-full border-4 border-amber-400 rounded-md focus:ring-4 dark:focus:ring-offset-2 focus:ring-amber-400  focus:border-amber-400 focus:outline-none dark:bg-amber-400 dark:text-neutral-900 placeholder-transparent"
                placeholder="HOW CAN WE HELP?"
              ></textarea>
              <label
                for="content"
                className=" text-neutral-500 text-sm font-bold uppercase absolute -top-3 left-2 -translate-y-1/2 transition-all peer-placeholder-shown:left-4 peer-placeholder-shown:top-6 peer-placeholder-shown:text-neutral-900 peer-focus:-top-4 peer-focus:left-2 peer-focus:text-neutral-600 dark:peer-focus:text-neutral-300"
              >
                HOW CAN WE HELP?
              </label>
            </div>
            <a
              role="menuitem"
              href="/"
              className="py-2 px-6 bg-neutral-900 text-white w-max focus:outline-none focus-visible:ring-4 shadow-xl hover:shadow-none transition-shadow ring-neutral-900 rounded-md ring-offset-4 ring-offset-white dark:ring-offset-amber-400 hover:text-neutral-600"
            >
              SignUp
            </a>
          </form>
        </div>
      </section>

      {/* </div> */}
    </>
  );
}
