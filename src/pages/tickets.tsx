import { MinusCircleIcon, PlusCircleIcon, TicketIcon, CalendarIcon, ArrowPathIcon, QrCodeIcon, CreditCardIcon, BanknotesIcon, ArrowRightIcon, CurrencyDollarIcon, InformationCircleIcon } from "@heroicons/react/24/outline"
import { TbTrain } from "react-icons/tb";
import React, { useState, useEffect } from "react";
import cx from "classnames";
import { useRouter } from "next/router";
import { lines, calculateNumberOfStationsBetweenStations, uuid } from "@/utils/data";
import Card from "@/components/Card";


export default function Tickets() {
  // console.log(lines)
  const router = useRouter();
  const [isopen, setIsopen] = React.useState(false);
  const [isFrom, setIsFrom] = React.useState(false);
  const [line, setLine] = React.useState("");
  // id
  const [stationFrom, setStationFrom] = React.useState("");
  // id
  const [stationTo, setStationTo] = React.useState("");

  console.log(stationFrom, stationTo)
  // dd/mm/yyyy
  const [date, setDate] = React.useState(new Date().toISOString().slice(0, 10));
  const [dateNow , setDatenow] = React.useState(new Date().toISOString().slice(0, 10));
  const [payment, setPayment] = React.useState("");
  const [step, setStep] = React.useState(1);
  /**
   * if (station !== "") {
   *  show station
   * } else {
   * show palceholder
   * }
   * 
   * station !== "" ? show station : show placeholder
   */
  const [isDetailsVisible, setIsDetailsVisible] = useState(false);
  const toggleDetails = () => {
    setIsDetailsVisible(!isDetailsVisible);
  };


  const swapStation = () => {
    const rest = stationFrom;
    setStationFrom(stationTo);
    setStationTo(rest);
  }
  const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
  
  // save data to localstorage as array of ticket
  const handleSave = () => {
    // declare dto for save to localstorage
    const dto = {
      stationFrom,
      stationTo,
      date,
      payment,
      ticketCount,
      price: 20 * ticketCount,
      token: token
    }
    fetch("http://localhost:3333/tickets", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({dto})
    })
      .then((response) => response.json())
      .catch((error) => {
        console.error('Error:', error);
      });


    // redirect to home page
    router.push('/booking');

    
  }

  // const lines = [
  //   {
  //     id: "bts-sukhumvit",
  //     color: "bg-green-600",
  //     name: "สายสุขุมวิท",
  //     stations: [
  //       {
  //         id: 'CEN',
  //         name: 'สยาม',
  //       },
  //       {
  //         id: 'N1',
  //         name: 'ราชเทวี',
  //       },
  //       {
  //         id: 'N2',
  //         name: 'พญาไท',
  //       },
  //       {
  //         id: 'N3',
  //         name: 'อนุสาวรีย์ชัยสมรภูมิ',
  //       },
  //       {
  //         id: 'N4',
  //         name: 'สนามเป้า',
  //       },
  //       {
  //         id: 'N5',
  //         name: 'อารีย์',
  //       },
  //       {
  //         id: 'N6',
  //         name: 'เสนาร่วม',
  //       },
  //       {
  //         id: 'N7',
  //         name: 'สะพานควาย',
  //       }
  //     ]
  //   },
  //   {
  //     id: "bts-silom",
  //     color: "bg-green-700",
  //     name: "สายสีลม",
  //     stations: [
  //       {
  //         id: 'W1',
  //         name: "สนามกีฬาแห่งชาติ",
  //       }
  //     ]
  //   },
  //   {
  //     id: "mrt-blue",
  //     color: "bg-blue-900",
  //     name: "สายสีน้ำเงิน"
  //   },
  //   {
  //     id: "arl-airport",
  //     color: "bg-red-700",
  //     name: "สายแอร์พอร์ท เรล ลิงก์"
  //   },
  //   {
  //     id: "mrt-purple",
  //     color: "bg-purple-600",
  //     name: "สายสีม่วง"
  //   },
  //   {
  //     id: "bts-gold",
  //     color: "bg-amber-500",
  //     name: "สายสีทอง"
  //   },
  //   {
  //     id: "srt-dark-red",
  //     color: "bg-red-700",
  //     name: "สายสีแดงเข้ม"
  //   },
  //   {
  //     id: "srt-light-red",
  //     color: "bg-red-500",
  //     name: "สายสีแดงอ่อน"
  //   },
  //   {
  //     id: "mrt-yellow",
  //     color: "bg-yellow-500",
  //     name: "สายสีเหลือง"
  //   },
  //   {
  //     id: "mrt-pink",
  //     color: "bg-pink-600",
  //     name: "สายสีชมพู"
  //   },
  //   {
  //     id: "mrt-orange",
  //     color: "bg-orange-600",
  //     name: "สายสีส้ม"
  //   },
  // ];

  const payments = [
    {
      id: "promtpay",
      icon: <QrCodeIcon className="w-6 h-6 text-blue-800 " />,
      name: 'พร้อมเพย์',
    },
    {
      id: "creditcard",
      icon: <CreditCardIcon className="w-6 h-6 text-blue-800 " />,
      name: "บัตรเครดิต",
    },
    {
      id: "banktransfer",
      icon: <BanknotesIcon className="w-6 h-6 text-blue-800" />,
      name: "โอนผ่านธนาคาร"
    }
  ];

  const [ticketCount, setTicketCount] = React.useState(1);

  const incrementTicketCount = () => {
    setTicketCount(ticketCount + 1);
  };

  const decrementTicketCount = () => {
    if (ticketCount > 1) {
      setTicketCount(ticketCount - 1);
    }
  };

  useEffect(() => {
    // console.log(token)
  },[])





  return (
    <React.Fragment>
      {isopen && (
        // modal componentonClick={() => setIsopen(false)}
        <div
          className="fixed z-10 inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center"

        >
          <div
            className="bg-white w-2/3 h-3/5 p-8 rounded-lg flex flex-col gap-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-nowrap gap-4 overflow-x-auto">
              {lines.map((l, idx) => {
                return (
                  <button
                    key={idx}
                    className={cx("flex shrink-0 px-4 py-2 rounded-full text-white",
                      l.color,
                      l.id === line && 'border-2 border-black'
                    )}
                    style={{
                      backgroundColor: l.color
                    }}
                    onClick={() => setLine(l.id)}
                  >
                    <span>
                      {(l.name.th)}
                    </span>
                  </button>
                )
              })}
            </div>
            <div className="grid grid-cols-4 gap-4">
              {
                lines.find((l) => l.id === line)?.stations?.map((s) => {
                  return (
                    <button
                      key={s.id}
                      className="px-4 py-2 rounded-full text-white bg-gray-400"
                      onClick={() => {

                        isFrom ? setStationFrom(s.id) : setStationTo(s.id)
                        setIsopen(false)
                      }}
                    >
                      {s.name.th} ({s.id})
                    </button>
                  )
                })
              }
            </div>
          </div>
        </div>
      )}

      <div>
        <Card>
          <div className="items-center w-full justify-center">
            <div className="relative">
              <img src="ticket.png" alt="ticket" className="w-full contrast-75" />
            </div>
          </div>
        </Card>
      </div>

      <main className="w-full">
        <div className="flex flex-col gap-4 items-center">
          <div className="flex flex-col items-center">
            <div className="flex gap-4 m-2">
              <TicketIcon className="h-14 w-14 text-red-500 " />
              <span className="text-black text-2xl m-3">ซื้อบัตรโดยสาร</span>
            </div>
            <img src="Line.png" alt="line" />
          </div>

          <div className="flex w-3/4 flex-col rounded-xl bg-gray-300 justify-center overflow-hidden m-2 ">
            <h1 className="text-center text-2xl font-bold bg-blue-800 text-white p-4">{
              step === 1 ? "เลือกสายที่ต้องการ" : step === 2 ? "ตรวจสอบข้อมูล" : step === 3 ? 'ยืนยันข้อมูล' : ''
            }</h1>
            <div className="flex flex-col p-7">
              {
                step === 1 &&
                <div className="flex flex-col gap-7 m-2 text-lg items-center w-full">
                  <div className="flex gap-10 w-full">
                    <div className="flex flex-1 flex-col items-center gap-4">
                      <div className="flex w-full h-full items-center gap-8 justify-between">
                        <span className="shrink-0">ต้นทาง</span>
                        <button
                          className="rounded flex"
                          onClick={() => {
                            setIsopen(true)
                            setIsFrom(true)
                          }}
                        >
                          {stationFrom !== "" ?
                            <span>
                              {
                                lines.find((l) => l.stations.find((s) => s.id === stationFrom))?.stations.find((s) => s.id === stationFrom)?.name.th
                              }
                            </span>
                            :
                            <span>
                              กรุณาเลือกสถานี
                            </span>
                          }
                        </button>
                        <TbTrain className="h-6 w-6 " />
                      </div>
                      <div className="flex h-1/2 w-full items-center gap-8 justify-between">
                        <span className="shrink-0 ">วันที่เดินทาง</span>
                        <input min={dateNow} type="date" className="bg-gray-300" value={date} onChange={
                          (e) => setDate(e.target.value)
                        } />
                        <CalendarIcon className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="flex w-10 flex-col items-center p-1">
                      <button onClick={swapStation}>
                        <ArrowPathIcon className="h-5 w-5 text-blue-600 hover:animate-spin hover:text-blue-700" />
                      </button>
                    </div>
                    <div className="flex flex-1 flex-col items-center gap-4">
                      <div className="flex h-1/2 items-center gap-8 w-full justify-between">
                        <span className="shrink-0">ปลายทาง</span>
                        <button
                          className=" rounded flex"
                          onClick={() => {
                            setIsopen(true)
                            setIsFrom(false)
                          }}
                        >
                          {stationTo !== "" ?
                            <span>
                              {
                                lines.find((l) => l.stations.find((s) => s.id === stationTo))?.stations.find((s) => s.id === stationTo)?.name.th
                              }
                            </span>
                            :
                            <span>
                              กรุณาเลือกสถานี
                            </span>
                          }
                        </button>
                        <TbTrain className="h-6 w-6 " />
                      </div>
                      <div className="flex h-1/2 w-full items-center gap-6 justify-between">
                        <span className="shrink-0">จำนวน</span>
                        <button className="text-black" onClick={decrementTicketCount}>
                          <MinusCircleIcon className="h-6 w-6 " />
                        </button>
                        <span className="bg-gray-300">
                          {ticketCount}
                        </span>
                        <button onClick={incrementTicketCount}>
                          <PlusCircleIcon className="h-6 w-6 " />
                        </button>
                        <div >
                          <TicketIcon className="h-6 w-6" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <button className="flex justify-center  bg-blue-800 rounded-lg p-1  text-white w-11/12 disabled:opacity-50 hover:bg-sky-900"
                    disabled={stationFrom === "" || stationTo === "" || date === "" || ticketCount === 0}
                    onClick={() => setStep(2)}
                  >
                    ทำการจอง
                  </button>
                </div>}
              {
                step === 2 && (
                  <div className="flex flex-col gap-5 m-2 items-center text-lg">
                    <div className="flex flex-col gap-4 w-full">
                      <div className="flex flex-col gap-8 m-2 items-center text-lg">
                        <div className="grid grid-cols-2 w-full">
                          <div className="flex flex-col items-center justify-around">
                            <div className="flex gap-8 items-center w-full">
                              <div className="flex items-center flex-1">
                                <div className="flex gap-3 flex-1 items-center justify-evenly">
                                  <TbTrain className="h-6 w-6 text-blue-800 " />
                                  <div className="flex flex-col gap-1 text-center">
                                  <span>{
                                    lines.find((l) => l.stations.find((s) => s.id === stationFrom))?.stations.find((s) => s.id === stationFrom)?.name.th
                                  } 
                                  </span>
                                  ({stationFrom})
                                  </div>
                                </div>
                              </div>
                              <ArrowRightIcon className="h-6 w-6 text-blue-800" />
                              <div className="flex items-center flex-1">
                                <div className="flex gap-3 items-center flex-1 justify-evenly">
                                  <div className="flex flex-col gap-1 text-center">
                                  <span>{
                                    lines.find((l) => l.stations.find((s) => s.id === stationTo))?.stations.find((s) => s.id === stationTo)?.name.th
                                  } </span>
                                  ({stationTo})
                                  </div>
                                  <TbTrain className="h-6 w-6 text-blue-800" />
                                </div>
                              </div>
                            </div>
                            <button className="flex gap-2 items-center" onClick={toggleDetails}>
                              <span className="text-sm text-gray-700">คลิกเพื่อดูรายละเอียดการเดินทาง</span>
                              <InformationCircleIcon className="h-5 w-5 text-gray-700" />
                              {/* แสดงรายละเอียดเมื่อ isDetailsVisible เป็น true */}
                              {isDetailsVisible && (
                                <div>
                                  <div className="fixed inset-0 z-20 flex h-full w-full items-center justify-center bg-black bg-opacity-50 text-lg shadow-lg transition-all duration-500 opacity-100" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                                    <div className="flex flex-col gap-6 rounded-2xl border border-gray-500 bg-white p-8 w-3/6">
                                      <span className="text-left">รายละเอียดการเดินทาง</span>
                                      <div className="flex flex-wrap items-center gap-2 justify-center">
                                        {
                                          calculateNumberOfStationsBetweenStations(stationFrom, stationTo).path.map((p, idx) => (
                                            idx !== calculateNumberOfStationsBetweenStations(stationFrom, stationTo).path.length - 1 ? 
                                              <div key={idx} className="flex flex-wrap gap-2 items-center">
                                                <div className="rounded w-12 aspect-square bg-gray-300 flex justify-center items-center gap-2">
                                                  {p} 
                                                </div>
                                                <ArrowRightIcon className="h-6 w-6 text-blue-800" />
                                              </div>
                                              :
                                              <div key={idx} className="rounded w-12 aspect-square p-2 bg-gray-300 flex justify-center items-center gap-2">
                                                {p}
                                              </div>
                                          ))
                                        }
                                      </div>
                                      <div>
                                        จำนวนสถานีที่ต้องเปลี่ยนสาย: {calculateNumberOfStationsBetweenStations(stationFrom, stationTo).numberOfInterchanges}
                                      </div>
                                      <div>
                                        จำนวนสถานีที่ผ่าน: {calculateNumberOfStationsBetweenStations(stationFrom, stationTo).numberOfStations}
                                      </div>
                                    </div>
                                  </div>
                                  <button
                                    onClick={() => setIsDetailsVisible(false)} // ปุ่มเพื่อซ่อนรายละเอียด
                                  >
                                  </button>
                                </div>
                              )}
                            </button>

                            <div className="flex gap-x-12 items-center justify-center">
                              <div className="flex gap-3 items-center">
                                <CalendarIcon className="h-6 w-6 text-blue-800" />
                                <span>{date}</span>
                              </div>
                              <div className="flex items-center gap-3">
                                <TicketIcon className="w-6 h-6 text-blue-800" />
                                <span className="shrink-0">จำนวน {ticketCount} ใบ</span>
                              </div>
                              <div className="flex items-center gap-3">
                                <CurrencyDollarIcon className="w-6 h-6 text-blue-800" />
                                <span className="shrink-0">ราคา {ticketCount * 20} บาท</span>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col gap-4 items-center">
                            วิธีชำระเงิน
                            <div className="flex flex-col gap-4 w-full items-center">
                              {payments.map((p) => (
                                <button
                                  key={p.id}
                                  className={cx(
                                    "flex justify-center gap-4 p-2 px-4 py-2 rounded-full w-2/3",
                                    payment === p.id ? "text-blue-800 bg-white" : "bg-gray-100 text-gray-700"
                                  )}
                                  onClick={() => setPayment(p.id)}
                                >
                                  {p.icon}
                                  {p.name}
                                </button>
                              ))}
                            </div>
                          </div>
                        </div>
                        <button className="flex justify-center  bg-blue-800 rounded-lg p-1  text-white w-11/12 disabled:opacity-50"
                          disabled={stationFrom === "" || stationTo === "" || date === "" || payment === "" || ticketCount === 0}
                          onClick={() => setStep(3)}
                        >
                          ทำการจอง
                        </button>
                      </div>

                      {/*<div className="flex gap-4">
                        <span>สถานีต้นทาง</span>
                        <span>{
                          lines.find((l) => l.stations.find((s) => s.id === stationFrom))?.stations.find((s) => s.id === stationFrom)?.name.th
                        }</span>
                      </div>
                      <div className="flex gap-4">
                        <span>สถานีปลายทาง</span>
                        <span>{
                          lines.find((l) => l.stations.find((s) => s.id === stationTo))?.stations.find((s) => s.id === stationTo)?.name.th
                        }</span>
                      </div>
                      <div className="flex gap-4">
                        <span>วันที่เดินทาง</span>
                        <span>{date}</span>
                      </div>
                      <div className="flex gap-4">
                        <span>จำนวน</span>
                        <span>{ticketCount} ใบ</span>
                      </div>
                      <div className="flex gap-4">
                        <span>วิธีชำระเงิน</span>
                        <span>{payments.find((p) => p.id === payment)?.name}</span>
                      </div>

                      <div className="flex gap-4">
                        <span>จำนวนสถานีที่ต้องเปลี่ยนสาย</span>
                        <span>{calculateNumberOfStationsBetweenStations(stationFrom, stationTo).numberOfInterchanges}</span>
                      </div>

                      <div className="flex gap-4">
                        <span>จำนวนสถานีที่ผ่าน</span>
                        <span>{calculateNumberOfStationsBetweenStations(stationFrom, stationTo).numberOfStations}</span>
                      </div>

                      <div className="flex gap-4">
                        <span>แผนที่</span>
                        <span>{calculateNumberOfStationsBetweenStations(stationFrom, stationTo).path.join(" -> ")}</span>
                      </div>
                      <div className="flex gap-4">
                        <span>ราคา {ticketCount * 20} บาท</span>
                      </div>
                      <div className="flex flex-col gap-4 items-center">
                        วิธีชำระเงิน
                        <div className="flex flex-col gap-4 w-full items-center">
                          {payments.map((p) => (
                            <button
                              key={p.id}
                              className={cx(
                                "flex justify-center gap-4 p-2 px-4 py-2 rounded-full w-2/3",
                                payment === p.id ? "text-blue-800 bg-white" : "bg-gray-100 text-gray-700"
                              )}
                              onClick={() => setPayment(p.id)}
                            >
                              {p.icon}
                              {p.name}
                            </button>
                          ))}
                        </div>
                      </div>
                    <button className="flex justify-center  bg-blue-800 rounded-lg p-1  text-white w-11/12 disabled:opacity-50"
                      disabled={stationFrom === "" || stationTo === "" || date === "" || payment === "" || ticketCount === 0}
                      onClick={() => setStep(3)}
                    >
                      ทำการจอง
                              </button>*/}
                    </div>
                  </div>
                )
              }
              {
                step === 3 && (
                  <div className="flex flex-col gap-4 items-center text-lg">
                    <div className="grid grid-cols-2 w-full">
                      <div className="flex flex-col items-center gap-4 justify-center">
                        <span>ยืนยันการชำระเงิน</span>
                        <span>ราคา {ticketCount * 20} บาท</span>
                        <span>กรุณาชำระเงินภายใน 24 ชั่วโมง</span>
                      </div>
                      <div className="flex flex-col gap-4 items-center">
                        <span>วิธีชำระเงิน</span>
                        <span>{payments.find((p) => p.id === payment)?.name}</span>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/1200px-QR_code_for_mobile_English_Wikipedia.svg.png" alt="qr" className="w-52 h-52" />
                      </div>
                    </div>
                    <button className="flex justify-center  bg-blue-800 rounded-lg p-1  text-white w-11/12"
                      onClick={handleSave}
                    >
                      เสร็จสิ้น
                    </button>
                  </div>
                )
              }
            </div>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
}

