import React, { useState, useEffect, useRef } from 'react'
import { createClient, SupabaseClient } from '@supabase/supabase-js'
import toast, { Toaster, ToastBar } from 'react-hot-toast';
import '../assets/styles/toast.css'


const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseKey = process.env.REACT_APP_SUPABASE_KEY;

let supabase = null

try {
  supabase = createClient(supabaseUrl, supabaseKey)
} catch (error) {
  console.error('Error initializing Supabase client:', error)
}

export default function SignUp() {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  let isMounted = true;

  const inputRef = useRef(null);  

 
  const scrollToInput = () => {
    if (inputRef.current) {
      inputRef.current.scrollIntoView({
        behavior: 'smooth', 
        block: 'center', 
      });
    }}

    useEffect(() => {
      return () => {
        isMounted.current = false;
      };
    }, []);

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
  
    if (!email) {
      toast.error('Please enter an email address')
      setIsSubmitting(false)
      return
    }
  
    if (!supabase) {
      toast.error('Unable to connect to the database. Please try again later.')
      setIsSubmitting(false)
      return
    }
  
    try {
      // Check if the email already exists
      const { data: existingEmails, error: checkError } = await supabase
        .from('emails')
        .select('email')
        .eq('email', email)
  
      if (checkError) {
        console.error('Error checking existing email:', checkError)
        toast.error('An error occurred. Please try again.')
        setIsSubmitting(false)
        return
      }
  
      if (existingEmails && existingEmails.length > 0) {
        toast.error('This email is already on the waitlist.')
        setIsSubmitting(false)
        return
      }
  

      const { data, error } = await supabase
        .from('emails')
        .insert([{ email: email }])
        .select()
  
      if (error) {
        console.error('Supabase error:', error)
        toast.error('An error occurred while submitting your email. Please try again.')
        throw error
      }
  
      if (data) {
        console.log('Inserted data:', data)
        toast.success('Thank you for joining our waitlist!')
        setEmail('')
      }
    } catch (error) {
      console.error('Error inserting email:', error)
      toast.error('An error occurred while submitting your email. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }
  

  return (
    <div className="relative md:static  w-screen md:w-auto left-[50%] md:left-0 right-[50%] md:right-0 -mx-[50vw] md:mx-0">
      <Toaster position='top-center'>
  {(t) => (
    <ToastBar toast={t}>
      {({ icon, message }) => (
        <>
          {t.type === 'success' ? '🔥' : icon}
          {message}
          {t.type !== 'loading' && (
            <button onClick={() => toast.dismiss(t.id)}>X</button>
          )}
        </>
      )}
    </ToastBar>
  )}
</Toaster>
  <div className="py-12 mb-20">
    <div className="bg-[#9655FD] h-[600px] md:h-auto rounded-none md:rounded-3xl w-full px-6 py-12 md:px-12 md:max-w-3xl mx-auto flex md:block items-center justify-center">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="font-custom text-[52px] md:text-4xl md:w-full text-white mb-3">
          Stay in touch
        </h2>
        <p className="text-white/90 mb-8 font-custom2 md:pb-3 md:pt-3">
          Don't miss out! Join our <b>waitlist</b> and be the first to know about Maybox drops, exclusive deals, and insider beauty tips—delivered right to your inbox.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            placeholder="Email address"
            className="flex-1 px-4 py-2 rounded-lg font-custom2 placeholder:font-custom text-gray-900 placeholder:text-[#6C6C6C]"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            type="submit"
            id="sign-up-input"
            onClick={scrollToInput}
            className="bg-[#2A1250] text-white font-custom px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Join waitlist'}
          </button>
        </form>
      </div>
    </div>
  </div>
</div>
  

  )
}