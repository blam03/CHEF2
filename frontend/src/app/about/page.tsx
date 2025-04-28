'use client'

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa"

export default function AboutPage() {
  const router = useRouter()

  useEffect(() => {
    document.title = "About Us – Chef"
  }, [])

  const navigateTo = (path: string) => {
    router.push(path)
  }

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">

      {/* Animated Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,#FFAD60,#FF6B6B,#FF4E00)] animate-pulseBackground bg-cover bg-no-repeat z-0"></div>

      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-4 bg-white/20 backdrop-blur-md text-black z-10 relative">
        <div className="text-2xl font-bold cursor-pointer" onClick={() => navigateTo("/")}>CHEF</div>
        <div className="flex gap-6 text-lg font-semibold">
          <button onClick={() => navigateTo("/")} className="hover:underline">Home</button>
          <button onClick={() => navigateTo("/about")} className="hover:underline">About Us</button>
          <button onClick={() => navigateTo("/contact")} className="hover:underline">Contact</button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex-grow flex flex-col items-center justify-center p-8 relative z-10">

        {/* About Application */}
        <div className="max-w-4xl text-center space-y-6 mb-16 backdrop-blur-xl bg-white/10 p-10 rounded-2xl border-2 border-orange-200 shadow-2xl">
          <h1 className="text-5xl font-bold text-white">About Our Application</h1>
          <p className="text-white text-lg">
            Chef2 is a vibrant platform for culinary enthusiasts to discover, share, and master recipes from around the globe.
            We make cooking fun, easy, and accessible for everyone through innovative technology and beautiful design.
          </p>
        </div>

        {/* Meet Our Team */}
        <div className="w-full text-center space-y-12">
          <div>
            <h2 className="text-4xl font-bold text-white">Meet Our Team</h2>
            <p className="text-white mt-2">Our skilled and dedicated team brings a wealth of experience and expertise to the table.</p>
          </div>

          {/* Team Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10 max-w-7xl mx-auto">

            {/* Team Member 1 */}
            <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center space-y-4 hover:scale-105 transition-transform">
              <img 
                src="https://media.licdn.com/dms/image/v2/C4E03AQFB0lmV_2G6Fg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1636931359558?e=1751500800&v=beta&t=NDQgdI4BG4A1P3JgseFVXm-m_nbRXvs8EQe9rTc0dPs" 
                alt="Aaditya Talati - CEO" 
                className="w-32 h-32 rounded-full object-cover"
              />
              <div className="text-center space-y-1">
                <h3 className="text-xl font-bold">Aaditya Talati</h3>
                <p className="text-gray-500 text-sm">CEO</p>
                <p className="text-gray-600 text-sm mt-2">Visionary leader with 4+ years of experience.</p>
              </div>
              <div className="flex gap-4 mt-4 text-gray-400">
                <a href="#" target="_blank"><FaFacebookF className="hover:text-blue-600 cursor-pointer" /></a>
                <a href="#" target="_blank"><FaTwitter className="hover:text-blue-400 cursor-pointer" /></a>
                <a href="#" target="_blank"><FaLinkedinIn className="hover:text-blue-700 cursor-pointer" /></a>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center space-y-4 hover:scale-105 transition-transform">
              <img 
                src="https://media.licdn.com/dms/image/v2/D5635AQE_Uyx28deTFg/profile-framedphoto-shrink_800_800/B56ZYmZJVeHoAg-/0/1744400848569?e=1746414000&v=beta&t=JbB_raKYXl0f9OesIlo6YwrFQ3xMOOybSiZuCQ_Eiho" 
                alt="Lynsey Chau - CMO" 
                className="w-32 h-32 rounded-full object-cover"
              />
              <div className="text-center space-y-1">
                <h3 className="text-xl font-bold">Lynsey Chau</h3>
                <p className="text-gray-500 text-sm">CMO</p>
                <p className="text-gray-600 text-sm mt-2">Passionate about innovation and technology.</p>
              </div>
              <div className="flex gap-4 mt-4 text-gray-400">
                <a href="#" target="_blank"><FaFacebookF className="hover:text-blue-600 cursor-pointer" /></a>
                <a href="#" target="_blank"><FaTwitter className="hover:text-blue-400 cursor-pointer" /></a>
                <a href="#" target="_blank"><FaLinkedinIn className="hover:text-blue-700 cursor-pointer" /></a>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center space-y-4 hover:scale-105 transition-transform">
              <img 
                src="https://media.licdn.com/dms/image/v2/D5603AQGk1fc0DYCjcw/profile-displayphoto-shrink_800_800/B56ZW1pSVjGsAc-/0/1742509257254?e=1751500800&v=beta&t=nqIB1TIOOYPCEFe9KaOUESvNYmjN2bdOCPayGhzuF2w" 
                alt="Shreya Jayakumrar - CDO" 
                className="w-32 h-32 rounded-full object-cover"
              />
              <div className="text-center space-y-1">
                <h3 className="text-xl font-bold">Shreya Jayakumrar</h3>
                <p className="text-gray-500 text-sm">CDO</p>
                <p className="text-gray-600 text-sm mt-2">Passionate within intersection of analytics and nutrients.</p>
              </div>
              <div className="flex gap-4 mt-4 text-gray-400">
                <a href="#" target="_blank"><FaFacebookF className="hover:text-blue-600 cursor-pointer" /></a>
                <a href="#" target="_blank"><FaTwitter className="hover:text-blue-400 cursor-pointer" /></a>
                <a href="#" target="_blank"><FaLinkedinIn className="hover:text-blue-700 cursor-pointer" /></a>
              </div>
            </div>

            {/* Team Member 4 */}
            <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center space-y-4 hover:scale-105 transition-transform">
              <img 
                src="https://media.licdn.com/dms/image/v2/D5603AQF4aUNhB_Fj2Q/profile-displayphoto-shrink_800_800/B56ZUSxMNpGsAc-/0/1739776641856?e=1751500800&v=beta&t=ULFxPEOY0AnMqujg5mA3NW_FxEOjlxTs1iOJQ1iJReg" 
                alt="Ben Lam - Co-CTO" 
                className="w-32 h-32 rounded-full object-cover"
              />
              <div className="text-center space-y-1">
                <h3 className="text-xl font-bold">Ben Lam</h3>
                <p className="text-gray-500 text-sm">Co-CTO</p>
                <p className="text-gray-600 text-sm mt-2">Experience in backend development and creating data pipelines.</p>
              </div>
              <div className="flex gap-4 mt-4 text-gray-400">
                <a href="https://www.linkedin.com/in/benjamin-lam03/" target="_blank"><FaLinkedinIn className="hover:text-blue-700 cursor-pointer" /></a>
              </div>
            </div>

            {/* Team Member 5 */}
            <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center space-y-4 hover:scale-105 transition-transform">
              <img 
                src="https://media.licdn.com/dms/image/v2/D5603AQHrgzJV_VJEjw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1688141820965?e=1751500800&v=beta&t=72uqx-yKxWb6b3KfK92DBV6vaOrPj70h4O_yUF9JmVo" 
                alt="Wesley Kieu - Co-CTO" 
                className="w-32 h-32 rounded-full object-cover"
              />
              <div className="text-center space-y-1">
                <h3 className="text-xl font-bold">Wesley Kieu</h3>
                <p className="text-gray-500 text-sm">Co-CTO</p>
                <p className="text-gray-600 text-sm mt-2">Passionate in Data Science and System Design.</p>
              </div>
              <div className="flex gap-4 mt-4 text-gray-400">
                <a href="https://www.linkedin.com/in/wesleykieu/" target="_blank"><FaLinkedinIn className="hover:text-blue-700 cursor-pointer" /></a>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Keyframe animation for background */}
      <style jsx>{`
        @keyframes pulseBackground {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-pulseBackground {
          background-size: 400% 400%;
          animation: pulseBackground 6s ease infinite;
        }
      `}</style>

    </div>
  )
}