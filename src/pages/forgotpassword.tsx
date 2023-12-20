import React from 'react';

function Forgotpassword() {
  const handleSubmit = (event: { preventDefault: () => void; currentTarget: HTMLFormElement | undefined; }) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const jsonData = {
      email: data.get('email'),
    };

    fetch('http://localhost:3333/forgotpassword', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(jsonData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === 'ok') {
          window.location.href = '/';
          alert('request success');
        } else {
          alert('request failed');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div className="font-kanit">
      <div className="min-h-screen flex items-center justify-center text-lg">
        <div className=" sm:bg-cover sm:bg-center sm:w-3/5 sm:flex sm:items-center sm:justify-center">
          <img
            src="images/bangkok.png"
            alt="background"
            className=" object-cover"
          />
        </div>
        <div className="sm:w-2/5 p-8 bg-white">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col items-center mb-8">
              <div className="bg-white mb-4 overflow-hidden">
                <img src="/logo.png" alt="logo" className="w-full h-full" />
              </div>
              <h1 className="text-blue-900 font-semibold text-4xl">เปลี่ยนรหัสผ่าน</h1>
            </div>
            <div className='flex flex-col gap-4'>
            <p className='px-1'>อีเมล</p>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="อีเมล"
                className='w-full border p-2 border-gray-300 bg-gray-200 rounded-xl text-gray-900 px-3 py-2 focus:ring-blue-800 focus:border-blue-800 appearance-none relative block focus:z-10 focus:outline-none'
                required
              />
              <button
                type="submit"
                className="w-full bg-blue-800 text-white px-4 py-2  rounded-full"
              >
                ยืนยัน
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Forgotpassword;
