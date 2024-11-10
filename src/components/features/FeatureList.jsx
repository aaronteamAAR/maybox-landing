import React from 'react'
import '../../assets/styles/svg.css'

export default function FeatureList() {
  return (
    <section className="relative md:left-20" id="steps">
   <div className="pt-40 pb-10 text-center md:text-left">
  <h2 className="pb-3 font-custom text-4xl md:text-3xl text-[#1E1E1E]">
    Steps
  </h2>
  <p className="text-[#6C6C6C] font-custom2 text-2xl md:text-2xl">
    How it works
  </p>
</div>


    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 relative md:right-10">
      <div className="flex flex-col items-center justify-center p-6">
        <div className="bg-[#FBA013] w-16 h-16 rounded-full py-2 px-6 ">
          <svg
            width="50"
            height="50"
            className="relative right-4"
            viewBox="0 0 69 69"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M30.729 30.7288C29.725 31.7275 29.1582 33.0837 29.153 34.4998C29.153 35.9179 29.7164 37.2779 30.7191 38.2807C31.7219 39.2835 33.0819 39.8468 34.5 39.8468C35.9161 39.8416 37.2723 39.2748 38.271 38.2708"
              stroke="white"
              stroke-width="3.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M34.5 18.459C31.3274 18.459 28.226 19.3998 25.5881 21.1624C22.9502 22.925 20.8941 25.4302 19.68 28.3613C18.4659 31.2925 18.1483 34.5178 18.7672 37.6294C19.3862 40.7411 20.9139 43.5993 23.1573 45.8427C25.4007 48.086 28.2589 49.6138 31.3705 50.2327C34.4822 50.8517 37.7075 50.534 40.6386 49.3199C43.5697 48.1058 46.075 46.0498 47.8376 43.4119C49.6002 40.7739 50.541 37.6726 50.541 34.5"
              stroke="white"
              stroke-width="3.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M34.5 7.76489C29.2123 7.76489 24.0434 9.33287 19.6468 12.2705C15.2503 15.2082 11.8236 19.3837 9.80011 24.2688C7.7766 29.154 7.24716 34.5295 8.27873 39.7156C9.31031 44.9017 11.8566 49.6654 15.5955 53.4043C19.3345 57.1433 24.0982 59.6896 29.2843 60.7211C34.4703 61.7527 39.8459 61.2233 44.731 59.1998C49.6162 57.1763 53.7916 53.7496 56.7293 49.353C59.667 44.9565 61.235 39.7875 61.235 34.4999M44.4201 24.5826L37.1735 31.8264"
              stroke="white"
              stroke-width="3.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M59.659 17.1756L50.541 18.4589L51.8243 9.34083C51.8337 9.23493 51.8113 9.12862 51.76 9.03549C51.7087 8.94236 51.6308 8.86664 51.5362 8.818C51.4417 8.76937 51.3348 8.75003 51.2292 8.76245C51.1236 8.77487 51.0241 8.8185 50.9434 8.88775L44.8985 14.9017C44.2776 15.5271 43.8209 16.2962 43.5691 17.1407C43.3172 17.9852 43.2779 18.8788 43.4548 19.7421L44.4173 24.5826L49.2577 25.5422C50.121 25.7191 51.0147 25.6799 51.8591 25.428C52.7036 25.1761 53.4728 24.7194 54.0982 24.0985L60.1093 18.0564C60.1788 17.9756 60.2225 17.8758 60.2349 17.7699C60.2473 17.664 60.2277 17.5568 60.1787 17.4621C60.1297 17.3674 60.0535 17.2896 59.9599 17.2385C59.8663 17.1875 59.7595 17.1655 59.6534 17.1756"
              stroke="white"
              stroke-width="3.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>

        <h3 className="font-custom text-2xl text-[#1E1E1E] mb-2 pt-3">
          Share
        </h3>
        <p className="text-[#6C6C6C] font-custom2 text-sm text-center">
          Answer a few questions to help us <br /> match you with the
          right products <br /> for your skin, hair, and style.
        </p>
      </div>

      <div className="flex flex-col items-center justify-center p-6">
        <div className="bg-[#9C5FFB] w-16 h-16 rounded-full py-2 px-6">
          <svg
            width="42"
            className="relative right-3 top-1"
            height="42"
            viewBox="0 0 53 54"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.4595 20.6392L21.8854 24.5607C23.3041 25.3118 24.8893 25.7057 26.5 25.7074M14.4595 20.6392L3.84282 15.0374C4.74848 13.5723 6.03516 12.3695 7.56969 11.5587L21.8826 4.00169C23.3025 3.25164 24.8888 2.85913 26.5 2.85913C28.1112 2.85913 29.6974 3.25164 31.1174 4.00169L38.5321 7.91494M14.4595 20.6392L38.1775 8.11569L38.5349 7.92319M26.5 25.7074C28.1113 25.707 29.6976 25.314 31.1174 24.5634L49.1571 15.0374M26.5 25.7074V51.1422C28.1113 51.1418 29.6976 50.7488 31.1174 49.9982L45.4303 42.4412C46.9879 41.6184 48.2898 40.3949 49.1973 38.9009C50.1048 37.4069 50.5839 35.6985 50.5837 33.9574V20.0424C50.5837 18.2759 50.0902 16.5461 49.1571 15.0374M3.84282 15.0319C2.91126 16.5401 2.41872 18.2716 2.41907 20.0369V33.9547C2.41856 35.6954 2.89729 37.4037 3.80429 38.8977C4.7113 40.3916 6.01262 41.6153 7.56969 42.4384L21.8826 49.9954C23.3019 50.7479 24.8882 51.1428 26.5 51.1449M49.1571 15.0374C48.2515 13.5723 46.9648 12.3695 45.4303 11.5587L38.5349 7.91769"
              stroke="white"
              stroke-width="4.5"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <h3 className="font-custom text-2xl text-[#1E1E1E] mb-2 pt-3">
          Choose
        </h3>
        <p className="text-[#6C6C6C] font-custom2 text-sm text-center">
          Choose the products you want, or <br /> let us build a box
          that's tailored <br /> just for you.
        </p>
      </div>
      <div className="flex flex-col items-center justify-center p-6">
        <div className="bg-[#80F651] w-16 h-16 rounded-full py-2 px-6">
          <svg
            width="40"
            className="relative right-3"
            height="40"
            viewBox="0 0 46 51"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M43.2 48V23.25C43.2 12.0664 34.2847 3 23.2875 3C12.2903 3 3.375 12.0664 3.375 23.25V48"
              stroke="black"
              stroke-width="5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M23.2875 46.875C29.3973 46.875 34.35 36.8017 34.35 24.375H12.225C12.225 36.8017 17.1777 46.875 23.2875 46.875Z"
              stroke="black"
              stroke-width="5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <h3 className="font-custom text-2xl text-[#1E1E1E] mb-2 pt-3">
          Discover
        </h3>
        <p className="text-[#6C6C6C] font-custom2 text-sm text-center">
          Try new products each month, find <br /> your favorites in our
          Shop, and be <br /> effortlessly you.
        </p>
      </div>
    </div>
  </section>
  )
}
