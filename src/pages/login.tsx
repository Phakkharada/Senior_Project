import { NextPage } from "next";
import React from "react";
import Link from "next/link";
import { } from '@heroicons/react/24/solid'
import { MapIcon, TicketIcon, ChevronLeftIcon, ChevronRightIcon, BanknotesIcon } from "@heroicons/react/24/outline";
import Card from "@/components/Card";
import cx from "classnames";
import { useEffect } from "react";
import { BiSupport } from "react-icons/bi";

const HomePage: NextPage = () => {
  const [idx, setIdx] = React.useState(1)


  useEffect(() => {
    const interval = setInterval(() => {
      setIdx((idx) => {
        if (idx === 3) return 1
        return idx + 1
      })
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const token = localStorage.getItem('token')
    fetch("http://localhost:3333/authen", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+token,
      },
    })
      .then((response) => response.json())
      .then(data => {
        if (data.status === 'ok') {
          //alert('authen sucecss')
        } else {
          alert('authen failed')
          window.location.href = "/";
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  },[])





  return (
    <div>

      <div className="items-center w-full justify-center">
        <div className="relative gap-4">
          <div className="flex justify-center">
            {/*<img src="/images/booking.png" alt="" />*/}
            <img src={`/images/${idx}.png`} alt={`สาย ${idx}`} className="w-full object-cover relative contrast-75 transition-transform" data-carousel="slide" />
            <button onClick={() => {
              if (idx === 1) return
              setIdx(idx - 1)
            }} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-2xl rounded-full p-2 bg-black/20 cursor-pointer hover:animate-ping">
              <ChevronLeftIcon className="w-10 h-10 text-white " />
            </button>
            <button onClick={() => {
              if (idx === 3) return
              setIdx(idx + 1)
            }} className="absolute right-4 top-1/2 transform -translate-y-1/2 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer hover:animate-ping">
              <ChevronRightIcon className="w-10 h-10 text-white " />
            </button>
            <h1 className={
              cx(" text-center text-3xl text-white",
                "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col gap-3"
              )}>การเดินทางที่คุณสามารถเลือกเองได้ <span className="text-2xl">จองง่ายจ่ายสะดวก</span></h1>
            <div className="flex items-center absolute bottom-0 gap-6 top-1/3">
              <Link href="/maps">
                <button className={cx(
                    "z-10 text-center text-3xl text-white ",
                  )}
                >
                  <div className="flex flex-col rounded-lg shadow-lg bg-blue-800 w-36 h-12 p-3 z-10 ">
                    <span className="text-center text-bold text-lg text-white hover:text-blue-600">แผนที่</span>
                  </div>
                </button>
              </Link>
              <Link href="/tickets">
                <button
                  className={cx(
                    "z-10 text-center text-3xl text-white ",
                  )}
                >
                  <div className="flex flex-col rounded-lg shadow-lg bg-blue-800 w-36 h-12 p-3  z-10">
                    <span className="text-center text-bold text-lg text-white hover:text-blue-600">ซื้อบัตรโดยสาร</span>
                  </div>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-12">
        <div className="flex justify-center items-center ">
          <div className="flex w-full flex-col bg-gray-700 justify-center overflow-hidden">
            <h1 className="text-center text-2xl bg-blue-800 text-white p-4">การบริการของพวกเรา</h1>
            <div className="">

            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="flex flex-col gap-4 w-3/4">
            <h1 className="text-xl m-2">ข่าวสารและกิจกรรม</h1>
            <div className="grid grid-cols-2 gap-4">
              <Link href='/login'>
              <div className="flex flex-col gap-2">
                <img src="/images/open-firstday.png" alt="" width="50%" height="auto" />
                <h2 className="text-semibold">ข่าวด่วน! อัพเดทรถไฟฟ้า 20 บาทตลอดสาย</h2>
                <p className="text-gray-600">ในที่สุด, บริการรถไฟฟ้าในเมืองไทยได้เข้าสู่ยุคใหม่! ตั้งแต่วันนี้เป็นต้นไป, นั่นคือข่าวดีสำหรับผู้ใช้บริการรถไฟฟ้าทุกคน - ราคาตั๋วเพียง 20 บาทเท่านั้นตลอดสาย!</p>
              </div>
              </Link>
              <Link href='/login'>
                <div className="flex flex-col gap-2">
                <img src="/images/register.png" alt="" width="50%" height="auto" />
                  <h2>รถไฟฟ้าสามารถทำการจองและชำระผ่านช่องทางออนไลน์ได้</h2>
                <p className="text-gray-600">ชำระเงินอย่างปลอดภัย การชำระเงินทำได้โดยสะดวกผ่านช่องทางออนไลน์ที่เป็นมาตรฐาน ทำให้คุณมั่นใจได้ในความปลอดภัยของข้อมูลการชำระเงินของคุณทุกครั้ง</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex justify-center p-4">
          <div className="grid grid-cols-2 w-3/4">
            <div className="rounded">
            <img src="/images/booking.png" alt="booking"  className="w-4/5"/>
            </div>
            <div className="flex justify-center flex-col gap-6 items-center">
              <h1 className="text-xl">ทำไมถึงต้องเลือกพวกเรา</h1>
             <p>สะดุดตา สะท้านใจ! ยินดีต้อนรับสู่โลกที่ไปมาได้ทุกที่ด้วย Bangkok Transit System (BTS) เว็บไซต์ที่จะทำให้คุณเดินทางในกรุงเทพฯ กลายเป็นประสบการณ์ที่ลงตัวทุกครั้ง ด้วยบริการรถไฟฟ้าทันสมัยที่ปลอดภัยและสะดวกสบาย พร้อมข้อมูลอัพเดทล่าสุดเกี่ยวกับตารางการเดินรถ และสิ่งที่น่าสนใจรอบตัวเพื่อให้คุณได้ผ่อนคลายและตื่นเต้นกับการเดินทางของคุณทุกวัน! มาเป็นส่วนหนึ่งของการเดินทางที่ทันสมัยกับ BTS วันนี้!</p>
              <div className="flex gap-4">
                <div className="flex flex-col justify-center items-center shadow-lg p-2 rounded-sm w-44">
                  <MapIcon className="w-20 h-20 text-blue-700 items-center"/>
                  <p className="text-center font-medium">มีสถานีครบครัน</p>
                </div>
                <div className="flex flex-col justify-center items-center shadow-lg p-2 rounded-sm w-44">
                  <BanknotesIcon className="w-20 h-20 text-blue-700 items-center"/>
                  <p className="text-center">ราคาย่อมเยาว์</p>
                </div>
                <div className="flex flex-col justify-center items-center shadow-lg p-2 rounded-sm w-44">
                  <BiSupport className="w-20 h-20 text-blue-700 items-center"/>
                  <p className="text-center">24/7 ซัพพอร์ต</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default HomePage;
