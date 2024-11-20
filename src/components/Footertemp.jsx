import React from "react";

/*
Created/Replicated the footer because of the Navigation, it changes because of the pages so I had to figure out a solution and
this Footer template is wired only to the About us page and Vendors
*/

export default function Footertemp() {
  return (
    <footer className="mb-8">
      <div className="mx-auto px-4 py-12">
        {/* Mobile Layout (centered) */}
        <div className="text-left  md:hidden flex flex-col items-center md:text-center space-y-8">
          <svg
            width="59"
            height="44"
            viewBox="0 0 59 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_493_35)">
              <path
                d="M0 43.673C0.00327382 29.295 11.689 17.642 25.9971 17.6454L25.9912 43.679L0 43.673Z"
                fill="#FFDCA7"
              />
              <path
                d="M0.37671 0C0.373886 12.4015 10.3761 22.4572 22.7173 22.46L26.3411 22.4608L26.3462 0.00597106L0.37671 0Z"
                fill="#FFDCA7"
              />
              <path
                d="M26.001 0.00597382L25.9911 43.679L34.8592 43.681L34.8691 0.0080113L26.001 0.00597382Z"
                fill="#FFDCA7"
              />
              <path
                d="M59 31.695C59 38.2849 53.6837 43.6271 47.1258 43.6271H33.7673V19.7628H47.1258C53.6837 19.7628 59 25.105 59 31.695Z"
                fill="#FBA013"
              />
              <path
                d="M54.9183 9.8814C54.9183 15.3387 50.5159 19.7628 45.0849 19.7628H33.7673V3.05176e-05L45.0849 3.15118e-05C50.5159 3.19889e-05 54.9183 4.42406 54.9183 9.8814Z"
                fill="#FBA013"
              />
            </g>
            <defs>
              <clipPath id="clip0_493_35">
                <rect width="59" height="44" fill="white" />
              </clipPath>
            </defs>
          </svg>

          <p className="text-[#000000] pt-16 pb-24 font-custom2 max-w-[280px] mx-auto md:mt-0">
            Take your self-care routine to the next level with a box full of
            beauty and wellness goodies, picked just for you. Get the latest
            must-haves delivered straight to your door, designed to match your
            vibe and keep you glowing.
          </p>
          <div className="mr-28">
            <h3 className="font-custom text-2xl mb-4">Helpful Links</h3>
            <nav className="space-y-3">
              <a href="/" className="block font-custom2 text-[#000000">
                Join Us
              </a>
              <a href="/#faqs" className="block font-custom2 text-[#000000">
                FAQs
              </a>
              <a href="/vendors" className="block font-custom2 text-[#000000">
                Benefits
              </a>
              <a href="/blogs" className="block py-2 font-custom2">Blog</a>
            </nav>
          </div>
        </div>

        {/* Desktop Layout (original) */}
        <div className="hidden md:grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <svg
              width="59"
              height="44"
              viewBox="0 0 59 44"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_493_35)">
                <path
                  d="M0 43.673C0.00327382 29.295 11.689 17.642 25.9971 17.6454L25.9912 43.679L0 43.673Z"
                  fill="#FFDCA7"
                />
                <path
                  d="M0.37671 0C0.373886 12.4015 10.3761 22.4572 22.7173 22.46L26.3411 22.4608L26.3462 0.00597106L0.37671 0Z"
                  fill="#FFDCA7"
                />
                <path
                  d="M26.001 0.00597382L25.9911 43.679L34.8592 43.681L34.8691 0.0080113L26.001 0.00597382Z"
                  fill="#FFDCA7"
                />
                <path
                  d="M59 31.695C59 38.2849 53.6837 43.6271 47.1258 43.6271H33.7673V19.7628H47.1258C53.6837 19.7628 59 25.105 59 31.695Z"
                  fill="#FBA013"
                />
                <path
                  d="M54.9183 9.8814C54.9183 15.3387 50.5159 19.7628 45.0849 19.7628H33.7673V3.05176e-05L45.0849 3.15118e-05C50.5159 3.19889e-05 54.9183 4.42406 54.9183 9.8814Z"
                  fill="#FBA013"
                />
              </g>
              <defs>
                <clipPath id="clip0_493_35">
                  <rect width="59" height="44" fill="white" />
                </clipPath>
              </defs>
            </svg>

            <p className="text-gray-600 font-custom2 max-w-md">
              Take your self-care routine to the next level with a box full of
              beauty and wellness goodies, picked just for you. Get the latest
              must-haves delivered straight to your door, designed to match your
              vibe and keep you glowing.
            </p>
          </div>

          {/* Links Section */}
          <div className="md:pl-8 relative md:left-60">
            <h3 className="font-custom text-2xl mb-4 mb-4">Helpful Links</h3>
            <nav className="space-y-3">
              <a
                href="/"
                className="block font-custom2 text-gray-600 hover:text-gray-900"
              >
                Join Us
              </a>
              <a
                href="/#faqs"
                className="block font-custom2 text-gray-600 hover:text-gray-900"
              >
                FAQs
              </a>
              <a
                href="/vendors"
                className="block font-custom2 text-gray-600 hover:text-gray-900"
              >
                Apply as a Vendor
              </a>
           
              <a href="/blogs" className="block py-2 font-custom2 px-3 text-gray-600 md:text-gray-600 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:bg-gray-100 md:p-0 hover-0  md:dark:hover:bg-transparent">Blog</a>
          
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
