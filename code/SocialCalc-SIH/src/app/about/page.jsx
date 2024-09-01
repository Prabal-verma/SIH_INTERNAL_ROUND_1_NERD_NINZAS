import Image from 'next/image';
import Link from 'next/link';
import { CardSpotlight } from "@/components/ui/card-spotlight";

export default function About() {
  return (
    <div className="bg-black text-white py-12 px-6 sm:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-blue-600 mb-6">About Us</h1>
        <p className="text-gray-300 mb-8 text-[17px]">
          SocialCalc is a cutting-edge web application designed for real-time spreadsheet collaboration. Our team of dedicated developers has worked tirelessly to bring this project to life, each contributing their unique skills and expertise.
        </p>

        <h2 className="text-2xl font-semibold text-white mb-6">Meet the Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {/* Developer 1 */}
          
          <CardSpotlight className="h-96 w-96 gap-2">
          
            
            <h3 className="text-xl font-semibold text-blue-600 mb-2 text-center ">Prabal Verma</h3>
            <p className="text-white z-50 text-center">DevOps-Cloud Engineer</p>
            <p className="text-gray-200 mt-2">
            Ensures smooth and efficient deployment of our applications, with expertise in automation, monitoring, and cloud platforms. His work is essential in maintaining our system&apos:s reliability and scalability.
            </p>
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-4">
            <Link href="https://www.linkedin.com/in/prabal-verma" className="text-gray-400 hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6">
              <path d="M22.23 0H1.77C.792 0 0 .792 0 1.77v20.461C0 23.208.792 24 1.77 24h20.461c.977 0 1.769-.792 1.769-1.769V1.77C24 .792 23.208 0 22.23 0zM7.12 20.451H3.618V9.066H7.12v11.385zM5.37 7.671c-1.121 0-2.03-.91-2.03-2.03 0-1.122.91-2.03 2.03-2.03 1.122 0 2.031.908 2.031 2.03 0 1.12-.909 2.03-2.03 2.03zm15.081 12.78h-3.502v-5.506c0-1.312-.025-3.003-1.829-3.003-1.829 0-2.109 1.43-2.109 2.907v5.602H9.505V9.066h3.363v1.551h.047c.468-.887 1.612-1.828 3.316-1.828 3.548 0 4.203 2.336 4.203 5.373v6.289z"/>
            </svg>
            </Link>
            <Link href="https://www.instagram.com/prabal.rajput_/" className="text-gray-400 hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="h-9 w-9">
            <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
            </svg>
            </Link>
            </div>
          
          </CardSpotlight>
          <CardSpotlight className="h-96 w-96 gap-2">
          {/* Developer 2 */}
         
            
            <h3 className="text-xl font-semibold text-blue-400 mb-2 text-center">Vijay Singh</h3>
            <p className="text-gray-300 text-center">Backend Specialist</p>
            <p className="text-gray-400 mt-2">
            Responsible for the core functionality of our applications, focusing on server-side logic, databases, and API integration. His work ensures our systems are robust, efficient, and scalable.
            </p>
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-4">
            <Link href="https://www.linkedin.com/in/vijay-singh-b25483288" className="text-gray-400 hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6">
              <path d="M22.23 0H1.77C.792 0 0 .792 0 1.77v20.461C0 23.208.792 24 1.77 24h20.461c.977 0 1.769-.792 1.769-1.769V1.77C24 .792 23.208 0 22.23 0zM7.12 20.451H3.618V9.066H7.12v11.385zM5.37 7.671c-1.121 0-2.03-.91-2.03-2.03 0-1.122.91-2.03 2.03-2.03 1.122 0 2.031.908 2.031 2.03 0 1.12-.909 2.03-2.03 2.03zm15.081 12.78h-3.502v-5.506c0-1.312-.025-3.003-1.829-3.003-1.829 0-2.109 1.43-2.109 2.907v5.602H9.505V9.066h3.363v1.551h.047c.468-.887 1.612-1.828 3.316-1.828 3.548 0 4.203 2.336 4.203 5.373v6.289z"/>
            </svg>
            </Link>
            <Link href="https://www.instagram.com/iam_vijay_singh._/" className="text-gray-400 hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="h-9 w-9">
            <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
            </svg>
            </Link>
            </div>
          
          </CardSpotlight>

          {/* Developer 3 */}


          <CardSpotlight className="h-96 w-96 gap-2">
            
            <h3 className="text-xl font-semibold text-blue-400 mb-2 text-center">Aayush Goyal</h3>
            <p className="text-gray-300 text-center">ML Engineer</p>
            <p className="text-gray-400 mt-2">
            Specializes in developing and deploying machine learning models that drive intelligent features in our applications. Expertise in data analysis and algorithm optimization ensures our solutions are both accurate and efficient.
            </p>
            <div className="mt-6 flex justify-center space-x-4">
            <Link href="https://www.linkedin.com/in/aayush-goyal-b0b799250" className="text-gray-400 hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6">
              <path d="M22.23 0H1.77C.792 0 0 .792 0 1.77v20.461C0 23.208.792 24 1.77 24h20.461c.977 0 1.769-.792 1.769-1.769V1.77C24 .792 23.208 0 22.23 0zM7.12 20.451H3.618V9.066H7.12v11.385zM5.37 7.671c-1.121 0-2.03-.91-2.03-2.03 0-1.122.91-2.03 2.03-2.03 1.122 0 2.031.908 2.031 2.03 0 1.12-.909 2.03-2.03 2.03zm15.081 12.78h-3.502v-5.506c0-1.312-.025-3.003-1.829-3.003-1.829 0-2.109 1.43-2.109 2.907v5.602H9.505V9.066h3.363v1.551h.047c.468-.887 1.612-1.828 3.316-1.828 3.548 0 4.203 2.336 4.203 5.373v6.289z"/>
            </svg>
            </Link>
            <Link href="https://www.instagram.com/goyal54312?igsh=NnVtZHZmbDZ3b3Uy" className="text-gray-400 hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="h-9 w-9">
            <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
            </svg>
            </Link>
            </div>
            </CardSpotlight>

          {/* Developer 4 */}
          <CardSpotlight className="h-96 w-96 gap-2">
            
            <h3 className="text-xl font-semibold text-blue-400 mb-2 text-center">Ankita</h3>
            <p className="text-gray-300 text-center">Lead Frontend</p>
            <p className="text-gray-400 mt-2">
            Leads the design and development of our user interface, ensuring a seamless and engaging user experience. With a focus on responsiveness and performance, She brings our vision to life on the web.
            </p>
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-4">
            <Link href="https://www.linkedin.com/in/ankita6395" className="text-gray-400 hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6">
              <path d="M22.23 0H1.77C.792 0 0 .792 0 1.77v20.461C0 23.208.792 24 1.77 24h20.461c.977 0 1.769-.792 1.769-1.769V1.77C24 .792 23.208 0 22.23 0zM7.12 20.451H3.618V9.066H7.12v11.385zM5.37 7.671c-1.121 0-2.03-.91-2.03-2.03 0-1.122.91-2.03 2.03-2.03 1.122 0 2.031.908 2.031 2.03 0 1.12-.909 2.03-2.03 2.03zm15.081 12.78h-3.502v-5.506c0-1.312-.025-3.003-1.829-3.003-1.829 0-2.109 1.43-2.109 2.907v5.602H9.505V9.066h3.363v1.551h.047c.468-.887 1.612-1.828 3.316-1.828 3.548 0 4.203 2.336 4.203 5.373v6.289z"/>
            </svg>
            </Link>
            <Link href="https://www.instagram.com/ankita._02_/" className="text-gray-400 hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="h-9 w-9">
            <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
            </svg>
            </Link>
            </div>
            </CardSpotlight>

          {/* Developer 5 */}
          <CardSpotlight className="h-96 w-96 gap-2">
            
            <h3 className="text-xl font-semibold text-blue-400 mb-2 text-center">Vishal</h3>
            <p className="text-gray-300 text-center">Blockchain Engineer</p>
            <p className="text-gray-400 mt-2">
            Designs and implements blockchain solutions that ensure transparency, security, and efficiency. Expertise in smart contracts and distributed ledger technologies drives innovation and trust in our systems.
            </p>
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-4">
            <Link href="http://www.linkedin.com/in/vishal-150a6b317" className="text-gray-400 hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6">
              <path d="M22.23 0H1.77C.792 0 0 .792 0 1.77v20.461C0 23.208.792 24 1.77 24h20.461c.977 0 1.769-.792 1.769-1.769V1.77C24 .792 23.208 0 22.23 0zM7.12 20.451H3.618V9.066H7.12v11.385zM5.37 7.671c-1.121 0-2.03-.91-2.03-2.03 0-1.122.91-2.03 2.03-2.03 1.122 0 2.031.908 2.031 2.03 0 1.12-.909 2.03-2.03 2.03zm15.081 12.78h-3.502v-5.506c0-1.312-.025-3.003-1.829-3.003-1.829 0-2.109 1.43-2.109 2.907v5.602H9.505V9.066h3.363v1.551h.047c.468-.887 1.612-1.828 3.316-1.828 3.548 0 4.203 2.336 4.203 5.373v6.289z"/>
            </svg>
            </Link>
            <Link href="https://www.instagram.com/vishu_kaneki" className="text-gray-400 hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="h-9 w-9">
            <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
            </svg>
            </Link>
            </div>
            </CardSpotlight>
          

          {/* Developer 6 */}
          <CardSpotlight className="h-96 w-96 gap-2">
           
            <h3 className="text-xl font-semibold text-blue-400 mb-2 text-center">Tanya Sharma</h3>
            <p className="text-gray-300 text-center">Frontend-Backend</p>
            <p className="text-gray-400 mt-2">
            Excels in both frontend and backend development, delivering end-to-end solutions that ensure seamless user experiences and robust server-side functionality. Her versatile skills bridge the gap between design and implementation, driving our project forward.
            </p>
            <div className="mt-6 flex justify-center space-x-4">
            <Link href="https://www.linkedin.com/in/tanya-sharma-2a2557250" className="text-gray-400 hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6">
              <path d="M22.23 0H1.77C.792 0 0 .792 0 1.77v20.461C0 23.208.792 24 1.77 24h20.461c.977 0 1.769-.792 1.769-1.769V1.77C24 .792 23.208 0 22.23 0zM7.12 20.451H3.618V9.066H7.12v11.385zM5.37 7.671c-1.121 0-2.03-.91-2.03-2.03 0-1.122.91-2.03 2.03-2.03 1.122 0 2.031.908 2.031 2.03 0 1.12-.909 2.03-2.03 2.03zm15.081 12.78h-3.502v-5.506c0-1.312-.025-3.003-1.829-3.003-1.829 0-2.109 1.43-2.109 2.907v5.602H9.505V9.066h3.363v1.551h.047c.468-.887 1.612-1.828 3.316-1.828 3.548 0 4.203 2.336 4.203 5.373v6.289z"/>
            </svg>
            </Link>
            <Link href="https://www.instagram.com/tnyxshmr/" className="text-gray-400 hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="h-9 w-9">
            <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
            </svg>
            </Link>
            </div>
            </CardSpotlight>
        </div>
      </div>
    </div>
  );
}
