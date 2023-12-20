// https://www.bts.co.th/eng/library/system-structuer.html
// data as of 2023

const stations = [
  
  {
    id: 'sukhumvit-line',
    name: {
      en: 'Sukhumvit Line',
      th: 'สายสุขุมวิท',
    },
    color: '#6EC145',
    stations: [
      {
        id: 'N8',
        name: {
          en: 'Mo Chit / Chatuchak Park',
          th: 'หมอชิต / สวนจตุจักร',
        },
      },
      {
        id: 'N7',
        name: {
          en: 'Saphan Kwai',
          th: 'สะพานควาย',
        },
      },
      {
        id: 'N6',
        unavailable: true,
        name: {
          en: 'Sena Ruam',
          th: 'เสนาร่วม',
        },
      },
      {
        id: 'N5',
        name: {
          en: 'Ari',
          th: 'อารีย์',
        },
      },
      {
        id: 'N4',
        name: {
          en: 'Sanam Pao',
          th: 'สนามเป้า',
        },
      },
      {
        id: 'N3',
        name: {
          en: 'Victory Monument',
          th: 'อนุสาวรีย์ชัยสมรภูมิ',
        },
      },
      {
        id: 'N2',
        name: {
          en: 'Phaya Thai',
          th: 'พญาไท',
        },
      },
      {
        id: 'N1',
        name: {
          en: 'Ratchathewi',
          th: 'ราชเทวี',
        },
      },
      {
        id: 'CEN',
        name: {
          en: 'Siam',
          th: 'สยาม',
        },
      },
      {
        id: 'E1',
        name: {
          en: 'Chit Lom',
          th: 'ชิดลม',
        },
      },
      {
        id: 'E2',
        name: {
          en: 'Ploen Chit',
          th: 'เพลินจิต',
        },
      },
      {
        id: 'E3',
        name: {
          en: 'Nana',
          th: 'นานา',
        },
      },
      {
        id: 'E4',
        name: {
          en: 'Asok (M)',
          th: 'อโศก (M)',
        },
      },
      {
        id: 'E5',
        name: {
          en: 'Phrom Phong',
          th: 'พร้อมพงษ์',
        },
      },
      {
        id: 'E6',
        name: {
          en: 'Thong Lo',
          th: 'ทองหล่อ',
        },
      },
      {
        id: 'E7',
        name: {
          en: 'Ekkamai',
          th: 'เอกมัย',
        },
      },
      {
        id: 'E8',
        name: {
          en: 'Phra Khanong',
          th: 'พระโขนง',
        },
      },
      {
        id: 'E9',
        name: {
          en: 'On Nut',
          th: 'อ่อนนุช',
        },
      },
      {
        id: 'E10',
        name: {
          en: 'Bang Chak',
          th: 'บางจาก',
        },
      },
      {
        id: 'E11',
        name: {
          en: 'Punnawithi',
          th: 'ปุณณวิถี',
        },
      },
      {
        id: 'E12',
        name: {
          en: 'Udom Suk',
          th: 'อุดมสุข',
        },
      },
      {
        id: 'E13',
        name: {
          en: 'Bang Na',
          th: 'บางนา',
        },
      },
      {
        id: 'E14',
        name: {
          en: 'Bearing',
          th: 'แบริ่ง',
        },
      },
    ],
  },
  {
    id: 'silom-line',
    name: {
      en: 'Silom Line',
      th: 'สายสีลม',
    },
    color: '#0E9B4D',
    stations: [
      {
        id: 'W1',
        name: {
          en: 'National Stadium',
          th: 'สนามกีฬาแห่งชาติ',
        },
      },
      {
        id: 'CEN',
        name: {
          en: 'Siam',
          th: 'สยาม',
        },
      },
      {
        id: 'S1',
        name: {
          en: 'Ratchadamri',
          th: 'ราชดำริ',
        },
      },
      {
        id: 'S2',
        name: {
          en: 'Sala Daeng',
          th: 'ศาลาแดง',
        },
      },
      {
        id: 'S3',
        name: {
          en: 'Chong Nonsi',
          th: 'ช่องนนทรี',
        },
      },
      {
        id: 'S4',
        name: {
          en: 'Saint Louis',
          th: 'เซนต์หลุยส์',
        },
      },
      {
        id: 'S5',
        name: {
          en: 'Surasak',
          th: 'สุรศักดิ์',
        },
      },
      {
        id: 'S6',
        name: {
          en: 'Saphan Taksin',
          th: 'สะพานตากสิน',
        },
      },
      {
        id: 'S7',
        name: {
          en: 'Krung Thon Buri',
          th: 'กรุงธนบุรี',
        },
      },
      {
        id: 'S8',
        name: {
          en: 'Wongwian Yai',
          th: 'วงเวียนใหญ่',
        },
      },
      {
        id: 'S9',
        name: {
          en: 'Pho Nimit',
          th: 'พระนครศรีอยุธยา',
        },
      },
      {
        id: 'S10',
        name: {
          en: 'Talat Phlu',
          th: 'ตลาดพลู',
        },
      },
      {
        id: 'S11',
        name: {
          en: 'Wutthakat',
          th: 'วุฒากาศ',
        },
      },
      {
        id: 'S12',
        name: {
          en: 'Bang Wa',
          th: 'บางหว้า',
        },
      },
    ],
  },
  {
    id:'blue-line',
    name: {
      en: 'Blue Line',
      th: 'สายสีน้ำเงิน',
    },
    color: '#262a85',
    stations:[
      {
        id: 'BL23',
        name:{
          en: 'Queen Sirikit National Convention Centre',
          th: 'ศูนย์การประชุมแห่งชาติสิริกิติ์',
        },
      },
      {
        id: 'BL22',
        name: {
          en: 'Sukhumvit',
          th: 'สุขุมวิท'
        },
      },
      {
        id:'BL21',
        name: {
          en: 'Phetchaburi',
          th: 'เพชรบุรี',
        },
      },
      {
        id: 'BL20',
        name: {
          en: 'Phra Ram 9',
          th: 'พระราม 9',
        },
      },
      {
        id: 'BL19',
        name: {
          en: 'Thailand Cultural Centre',
          th: 'ศูนย์วัฒนธรรมแห่งประเทศไทย',
        },
      },
      {
        id: 'BL18',
        name: {
          en: 'Huai Khwang',
          th: 'ห้วยขวาง',
        },
      },
      {
        id: 'BL17',
        name: {
          en: 'Sutthisan',
          th: 'สุทธิสาร',
        },
      },
      {
        id: 'BL16',
        name: {
          en: 'Ratchadaphisek',
          th: 'รัชดาภิเษก',
        },
      },
      {
        id: 'BL15',
        name: {
          en: 'Lat Phrao',
          th: 'ลาดพร้าว',
        },
      },
      {
        id: 'BL14',
        name: {
          en: 'Phahon Yothin',
          th: 'พหลโยธิน',
        },
      },
      {
        id: 'BL13',
        name: {
          en: 'Chatuchak Park',
          th: 'สวนจตุจักร',
        },
      },
      {
        id: 'BL12',
        name: {
          en: 'Kamphaeng Phet',
          th: 'กำแพงเพชร',
        },
      },
      {
        id: 'BL11',
        name: {
          en: 'Bang Sue',
          th: 'บางซื่อ',
        },
      },
      {
        id: 'BL10',
        name: {
          en: 'Tao Poon',
          th: 'เตาปูน',
        },
      },
      {
        id: 'BL09',
        name: {
          en: 'Bang Pho',
          th: 'บางโพ',
        },
      },
      {
        id: 'BL08',
        name: {
          en: 'Bang O',
          th: 'บางอ้อ',
        },
      },
      {
        id: 'BL07',
        name: {
          en: 'Bang Phlat',
          th: 'บางพลัด',
        },
      },
      {
        id: 'BL06',
        name: {
          en: 'Sirindhorn',
          th: 'สิรินธร',
        },
      },
      {
        id: 'BL05',
        name: {
          en: 'Bang Yi Khon',
          th: 'บางยี่ขัน',
        },
      },
      {
        id: 'BL04',
        name: {
          en: 'Bang Khun Non',
          th: 'บางขุนนนท์',
        },
      },
      {
        id: 'BL03',
        name: {
          en: 'Fai Chai',
          th: 'ไฟฉาย',
        },
      },
      {
        id: 'BL02',
        name: {
          en: 'Charan 13',
          th: 'จรัญฯ 13'
        },
      },
    ],
  },
  {
    id: 'airport-rail-link',
    name: {
      en: 'Airport Rail Link',
      th: 'สายท่าอากาศยาน',
    },
    color: '#89171F',
    stations: [
      {
        id: 'N2',
        alias: 'A8',
        name: {
          en: 'Phaya Thai',
          th: 'พญาไท',
        },
      },
      {
        id: 'A7',
        name: {
          en: 'Ratchaprarop',
          th: 'ราชปรารภ',
        },
      },
      {
        id: 'A6',
        name: {
          en: 'Makkasan',
          th: 'มักกะสัน',
        },
      },
      {
        id: 'A5',
        name: {
          en: 'Ramkhamhaeng',
          th: 'รามคำแหง',
        },
      },
      {
        id: 'A4',
        name: {
          en: 'Hua Mak',
          th: 'หัวหมาก',
        },
      },
      {
        id: 'A3',
        name: {
          en: 'Ban Thap Chang',
          th: 'บ้านทับช้าง',
        },
      },
      {
        id: 'A2',
        name: {
          en: 'Lad Krabang',
          th: 'ลาดกระบัง',
        },
      },
      {
        id: 'A1',
        name: {
          en: 'Suvarnabhumi Airport',
          th: 'ท่าอากาศยานสุวรรณภูมิ',
        },
      },
    ],
  },
  {
    id: 'purple-line',
    name:{
      en: 'Purple Line',
      th: 'สายสีม่วง'
    },
    color: '#682685',
    stations: [
      {
        id: 'PP01',
        name: {
          en: 'Khong Bang Phai',
          th: 'คลองบางไผ่',
        },
      },
      {
        id: 'PP02',
        name: {
          en: 'Talad Bang Yai',
          th: 'ตลาดบางใหญ่',
        },
      },
      {
        id: 'PP03',
        name: {
          en: 'Sam Yaek Bang Yai',
          th: 'สามแยกบางใหญ่',
        },
      },
      {
        id: 'PP04',
        name: {
          en: 'Bang Phlu',
          th: 'บางพลู',
        },
      },
      {
        id: 'PP05',
        name: {
          en: 'Bang Rak Yai',
          th: 'บางรักใหญ่',
        },
      },
      {
        id: 'PP06',
        name: {
          en: 'Bang Rak Noi Tha It',
          th: 'บางรักน้อยท่าอิฐ',
        },
      },
      {
        id: 'PP07',
        name: {
          en: 'Sai Ma',
          th: 'ไทรม้า',
        },
      },
      {
        id: 'PP08',
        name: {
          en: 'Phra Nang Klao Bridge',
          th: 'สะพานพระนั่งเกล้า',
        },
      },
      {
        id: 'PP09',
        name: {
          en: 'Yaek Nonthaburi 1',
          th: 'แยกนนทบุรี 1',
        },
      },
      {
        id: 'PP10',
        name: {
          en: 'Bang Krasor',
          th: 'บางกระสอ',
        },
      },
      {
        id: 'PP11',
        name: {
          en: 'Nonthaburi Civic Center',
          th: 'ศูนย์ราชการนนทบุรี',
        },
      },
      {
        id: 'PP12',
        name: {
          en: 'Ministry of Pubic Health',
          th: 'กระทรวงสาธารณสุข',
        },
      },
      {
        id: 'PP13',
        name: {
          en: 'Yak Tiwanon',
          th: 'แยกติวานนท์',
        },
      },
      {
        id: 'PP14',
        name: {
          en: 'Wong Sawang',
          th: 'วงศ์สว่าง',
        },
      },
      {
        id: 'PP15',
        name: {
          en: 'Bang Son',
          th: 'บางซ่อน',
        },
      },
      {
        id: 'BL10',
        alias: 'PP16',
        name: {
          en: 'Tao Poon',
          th: 'เตาปูน',
        },
      },
    ],
  },
  {
    id:'gold-line',
    name: {
      en:"Gold Line",
      th: 'สายสีทอง',
    },
    color: '#ad9224',
    stations: [
      {
        id: 'S7',
        alias: 'G1',
        name: {
          en: 'Krung Thon Buri',
          th: 'กรุงธนบุรี',
        },
      },
      {
        id: 'G2',
        name: {
          en: 'Charoen Nakhon',
          th: 'เจริญนคร',
        },
      },
      {
        id: 'G3',
        name: {
          en: 'Khlong San',
          th: 'คลองสาน',
        },
      },
    ],
  },
  {
    id:'dark-red-line',
    name: {
      en:"Dark Red Line",
      th: 'สายสีแดงเข้ม',
    },
    color: '#990000',
    stations: [
      {
        id:'RN10',
        name: {
          en: 'Rangsit',
          th: 'รังซิต',
        },
      },
      {
        id: 'RN09',
        name: {
          en: 'Lak Hok',
          th:'หลักหก',
        },
      },
      {
        id: 'RN08',
        name: {
          en: 'Don Muang',
          th: 'ดอนเมือง',
        },
      },
      {
        id: 'RN07',
        name: {
          en: 'Kan Kheha',
          th: 'การเคหะ',
        },
      },
      {
        id: 'RN06',
        name:{
          en: 'Lak si',
          th: 'หลักสี่',
        },
      },
      {
        id: 'RN05',
        name :{
          en: 'Thung Song Hong',
          th: 'ทุ่งสองห้อง',
        },
      },
      {
        id: 'RN04',
        name: {
          en: 'Bang Khen',
          th: 'บางเขน',
        },
      },
      {
        id: 'RN03',
        name: {
          en: 'Wat Samian Nari',
          th: 'วัดเสมียนนารี',
        },
      },
      {
        id: 'RW02',
        alais: 'RN02',
        name: {
          en: 'Chatuchak',
          th: 'จตุจักร',
        },
      },
      {
        id: 'RN01',
        name: {
          en:'Bang Sue',
          th: 'บางซื่อ',
        },
      },
   ],
  },
  {
    id:'light-red-line',
    name: {
      en:"Light Red Line",
      th: 'สายสีแดงอ่อน',
    },
    color: '#ab3737',
    stations: [
      {
        id: 'RW01',
        name: {
          en: 'Bang Sue',
          th: "บางซื่อ" ,
        }
      },
      {
        id: 'RW02',
        name: {
          en: 'Bang Son',
          th: 'บางซ่อน',
        },
      },
      {
        id: 'RW05',
        name:{
          en: 'Bang Bumru',
          th: 'บางบำหรุ',
        },
      },
      {
        id: 'RW06',
        name:{
          en: 'Taling Chan',
          th: 'ตลิ่งชัน',
        },
      },
    ],
  },
  {
    id:'yellow-line',
    name: {
      en:"Yellow Line",
      th: 'สายสีเหลือง',
    },
    color: '#F7CF25',
    stations: [
      {
        id: 'BL15',
        alias: 'YL01',
        name: {
          en: 'Lat Phrao',
          th: 'ลาดพร้าว',
        },
      },
      {
        id: 'YL02',
        name: {
          en: 'Phawana',
          th:'ภาวนา',
        },
      },
      {
        id: 'YL03',
        name: {
          en: 'Chok Chai 4',
          th: 'โชคชัย 4',
        },
      },
      {
        id: 'YL04',
        name: {
          en: 'Lat Phrao 71',
          th: "ลาดพร้าว 71",
        },
      },
      {
        id: 'YL05',
        name: {
          en: 'Lat Phrao 83',
          th: 'ลาดพร้าว 83',
        },
      },
      {
        id: 'YL06',
        name: {
          en: 'Mahat Thai',
          th: 'มหาดไทย',
        },
      },
      {
        id: 'YL07',
        name: {
          en: 'Lat Phrao 101',
          th:"ลาดพร้าว 101",
        },
      },
      {
        id: 'YL08',
        name: {
          en: 'Bang Kapi',
          th: 'บางกะปิ',
        },
      },
      {
        id: 'YL09',
        name: {
          en: 'Yaek Lam Sali',
          th: 'แยกลำสาลี',
        },
      },
      {
        id: 'YL10',
        name: {
          en: 'Si Kritha',
          th: 'ศรีกรีฑา',
        },
      },
      {
        id:'A4',
        alias: 'YL11',
        name: {
          en: 'Hua Mak',
          th: 'หัวหมาก',
        },
      },
      {
        id: 'YL12',
        name: {
          en: 'Kalantan',
          th: 'กลันตัน',
        },
      },
      {
        id: 'YL13',
        name: {
          en: 'Si Nut',
          th: "ศรีนุช",
        },
      },
      {
        id: 'YL14',
        name: {
          en: 'Srinagarindra 38',
          th: 'ศรีนครินทร์ 38',
        },
      },
      {
        id: 'YL15',
        name: {
          en: 'Suan Luang Rama IX',
          th: 'สวนหลวง ร.9',
        },
      },
      {
        id: 'YL16',
        name: {
          en: 'Si Udom',
          th: 'ศรีอุดม',
        },
      },
      {
        id: 'YL17',
        name: {
          en: 'Si Iam',
          th: 'ศรีเอี่ยม',
        },
      },
      {
        id: 'YL18',
        name: {
          en: 'Si La Salle',
          th: 'ศรีลาซาล',
        },
      },
      {
        id: 'YL19',
        name: {
          en: 'Si Bearing',
          th: 'ศรีแบริ่ง',
        },
      },
      {
        id: 'YL20',
        name: {
          en: 'Si Dan',
          th: 'ศรีด่าน',
        },
      },
      {
        id: 'YL21',
        name: {
          en: 'Si Thepha',
          th: 'ศรีเทพา',
        },
      },
      {
        id: 'YL22',
        name: {
          en: 'Thipphawan',
          th: 'ทิพวัล',
        },
      },
      {
        id: 'E15',
        alias: 'YL23',
        name: {
          en: 'Samrong',
          th: 'สำโรง',
        },
      },
    ],
  },
  {
    id:'pink-line',
    name: {
      en:"Pink Line",
      th: 'สายสีชมพู',
    },
    color: '#E17DAB',
    stations: [
      {
        id: 'PP11',
        alais: 'PK01',
        name: {
          en: 'Nonthaburi Civic Center',
          th: 'สถานีศูนย์ราชการนนทบุรี',
        },
      },
      {
        id: 'PK02',
        name: {
          en: 'Khae Rai',
          th: 'แคราย',
        },
      },
      {
        id: 'PK03',
        name: {
          en: 'Sanambin Nam',
          th: 'สนามบินน้ำ',
        },
      },
      {
        id: 'PK04',
        name: {
          en: 'Samakkhi',
          th: 'สามัคคี',
        },
      },
      {
        id: 'PK05',
        name: {
          en: 'Royal Irrigation Department',
          th:'กรมชลประทาน',
        },
      },
      {
        id: 'PK06',
        name: {
          en: 'Yaek Pak Kret',
          th: 'แยกปากเกร็ด',
        },
      },
      {
        id: 'PK07',
        name: {
          en: 'Pak Kret Bypass',
          th: 'เลี่ยงเมืองปากเกร็ด',
        },
      },
      {
        id: 'PK08',
        name: {
          en: 'Chaeng Watthana Pak Kret 28',
          th: 'แจ้งวัฒนะ ปากเกร็ด 28',
        },
      },
      {
        id: 'PK09',
        name: {
          en: 'Si Rat',
          th: 'ศรีรัช',
        },
      },
      {
        id: 'PK10',
        name: {
          en: 'Muang Thong Thani',
          th: 'เมืองทองธานี'
        },
      },
      {
        id: 'PK11',
        name: {
          en: 'Chaeng Watthana 14',
          th: 'แจ้งวัฒนะ 14',
        },
      },
      {
        id: 'PK12',
        name: {
          en: 'Government Complex',
          th: 'ศูนย์ราชการเฉลิมพระเกียรติ',
        },
      },
      {
        id: 'PK13',
        name : {
          en: 'National Telecom',
          th: 'โทรคมนาคมห่งชาติ',
        },
      },
      {
        id: 'RN06',
        alais: 'PK14',
        name: {
          en: 'Lak Si',
          th: 'หลักสี่',
        },
      },
      {
        id: 'PK15',
        name: {
          en: 'Rajabhat Phranakhon',
          th: 'ราชภัฎพระนคร',
        },
      },
      {
        id: 'N17',
        alais: 'PK16',
        name: {
          en: 'Wat Phra Sri Mahathat',
          th: 'วัดพระศรีมหาธาตุ',
        },
      },
      {
        id: 'PK17',
        name: {
          en: 'Ram Inthra 3',
          th: 'รามอินทรา 3',
        },
      },
      {
        id: 'PK18',
        name: {
          en: 'Lat Pla Khao',
          th: 'ลาดปลาเค้า',
        },
      },
      {
        id: 'PK19',
        name: {
          en: 'Ram Inthra Kor Mor 4',
          th:'รามอินทรา กม.4',
        },
      },
      {
        id: 'PK20',
        name: {
          en: 'Maiyalap',
          th: 'มัยลาภ',
        },
      },
      {
        id: 'PK21',
        name: {
          en: 'Vatcharaphol',
          th: 'วัชรพล',
        },
      },
      {
        id: 'PK22',
        name: {
          en: 'Ram Inthra Kor Mor 6',
          th: 'รามอินทรา กม.6',
        },
      },
      {
        id: 'PK23',
        name: {
          en: 'Khu Bon',
          th: 'คู้บอน',
        },
      },
      {
        id: 'PK24',
        name: {
          en: 'Ram Inthra Kor Mor 9',
          th: 'รามอินทรา กม.9',
        },
      },
      {
        id: 'PK25',
        name: {
          en: 'Outer Ring Road Ram Inthra',
          th: 'วงแหวนรามอินทรา',
        },
      },
      {
        id: 'PK26',
        name: {
          en: 'Nopparat',
          th: 'นพรัตน์',
        },
      },
      {
        id: 'PK27',
        name: {
          en: 'Bang Chan',
          th: 'บางชัน',
        },
      },
      {
        id: 'PK28',
        name: {
          en: 'Setthabutbamphen',
          th: 'เศรษฐบุตรบำเพ็ญ',
        },
      },
      {
        id: 'PK29',
        name: {
          en: 'Min Buri Market',
          th: 'ตลาดมีนบุรี',
        },
      },
      {
        id: 'PK30',
        name: {
          en: 'Min Buri',
          th: 'มีนบุรี',
        },
      },
    ],
  },
  {
    id:'orange-line',
    name: {
      en:"Orange Line",
      th: 'สายสีส้ม',
    },
    color: '#b45f06',
    stations: [
      {
        id: 'BL19',
        alias: 'OR13',
        name: {
          en: 'Thailand Cultural Centre',
          th: 'ศูนย์วัฒนธรรมแห่งประเทศไทย'
        },
      },
      {
        id: 'OR14',
        name:{
          en: 'MRTA',
          th: 'รฟม.'
        }
      },
      {
        id: 'OR15',
        name:{
          en: 'Wat Phraram Kao',
          th: 'วัดพระราม 9'
        }
      },
      {
        id: 'OR16',
        name:{
          en: 'Ram Kamhaeng 12',
          th: 'รามคำแหง 12'
        }
      },
      {
        id: 'OR17',
        name:{
          en: 'Ram Kamhaeng University',
          th: 'ม.รามคำแหง'
        }
      },
      {
        id: 'OR18',
        name:{
          en: 'SAT',
          th: 'กกท.'
        }
      },
      {
        id: 'OR19',
        name:{
          en: 'Ram Kamhaeng 34',
          th: 'รามคำแหง 34'
        }
      },
      {
        id: 'YL09',
        alias: 'OR20',
        name:{
          en: 'Yaek Lam Sali',
          th: 'แยกลำสาลี'
        }
      },
      {
        id: 'OR21',
        name:{
          en: 'Si Burapha',
          th: 'ศรีบูรพา'
        }
      },
      {
        id: 'OR22',
        name:{
          en: 'Ban Ma',
          th: 'บ้านม้า'
        }
      },
      {
        id: 'OR23',
        name:{
          en: 'Sammakon',
          th: 'สัมมากร'
        }
      },
      {
        id: 'OR24',
        name:{
          en: 'Nom Klao',
          th: 'น้อมเกล้า'
        }
      },
      {
        id: 'OR25',
        name:{
          en: 'Rat Phatthana',
          th: 'ราษฎร์พัฒนา'
        }
      },
      {
        id: 'OR26',
        name:{
          en: 'Min Phatthana',
          th: 'มีนพัฒนา'
        }
      },
      {
        id: 'OR27',
        name:{
          en: 'Kheha Ramkamhaeng',
          th: 'เคหะรามคำแหง'
        }
      },
      {
        id: 'PK30',
        alias:'OR28',
        name:{
          en: 'Min Buri',
          th: 'มีนบุรี'
        }
      },
      {
        id: 'OR29',
        name:{
          en: 'Yaek Rom Klao',
          th: 'แยกร่มเกล้า'
        }
      },
    ],
  },
]

export default stations