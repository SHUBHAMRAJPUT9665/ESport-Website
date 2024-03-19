import React from 'react';

const Navbar = () => {
  return (
    <div class="relative w-full bg-white">
  <div class="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
    <div class="inline-flex items-center space-x-2">
      <span> 
      </span>
      <span class="font-bold">SSR</span>
    </div>
    <div class="hidden lg:block font-semibold">
      <ul class="inline-flex space-x-8 font-semibold">
        <li>
          <a
            href="#"
            class="text-sm font-semibold text-gray-800 hover:text-gray-900"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#"
            class="text-sm font-semibold text-gray-800 hover:text-gray-900"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#"
            class="text-sm font-semibold text-gray-800 hover:text-gray-900"
          >
            Contact
          </a>
        </li>
      </ul>
    </div>
    <div class="hidden lg:block">
      <button
        type="button"
        class="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
      >
        Register
      </button>
    </div>
    <div class="lg:hidden">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="h-6 w-6 cursor-pointer"
      >
        <line x1="4" y1="12" x2="20" y2="12"></line>
        <line x1="4" y1="6" x2="20" y2="6"></line>
        <line x1="4" y1="18" x2="20" y2="18"></line>
      </svg>
    </div>
  </div>
</div>


  
  );
}

export default Navbar;
