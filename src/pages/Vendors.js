import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbartemp from "../components/Navbartemp";
import Footertemp from "../components/Footertemp";
import toast, { Toaster } from "react-hot-toast";
import { createClient } from "@supabase/supabase-js";

// Supabase setup
const supabaseUrl = 'https://ofqdiiomchqesounleol.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9mcWRpaW9tY2hxZXNvdW5sZW9sIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzEwMDU1OTAsImV4cCI6MjA0NjU4MTU5MH0.oExzRDY4RMZe4aCXfiGzZy_jfoO5_oDE0YMeE_fXGjo';
const supabase = createClient(supabaseUrl, supabaseAnonKey);

const VendorForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    companyName: "",
    contactPerson: "",
    email: "",
    phone: "",
    website: "",
    productCategory: "",
    productDescription: "",
    partnershipInterest: [],
    additionalComments: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: name === 'partnershipInterest' ? [value] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const submissionPromise = new Promise(async (resolve, reject) => {
      try {
        const { data, error } = await supabase
          .from('vendors')
          .insert([
            {
              vendor_name: formData.companyName,
              contact: formData.contactPerson,
              email: formData.email,
              phone_number: formData.phone,
              website: formData.website,
              product_category: formData.productCategory,
              product_description: formData.productDescription,
              partnership_interest: formData.partnershipInterest,
              additional_comments: formData.additionalComments,
            }
          ]);

        if (error) throw error;

        console.log('Insertion successful:', data);
        resolve('Application submitted successfully!');
      } catch (error) {
        console.error('Error submitting form:', error);
        reject(error.message || 'Error submitting form, please try again.');
      }
    });

    toast.promise(submissionPromise, {
      loading: 'Submitting your application...',
      success: (message) => {
        setFormData({
          companyName: "",
          contactPerson: "",
          email: "",
          phone: "",
          website: "",
          productCategory: "",
          productDescription: "",
          partnershipInterest: [],
          additionalComments: "",
        });
        setTimeout(() => navigate("/vendorfeedback"), 1000);
        return message;
        // called the success page when registering is succesful here
      },
      error: (error) => `Error: ${error}`,
    });
  };

  return (
    <>
      <Navbartemp />
      <section className="bg-white rounded-0 md:ml-0 ml-1 pt-3 mt-3 md:rounded-2xl font-neueEinstellung">
        <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
          <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
            <div className="max-w-xl mt-8 lg:max-w-3xl">
              <h1 className="mt-6 text-2xl font-custom font-bold text-gray-900 sm:text-3xl md:text-4xl">
                Vendors Application
              </h1>

              <p className="mt-4 leading-relaxed font-custom2 text-gray-500">
                At Maybox, we're passionate about delivering curated beauty
                experiences. We're always looking for exciting brands to
                collaborate with and bring more value to our customers.
              </p>

              <form onSubmit={handleSubmit} className="mt-8 grid grid-cols-6 gap-6">
                <Toaster position="top-center" reverseOrder={false} />
                
                <div className="col-span-6">
                  <label
                    htmlFor="companyName"
                    className="font-custom2 block text-sm font-medium text-gray-700"
                  >
                    Company/Brand/Vendor Name (Required)
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    required
                    className="mt-1 w-full rounded-md border border-black bg-white text-sm text-gray-700 p-2"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="contactPerson"
                    className="block font-custom2 text-sm font-medium text-gray-700"
                  >
                    Contact Person (Required)
                  </label>
                  <input
                    type="text"
                    id="contactPerson"
                    name="contactPerson"
                    value={formData.contactPerson}
                    onChange={handleChange}
                    required
                    className="mt-1 w-full rounded-md border border-black bg-white text-sm text-gray-700 p-2"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="email"
                    className="block font-custom2 text-sm font-medium text-gray-700"
                  >
                    Email Address (Required)
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-1 w-full rounded-md border border-black bg-white text-sm text-gray-700 p-2"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="phone"
                    className="block font-custom2 text-sm font-medium text-gray-700"
                  >
                    Phone Number (Optional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="mt-1 w-full rounded-md border border-black bg-white text-sm text-gray-700 p-2"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="website"
                    className="block font-custom2 text-sm font-medium text-gray-700"
                  >
                    Website or Social Media Links (Opt)
                  </label>
                  <input
                    type="url"
                    id="website"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    className="mt-1 w-full rounded-md border border-black bg-white text-sm text-gray-700  p-2"
                  />
                </div>

                <div className="col-span-6">
                  <label
                    htmlFor="productCategory"
                    className="block font-custom2 text-sm font-medium text-gray-700"
                  >
                    Product Category (Required)
                  </label>
                  <select
                    id="productCategory"
                    name="productCategory"
                    value={formData.productCategory}
                    onChange={handleChange}
                    required
                    className="mt-1 w-full rounded-md border border-black bg-white text-sm text-gray-700 p-2"
                  >
                    <option value="">Select Category</option>
                    <option value="Skin care">Skin care</option>
                    <option value="Hair care">Hair care</option>
                    <option value="Make up">Make up</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="col-span-6">
                  <label
                    htmlFor="productDescription"
                    className="block font-custom2 text-sm font-medium text-gray-700"
                  >
                    Product Description (Required)
                  </label>
                  <textarea
                    id="productDescription"
                    name="productDescription"
                    value={formData.productDescription}
                    onChange={handleChange}
                    required
                    className="mt-1 w-full rounded-md border border-black bg-white text-sm text-gray-700 p-2"
                  ></textarea>
                </div>

                <div className="col-span-6">
                  <label
                    htmlFor="partnershipInterest"
                    className="block font-custom2 text-sm font-medium text-gray-700"
                  >
                    Partnership Interest (Required)
                  </label>
                  <select
                    id="partnershipInterest"
                    name="partnershipInterest"
                    value={formData.partnershipInterest[0] || ""}
                    onChange={handleChange}
                    required
                    className="mt-1 w-full rounded-md border border-black bg-white text-sm text-gray-700  p-2"
                  >
                    <option value="">Select Interest</option>
                    <option value="Product Inclusion">Product Inclusion</option>
                    <option value="Sponsored Promotion">Sponsored Promotion</option>
                    <option value="Exclusive Collaboration">Exclusive Collaboration</option>
                  </select>
                </div>

                <div className="col-span-6">
                  <label
                    htmlFor="additionalComments"
                    className="block font-custom2 text-sm font-medium text-gray-700"
                  >
                    Additional Comments or Questions (Optional)
                  </label>
                  <textarea
                    id="additionalComments"
                    name="additionalComments"
                    value={formData.additionalComments}
                    onChange={handleChange}
                    className="mt-1 w-full rounded-md border border-black bg-white text-sm text-gray-700  p-2"
                  ></textarea>
                </div>

                <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                  <button
                    type="submit"
                    className="inline-block shrink-0 font-custom2 rounded-md border bg-[#FBA013] px-12 py-3 text-sm font-medium text-white transition hover:text-white focus:outline-none focus:ring active:text-blue-500"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </main>
        </div>
      </section>
      <Footertemp />
    </>
  );
};

export default VendorForm;