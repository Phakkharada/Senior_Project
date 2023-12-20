import { MapIcon } from "@heroicons/react/24/outline"
import Card from "@/components/Card"
import { useState, useEffect } from "react"
import { useRouter } from 'next/router'
// flex flex-col flex-row
// items-center justify-center justify-between justify-evenly
// gap-2 gap-3 gap-4 gap-5 gap-6 gap-7 gap-8 gap-9 gap-10
// p-1 p-2 p-3 p-4 p-5 p-6 p-7 p-8 p-9 p-10
// px-1 px-2 px-3 px-4 px-5 px-6 px-7 px-8 px-9 px-10
// py-1 py-2 py-3 py-4 py-5 py-6 py-7 py-8 py-9 py-10
// text-xs text-sm text-base text-lg text-xl text-2xl text-3xl text-4xl text-5xl text-6xl
// text-gray-400 text-gray-500 text-gray-600 text-gray-700 text-gray-800 text-gray-900
// bg-gray-400 bg-gray-500 bg-gray-600 bg-gray-700 bg-gray-800 bg-gray-900
// h-1 h-2 h-3 h-4 h-5 h-6 h-7 h-8 h-9 h-10 h-screen
// w-1 w-2 w-3 w-4 w-5 w-6 w-7 w-8 w-9 w-10 w-screen
// border border-gray-400 border-gray-500 border-gray-600 border-gray-700 border-gray-800 border-gray-900
// rounded rounded-full rounded-lg rounded-t-lg rounded-r-lg rounded-b-lg rounded-l-lg rounded-tl-lg rounded-tr-lg rounded-bl-lg rounded-br-lg


const lines = [
	{
		name: "สายสุขุมวิท",
		image: "/images/สุขุมวิท.png",
		path: "/maps/sukhumvit",
	},
	{
		name: "สายสีลม",
		image: "/images/สีลม.png",
		path: "/maps/sri-lom",
	},
	{
		name: "สายสีน้ำเงิน",
		image: "/images/สีน้ำเงิน.png",
		path: "/maps/blue",
	},
	{
		name: "สายแอร์พอร์ท เรล ลิงก์",
		image: "/images/แอร์.png",
		path: "/maps/airport-link",
	},
	{
		name: "สายสีม่วง",
		image: "/images/สีม่วง.png",
		path: "/maps/purple",
	},
	{
		name: "สายสีทอง",
		image: "/images/สีทอง.png",
		path: "/maps/gold",
	},
	{
		name: "สายสีแดงเข้ม",
		image: "/images/แดงเข้ม.png",
		path: "/maps/dark-red",
	},
	{
		name: "สายสีแดงอ่อน",
		image: "/images/แดงอ่อน.png",
		path: "/maps/light-red",
	},
	{
		name: "สายสีเหลือง",
		image: "/images/สีเหลือง.png",
		path: "/maps/yellow",
	},
	{
		name: "สายสีชมพู",
		image: "/images/ชมพู.png",
		path: "/maps/pink",
	},
	{
		name: "สายสีส้ม",
		image: "/images/สีส้ม.png",
		path: "/maps/orange",
	},
];


const Inbox: React.FC = () => {
	const router = useRouter()
	return (
		<main className="w-full">
			<div >
				<Card>
					<div className="flex justify-evenly items-center gap-10">
						<div className="flex flex-col m-3 gap-5">
							<div className="flex flex-col items-center">
								<div className="flex gap-1  justify-center">
									<MapIcon className="h-14 w-14 text-red-500 " />
									<span className="text-black text-2xl m-3">แผนที่เส้นทาง</span>
								</div>
								<img src="Line.png" alt="line" />
							</div>
							<div className="grid grid-rows-4 grid-flow-col gap-3">
								{
									lines.map((line, index) => (
										<button className="flex items-center gap-4" key={index} onClick={() => router.push(line.path)}>
											<img src={line.image} alt={line.name} className="w-24" />
											<span className="text-base">{line.name}</span>
										</button>
									))
								}
							</div>
							<img src="/images/allmap.png" alt="allmaps" className="max-w-3xl" />
						</div>	
					</div>
				</Card>
			</div>
		</main>
	)
}

export default Inbox