import Link from 'next/link';
import React from 'react';

export default function SignUp() {
  const handleSubmit = (event: { preventDefault: () => void; currentTarget: HTMLFormElement | undefined; }) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const jsonData = {
      email: data.get('email'),
      password: data.get('password'),
      fname: data.get('firstName'),
      lname: data.get('lastName'),
    };
    fetch('http://localhost:3333/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(jsonData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === 'ok') {
          alert('register success');
          window.location.href = '/';
        } else {
          alert('register failed');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 text-lg">
      <div className="max-w-md w-full">
        <div className="flex flex-col items-center">
          <div className="bg-white mb-2 overflow-hidden">
            <img src="/logo.png" alt="logo" className="w-full h-full" />
          </div>
          <h1 className="text-center text-blue-900 text-4xl font-bold mb-2">ลงทะเบียน</h1>
          <p className='text-center mt-2'>สร้างบัญชีของคุณ เพื่อความสะดวกสบายในการจองตั๋วของคุณ</p>
        </div>
        <form className='flex flex-col items-center gap-6 text-xl' onSubmit={handleSubmit}>
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="flex flex-col gap-4 rounded-md shadow-sm mt-2 w-full">
            <div>
              <p className='px-1 mb-2'>ชื่อผู้ใช้</p>
              <input
                id="firstName"
                name="firstName"
                type="text"
                autoComplete="given-name"
                required
                className='w-full border p-2 border-gray-300 bg-gray-200 rounded-xl text-gray-900 px-3 py-2 focus:ring-blue-500 focus:border-blue-500 appearance-none relative block focus:z-10 focus:outline-none'
                placeholder="ชื่อ"
              />
            </div>
            <div>
            <p className='px-1 mb-2'>นามสกุล</p>
              <input
                id="lastName"
                name="lastName"
                type="text"
                autoComplete="family-name"
                required
                className='w-full border p-2 border-gray-300 bg-gray-200 rounded-xl text-gray-900 px-3 py-2 focus:ring-blue-500 focus:border-blue-500 appearance-none relative block focus:z-10 focus:outline-none'
                placeholder="นามสกุล"
              />
            </div>
            <div>
            <p className='px-1 mb-2'>อีเมล</p>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className='w-full border p-2 border-gray-300 bg-gray-200 rounded-xl text-gray-900 px-3 py-2 focus:ring-blue-500 focus:border-blue-500 appearance-none relative block focus:z-10 focus:outline-none'
                placeholder="กรอกอีเมลของคุณ"
              />
            </div>
            <div>
            <p className='px-1 mb-2'>รหัสผู้ใช้</p>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                required
                className='w-full border p-2 border-gray-300 bg-gray-200 rounded-xl text-gray-900 px-3 py-2 focus:ring-blue-500 focus:border-blue-500 appearance-none relative block focus:z-10 focus:outline-none'
                placeholder="รหัสของคุณ"
              />
            </div>
          </div>
          <button
              type="submit"
              className="w-full bg-blue-800 text-white px-4 py-2 rounded-full"
            >
              ยืนยันข้อมูล
            </button>
        </form>
        <div className="text-center mt-4">
          <Link href="/" className=" text-blue-900 hover:text-blue-500">
            มีบัญชีอยู่แล้ว? เข้าสู่ระบบ
          </Link>
        </div>
      </div>
    </div>
  );
}
