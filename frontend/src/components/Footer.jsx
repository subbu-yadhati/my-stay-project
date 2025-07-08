import logo from "../assets/logo (2).png";
import React from 'react'
// import assets from '../assets/assets'

const Footer = () => {
    return (
        <div className='bg-[#F6F9Fc] text-gray-500/80 pt-8 px-6 md:px-16 lg:px-24 xl:px-32'>
            <div className='flex flex-wrap justify-between gap-12 md:gap-6'>
                <div className='max-w-80'>
                    <img src={logo} alt="logo" className='mb-4 h-8 md:h-9 invert opacity-80' />
                    <p className='text-sm'>
                        Explore the places with MY STAY .Book smart. Stay easy. Discover comfort at every destination.
                    </p>

                    <div className='flex items-center gap-3 mt-4'>
                        {/* Instagram
                        <a href=""><i class="fa fa-instagram"></i></a> */}
                        {/* <img className='w-6' src={assets.instagramIcon} alt="insta-icon" /> */}
                        {/* Facebook */}
                        {/* <img className='w-6' src={assets.facebookIcon} alt="insta-icon" /> */}
                        {/* LinkedIn */}
                        {/* <img className='w-6' src={assets.linkendinIcon} alt="insta-icon" /> */}
                    </div>
                </div>

                <div>
                    <p className='text-lg text-gray-800'>MY STAY</p>
                    <ul className='mt-3 flex flex-col gap-2 text-sm'>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Press</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Partners</a></li>
                    </ul>
                </div>

                <div>
                    <p className='text-lg text-gray-800'>SUPPORT</p>
                    <ul className='mt-3 flex flex-col gap-2 text-sm'>
                        <li><a href="#">Help Center</a></li>
                        <li><a href="#">Safety Information</a></li>
                        <li><a href="#">Cancellation Options</a></li>
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">Accessibility</a></li>
                    </ul>
                </div>

                <div className='max-w-80'>
                    <p className='text-lg text-gray-800'>STAY UPDATED</p>
                    <p className='mt-3 text-sm'>
                        Subscribe to our newsletter for inspiration and special offers.
                    </p>
                    <div className='flex items-center mt-4'>
                        <input type="text" className='bg-white rounded-l border border-gray-300 h-9 px-3 outline-none' placeholder='Your email' />
                        <button className='flex items-center justify-center bg-black h-9 w-16 aspect-square text-white rounded-r'>
                          Click Here
                            {/* Arrow icon */}
                            {/* <img className='w-3.5 invert' src={assets.arrowIcon} alt="arrow-icon" /> */}
                        </button>
                    </div>
                </div>
            </div>
            <hr className='border-gray-300 mt-8' />
            <div className='flex flex-col md:flex-row gap-2 items-center justify-between py-5'>
                <p>© {new Date().getFullYear()} Brand. All rights reserved.</p>
                <ul className='flex items-center gap-4'>
                    <li><a href="#">Privacy</a></li>
                    <li><a href="#">Terms</a></li>
                    <li><a href="#">Sitemap</a></li>
                </ul>
            </div>
        </div>
    )
}



// const Footer = () => {
//   return (
//     <footer className="bg-gray-50 py-10 ">
//       <h2 className="text-3xl font-semibold text-gray-900 mt-8 text-center">
//         Explore the world with My Dream place
//       </h2>
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex mt-8">
//         <div className=" mb-10">
//           <div className="">
//             <img src={logo} alt="Logo" className="h-16 w-auto" />
//             <h1 className="text-2xl font-semibold text-gray-900">

//             </h1>
//           </div>
//           <p className="text-gray-600 mt-2">
//             Your next go-to companion for travel
//           </p>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//           {/* Company Links */}
//           <div>
//             <h3 className="text-lg font-semibold text-gray-800 mb-4">
//               Company
//             </h3>
//             <ul className="space-y-2">
//               <li>
//                 <a href="#" className="text-gray-600 hover:text-gray-900">
//                   About
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="text-gray-600 hover:text-gray-900">
//                   Jobs
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="text-gray-600 hover:text-gray-900">
//                   Newsroom
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="text-gray-600 hover:text-gray-900">
//                   Advertising
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="text-gray-600 hover:text-gray-900">
//                   Contact us
//                 </a>
//               </li>
//             </ul>
//           </div>

//           {/* Explore Links */}
//           <div>
//             <h3 className="text-lg font-semibold text-gray-800 mb-4">
//               Explore
//             </h3>
//             <ul className="space-y-2">
//               <li>
//                 <a href="#" className="text-gray-600 hover:text-gray-900">
//                   Australia
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="text-gray-600 hover:text-gray-900">
//                   New Zealand
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="text-gray-600 hover:text-gray-900">
//                   United States America (USA)
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="text-gray-600 hover:text-gray-900">
//                   Greece
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="text-gray-600 hover:text-gray-900">
//                   Maldives
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="text-gray-600 hover:text-gray-900">
//                   Singapore
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="text-blue-500 hover:underline">
//                   See more
//                 </a>
//               </li>
//             </ul>
//           </div>

//           {/* Terms and Policies Links */}
//           <div>
//             <h3 className="text-lg font-semibold text-gray-800 mb-4">
//               Terms and Policies
//             </h3>
//             <ul className="space-y-2">
//               <li>
//                 <a href="#" className="text-gray-600 hover:text-gray-900">
//                   Privacy Policy
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="text-gray-600 hover:text-gray-900">
//                   Terms of use
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="text-gray-600 hover:text-gray-900">
//                   Accessibility
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="text-gray-600 hover:text-gray-900">
//                   Reward system policy
//                 </a>
//               </li>
//             </ul>
//           </div>

//           {/* Help Links */}
//           <div>
//             <h3 className="text-lg font-semibold text-gray-800 mb-4">Help</h3>
//             <ul className="space-y-2">
//               <li>
//                 <a href="#" className="text-gray-600 hover:text-gray-900">
//                   Support
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="text-gray-600 hover:text-gray-900">
//                   Cancel your bookings
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="text-gray-600 hover:text-gray-900">
//                   Use Coupon
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="text-gray-600 hover:text-gray-900">
//                   Refund Policies
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="text-gray-600 hover:text-gray-900">
//                   International Travel Documents
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

export default Footer;
