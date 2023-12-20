import React, { useState, useEffect } from "react";
const ContactUs = () => {

  const [tokens, setToken] = useState();
  const containerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '67vh',
  };
  useEffect(() => {
    const token: any = localStorage.getItem('token');
    setToken(token)
  }, []);

  const handleSubmit = (event: { preventDefault: () => void; currentTarget: HTMLFormElement | undefined; }) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const jsonData = {
      name: data.get("name"),
      email: data.get('email'),
      message: data.get('message'),
      token: tokens,
    };
    console.log(jsonData)
    fetch('http://localhost:3333/contactus', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(jsonData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === 'ok') {
          alert('contact success');
          window.location.href = '/login';
        } else {
          alert('contact failed');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div style={containerStyle}>
      <div className="flex justify-center mt-10 w-full">
        <div className="flex w-1/3 flex-col rounded-xl bg-gray-300  gap-3">
          <h1 className="text-center text-xl font-medium bg-blue-800 text-white p-3 rounded-lg">ติดต่อเรา</h1>
          <div className="flex flex-col p-4 gap-4">
            <form className="flex flex-col gap-6 text-lg" onSubmit={handleSubmit}>
              <div className="flex items-center gap-4">
                <span className="w-20 text-center"> ชื่อ</span>
                <input type="text" id="name" name="name" className="flex-1 rounded-lg p-2 px-4 outline-none" placeholder="กรอกชื่อของคุณ" />
              </div>
              <div className="flex items-center gap-4">
                <span className="w-20 text-center">อีเมล</span>
                <input type="text" id="email" name="email" className="flex-1 rounded-lg p-2 px-4 outline-none" placeholder="กรอกอีเมลของคุณ" />
              </div>
              <div className="flex items-center gap-4">
                <span className="w-20 text-center">ข้อความ</span>
                <textarea id="message" name="message" className="flex-1 rounded-lg p-2 px-4 outline-none" placeholder="กรอกข้อความของคุณ" />
              </div>
              <div className="flex items-center gap-4 justify-center">
                <button type="submit" className=" bg-blue-800 rounded-lg p-1 w-full text-white">ส่งข้อความ</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>


  )
}

export default ContactUs