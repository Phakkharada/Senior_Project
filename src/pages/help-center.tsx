// PascalCase
const Faq: React.FC = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center p-5 gap-6 text-white text-xl">
      <h1 className="text-2xl text-black">ช่วยเหลือ</h1>
      <div className="flex flex-col w-3/5 bg-blue-800 p-4 rounded-xl gap-2">
        <p >สามารถซื้อตั๋วได้ที่ไหนบ้าง?</p>
        <span className=" text-lg">สามารถซื้อตั๋วได้ที่เคาน์เตอร์ขายตั๋ว หรือ ตู้ขายตั๋วอัตโนมัติ</span>
      </div>
      <div className="flex flex-col w-3/5 bg-blue-800 p-4 rounded-xl gap-2">
        <p >สามารถซื้อตั๋วล่วงหน้าได้หรือไม่?</p>
        <span className=" text-lg ">สามารถซื้อตั๋วล่วงหน้าได้ 30 วัน</span>
      </div>
      <div className="flex flex-col w-3/5 bg-blue-800 p-4 rounded-xl gap-2">
        <p>สามารถเปลี่ยนเวลาการเดินทางหรือไม่?</p>
        <span className=" text-lg ">สามารถเปลี่ยนเวลาการเดินทางได้ โดยติดต่อเจ้าหน้าที่ที่เคาน์เตอร์ขายตั๋ว</span>
      </div>
      <div className="flex flex-col w-3/5 bg-blue-800 p-4 rounded-xl gap-2">
        <p >สามารถเปลี่ยนสถานีต้นทางหรือปลายทางได้หรือไม่?</p>
        <span className=" text-lg ">สามารถเปลี่ยนสถานีต้นทางหรือปลายทางได้ โดยติดต่อเจ้าหน้าที่ที่เคาน์เตอร์ขายตั๋ว</span>
      </div>
      <div className="flex flex-col w-3/5 bg-blue-800 p-4 rounded-xl gap-2">
        <p >สามารถเปลี่ยนเส้นทางได้หรือไม่?</p>
        <span className=" text-lg">สามารถเปลี่ยนเส้นทางได้ โดยติดต่อเจ้าหน้าที่ที่เคาน์เตอร์ขายตั๋ว</span>
      </div>
    </div>
  )
}

export default Faq