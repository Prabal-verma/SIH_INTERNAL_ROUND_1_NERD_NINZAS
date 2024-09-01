import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-semibold text-blue-600">SocialCalc</h2>
            <p className="mt-2 text-sm text-gray-400">
              © {new Date().getFullYear()} SocialCalc, Inc. All rights reserved.
            </p>
          </div>
          <nav className="flex space-x-6">
            <Link href="/privacy-policy" className="text-sm text-gray-400 hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-sm text-gray-400 hover:text-white">
              Terms of Service
            </Link>
            <Link href="/contact" className="text-sm text-gray-400 hover:text-white">
              Contact Us
            </Link>
          </nav>
        </div>
        <div className="mt-6 flex justify-center space-x-4">
          <Link href="https://twitter.com" className="text-gray-400 hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6">
              <path d="M24 4.557a9.72 9.72 0 01-2.828.775 4.948 4.948 0 002.165-2.723 9.804 9.804 0 01-3.127 1.195A4.924 4.924 0 0016.847 3c-2.733 0-4.947 2.238-4.947 4.998 0 .39.037.765.121 1.124-4.105-.209-7.742-2.196-10.186-5.21a5.028 5.028 0 00-.671 2.508c0 1.728.873 3.263 2.196 4.158a4.912 4.912 0 01-2.242-.628v.063c0 2.405 1.664 4.404 3.865 4.86a4.957 4.957 0 01-2.236.086c.623 1.982 2.422 3.422 4.558 3.462a9.89 9.89 0 01-7.348 2.092A13.941 13.941 0 007.29 21c9.056 0 14.002-7.633 14.002-14.25 0-.217-.003-.43-.01-.643A10.03 10.03 0 0024 4.557z"/>
            </svg>
          </Link>
          <Link href="https://facebook.com" className="text-gray-400 hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6">
              <path d="M22.675 0h-21.35C.597 0 0 .593 0 1.325v21.351C0 23.408.597 24 1.325 24h11.49v-9.288H9.69v-3.623h3.125V8.414c0-3.1 1.891-4.788 4.654-4.788 1.325 0 2.464.099 2.794.144v3.24l-1.916.001c-1.503 0-1.793.714-1.793 1.763v2.313h3.587l-.467 3.623h-3.12V24h6.116c.728 0 1.325-.592 1.325-1.324V1.325C24 .593 23.403 0 22.675 0z"/>
            </svg>
          </Link>
          <Link href="https://linkedin.com" className="text-gray-400 hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6">
              <path d="M22.23 0H1.77C.792 0 0 .792 0 1.77v20.461C0 23.208.792 24 1.77 24h20.461c.977 0 1.769-.792 1.769-1.769V1.77C24 .792 23.208 0 22.23 0zM7.12 20.451H3.618V9.066H7.12v11.385zM5.37 7.671c-1.121 0-2.03-.91-2.03-2.03 0-1.122.91-2.03 2.03-2.03 1.122 0 2.031.908 2.031 2.03 0 1.12-.909 2.03-2.03 2.03zm15.081 12.78h-3.502v-5.506c0-1.312-.025-3.003-1.829-3.003-1.829 0-2.109 1.43-2.109 2.907v5.602H9.505V9.066h3.363v1.551h.047c.468-.887 1.612-1.828 3.316-1.828 3.548 0 4.203 2.336 4.203 5.373v6.289z"/>
            </svg>
          </Link>
        </div>
      </div>
    </footer>
  );
}
