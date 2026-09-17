"use client";

import logo from "../public/images/Airbnb_Logo_Bélo.svg.png";

export default function Navbar() {
  return (
    <header className="w-full border-b border-gray-200 bg-white">
      <div
        className="
          mx-auto
          flex
          h-16
          max-w-[1760px]
          items-center
          justify-between
          px-4
          sm:h-20
          sm:px-6
          lg:px-10
        "
      >
        <a
          href="/"
          className="flex shrink-0 items-center"
          aria-label="Airbnb home"
        >
          <img
            src={logo.src}
            alt="Airbnb"
            className="
              h-6
              w-auto
              object-contain
              sm:h-7
              lg:h-8
            "
          />
        </a>
        <div
          className="
    hidden
    items-stretch
    ml-5
    rounded-full
    border
    border-gray-300
    text-sm
    shadow-sm
    transition-shadow
    hover:shadow-md
    sm:flex
  "
        >
          {/* Anywhere */}
          <button
            type="button"
            className="
      flex
      items-center
      gap-2
      rounded-l-full
      pl-5
      pr-4
      py-3
      font-semibold
      transition
      hover:bg-gray-50
    "
          >
            <span className="flex h-6 w-6 shrink-0 items-center justify-center overflow-hidden rounded-full">
              <img
                src="/images/anywhere.jpg"
                alt=""
                aria-hidden="true"
                className="h-8 w-8 object-cover"
              />
            </span>
            <span>Anywhere</span>
          </button>

          {/* Divider */}
          <div className="flex items-center py-2.5">
            <div className="h-6 w-px bg-gray-300" />
          </div>

          {/* Anytime */}
          <button
            type="button"
            className="
      px-5
      py-3
      font-semibold
      transition
      hover:bg-gray-50
    "
          >
            Anytime
          </button>

          {/* Divider */}
          <div className="flex items-center py-2.5">
            <div className="h-6 w-px bg-gray-300" />
          </div>

          {/* Add guests */}
          <button
            type="button"
            className="
      flex
      items-center
      gap-3
      rounded-r-full
      py-2
      pl-5
      pr-2
      text-gray-500
      transition
      hover:bg-gray-50
    "
          >
            <span className="whitespace-nowrap font-medium">Add guests</span>

            <span
              className="
        flex
        h-9
        w-9
        shrink-0
        items-center
        justify-center
        rounded-full
        bg-airbnbRed
        text-white
      "
            >
              <svg
                viewBox="0 0 16 16"
                className="h-4 w-4 fill-current"
                aria-hidden="true"
              >
                <path d="M6.5 0a6.5 6.5 0 104.475 11.229l3.9 3.9a1 1 0 001.414-1.414l-3.9-3.9A6.5 6.5 0 006.5 0zM2 6.5a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0z" />
              </svg>
            </span>
          </button>
        </div>
        <button
          type="button"
          className="
            mx-3
            flex
            min-w-0
            flex-1
            items-center
            gap-3
            rounded-full
            border
            border-gray-300
            px-3
            py-2
            shadow-sm
            transition
            hover:shadow-md
            sm:hidden
          "
        >
          <svg
            viewBox="0 0 24 24"
            className="h-4 w-4 shrink-0"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            <circle cx="11" cy="11" r="7" />
            <path d="M16.5 16.5L21 21" />
          </svg>

          <div className="min-w-0 text-left">
            <p className="truncate text-xs font-semibold">Where to?</p>
            <p className="truncate text-[11px] text-gray-500">
              Anywhere · Anytime · Add guests
            </p>
          </div>
        </button>
        <div className="flex shrink-0 items-center gap-1 sm:gap-2 lg:gap-4">
          <a
            href="#"
            className="
              hidden
              rounded-full
              px-3
              py-2
              text-sm
              font-semibold
              transition
              hover:bg-gray-100
              lg:inline-flex
            "
          >
            Become a host
          </a>
          <button
            type="button"
            className="
              hidden
              rounded-full
              p-2
              transition
              hover:bg-gray-100
              sm:flex
            "
            aria-label="Language"
          >
            <svg viewBox="0 0 16 16" className="h-4 w-4" aria-hidden="true">
              <path
                fill="currentColor"
                d="M8 0a8 8 0 100 16A8 8 0 008 0zM1.5 8c0-.3.02-.6.05-.9h3.02c-.05.6-.07 1.2-.07.9s.02.3.07.9H1.55A6.4 6.4 0 011.5 8zm1.05 2.4h2.7c.2.9.5 1.7.9 2.4a6.5 6.5 0 01-3.6-2.4zm0-4.8a6.5 6.5 0 013.6-2.4c-.4.7-.7 1.5-.9 2.4h-2.7zM8 14.5c-.6 0-1.4-1.1-1.8-3h3.6c-.4 1.9-1.2 3-1.8 3zM6 8c0-.3.02-.6.05-.9h3.9c.03.3.05.6.05.9s-.02.3-.05.9h-3.9A6.4 6.4 0 016 8zm.2-2.4c.4-1.9 1.2-3 1.8-3s1.4 1.1 1.8 3H6.2zm5.35 0c-.2-.9-.5-1.7-.9-2.4a6.5 6.5 0 013.6 2.4h-2.7zm0 6.8c.4-.7.7-1.5.9-2.4h2.7a6.5 6.5 0 01-3.6 2.4zm1.15-4c.05-.3.07-.6.07-.9s-.02-.6-.07-.9h3.02c.03.3.05.6.05.9s-.02.3-.05.9h-3.02z"
              />
            </svg>
          </button>

          {/* Menu + Profile */}
          <button
            type="button"
            className="
              flex
              items-center
              gap-2
              rounded-full
              border
              border-gray-300
              py-1
              pl-2
              pr-1
              transition
              hover:shadow-md
              sm:gap-3
              sm:pl-3
            "
            aria-label="Menu"
          >
            {/* Hamburger */}
            <svg viewBox="0 0 16 16" className="h-4 w-4" aria-hidden="true">
              <path
                fill="currentColor"
                d="M0 2h16v1.5H0zM0 7.25h16v1.5H0zM0 12.5h16V14H0z"
              />
            </svg>
            <span
              className="
                flex
                h-7
                w-7
                items-center
                justify-center
                rounded-full
                bg-gray-500
                text-white
                sm:h-8
                sm:w-8
              "
            >
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4 fill-current sm:h-5 sm:w-5"
                aria-hidden="true"
              >
                <path d="M12 12a5 5 0 100-10 5 5 0 000 10zm0 2c-4.4 0-9 2.2-9 5v1h18v-1c0-2.8-4.6-5-9-5z" />
              </svg>
            </span>
          </button>
        </div>
      </div>
      <div
        className="
          flex
          items-center
          justify-center
          gap-2
          border-t
          border-gray-100
          px-4
          py-2
          sm:hidden
        "
      >
        <button
          type="button"
          className="
            rounded-full
            border
            border-gray-300
            px-3
            py-1.5
            text-xs
            font-medium
          "
        >
          Anywhere
        </button>

        <button
          type="button"
          className="
            rounded-full
            border
            border-gray-300
            px-3
            py-1.5
            text-xs
            font-medium
          "
        >
          Anytime
        </button>

        <button
          type="button"
          className="
            rounded-full
            border
            border-gray-300
            px-3
            py-1.5
            text-xs
            font-medium
          "
        >
          Guests
        </button>
      </div>
    </header>
  );
}
