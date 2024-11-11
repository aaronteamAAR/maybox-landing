import React from "react";

const Aboutbody = () => {
  return (
    <>
      <section className="sect1">
        <div className="relative flex flex-col text-customOrangeDark items-center justify-center min-h-screen px-4">
          <div className="absolute bottom-10 left-4 md:bottom-28 md:left-8 z-10 bg-white p-4 md:p-16">
            <p className="font-normal pl-[4px] tracking-tight text-[15px] font-custom2">
              Unbox Your Glow Up
            </p>
            <p className="font-normal font-custom text-2xl md:text-5xl mb-4 md:mb-8">
              Our self-care sidekick is <br /> just a click away.
            </p>
            <a
              href="/"
              className="px-6 py-3 bg-[#FBA013] text-white font-custom2 hover:bg-[#E68A00] transition duration-300 inline-block sm:px-8 sm:py-4 w-full sm:w-auto text-center"
            >
              Join us today!
            </a>
          </div>
        </div>
      </section>

      <section className="flex justify-center mt-24  font-custom2 px-6 md:px-12">
        <div className="">
          <p className="mb-4 ">
            At MayBox, we started with a simple goal: to make beauty better for
            you.{" "}
          </p>
          <p className="mb-4">
            We know that the beauty world can feel overwhelming—too many
            choices, complicated routines, and impossible standards. That’s why
            we put you at the center. We want to help you feel your best, based
            on what makes you feel good.
          </p>
          <p>
            We focus on delivering products that actually work and that you'll
            love. And when your MayBox arrives each month, it’s not just a
            box—it’s a moment of joy, discovery, and a little time just for you.
          </p>
        </div>
      </section>

      <section className="mt-24 px-4">
        <div className="flex flex-col md:flex-row justify-center md:space-x-6">
          <div className="flex justify-center md:w-1/2">
            <img
              src="https://images.pexels.com/photos/5202461/pexels-photo-5202461.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Self-care image"
              className="w-full h-auto object-cover mt-12 rounded-lg"
            />
          </div>

          <div className="w-full md:w-1/3 px-4 mt-12 md:mt-12">
            <h2 className="font-medium text-customOrangeDark font-custom text-xl md:text-3xl mb-6">
              Self-Care, Made for You
            </h2>
            <p className="text-[15px] font-custom2">
              At Maybox, we’re passionate about inclusivity and individuality.
              Every box is made just for you—because your self-care journey is
              personal, and we’re here to support that. Oh, and did we mention?
              We’re all about local pride, currently delivering straight to Port
              Harcourt (with plans to expand soon!).
            </p>
          </div>
        </div>
      </section>

      <section className="mt-24 px-4">
        <div className="flex flex-col md:flex-row justify-center md:space-x-6">
          <div className="w-full md:w-1/3 px-4 mt-6 md:mt-12">
            <h2 className="font-medium text-customOrangeDark font-custom text-xl md:text-3xl mb-6">
              Sustainability
            </h2>
            <p className="text-[15px] font-custom2">
              To make it easy for you, our community, to work eco-friendly,
              sustainably-minded choices into your daily beauty and grooming
              routine. We’re focused on three areas: Reducing waste,
              Recyclability, Reusability.
            </p>
          </div>

          <div className="flex justify-center md:w-1/2">
            <img
              src="https://images.pexels.com/photos/3636512/pexels-photo-3636512.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Sustainability"
              className="w-full h-auto object-cover mt-6 md:mt-0 rounded-lg"
            />
          </div>
        </div>
      </section>

      <section className="mt-52 mb-32 px-4">
        <div className="flex flex-col md:flex-row justify-center md:space-x-6">
          <div className="flex justify-center md:w-1/2">
            <img
              src="https://images.pexels.com/photos/4909256/pexels-photo-4909256.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Empowering Individuals"
              className="w-full h-auto object-cover mt-12 rounded-lg"
            />
          </div>

          <div className="w-full md:w-1/3 px-4 mt-6 md:mt-12">
            <h2 className="font-medium text-customOrangeDark font-custom text-xl md:text-3xl mb-6">
              Empowering Individuals
            </h2>
            <p className="text-[15px] font-custom2">
              At Maybox, we're committed to celebrating and uplifting everyone
              in the beauty and wellness community—regardless of gender. We
              intentionally partner with brands founded by diverse creators,
              making it easy for our community to discover products that align
              with their values. Whether you're just starting your self-care
              journey or deepening it, Maybox is here to support your unique
              needs. Inclusivity is at the heart of everything we do, and we
              strive to create opportunities for all people to thrive.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Aboutbody;
