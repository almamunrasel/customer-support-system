import React from 'react';
import circle from '../../assets/circle.png';
import calsign from '../../assets/ri_calendar-line.png'
import yellow from '../../assets/yellow-circle.png'
import { toast } from 'react-toastify';

const CTicket = ({ticket,tasks,setTasks}) => {


  // setcTickets([...ctickets,ticket]);

  const handleSelected=(ticketData)=>{
    setTasks([...tasks,ticketData]);
    toast("added to task queue");
  }
  return (
    
    
      <div onClick={()=>handleSelected(ticket)} className='mt-5 bg-gray-100 border-gray-500 rounded-2xl p-2 shadow cursor-pointer'>
        <div className='flex justify-between items-center'>
            <h1 className='font-semibold'>{ticket.title}</h1>
            <div className={`flex gap-2 items-center  px-4  py-1  rounded-2xl ${ticket.status==="Open"? "bg-[#B9F8CF]":"bg-[#F8F3B9]"}`}>
              <img className='w-3 h-3 ' src={ticket.status==="Open"?circle:yellow} alt="" />
              <span>{ticket.status}</span>
            </div>
          
        </div>
        <p className='text-xs font-light mt-3'>Customer is unable to log in to their account. They've tried resetting their password multiple times but still...</p>
        <div className='flex justify-between items-center text-xs mt-3'>
          <div className='flex justify-between items-center gap-3'>
            <p>#{ticket.id}</p>
            <p> {ticket.priority} priority</p>
          </div>
          <div  className='flex justify-between items-center gap-3'>
            <p>{ticket.customer_name}</p>
            <div className='flex items-center'>
              <img className='w-3 h-3' src={calsign} alt="" />
              <span>{ticket.created_at}</span>
            </div>
          </div>
          
        </div>
      </div>
    
    
  );
};

export default CTicket;