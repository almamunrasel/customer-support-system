import React from 'react';

const Navbar = () => {
  return (
    <div className='max-w-300 mx-auto'>
         

         <div className=" bg-base-100  flex justify-between items-center mt-10">
              <div className=" font-bold  ">
                  <h1>CS-Ticket System</h1>
              </div>

              <div className='flex items-center gap-5'>
                  <div >
                    <ul className='flex flex-col md:flex-row gap-3 font-semibold text-xs'>
                      <li className='cursor-pointer'><a >Home</a></li>
                      <li className='cursor-pointer'><a >FAQ</a></li>
                      <li className='cursor-pointer'><a >Changelog</a></li>
                      <li className='cursor-pointer'><a >Blog</a></li>
                      <li className='cursor-pointer'><a >Download</a></li>
                      <li className='cursor-pointer'><a >Contact</a></li>
                    </ul>

                  </div>
                  <div>
                    <button className="btn rounded-xl bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)] text-white ">+New Ticket</button>
                    
                  </div>
              </div>        
                      
           </div>


      
    </div>
  );
};

export default Navbar;