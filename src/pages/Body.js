import React from 'react'
import HeroSection from '../components/HeroSection'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import FeatureCards from '../components/features/FeatureCards'
import FeatureList from '../components/features/FeatureList'
import BenfitsList from '../components/features/BenfitsList'
import FAQ from '../components/Faq'
import SignUp from '../components/SignUp'

export default function Body() {
  return (
    <div className=" mx-auto px-4 md:w-[1024px]">
    <Navbar />
    <HeroSection />
    <div className="mt-20 md:mt-40 px-4 md:px-0">
            <p className="text-[#6C6C6C] text-sm font-custom2 md:text-[21px]">Did you know?</p>
            <p className="mt-2 text-[20px] font-meduim font-custom leading-[32px]  md:text-2xl">
              Consumers are increasingly demanding{" "}
              <span className="text-[#FBA013]">
                eco-friendly and sustainable beauty{" "}
                <br className="hidden md:block" /> products.
              </span>{" "}
              Technology is playing a crucial role in developing innovative,{" "}
              <br className="hidden md:block" /> sustainable formulations and
              packaging solutions.
            </p>
          </div>
     <section className="relative">
          <div>
            <div className="pt-40 pb-10">
              <h2 className="pb-3 font-custom text-3xl text-[#1E1E1E]">
                Benefits
              </h2>
              <p className="text-[#6C6C6C] font-custom2">
                Feel balanced, Help you <br /> look your best{" "}
              </p>
            </div>
            <FeatureCards />
          </div>
        </section>
        <FeatureList />
        <BenfitsList />
        <FAQ />
        <SignUp />
    <Footer />
    </div>
  )
}
