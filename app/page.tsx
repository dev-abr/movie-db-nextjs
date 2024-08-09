"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";
import Footer from "@/components/footer/footer";



export default function Home() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});


  const router = useRouter();

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Simple validation example
    const newErrors: { email?: string; password?: string } = {};
    if (!email.includes('@')) {
      newErrors.email = 'Invalid email address';
    }
    if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters long';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      // Handle successful submission (e.g., send data to API)
      console.log('Form submitted:', { email, password });
      if(email=="test@gmail.com"&&password=="test123"){
        router.push('/movies')
      setEmail('');
      setPassword('');
      setErrors({});
    }
    else{
      newErrors.email = 'Invalid Credentials';
      newErrors.password = 'Invalid Credentials';
    }
    }
  };


  return (
    <main className="bg-[#003645] text-white pt-[20px]">
      <div className="text-center mt-[250px] mb-[250px] font-bold">
        <div className="max-w-md mx-auto p-4  w-[400px]">
          <h2 className="text-[72px] font-bold mb-[30px]">Sign in</h2>
          <form className="space-y-4" onSubmit={handleSubmit} >

            <div>
              <input
                id="email"
                type="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="Email"
                className={`w-full h-[50px] px-3 py-2 bg-[#094a57] ${errors.email && 'border border-red-500'} rounded-lg focus:outline-none focus:ring-2 focus:ring-white mb-[15px]`}
              />
            </div>
            <div>
              <input
                id="password"
                type="password"
                value={password}
                onChange={handlePasswordChange}
                placeholder="Password"
                className={`w-full h-[50px] px-3 py-2 bg-[#094a57] ${errors.password && 'border border-red-500'} rounded-lg focus:outline-none focus:ring-2 focus:ring-white`}
              />
            </div>
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
            <div className="inline-flex items-center">
              <label className="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="check">
                <input type="checkbox"
                  className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md bg-[#094a57]  transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:bg-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
                  id="check" />
                <span
                  className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
                    stroke="currentColor" stroke-width="1">
                    <path fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"></path>
                  </svg>
                </span>
              </label>
              <label className="mt-px font-light text-white cursor-pointer select-none" htmlFor="check">
                Remember me
              </label>
            </div>
            <div className="flex justify-between">
              <button
                type="submit"
                className="px-4 py-2 bg-green-500 w-full h-[60px] text-white text-[22px] rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </main>
  );
}
