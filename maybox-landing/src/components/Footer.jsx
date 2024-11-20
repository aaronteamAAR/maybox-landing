import React from "react";
import NavbarSvg from "./NavbarSvg";

export default function Footer() {
  return (
    <footer className="">
      <div className="mx-auto px-4 py-12">
        {/* Mobile Layout (centered) */}
        <div className="text-left  md:hidden flex flex-col items-center md:text-center space-y-8">
         

          <NavbarSvg />
          <p className="text-[#000000] pt-16 pb-24 font-custom2 max-w-[280px] mx-auto md:mt-0">
            Take your self-care routine to the next level with a box full of
            beauty and wellness goodies, picked just for you. Get the latest
            must-haves delivered straight to your door, designed to match your
            vibe and keep you glowing.
          </p>
          <div className="mr-28">
            <h3 className="font-custom text-2xl mb-4">Helpful Links</h3>
            <nav className="space-y-3">
              <a href="#cta" className="block font-custom2 text-[#000000">
                Join Us
              </a>
              <a href="#faqs" className="block font-custom2 text-[#000000">
                FAQs
              </a>
              <a href="#benefits" className="block font-custom2 text-[#000000">
                Benefits
              </a>
            </nav>
          </div>
        </div>

        {/* Desktop Layout (original) */}
        <div className="hidden md:grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <NavbarSvg />

            <p className="text-gray-600 font-custom2 max-w-md">
              Take your self-care routine to the next level with a box full of
              beauty and wellness goodies, picked just for you. Get the latest
              must-haves delivered straight to your door, designed to match your
              vibe and keep you glowing.
            </p>
          </div>

          {/* Links Section */}
          <div className="md:pl-8 relative md:left-60">
            <h3 className="font-custom text-2xl mb-4">Helpful Links</h3>
            <nav className="space-y-3">
              <a
                href="#cta"
                className="block font-custom2 text-gray-600 hover:text-gray-900"
              >
                Join Us
              </a>
              <a
                href="#faqs"
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
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
