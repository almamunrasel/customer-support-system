import React, { use,useEffect } from 'react';
import CTicket from '../CTicket/CTicket';

const CTickets = ({cTicketsPromises,tasks,setTasks,customertickets,setcustomerTickets}) => {
 
  const tickets =use(cTicketsPromises);
   useEffect(() => {
    setcustomerTickets(tickets);
  }, [tickets, setcustomerTickets]);
  
 

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-x-7'>

      {customertickets.length===0? <h1 className='mt-20 text-center text-4xl'>there is no ticket to do work</h1> :
      
        customertickets.map(ticket => <CTicket tasks={tasks}  setTasks={setTasks} ticket={ticket} key={ticket.id}></CTicket>)
      }
      
    </div>
  );
};

export default CTickets;


