import React from 'react';

import vector from '../../assets/vector1.png';
// import empty from '../../assets/vector2.png';

const MainBanner = ({tasks,resolved}) => {
  return (
    // <div className='max-w-300 mx-auto flex mt-10 gap-10'>
    //   <div className='rounded-xl bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)] flex gap-10 w-50% '>
    //     <img className='w-50%' src={vector} alt="" />
    //     <img className='   scale-x-[-1] w-50%' src={vector} alt="" />
      

    //   </div>
    //   <div className='rounded-xl bg-[linear-gradient(90deg,rgba(84,207,103.68,1),rgba(0,130,122.2,1)_100%)] flex gap-10'>
    //     <img className='w-50%' src={vector} alt="" />
    //     <img className="w-50% scale-x-[-1] " src={vector} alt="" />

    //   </div>
      
    // </div>


    <div className="max-w-300 mx-auto  mt-10">
  <div className="flex flex-col md:flex-row gap-6">
    
    {/* CARD 1 */}
    <div className="relative w-full md:w-1/2 h-40 md:h-48 rounded-xl overflow-hidden
                    bg-[linear-gradient(125deg,#632ee3,#9f62f2)]">
      
      {/* Vectors */}
      <img
        src={vector}
        alt=""
        className="absolute bottom-0 left-0 w-32 md:w-56 "
      />
      <img
        src={vector}
        alt=""
        className="absolute top-0 right-0 w-32 md:w-56  scale-x-[-1]"
      />

      {/* Center Text */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
        <p className="text-xl font-bold md:text-base ">In-Progress</p>
        <p className="text-3xl md:text-4xl font-semibold">{tasks.length}</p>
      </div>
    </div>

    {/* CARD 2 */}
    <div className="relative w-full md:w-1/2 h-40 md:h-48 rounded-xl overflow-hidden
                    bg-[linear-gradient(90deg,#54cf67,#00827a)]">
      
      <img
        src={vector}
        alt=""
        className="absolute bottom-0 left-0 w-32 md:w-56 "
      />
      <img
        src={vector}
        alt=""
        className="absolute top-0 right-0 w-32 md:w-56  scale-x-[-1]"
      />

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
        <p className="text-xl font-bold md:text-base ">Completed</p>
        <p className="text-3xl md:text-4xl font-semibold">{resolved.length}</p>
      </div>
    </div>

  </div>
</div>





    

    
  );
};

export default MainBanner;