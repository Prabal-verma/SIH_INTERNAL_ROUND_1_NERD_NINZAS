import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';
import { HoverBorderGradient } from '@/components/ui/hover-border-gradient';
import { TypewriterEffectSmooth } from '@/components/ui/typewriter-effect';
import { HoverEffect } from '@/components/ui/card-hover-effect';
import { Spotlight } from '@/components/ui/Spotlight';
import Link from 'next/link';

export default function Home() {
// text reveal
  const words = [
    {
      text: `Welcome to<`,
      className:"text-white",
    },
    {
      text: " SocialCalc/>",
      className: "text-blue-500 dark:text-blue-500",
    },
    
  ];
// cards
   const projects = [
    {
      title: "Real-Time Collaboration",
      description:
        " Work together with your team in real time, seeing changes as they happen. Collaborate effortlessly with live updates and instant communication.",
      link: "https://stripe.com",
    },
    {
      title: "Advanced Formulas & Functions",
      description:
        " Utilize a wide range of advanced formulas and functions to perform complex calculations and data analysis with ease.",
      link: "https://stripe.com",
    },
    {
      title: "Customizable Templates",
      description:
        " Start quickly with customizable templates that fit your needs, or create your own to streamline repetitive tasks and processes.",
        link: "https://stripe.com",
    },
    {
      title: "Data Security",
      description:
        " Keep your data safe with robust security measures, including encryption and access controls to protect your information.",
      link: "https://stripe.com",
    },
    {
      title: "Cross-Platform Access",
      description:
        " Access your spreadsheets from any device, whether you’re on a desktop, tablet, or smartphone, for ultimate flexibility and convenience.",
      link: "https://stripe.com",
    },
    {
      title: "Seamless Integration",
      description:
        " Integrate SocialCalc with other tools and services you use, such as cloud storage and project management applications, for a unified workflow.",
      link: "https://stripe.com",
    },]
  return (
    
    
    <div className="bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="bg-black py-16 px-6 sm:px-12 lg:px-24">
        <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
        <div className="max-w-5xl mx-auto text-center">
          <div className='flex justify-center items-center'>
        <TypewriterEffectSmooth words={words}  />
        </div>
          {/* <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to SocialCalc</h1> */}
          <p className="text-gray-300 text-lg mb-8">
          
            Transform the way you collaborate on spreadsheets with real-time features, intuitive design, and powerful tools. SocialCalc is your go-to solution for efficient, collaborative data management.
          </p>
          {/* <Link href="/sheets" className="bg-blue-600 text-white py-3 px-6 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-colors">
            Get Started
          </Link> */}
          <SignedOut>
            <SignInButton>
          <div className='flex justify-center items-center'>
          <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        className="dark:bg-black bg-black text-white dark:text-white flex items-center space-x-2"
      >Join us</HoverBorderGradient>
      </div>
      </SignInButton>
      </SignedOut>
      <SignedIn>
      <div className='flex justify-center items-center'>
        <Link href="/newsheet">
          <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        className="dark:bg-black bg-black text-white dark:text-white flex items-center space-x-2"
      >Get Started</HoverBorderGradient></Link>
      </div>

      </SignedIn>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 sm:px-12 lg:px-24 bg-black">
      

        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-600 mb-8 text-center">Key Features</h2>
          <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Feature 1 */}
            {/* <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-semibold text-blue-400 mb-4">Real-Time Collaboration</h3>
              <p className="text-gray-300">
                Work together with your team in real time, seeing changes as they happen. Collaborate effortlessly with live updates and instant communication.
              </p>
            </div> */}

            {/* Feature 2 */}
            {/* <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-semibold text-blue-400 mb-4">Advanced Formulas & Functions</h3>
              <p className="text-gray-300">
                Utilize a wide range of advanced formulas and functions to perform complex calculations and data analysis with ease.
              </p>
            </div> */}

            {/* Feature 3 */}
            {/* <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-semibold text-blue-400 mb-4">Customizable Templates</h3>
              <p className="text-gray-300">
                Start quickly with customizable templates that fit your needs, or create your own to streamline repetitive tasks and processes.
              </p>
            </div> */}

            {/* Feature 4 */}
            {/* <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-semibold text-blue-400 mb-4">Data Security</h3>
              <p className="text-gray-300">
                Keep your data safe with robust security measures, including encryption and access controls to protect your information.
              </p>
            </div> */}

            {/* Feature 5 */}
            {/* <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-semibold text-blue-400 mb-4">Cross-Platform Access</h3>
              <p className="text-gray-300">
                Access your spreadsheets from any device, whether you’re on a desktop, tablet, or smartphone, for ultimate flexibility and convenience.
              </p>
            </div> */}

            {/* Feature 6 */}
            {/* <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-semibold text-blue-400 mb-4">Seamless Integration</h3>
              <p className="text-gray-300">
                Integrate SocialCalc with other tools and services you use, such as cloud storage and project management applications, for a unified workflow.
              </p>
            </div> */}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-black py-16 px-6 sm:px-12 lg:px-24 text-center">
        <h2 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h2>
        <p className="text-gray-400 mb-6">
          Join the thousands of users already enhancing their productivity with SocialCalc. Sign up today and experience the future of collaborative spreadsheets!
        </p>
      </section>
    </div>
  );
}
