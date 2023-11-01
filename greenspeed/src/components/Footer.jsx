import React from 'react'

function Footer() {
  return (
    <div>
       {/* footer section */}
       <footer class="bg-green-700 rounded-lg shadow m-4 dark:bg-gray-800">
       <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
         <span class="text-sm text-white sm:text-center dark:text-gray-400 ">
           © 2023 Green Speed. All Rights Reserved.
         </span>
         <ul class="flex flex-wrap items-center mt-3 text-sm font-medium dark:text-gray-400 sm:mt-0 text-white">
           <li>
             <a href="#" class="mr-4 hover:underline md:mr-6 ">
               About
             </a>
           </li>
           <li>
             <a href="#" class="mr-4 hover:underline md:mr-6">
               Privacy Policy
             </a>
           </li>
           <li>
             <a href="#" class="mr-4 hover:underline md:mr-6">
               Licensing
             </a>
           </li>
           <li>
             <a href="#" class="hover:underline">
               Contact
             </a>
           </li>
         </ul>
       </div>
     </footer>
     </div>
  )
}

export default Footer