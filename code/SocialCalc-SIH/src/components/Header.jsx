import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="flex items-center justify-between p-4 bg-black text-white shadow-lg">
  <div className="flex items-center space-x-6">
    <Link href="/" className="text-2xl font-bold tracking-wide transition-transform duration-300 hover:scale-105">
      SocialCalc
    </Link>
    <nav className="flex space-x-6">
      <Link href="/sheets" className="relative text-lg transition-all duration-300  hover:text-gray-300">
        My Sheets
        <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-white scale-x-0 origin-left transition-transform duration-300 hover:scale-x-100"></span>
      </Link>
      <Link href="/newsheet" className="relative text-lg transition-all duration-300  hover:text-gray-300">
        NewSheet
        <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-white scale-x-0 origin-left transition-transform duration-300 hover:scale-x-100"></span>
      </Link>
      <Link href="/about" className="relative text-lg transition-all duration-300 hover:text-gray-300">
        About
        <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-white scale-x-0 origin-left transition-transform duration-300 hover:scale-x-100"></span>
      </Link>
      <Link href="/docs" className="relative text-lg transition-all duration-300 hover:text-gray-300">
        Docs
        <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-white scale-x-0 origin-left transition-transform duration-300 hover:scale-x-100"></span>
      </Link>
      <Link href="/contact" className="relative text-lg transition-all duration-300 hover:text-gray-300">
        Contact us
        <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-white scale-x-0 origin-left transition-transform duration-300 hover:scale-x-100"></span>
      </Link>
    </nav>
  </div>
  <div className="flex items-center space-x-4">
    <SignedOut>
      <SignInButton ><button className='h-auto w-auto p-2 px-4 border-2 border-white bg-black text-white rounded-lg hover:bg-white hover:text-black hover:border-black font-medium'>Sign in</button></SignInButton>
    </SignedOut>
    <SignedIn>
      <UserButton className="transition-transform duration-300 hover:scale-105" />
    </SignedIn>
  </div>
</header>

  );
}
