import React, { useState, useEffect } from 'react';
import { ArrowRightOnRectangleIcon, HomeIcon, IdentificationIcon, UsersIcon } from "@heroicons/react/24/outline";
import Link from 'next/link';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

interface TicketData {
  payment:string;
  ticketCount: string;
  price: string;
  fname: string;
  lname: string;
  email: string;
  stationFrom: string;
  stationTo: string;
  date: string;
}
interface ContactData {
  name:string;
  email:string;
  message:string

}
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    fontFamily: 'kanit',
    fontSize: 18,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 16,
    fontFamily: 'kanit',
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
  fontFamily: 'kanit',
}));


const Dashboard = () => {
  const [selectedSection, setSelectedSection] = useState('members');
  const [rows, setRows] = useState<TicketData[]>([]);
  const [row, setRow] = useState<ContactData[]>([]);
  const handleSectionChange = (section: React.SetStateAction<string>) => {
    setSelectedSection(section);
  };

  // Sample data
  const membersData = [
    { id: 1, name: 'John Doe', email: 'john@example.com', ticketInfo: 'Booking info 1' },
    { id: 2, name: 'Jane Doe', email: 'jane@example.com', ticketInfo: 'Booking info 2' },
    // Add more members as needed
  ];

  const contactData = [
    { id: 1, name: 'Contact 1', email: 'contact1@example.com', ticketInfo: 'Contact info 1' },
    { id: 2, name: 'Contact 2', email: 'contact2@example.com', ticketInfo: 'Contact info 2' },
    // Add more contacts as needed
  ];
  useEffect(() => {
    fetch("http://localhost:3333/showinfoadmin", {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then(data => {
        if (data.status === 'ok') {
          //alert('authen sucecss')
          setRows(data.results);
          setRow(data.result);
        } else {
          alert('authen failed')
          window.location.href = "/";
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, [])

  return (
    <div className="w-full flex flex-col h-screen">
      {/* Header */}
      <div className="bg-blue-900 shadow px-8 py-6 text-white w-full flex justify-between">
        <div className="text-2xl font-semibold">แอดมิน</div>
        <Link href="/" className="flex gap-4 items-center">
          <ArrowRightOnRectangleIcon className="h-7 w-7" />
          <p>ออกจากระบบ</p>
        </Link>
      </div>
      {/* Main Content */}
      <div className="flex flex-grow text-xl">
        {/* Sidebar */}
        <div className="w-1/6 h-full flex flex-col gap-4 items-center mt-4">
          <div className='flex flex-col gap-4 justify-between'>
            <button
              onClick={() => handleSectionChange('members')}
              className={`py-4 px-6 w-full text-left focus:outline-none flex gap-4 items-center ${selectedSection === 'members' ? 'text-blue-900' : ''
                }`}
            >
              <UsersIcon className='w-8 h-8' />
              สมาชิกในระบบ
            </button>
            <button
              onClick={() => handleSectionChange('information')}
              className={`py-4 px-6 w-full text-left focus:outline-none flex gap-4 items-center ${selectedSection === 'information' ? 'text-blue-900' : ''
                }`}
            >
              <IdentificationIcon className='w-8 h-8' />
              ข้อมูล
            </button>

          </div>

        </div>


        {/* Right Content */}
        <div className="bg-slate-300 flex-grow p-8 w-5/6">
          {selectedSection === 'members' && (
            <div>
              {/* Display member information here */}
              <h2 className="text-2xl font-bold mb-4">ข้อมูลสมาชิกทั้งหมด</h2>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                  <TableHead>
                    <TableRow>
                      <StyledTableCell>Firstname</StyledTableCell>
                      <StyledTableCell align="right">Lastname</StyledTableCell>
                      <StyledTableCell align="right">Email</StyledTableCell>
                      <StyledTableCell align="right">Detail Booking</StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row,index) => (
                      <StyledTableRow key={index}>
                        <StyledTableCell component="th" scope="row">
                          {row.fname}
                        </StyledTableCell>
                        <StyledTableCell align="right">{row.lname}</StyledTableCell>
                        <StyledTableCell align="right">{row.email}</StyledTableCell>
                        <StyledTableCell align="right">
                          {row.stationFrom} to {row.stationTo}{row.stationTo && <br />} 
                          Date: {row.date}
                          {row.date && <br /> } Payment: {row.payment}{row.payment && <br /> }
                          Count: {row.ticketCount} ,  Price: {row.price}
                        </StyledTableCell>
                      </StyledTableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          )}
          {selectedSection === 'information' && (
            <div>
              {/* Display contact information here */}
              <h2 className="text-2xl font-bold mb-4">ข้อมูลผู้ติดต่อ</h2>
              <div>
              {/* Display member information here */}
              <h2 className="text-2xl font-bold mb-4">ข้อมูลผู้ติดต่อทั้งหมด</h2>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                  <TableHead>
                    <TableRow>
                      <StyledTableCell>Name</StyledTableCell>
                      <StyledTableCell align="right">Email</StyledTableCell>
                      <StyledTableCell align="right">Message</StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {row.map((row,index) => (
                      <StyledTableRow key={index}>
                        <StyledTableCell component="th" scope="row">
                          {row.name}
                        </StyledTableCell>
                        <StyledTableCell align="right">{row.email}</StyledTableCell>
                        <StyledTableCell align="right">{row.message}</StyledTableCell>
                      </StyledTableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

