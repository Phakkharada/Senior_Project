
import React, { useState, useEffect } from 'react';
import Card from '@/components/Card';
import { ArrowLongRightIcon, TicketIcon } from '@heroicons/react/24/outline';
import { stations } from '@/utils/data'


interface Ticket {
  stationFrom: string,
  stationTo: string,
  date: string,
  payment: string,
  ticketCount: number,
  price: number,
}

const Tickets: React.FC = () => {
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [openModalIndex, setOpenModalIndex] = useState<number | null>(null);

  useEffect(() => {
    // Fetch tickets from localStorage on the client side
    const storedTickets = JSON.parse(localStorage.getItem('tickets') || '[]') as Ticket[];
    setTickets(storedTickets);
  }, []); // Run this effect only once after the initial render

  const handleOpen = (index: number) => setOpenModalIndex(index);
  const handleClose = () => setOpenModalIndex(null);
  
  const translatePaymentMethod = (paymentMethod: string) => {
    // ในกรณีนี้คุณสามารถเพิ่มเงื่อนไขในการแปลภาษาตามต้องการ
    switch (paymentMethod) {
      case 'creditcard':
        return 'บัตรเครดิต';
      case 'banktransfer':
        return 'โอนเงินผ่านธนาคาร';
      case 'promtpay':
        return 'พร้อมเพย์';
      // เพิ่มเงื่อนไขเพิ่มเติมตามความต้องการ
      default:
        return paymentMethod;
    }
  };

  useEffect(() => {
    const token = localStorage.getItem('token')
    fetch(`http://localhost:3333/showtickets?token=${token}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then(data => {
        setTickets(data.results)
        if (data.status === 'ok') {
          //alert('authen sucecss')
        } else {
          alert('authen failed')
          window.location.href = "/login";
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  },[tickets])


  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <Card>
        <div className="items-center w-full justify-center">
          <div className="relative">
            <img src="ticket.png" alt="ticket" className="w-full contrast-75" />
          </div>
        </div>
      </Card>
      <div className="flex flex-col items-center">
        <div className="flex gap-4">
          <TicketIcon className="h-14 w-14 text-red-500 " />
          <span className="text-black text-2xl m-3">ตั๋วของฉัน</span>
        </div>
        <img src="Line.png" alt="line" />
      </div>

      <div className="grid grid-cols-4 gap-6 w-3/4 text-base" >
        {tickets.map((ticket, idx) => (
          <button className="w-full text-white justify-center" key={idx} onClick={() => handleOpen(idx)}>
            <div className="w-full justify-center items-center">
              <div className="items-center justify-center gap-4">
                <div key={idx} className="rounded-md gap-4 text-center text-white bg-blue-800">
                  <h3 className="p-2 flex justify-evenly">{
                    stations.find((station) => station.id === ticket.stationFrom)?.name.th
                  } <ArrowLongRightIcon className='w-7' /> {
                      stations.find((station) => station.id === ticket.stationTo)?.name.th
                    }</h3>
                  <div className="flex flex-col w-full bg-gray-300 items-center gap-2 text-gray-800 p-2">
                    <p>จำนวน {ticket.ticketCount} ที่นั่ง</p>
                    <p>ชำระเงินโดย {translatePaymentMethod(ticket.payment)}</p>
                    <p>วันที่เดินทาง {ticket.date}</p>
                  </div>
                  <p className="p-2">Price: {ticket?.price || 0}</p>
                </div>
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Modals */}
      {tickets.map((ticket, idx) => (
        <div key={idx}>
          {openModalIndex === idx && (
            <div className="fixed inset-0 z-20 flex h-full w-full items-center justify-center bg-black bg-opacity-50 text-lg shadow-lg transition-all duration-500 opacity-100" aria-labelledby="modal-title" role="dialog" aria-modal="true">
              {<div className="w-3/5 rounded-lg">
                <div className="w-full text-white justify-center" key={idx}>
                  <div className="w-full justify-center items-center">
                    <div className="items-center justify-center gap-4">
                      <div key={idx} className="rounded-md gap-4 text-center text-white bg-blue-900">
                        <h3 className="p-2 flex items-center justify-evenly">{
                          stations.find((station) => station.id === ticket.stationFrom)?.name.th
                        } <ArrowLongRightIcon className='w-9' />  {
                            stations.find((station) => station.id === ticket.stationTo)?.name.th
                          }</h3>
                        <div className="grid grid-cols-2 justify-center bg-gray-300 items-center text-gray-800 p-2">
                          <div className='flex flex-col gap-4'>
                            <p>จำนวน {ticket.ticketCount} ที่นั่ง</p>
                            <p>ชำระเงินโดย {translatePaymentMethod(ticket.payment)}</p>
                            <p>วันที่เดินทาง {ticket.date}</p>
                          </div>
                          <div className='flex items-center justify-center'>
                            <img className="w-52 h-52" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/1200px-QR_code_for_mobile_English_Wikipedia.svg.png" alt="qr" />
                          </div>
                        </div>
                        <div className='flex justify-between p-2 text-center'>
                          <p className="px-2 py-2">Price: {ticket?.price || 0}</p>
                          {/* Button to open the modal */}
                          <button
                            type="button"
                            onClick={() => handleClose()}
                            className=" rounded-lg border border-transparent text-white py-2 px-2"
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              }
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Tickets;