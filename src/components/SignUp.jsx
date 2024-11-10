import React, { useState, useEffect } from 'react'
import { createClient, SupabaseClient } from '@supabase/supabase-js'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


const supabaseUrl = 'https://ofqdiiomchqesounleol.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9mcWRpaW9tY2hxZXNvdW5sZW9sIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzEwMDU1OTAsImV4cCI6MjA0NjU4MTU5MH0.oExzRDY4RMZe4aCXfiGzZy_jfoO5_oDE0YMeE_fXGjo'

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

  useEffect(() => {
    return () => {
      isMounted = false;
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
      const { data, error } = await supabase
        .from('emails')
        .insert([{ email: email }])
        .select()

      if (error) {
        console.error('Supabase error:', error)
        if (error.code === '42501') {
          toast.error('Unable to submit. Please try again later or contact support.')
        } else {
          toast.error('An error occurred. Please try again.')
        }
        throw error
      }

      if (data) {
        console.log('Inserted data:', data)
        if (isMounted) {
          toast.success('Thank you for joining our waitlist!')
          setEmail('')
        }
      }
    } catch (error) {
      console.error('Error inserting email:', error)
      if (isMounted) {
        toast.error('An error occurred while submitting your email. Please try again.')
      }
    } finally {
      if (isMounted) {
        setIsSubmitting(false)
      }
    }
  }

  return (
    <div className="full-width-container px-4 py-12 mb-20">
    <div className="bg-[#9655FD] rounded-3xl w-full px-6 py-12 md:px-12 md:max-w-3xl mx-auto">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="font-custom text-4xl text-white mb-3">
          Stay in touch
        </h2>
        <p className="text-white/90 mb-8 font-custom2 md:pb-3 md:pt-3">
          Don't miss out! Join our waitlist and be the first to know about Maybox drops, exclusive deals, and insider beauty tips—delivered right to your inbox.
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
            className="bg-[#2A1250] text-white font-custom px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Join waitlist'}
          </button>
        </form>
      </div>
    </div>
    <ToastContainer position="bottom-center" />
  </div>
  

  )
}