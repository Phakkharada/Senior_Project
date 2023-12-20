import { useState } from 'react';

export default function Home() {
  // State to handle modal visibility
  const [isOpen, setIsOpen] = useState(false);

  // Function to open the modal
  const handleOpen = () => setIsOpen(true);
  
  // Function to close the modal
  const handleClose = () => setIsOpen(false);

  return (
    <div>
      {/* Button to open the modal */}
      <button onClick={handleOpen} className="py-2 px-4 bg-blue-500 text-white rounded">Open Modal</button>

      {/* Modal will only be visible if isOpen is true */}
      {isOpen && (
        <div className="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>

            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

            {/* Modal content */}
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    {/* Modal title */}
                    <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                      Modal Title
                    </h3>
                    <div className="mt-2">
                      {/* Modal text */}
                      <p className="text-sm text-gray-500">
                        Your modal content goes here.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                {/* Button to close the modal */}
                <button type="button" className="mt-3 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm" onClick={handleClose}>
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
{/*<div className="grid grid-cols-4 gap-4 w-3/4">
        {tickets.map((ticket, idx) => (
          <div className="w-full text-white justify-center" key={idx}>
            <div className="w-full justify-center items-center">
              <div className="items-center justify-center gap-4">
                <div key={idx} className="rounded-md gap-4 text-center text-white bg-slate-400">
                  <h3 className="p-2">{ticket.stationFrom} to {ticket.stationTo}</h3>
                  <div className="flex flex-col w-full bg-gray-300 items-center gap-2 text-gray-800 p-2">
                    <p>จำนวน {ticket.ticketCount} ที่นั่ง</p>
                    <p>วันที่เดินทาง {ticket.date}</p>
                  </div>
                  <p className="p-2">Price: {ticket?.price || 0}</p>
                  {/* Button to open the modal */}
                  {/*<button
                    onClick={() => handleOpen(idx)}
                    className="py-2 px-4 bg-blue-500 text-white rounded"
                  >
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
        </div>
        */}