import React from 'react';
import twit from '../../assets/fi_5969020.png'
import linkedin from '../../assets/fi_145807.png'
import fb from '../../assets/fi_5968764.png'
import message from '../../assets/fi_6244710.png'

const Footer = () => {
  return (
    <div className='bg-black'>
      <div className='footer-container max-w-300  mx-auto flex justify-around mt-10 text-white py-20'>
        <div className='w-[20%]'>
          <h1>CS-- Ticket System</h1>
          <p className='text-[#a1a1aa] text-sm mt-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

        </div> 
        <div>
          <h1>Company</h1>
          <ul className='text-[#a1a1aa] text-sm mt-2'>
            <li><a href="">About Us</a></li>
            <li><a href="">Our Mission</a></li>
            <li><a href="">Contact Saled</a></li>
          </ul>
        </div>
        <div>
          <h1>Services</h1>
          <ul className='text-[#a1a1aa] text-sm mt-2'>
            <li><a href="">Products and Service</a></li>
            <li><a href="">Customer Stories</a></li>
            <li><a href="">Download Apps</a></li>
          </ul>
        </div>
        <div>
          <h1>Information</h1>
          <ul className='text-[#a1a1aa] text-sm mt-2'>
            <li><a href="">Privacy Policy</a></li>
            <li><a href="">Terms and Conditions</a></li>
            <li><a href="">Join Us</a></li>
          </ul>
        </div>
        <div>
          <h1>Social Links</h1>
          <ul className='text-[#a1a1aa] text-sm mt-2'>
            <li className='flex items-center mt-2'><img className='w-4 h-4'src={twit} alt="" /> <span>@CS-- Ticket System</span></li>
            <li className='flex items-center mt-2'><img className='w-4 h-4'src={linkedin} alt="" /> <span>@CS-- Ticket System</span></li>
            <li className='flex items-center mt-2'><img className='w-4 h-4'src={fb} alt="" /> <span>@CS-- Ticket System</span></li>
             <li className='flex items-center mt-2'><img className='w-4 h-4'src={message} alt="" /> <span>support@cst.com</span></li>
            
          </ul>
        </div>



      </div>
      
    </div>
  );
};

export default Footer;