const { spawn } = require("child_process");
const { json } = require("express");
const { date, forbidden } = require("joi");
const {
  SolarDate,
  LunarDate,
  _calendar,
} = require("@nghiavuive/lunar_date_vi/dist/index.cjs");
const { tinhCanGioSinhAL, tinhCanChi } = require("./canchi.service");
const { an14ChinhTinh } = require("./an14chinhtinh.service");
const { tinhCucLaSo } = require("./timcuclaso.service");

const laplaso = function(IhoTen,IngaySinh,IthangSinh,InamSinh,IgioiTinh,IgioSinh,IloaiLich,InamXemHan) {
  // Khai báo các biến nhập vào
  let inputData = {
    tenInput: IhoTen,
    ngayInput: IngaySinh,
    thangInput: IthangSinh,
    namInput: InamSinh,
    gioiTinhInput: IgioiTinh,
    gioSinhInput: IgioSinh,
    loaiLichInput: IloaiLich,
    namXemHan: InamXemHan,
  };

  // Khai báo các thông tin của phần địa bàn
  let diaBan = {};
  let thienBan = [
    {
      tenCungThienBan: "Dần",
      tenCung: undefined,
      chinhTinh: [],
      phuTinhTrai: [],
      phuTinhPhai: [],
      vongTrangSinh: undefined,
      daiVan: undefined,
      canCung: undefined,
      tieuHan: undefined,
      daiVan: undefined,
      nguyetHan: undefined,
    },
    {
      tenCungThienBan: "Mão",
      tenCung: undefined,
      chinhTinh: [],
      phuTinhTrai: [],
      phuTinhPhai: [],
      vongTrangSinh: undefined,
      daiVan: undefined,
      canCung: undefined,
      tieuHan: undefined,
      daiVan: undefined,
      nguyetHan: undefined,
    },
    {
      tenCungThienBan: "Thìn",
      tenCung: undefined,
      chinhTinh: [],
      phuTinhTrai: [],
      phuTinhPhai: [],
      vongTrangSinh: undefined,
      daiVan: undefined,
      canCung: undefined,
      tieuHan: undefined,
      daiVan: undefined,
      nguyetHan: undefined,
    },
    {
      tenCungThienBan: "Tỵ",
      tenCung: undefined,
      chinhTinh: [],
      phuTinhTrai: [],
      phuTinhPhai: [],
      vongTrangSinh: undefined,
      daiVan: undefined,
      canCung: undefined,
      tieuHan: undefined,
      daiVan: undefined,
      nguyetHan: undefined,
    },
    {
      tenCungThienBan: "Ngọ",
      tenCung: undefined,
      chinhTinh: [],
      phuTinhTrai: [],
      phuTinhPhai: [],
      vongTrangSinh: undefined,
      daiVan: undefined,
      canCung: undefined,
      tieuHan: undefined,
      daiVan: undefined,
      nguyetHan: undefined,
    },
    {
      tenCungThienBan: "Mùi",
      tenCung: undefined,
      chinhTinh: [],
      phuTinhTrai: [],
      phuTinhPhai: [],
      vongTrangSinh: undefined,
      daiVan: undefined,
      canCung: undefined,
      tieuHan: undefined,
      daiVan: undefined,
      nguyetHan: undefined,
    },
    {
      tenCungThienBan: "Thân",
      tenCung: undefined,
      chinhTinh: [],
      phuTinhTrai: [],
      phuTinhPhai: [],
      vongTrangSinh: undefined,
      daiVan: undefined,
      canCung: undefined,
      tieuHan: undefined,
      daiVan: undefined,
      nguyetHan: undefined,
    },
    {
      tenCungThienBan: "Dậu",
      tenCung: undefined,
      chinhTinh: [],
      phuTinhTrai: [],
      phuTinhPhai: [],
      vongTrangSinh: undefined,
      daiVan: undefined,
      canCung: undefined,
      tieuHan: undefined,
      daiVan: undefined,
      nguyetHan: undefined,
    },
    {
      tenCungThienBan: "Tuất",
      tenCung: undefined,
      chinhTinh: [],
      phuTinhTrai: [],
      phuTinhPhai: [],
      vongTrangSinh: undefined,
      daiVan: undefined,
      canCung: undefined,
      tieuHan: undefined,
      daiVan: undefined,
      nguyetHan: undefined,
    },
    {
      tenCungThienBan: "Hợi",
      tenCung: undefined,
      chinhTinh: [],
      phuTinhTrai: [],
      phuTinhPhai: [],
      vongTrangSinh: undefined,
      daiVan: undefined,
      canCung: undefined,
      tieuHan: undefined,
      daiVan: undefined,
      nguyetHan: undefined,
    },
    {
      tenCungThienBan: "Tý",
      tenCung: undefined,
      chinhTinh: [],
      phuTinhTrai: [],
      phuTinhPhai: [],
      vongTrangSinh: undefined,
      daiVan: undefined,
      canCung: undefined,
      tieuHan: undefined,
      daiVan: undefined,
      nguyetHan: undefined,
    },
    {
      tenCungThienBan: "Sửu",
      tenCung: undefined,
      chinhTinh: [],
      phuTinhTrai: [],
      phuTinhPhai: [],
      vongTrangSinh: undefined,
      daiVan: undefined,
      canCung: undefined,
      tieuHan: undefined,
      daiVan: undefined,
      nguyetHan: undefined,
    },
  ];

  // Khai báo các biến cố định ban đầu
  const CAN = [
    "Giáp",
    "Ất",
    "Bính",
    "Đinh",
    "Mậu",
    "Kỷ",
    "Canh",
    "Tân",
    "Nhâm",
    "Quý",
  ];

  const CHI = [
    "Tý",
    "Sửu",
    "Dần",
    "Mão",
    "Thìn",
    "Tỵ",
    "Ngọ",
    "Mùi",
    "Thân",
    "Dậu",
    "Tuất",
    "Hợi",
  ];

  const gioDuong = [
    "23:00 - 00:59",
    "01:00 - 02:59",
    "03:00 - 04:59",
    "05:00 - 06:59",
    "07:00 - 08:59",
    "09:00 - 10:59",
    "11:00 - 12:59",
    "13:00 - 14:59",
    "15:00 - 16:59",
    "17:00 - 18:59",
    "19:00 - 20:59",
    "21:00 - 22:59",
  ];
  const menhNapAm = [
    { years: [1948, 1949, 2008, 2009], menh: "Tích Lịch Hỏa" },
    { years: [1950, 1951, 2010, 2011], menh: "Tùng Bách Mộc" },
    { years: [1952, 1953, 2012, 2013], menh: "Trường Lưu Thủy" },
    { years: [1954, 1955, 2014, 2015], menh: "Sa Trung Kim" },
    { years: [1956, 1957, 2016, 2017], menh: "Sơn Hạ Hỏa" },
    { years: [1958, 1959, 2018, 2019], menh: "Bình Địa Mộc" },
    { years: [1960, 1961, 2020, 2021], menh: "Bích Thượng Thổ" },
    { years: [1962, 1963, 2022, 2023], menh: "Kim Bạch Kim" },
    { years: [1964, 1965, 2024, 2025], menh: "Phú Đăng Hỏa" },
    { years: [1966, 1967, 2026, 2027], menh: "Thiên Hà Thủy" },
    { years: [1968, 1969, 2028, 2029], menh: "Đại Trạch Thổ" },
    { years: [1970, 1971, 2030, 2031], menh: "Thoa Xuyến Kim" },
    { years: [1972, 1973, 2032, 2033], menh: "Tang Đố Mộc" },
    { years: [1974, 1975, 2034, 2035], menh: "Đại Khê Thủy" },
    { years: [1976, 1977, 2036, 2037], menh: "Sa Trung Thổ" },
    { years: [1978, 1979, 2038, 2039], menh: "Thiên Thượng Hỏa" },
    { years: [1980, 1981, 2040, 2041], menh: "Thạch Lựu Mộc" },
    { years: [1982, 1983, 2042, 2043], menh: "Đại Hải Thủy" },
    { years: [1984, 1985, 2044, 2045], menh: "Hải Trung Kim" },
    { years: [1986, 1987, 2046, 2047], menh: "Lư Trung Hỏa" },
    { years: [1988, 1989, 2048, 2049], menh: "Đại Lâm Mộc" },
    { years: [1988, 1989, 2048, 2049], menh: "Đại Lâm Mộc" },
    { years: [1930, 1931, 1990, 1991, 2050, 2051], menh: "Lộ Bàng Thổ" },
    { years: [1932, 1933, 1992, 1993, 2052, 2053], menh: "Kiếm Phong Kim" },
    { years: [1934, 1935, 1994, 1995, 2014, 2055], menh: "Sơn Đầu Hỏa" },
    { years: [1936, 1937, 1996, 1997, 2056, 2057], menh: "Giản Hạ Thủy" },
    { years: [1938, 1939, 1998, 1999, 2058, 2059], menh: "Thành Đầu Thổ" },
    { years: [1940, 1941, 2000, 2001, 2060, 2061], menh: "Bạch Lạp Kim" },
    { years: [1942, 1943, 2002, 2003, 2062, 2063], menh: "Dương Liễu Mộc" },
    { years: [1944, 1945, 2004, 2005, 2064, 2065], menh: "Tuyền Trung Thủy" },
    { years: [1946, 1947, 2006, 2007, 2066, 2067], menh: "Ốc Thượng Thổ" },
  ];

  /// ----------- Bắt đầu xử lý logic. ------------//

  // 1 - lập địa bàn

  // 1.1 - Xác định
  function tinhChiGioSinhAL(gioSinh) {
    let chiGioSinh = CHI[Number(gioSinh) - 1];
    return chiGioSinh;
  }
  // 1.2 - Xác định giới tính
  function xacDinhGioiTinh(number) {
    let gioiTinh;
    if (number == 1) {
      return (gioiTinh = "Nam");
    } else {
      return (gioiTinh = "Nữ");
    }
  }

  const gioiTinh = xacDinhGioiTinh(inputData.gioiTinhInput);

  // 1.2.1 xác định âm dương nam nữ
  function tinhAmDuongNamNu(canNam) {
    let index = CAN.findIndex((value) => {
      return value === canNam;
    });
    if (index == 0 || index == 2 || index == 4 || index == 6 || index == 8) {
      return "Dương";
    } else {
      return "Âm";
    }
  }

  // 1.2.2 xác định nạp âm mệnh
  function tinhMenhNapAm(year) {
    for (const entry of menhNapAm) {
      if (entry.years.includes(year)) {
        return entry.menh;
      }
    }
    return "Không có thông tin";
  }

  // 1.2.4 - Xác định ngày âm dương lịch
  function tinhNgayThangNam() {
    // Trường hơp input là lịch dương
    if (inputData.loaiLichInput == 1) {
      // Khởi tạo lịch dương
      const DL = new SolarDate(
        new Date(
          `${inputData.namInput},${inputData.thangInput},${inputData.ngayInput}`
        )
      );
      // Chuyển thành lịch âm
      const AL = LunarDate.fromSolarDate(DL);

      let lich = { AL, DL };
      return lich;
    } else {
      // Khởi tạo âm lịch
      let AL = new LunarDate({
        day: inputData.ngayInput,
        month: inputData.thangInput,
        year: inputData.namInput,
      });
      AL.init();
      // Khởi tạo dương lịch
      let DL = AL.toSolarDate();

      let lich = { AL, DL };
      return lich;
    }
  }

  const gioDuongLinh = gioDuong[Number(inputData.gioSinhInput) - 1];

  const lich = tinhNgayThangNam();
  const AL = lich.AL;
  const DL = lich.DL;

  // 1.2.5 tính can chi cho ngày tháng năm
  const canChi = tinhCanChi(AL);
  const chiGioSinh = tinhChiGioSinhAL(inputData.gioSinhInput);
  const canGioSinh = tinhCanGioSinhAL(AL, inputData.gioSinhInput);

  // 1.2.6 tính âm nam dương nữ
  const amDuongNamNu = tinhAmDuongNamNu(canChi[6]);

  // 1.2.7 tính nạp âm mệnh
  const napMenhAm = tinhMenhNapAm(AL.year);

  // ---------------   xong địa bàn -----------------

  // 2 lập thiên bàn

  // 2.1 Xác định tên cung
  function tinhTen12Cung(number) {
    if (number == 1) {
      let ten12Cung = [
        "MỆNH",
        "PHỤ MẪU",
        "PHÚC ĐỨC",
        "ĐIỀN TRẠCH",
        "QUAN LỘC",
        "NÔ BỘC",
        "THIÊN DI",
        "TẬT ÁCH",
        "TÀI BẠCH",
        "TỬ TỨC",
        "THÊ",
        "HUYNH ĐỆ",
      ];

      return ten12Cung;
    } else {
      let ten12Cung = [
        "MỆNH",
        "PHỤ MẪU",
        "PHÚC ĐỨC",
        "ĐIỀN TRẠCH",
        "QUAN LỘC",
        "NÔ BỘC",
        "THIÊN DI",
        "TẬT ÁCH",
        "TÀI BẠCH",
        "TỬ TỨC",
        "PHU",
        "HUYNH ĐỆ",
      ];
      return ten12Cung;
    }
  }
  const ten12Cung = tinhTen12Cung(inputData.gioiTinhInput);

  // 2.2 - Tìm vị trí cung Mệnh và an các cung còn lại
  let cungMenhIndex = (AL.month - inputData.gioSinhInput) % 12;
  if (cungMenhIndex < 0) {
    cungMenhIndex += 12;
  }
  // 2.2.1 - An 12 lên thiên bàn
  for (let i = 0; i < ten12Cung.length; i++) {
    const newIndex = (cungMenhIndex + i) % 12;
    thienBan[newIndex].tenCung = ten12Cung[i];
  }

  // 2.3 tìm vị trí cung thân
  function timCungThan(thangAL, gioSinh) {
    let cungThan = thangAL + gioSinh - 2;
    if (cungThan == 12) {
      cungThan == 0;
    }
    if (cungThan > 12) {
      cungThan -= 12;
    }

    return cungThan;
  }

  let cungThanIndex = timCungThan(AL.month, inputData.gioSinhInput);
  thienBan[
    cungThanIndex
  ].tenCung = `${thienBan[cungThanIndex].tenCung} (Thân)`;

  // 2.4 - Tìm cục
  const viTriCungMenh = thienBan[cungMenhIndex].tenCungThienBan;
  const cuc = tinhCucLaSo(canChi[6], viTriCungMenh);
  //console.log(cuc, AL)
  // 2.5 - An sao tử vi
  // Định nghĩa một đối tượng lưu trữ vị trí cung Tử vi dựa trên ngày và Cục
  let viTri14ChinhTinh = an14ChinhTinh(AL, cuc, CHI);
  //console.log(viTri14ChinhTinh)
  // 2.5.1 - An 14 chinh tinh
  for (let index = 0; index < viTri14ChinhTinh.length; index++) {
    thienBan[index].chinhTinh = viTri14ChinhTinh[index];
  }

  // 2.5.2 - An Văn Xương và Văn Khúc
  // bảng an sao
  const bangAnSaoXuongKhuc = [
    [
      8,
      2,
      { sao: "Văn Xương(Đ)", mau: "bac", TH: 15 },
      { sao: "Văn Khúc(Đ)", mau: "den", TH: 16 },
    ],
    [
      7,
      3,
      { sao: "Văn Xương(H)", mau: "bac", TH: 15 },
      { sao: "Văn Khúc(Đ)", mau: "den", TH: 16 },
    ],
    [
      6,
      4,
      { sao: "Văn Xương(H)", mau: "bac", TH: 15 },
      { sao: "Văn Khúc(H)", mau: "den", TH: 16 },
    ],
    [
      5,
      5,
      { sao: "Văn Xương(Đ)", mau: "bac", TH: 15 },
      { sao: "Văn Khúc(Đ)", mau: "den", TH: 16 },
    ],
    [
      4,
      6,
      { sao: "Văn Xương(H)", mau: "bac", TH: 15 },
      { sao: "Văn Khúc(H)", mau: "den", TH: 16 },
    ],
    [
      3,
      7,
      { sao: "Văn Xương(Đ)", mau: "bac", TH: 15 },
      { sao: "Văn Khúc(H)", mau: "den", TH: 16 },
    ],
    [
      2,
      8,
      { sao: "Văn Xương(Đ)", mau: "bac", TH: 15 },
      { sao: "Văn Khúc(Đ)", mau: "den", TH: 16 },
    ],
    [
      1,
      9,
      { sao: "Văn Xương(H)", mau: "bac", TH: 15 },
      { sao: "Văn Khúc(Đ)", mau: "den", TH: 16 },
    ],
    [
      0,
      10,
      { sao: "Văn Xương(H)", mau: "bac", TH: 15 },
      { sao: "Văn Khúc(H)", mau: "den", TH: 16 },
    ],
    [
      11,
      11,
      { sao: "Văn Xương(Đ)", mau: "bac", TH: 15 },
      { sao: "Văn Khúc(Đ)", mau: "den", TH: 16 },
    ],
    [
      10,
      0,
      { sao: "Văn Xương(H)", mau: "bac", TH: 15 },
      { sao: "Văn Khúc(H)", mau: "den", TH: 16 },
    ],
    [
      9,
      1,
      { sao: "Văn Xương(Đ)", mau: "bac", TH: 15 },
      { sao: "Văn Khúc(H)", mau: "den", TH: 16 },
    ],
  ];
  // tìm vị trí và an sao Văn Xương, Văn Khúc
  let viTriXuongKhuc = bangAnSaoXuongKhuc[inputData.gioSinhInput - 1];
  let viTriVanXuong = viTriXuongKhuc[0];
  let viTriVanKhuc = viTriXuongKhuc[1];
  thienBan[viTriVanXuong].phuTinhTrai.push(viTriXuongKhuc[2]);
  thienBan[viTriVanKhuc].phuTinhTrai.push(viTriXuongKhuc[3]);

  //2.5.3 An Tả phù, hữu Bật
  const bangAnSaoTaPhu = [
    "Thìn",
    "Tỵ",
    "Ngọ",
    "Mùi",
    "Thân",
    "Dậu",
    "Tuất",
    "Hợi",
    "Tý",
    "Sửu",
    "Dần",
    "Mão",
  ];
  const bangAnSaoHuuBat = [
    "Tuất",
    "Dậu",
    "Thân",
    "Mùi",
    "Ngọ",
    "Tỵ",
    "Thìn",
    "Mão",
    "Dần",
    "Sửu",
    "Tý",
    "Hợi",
  ];

  const CHIANSAO = [
    "Dần",
    "Mão",
    "Thìn",
    "Tỵ",
    "Ngọ",
    "Mùi",
    "Thân",
    "Dậu",
    "Tuất",
    "Hợi",
    "Tý",
    "Sửu",
  ];
  let thangSinhAL = AL.month;
  let viTriTaPhu = CHIANSAO.indexOf(bangAnSaoTaPhu[thangSinhAL - 1]);
  let viTriHuuBat = CHIANSAO.indexOf(bangAnSaoHuuBat[thangSinhAL - 1]);
  thienBan[viTriTaPhu].phuTinhTrai.push({
    sao: "Tả Phù",
    mau: "vang",
    TH: 17,
  });
  thienBan[viTriHuuBat].phuTinhTrai.push({
    sao: "Hữu Bật",
    mau: "den",
    TH: 18,
  });

  // 2.5.4 - An Tứ Hoá
  let canNam = canChi[6];
  const bangAnTuHoa = [
    [
      2,
      14,
      4,
      5,
      { sao: "Hoá Lộc(Đ)", mau: "luc" },
      { sao: "Hoá Quyền(Đ)", mau: "luc" },
      { sao: "Hoá Khoa(Đ)", mau: "den" },
      { sao: "Hoá Kị(H)", mau: "den" },
    ],

    [
      6,
      12,
      1,
      8,
      { sao: "Hoá Lộc(V)", mau: "luc" },
      { sao: "Hoá Quyền(V)", mau: "luc" },
      { sao: "Hoá Khoa(Đ)", mau: "den" },
      { sao: "Hoá Kị(H)", mau: "den" },
    ],

    [
      3,
      6,
      15,
      2,
      { sao: "Hoá Lộc(Đ)", mau: "luc" },
      { sao: "Hoá Quyền(V)", mau: "luc" },
      { sao: "Hoá Khoa(Đ)", mau: "den" },
      { sao: "Hoá Kị(H)", mau: "den" },
    ],

    [
      8,
      3,
      6,
      10,
      { sao: "Hoá Lộc(Đ)", mau: "luc" },
      { sao: "Hoá Quyền(V)", mau: "luc" },
      { sao: "Hoá Khoa(Đ)", mau: "den" },
      { sao: "Hoá Kị(B)", mau: "den" },
    ],

    [
      9,
      8,
      18,
      6,
      { sao: "Hoá Lộc(Đ)", mau: "luc" },
      { sao: "Hoá Quyền(Đ)", mau: "luc" },
      { sao: "Hoá Khoa(V)", mau: "den" },
      { sao: "Hoá Kị(H)", mau: "den" },
    ],

    [
      4,
      9,
      12,
      16,
      { sao: "Hoá Lộc(V)", mau: "luc" },
      { sao: "Hoá Quyền(V)", mau: "luc" },
      { sao: "Hoá Khoa(V)", mau: "den" },
      { sao: "Hoá Kị(H)", mau: "den" },
    ],

    [
      5,
      4,
      8,
      3,
      { sao: "Hoá Lộc(Đ)", mau: "luc" },
      { sao: "Hoá Quyền(Đ)", mau: "luc" },
      { sao: "Hoá Khoa(Đ)", mau: "den" },
      { sao: "Hoá Kị(H)", mau: "den" },
    ],

    [
      10,
      5,
      16,
      15,
      { sao: "Hoá Lộc(V)", mau: "luc" },
      { sao: "Hoá Quyền(V)", mau: "luc" },
      { sao: "Hoá Khoa(Đ)", mau: "den" },
      { sao: "Hoá Kị(H)", mau: "den" },
    ],

    [
      12,
      1,
      17,
      4,
      { sao: "Hoá Lộc(B)", mau: "luc" },
      { sao: "Hoá Quyền(V)", mau: "luc" },
      { sao: "Hoá Khoa(Đ)", mau: "den" },
      { sao: "Hoá Kị(H)", mau: "den" },
    ],

    [
      14,
      10,
      8,
      9,
      { sao: "Hoá Lộc(Đ)", mau: "luc" },
      { sao: "Hoá Quyền(B)", mau: "luc" },
      { sao: "Hoá Khoa(V)", mau: "den" },
      { sao: "Hoá Kị(H)", mau: "den" },
    ],
  ];
  const timViTriTuHoa = function (number) {
    let viTri;
    for (i = 0; i < 12; i++) {
      // tìm sao theo chính tinh và phụ tinh
      let cung = thienBan[i].chinhTinh;
      let phuTinhTrai = thienBan[i].phuTinhTrai;
      for (j = 0; j < cung.length; j++) {
        let sao = cung[j];
        if (Number(sao.TH) == Number(number)) {
          viTri = i;
        }
      }

      for (g = 0; g < phuTinhTrai.length; g++) {
        let sao = phuTinhTrai[g];
        if (Number(sao.TH) == Number(number)) {
          viTri = i;
        }
      }
    }
    return viTri;
  };
  const anTuHoa = function (can) {
    let canIndex = CAN.indexOf(can);
    let viTriTuHoa = bangAnTuHoa[canIndex];
    thienBan[timViTriTuHoa(viTriTuHoa[0])].phuTinhTrai.unshift(viTriTuHoa[4]);
    thienBan[timViTriTuHoa(viTriTuHoa[1])].phuTinhTrai.unshift(viTriTuHoa[5]);
    thienBan[timViTriTuHoa(viTriTuHoa[2])].phuTinhTrai.unshift(viTriTuHoa[6]);
    thienBan[timViTriTuHoa(viTriTuHoa[3])].phuTinhPhai.unshift(viTriTuHoa[7]);
  };
  anTuHoa(canNam);

  // 2.5.5 - An Địa Không, Địa kiếp
  const bangAnDiaKhong = [
    "Dậu",
    "Thân",
    "Mùi",
    "Ngọ",
    "Tỵ",
    "Thìn",
    "Mão",
    "Dần",
    "sửu",
    "Tý",
    "Hợi",
    "Tuất",
  ];
  const bangAnDiaKiep = [
    "Sửu",
    "Dần",
    "Mão",
    "Thìn",
    "Tỵ",
    "Ngọ",
    "Mùi",
    "Thân",
    "Dậu",
    "Tuất",
    "Hợi",
    "Tý",
  ];

  const diaKhong = [
    { sao: "Địa Không(H)", mau: "do" },
    { sao: "Địa Không(Đ)", mau: "do" },
    { sao: "Địa Không(H)", mau: "do" },
    { sao: "Địa Không(H)", mau: "do" },
    { sao: "Địa Không(Đ)", mau: "do" },
    { sao: "Địa Không(H)", mau: "do" },
    { sao: "Địa Không(H)", mau: "do" },
    { sao: "Địa Không(Đ)", mau: "do" },
    { sao: "Địa Không(H)", mau: "do" },
    { sao: "Địa Không(H)", mau: "do" },
    { sao: "Địa Không(Đ)", mau: "do" },
    { sao: "Địa Không(H)", mau: "do" },
  ];

  const diaKiep = [
    { sao: "Địa Kiếp(H)", mau: "do" },
    { sao: "Địa Kiếp(Đ)", mau: "do" },
    { sao: "Địa Kiếp(H)", mau: "do" },
    { sao: "Địa Kiếp(H)", mau: "do" },
    { sao: "Địa Kiếp(Đ)", mau: "do" },
    { sao: "Địa Kiếp(H)", mau: "do" },
    { sao: "Địa Kiếp(H)", mau: "do" },
    { sao: "Địa Kiếp(Đ)", mau: "do" },
    { sao: "Địa Kiếp(H)", mau: "do" },
    { sao: "Địa Kiếp(H)", mau: "do" },
    { sao: "Địa Kiếp(Đ)", mau: "do" },
    { sao: "Địa Kiếp(H)", mau: "do" },
  ];
  const viTriDiaKhong = CHIANSAO.indexOf(
    bangAnDiaKhong[CHIANSAO.indexOf(chiGioSinh)]
  );
  const viTriDiaKiep = CHIANSAO.indexOf(
    bangAnDiaKiep[CHIANSAO.indexOf(chiGioSinh)]
  );
  thienBan[viTriDiaKhong].phuTinhPhai.push(
    diaKhong[CHIANSAO.indexOf(chiGioSinh)]
  );
  thienBan[viTriDiaKiep].phuTinhPhai.push(
    diaKiep[CHIANSAO.indexOf(chiGioSinh)]
  );

  // 2.5.6 - An Hoả Linh Tinh
  const bangAnHoaLinhTinh = {
    HT: {
      Dần: { so: 11, sao: { sao: "Hoả Tinh(Đ)", mau: "do" } },
      Ngọ: { so: 11, sao: { sao: "Hoả Tinh(Đ)", mau: "do" } },
      Tuất: { so: 11, sao: { sao: "Hoả Tinh(Đ)", mau: "do" } },
      Thân: { so: 0, sao: { sao: "Hoả Tinh(Đ)", mau: "do" } },
      Tý: { so: 0, sao: { sao: "Hoả Tinh(Đ)", mau: "do" } },
      Thìn: { so: 0, sao: { sao: "Hoả Tinh(Đ)", mau: "do" } },
      Tỵ: { so: 1, sao: { sao: "Hoả Tinh(H)", mau: "do" } },
      Dậu: { so: 1, sao: { sao: "Hoả Tinh(H)", mau: "do" } },
      Sửu: { so: 1, sao: { sao: "Hoả Tinh(H)", mau: "do" } },
      Hợi: { so: 7, sao: { sao: "Hoả Tinh(Đ)", mau: "do" } },
      Mão: { so: 7, sao: { sao: "Hoả Tinh(Đ)", mau: "do" } },
      Mùi: { so: 7, sao: { sao: "Hoả Tinh(Đ)", mau: "do" } },
    },
    LT: {
      Dần: { so: 1, sao: { sao: "Linh Tinh(H)", mau: "do" } },
      Ngọ: { so: 1, sao: { sao: "Linh Tinh(H)", mau: "do" } },
      Tuất: { so: 1, sao: { sao: "Linh Tinh(H)", mau: "do" } },
      Thân: { so: 8, sao: { sao: "Linh Tinh(Đ)", mau: "do" } },
      Tý: { so: 8, sao: { sao: "Linh Tinh(Đ)", mau: "do" } },
      Thìn: { so: 8, sao: { sao: "Linh Tinh(Đ)", mau: "do" } },
      Tỵ: { so: 8, sao: { sao: "Linh Tinh(Đ)", mau: "do" } },
      Dậu: { so: 8, sao: { sao: "Linh Tinh(Đ)", mau: "do" } },
      Sửu: { so: 8, sao: { sao: "Linh Tinh(Đ)", mau: "do" } },
      Hợi: { so: 8, sao: { sao: "Linh Tinh(Đ)", mau: "do" } },
      Mão: { so: 8, sao: { sao: "Linh Tinh(Đ)", mau: "do" } },
      Mùi: { so: 8, sao: { sao: "Linh Tinh(Đ)", mau: "do" } },
    },
  };
  const chiNamSinh = canChi[7];
  const gioSinhDL = CHI.indexOf(chiGioSinh);
  const anHoaLinh = function (chiNamSinhIn, GS, GT, ADNN, bangAn) {
    const viTriKhoiHoaTinh = bangAn.HT[chiNamSinhIn].so;
    const viTroKhoiLinhTinh = bangAn.LT[chiNamSinhIn].so;
    const hoaTinh = bangAn.HT[chiNamSinhIn].sao;
    const linhTinh = bangAn.LT[chiNamSinhIn].sao;
    const adnn = ADNN + GT;

    if (adnn == "DươngNam" || adnn == "ÂmNữ") {
      let anHT = Number(viTriKhoiHoaTinh) + Number(GS);
      let anLT = Number(viTroKhoiLinhTinh) - Number(GS);

      if (anHT > 11 || anHT == 11) {
        anHT -= 12;
      }
      if (anLT < 0) {
        anLT = 12 + anLT;
      }
      thienBan[anHT].phuTinhPhai.push(hoaTinh);
      thienBan[anLT].phuTinhPhai.push(linhTinh);
    }

    if (adnn == "ÂmNam" || adnn == "DươngNữ") {
      let anHT = Number(viTriKhoiHoaTinh) - Number(GS);
      let anLT = Number(viTroKhoiLinhTinh) + Number(GS);
      if (anHT < 0) {
        anHT = 12 + anHT;
      }
      if (anLT > 11 || anLT == 11) {
        anLT -= 12;
      }
      thienBan[anHT].phuTinhPhai.push(hoaTinh);
      thienBan[anLT].phuTinhPhai.push(linhTinh);
    }
  };
  anHoaLinh(chiNamSinh, gioSinhDL, gioiTinh, amDuongNamNu, bangAnHoaLinhTinh);

  // 2.5.7 - An sao thiên mã
  const bangAnThienMa = {
    Tý: { so: 0, sao: { sao: "Thiên Mã(Đ)", mau: "do" } },
    Sửu: { so: 9, sao: { sao: "Thiên Mã(H)", mau: "do" } },
    Dần: { so: 6, sao: { sao: "Thiên Mã(H)", mau: "do" } },
    Mão: { so: 3, sao: { sao: "Thiên Mã(Đ)", mau: "do" } },
    Thìn: { so: 0, sao: { sao: "Thiên Mã(Đ)", mau: "do" } },
    Tỵ: { so: 9, sao: { sao: "Thiên Mã(H)", mau: "do" } },
    Ngọ: { so: 6, sao: { sao: "Thiên Mã(H)", mau: "do" } },
    Mùi: { so: 3, sao: { sao: "Thiên Mã(Đ)", mau: "do" } },
    Thân: { so: 0, sao: { sao: "Thiên Mã(Đ)", mau: "do" } },
    Dậu: { so: 9, sao: { sao: "Thiên Mã(H)", mau: "do" } },
    Tuất: { so: 6, sao: { sao: "Thiên Mã(H)", mau: "do" } },
    Hợi: { so: 3, sao: { sao: "Thiên Mã(Đ)", mau: "do" } },
  };

  const viTriThienMa = bangAnThienMa[chiNamSinh];
  thienBan[viTriThienMa.so].phuTinhTrai.push(viTriThienMa.sao);

  //2.5.8 - An sao thien hinh
  const bangAnThienHinh = [
    { so: 7, sao: { sao: "Thiên Hình(Đ)", mau: "do" } },
    { so: 8, sao: { sao: "Thiên Hình(H)", mau: "do" } },
    { so: 9, sao: { sao: "Thiên Hình(H)", mau: "do" } },
    { so: 10, sao: { sao: "Thiên Hình(H)", mau: "do" } },
    { so: 11, sao: { sao: "Thiên Hình(H)", mau: "do" } },
    { so: 0, sao: { sao: "Thiên Hình(Đ)", mau: "do" } },
    { so: 1, sao: { sao: "Thiên Hình(Đ)", mau: "do" } },
    { so: 2, sao: { sao: "Thiên Hình(H)", mau: "do" } },
    { so: 3, sao: { sao: "Thiên Hình(Đ)", mau: "do" } },
    { so: 4, sao: { sao: "Thiên Hình(H)", mau: "do" } },
    { so: 5, sao: { sao: "Thiên Hình(H)", mau: "do" } },
    { so: 6, sao: { sao: "Thiên Hình(Đ)", mau: "do" } },
  ];
  const viTriThienHinh = bangAnThienHinh[AL.month - 1];
  thienBan[viTriThienHinh.so].phuTinhPhai.push(viTriThienHinh.sao);

  // 2.5.9 - An sao Kình DƯơng
  const bangAnKinhDuong = {
    Giáp: { so: 1, sao: { sao: "Kinh Dương(H)", mau: "bac" } },
    Ất: { so: 2, sao: { sao: "Kinh Dương(Đ)", mau: "bac" } },
    Bính: { so: 4, sao: { sao: "Kinh Dương(H)", mau: "bac" } },
    Đinh: { so: 5, sao: { sao: "Kinh Dương(Đ)", mau: "bac" } },
    Mậu: { so: 4, sao: { sao: "Kinh Dương(H)", mau: "bac" } },
    Kỷ: { so: 5, sao: { sao: "Kinh Dương(Đ)", mau: "bac" } },
    Canh: { so: 7, sao: { sao: "Kinh Dương(H)", mau: "bac" } },
    Tân: { so: 8, sao: { sao: "Kinh Dương(Đ)", mau: "bac" } },
    Nhâm: { so: 10, sao: { sao: "Kinh Dương(H)", mau: "bac" } },
    Quý: { so: 11, sao: { sao: "Kinh Dương(Đ)", mau: "bac" } },
  };
  const viTriKinhDuong = bangAnKinhDuong[canChi[6]];
  thienBan[viTriKinhDuong.so].phuTinhPhai.push(viTriKinhDuong.sao);

  // 2.5.10 - An Vòng thái tuế
  const bangAnVongThaiTue = {
    Tý: [
      { sao: "Thái Tuế", mau: "do" },
      { sao: "Thiếu Dương", mau: "do" },
      { sao: "Tang Môn(Đ)", mau: "luc" },
      { sao: "Thiếu Âm(H)", mau: "den" },
      { sao: "Quan Phù", mau: "do" },
      { sao: "Tử Phù", mau: "do" },
      { sao: "Tuế Phá", mau: "do" },
      { sao: "Long Đức", mau: "den" },
      { sao: "Bạch Hổ(Đ)", mau: "bac" },
      { sao: "Phúc Đức", mau: "vang" },
      { sao: "Điếu Khách", mau: "do" },
      { sao: "Trực Phù", mau: "do" },
    ],

    Sửu: [
      { sao: "Thái Tuế", mau: "do" },
      { sao: "Thiếu Dương", mau: "do" },
      { sao: "Tang Môn(Đ)", mau: "luc" },
      { sao: "Thiếu Âm(H)", mau: "den" },
      { sao: "Quan Phù", mau: "do" },
      { sao: "Tử Phù", mau: "do" },
      { sao: "Tuế Phá", mau: "do" },
      { sao: "Long Đức", mau: "den" },
      { sao: "Bạch Hổ(Đ)", mau: "bac" },
      { sao: "Phúc Đức", mau: "vang" },
      { sao: "Điếu Khách", mau: "do" },
      { sao: "Trực Phù", mau: "do" },
    ],

    Dần: [
      { sao: "Thái Tuế", mau: "do" },
      { sao: "Thiếu Dương", mau: "do" },
      { sao: "Tang Môn(H)", mau: "luc" },
      { sao: "Thiếu Âm(H)", mau: "den" },
      { sao: "Quan Phù", mau: "do" },
      { sao: "Tử Phù", mau: "do" },
      { sao: "Tuế Phá", mau: "do" },
      { sao: "Long Đức", mau: "den" },
      { sao: "Bạch Hổ(H)", mau: "bac" },
      { sao: "Phúc Đức", mau: "vang" },
      { sao: "Điếu Khách", mau: "do" },
      { sao: "Trực Phù", mau: "do" },
    ],

    Mão: [
      { sao: "Thái Tuế", mau: "do" },
      { sao: "Thiếu Dương", mau: "do" },
      { sao: "Tang Môn(H)", mau: "luc" },
      { sao: "Thiếu Âm(H)", mau: "den" },
      { sao: "Quan Phù", mau: "do" },
      { sao: "Tử Phù", mau: "do" },
      { sao: "Tuế Phá", mau: "do" },
      { sao: "Long Đức", mau: "den" },
      { sao: "Bạch Hổ(H)", mau: "bac" },
      { sao: "Phúc Đức", mau: "vang" },
      { sao: "Điếu Khách", mau: "do" },
      { sao: "Trực Phù", mau: "do" },
    ],

    Thìn: [
      { sao: "Thái Tuế", mau: "do" },
      { sao: "Thiếu Dương", mau: "do" },
      { sao: "Tang Môn(H)", mau: "luc" },
      { sao: "Thiếu Âm(H)", mau: "den" },
      { sao: "Quan Phù", mau: "do" },
      { sao: "Tử Phù", mau: "do" },
      { sao: "Tuế Phá", mau: "do" },
      { sao: "Long Đức", mau: "den" },
      { sao: "Bạch Hổ(H)", mau: "bac" },
      { sao: "Phúc Đức", mau: "vang" },
      { sao: "Điếu Khách", mau: "do" },
      { sao: "Trực Phù", mau: "do" },
    ],

    Tỵ: [
      { sao: "Thái Tuế", mau: "do" },
      { sao: "Thiếu Dương", mau: "do" },
      { sao: "Tang Môn(H)", mau: "luc" },
      { sao: "Thiếu Âm(Đ)", mau: "den" },
      { sao: "Quan Phù", mau: "do" },
      { sao: "Tử Phù", mau: "do" },
      { sao: "Tuế Phá", mau: "do" },
      { sao: "Long Đức", mau: "den" },
      { sao: "Bạch Hổ(H)", mau: "bac" },
      { sao: "Phúc Đức", mau: "vang" },
      { sao: "Điếu Khách", mau: "do" },
      { sao: "Trực Phù", mau: "do" },
    ],

    Ngọ: [
      { sao: "Thái Tuế", mau: "do" },
      { sao: "Thiếu Dương", mau: "do" },
      { sao: "Tang Môn(Đ)", mau: "luc" },
      { sao: "Thiếu Âm(Đ)", mau: "den" },
      { sao: "Quan Phù", mau: "do" },
      { sao: "Tử Phù", mau: "do" },
      { sao: "Tuế Phá", mau: "do" },
      { sao: "Long Đức", mau: "den" },
      { sao: "Bạch Hổ(Đ)", mau: "bac" },
      { sao: "Phúc Đức", mau: "vang" },
      { sao: "Điếu Khách", mau: "do" },
      { sao: "Trực Phù", mau: "do" },
    ],

    Mùi: [
      { sao: "Thái Tuế", mau: "do" },
      { sao: "Thiếu Dương", mau: "do" },
      { sao: "Tang Môn(Đ)", mau: "luc" },
      { sao: "Thiếu Âm(Đ)", mau: "den" },
      { sao: "Quan Phù", mau: "do" },
      { sao: "Tử Phù", mau: "do" },
      { sao: "Tuế Phá", mau: "do" },
      { sao: "Long Đức", mau: "den" },
      { sao: "Bạch Hổ(Đ)", mau: "bac" },
      { sao: "Phúc Đức", mau: "vang" },
      { sao: "Điếu Khách", mau: "do" },
      { sao: "Trực Phù", mau: "do" },
    ],

    Thân: [
      { sao: "Thái Tuế", mau: "do" },
      { sao: "Thiếu Dương", mau: "do" },
      { sao: "Tang Môn(H)", mau: "luc" },
      { sao: "Thiếu Âm(Đ)", mau: "den" },
      { sao: "Quan Phù", mau: "do" },
      { sao: "Tử Phù", mau: "do" },
      { sao: "Tuế Phá", mau: "do" },
      { sao: "Long Đức", mau: "den" },
      { sao: "Bạch Hổ(H)", mau: "bac" },
      { sao: "Phúc Đức", mau: "vang" },
      { sao: "Điếu Khách", mau: "do" },
      { sao: "Trực Phù", mau: "do" },
    ],

    Dậu: [
      { sao: "Thái Tuế", mau: "do" },
      { sao: "Thiếu Dương", mau: "do" },
      { sao: "Tang Môn(H)", mau: "luc" },
      { sao: "Thiếu Âm(Đ)", mau: "den" },
      { sao: "Quan Phù", mau: "do" },
      { sao: "Tử Phù", mau: "do" },
      { sao: "Tuế Phá", mau: "do" },
      { sao: "Long Đức", mau: "den" },
      { sao: "Bạch Hổ(H)", mau: "bac" },
      { sao: "Phúc Đức", mau: "vang" },
      { sao: "Điếu Khách", mau: "do" },
      { sao: "Trực Phù", mau: "do" },
    ],

    Tuất: [
      { sao: "Thái Tuế", mau: "do" },
      { sao: "Thiếu Dương", mau: "do" },
      { sao: "Tang Môn(H)", mau: "luc" },
      { sao: "Thiếu Âm(H)", mau: "den" },
      { sao: "Quan Phù", mau: "do" },
      { sao: "Tử Phù", mau: "do" },
      { sao: "Tuế Phá", mau: "do" },
      { sao: "Long Đức", mau: "den" },
      { sao: "Bạch Hổ(H)", mau: "bac" },
      { sao: "Phúc Đức", mau: "vang" },
      { sao: "Điếu Khách", mau: "do" },
      { sao: "Trực Phù", mau: "do" },
    ],

    Hợi: [
      { sao: "Thái Tuế", mau: "do" },
      { sao: "Thiếu Dương", mau: "do" },
      { sao: "Tang Môn(H)", mau: "luc" },
      { sao: "Thiếu Âm(H)", mau: "den" },
      { sao: "Quan Phù", mau: "do" },
      { sao: "Tử Phù", mau: "do" },
      { sao: "Tuế Phá", mau: "do" },
      { sao: "Long Đức", mau: "den" },
      { sao: "Bạch Hổ(H)", mau: "bac" },
      { sao: "Phúc Đức", mau: "vang" },
      { sao: "Điếu Khách", mau: "do" },
      { sao: "Trực Phù", mau: "do" },
    ],
  };

  const viTriVongThaiTue = bangAnVongThaiTue[canChi[7]];
  const khoiVongThaiTue = CHIANSAO.indexOf(canChi[7]);
  for (i = 0; i < 12; i++) {
    let index = khoiVongThaiTue + i;

    if (index > 11) {
      index -= 12;
    }

    if (i == 0) {
      thienBan[index].phuTinhPhai.unshift(viTriVongThaiTue[i]);
    }
    if (i == 1 || i == 3 || i == 7 || i == 9) {
      thienBan[index].phuTinhTrai.push(viTriVongThaiTue[i]);
    } else if (index < 11 || index == 11) {
      thienBan[index].phuTinhPhai.push(viTriVongThaiTue[i]);
    }
  }

  // 2.5.10 - an sao Đà La
  const bangAnSaoDaLa = {
    Giáp: { so: 11, sao: { sao: "Đà La(Đ)", mau: "bac" } },
    Ất: { so: 0, sao: { sao: "Đà La(H)", mau: "bac" } },
    Bính: { so: 2, sao: { sao: "Đà La(Đ)", mau: "bac" } },
    Đinh: { so: 3, sao: { sao: "Đà La(Đ)", mau: "bac" } },
    Mậu: { so: 2, sao: { sao: "Đà La(Đ)", mau: "bac" } },
    Kỷ: { so: 3, sao: { sao: "Đà La(Đ)", mau: "bac" } },
    Canh: { so: 5, sao: { sao: "Đà La(Đ)", mau: "bac" } },
    Tân: { so: 6, sao: { sao: "Đà La(H)", mau: "bac" } },
    Nhâm: { so: 8, sao: { sao: "Đà La(Đ)", mau: "bac" } },
    Quý: { so: 9, sao: { sao: "Đà La(H)", mau: "bac" } },
  };

  const viTriDaLa = bangAnSaoDaLa[canChi[6]];
  thienBan[viTriDaLa.so].phuTinhPhai.push(viTriDaLa.sao);

  // 2.5.11 - An Thien Dieu
  const bangAnThienDieu = [
    { so: 11, sao: { sao: "Thiên Diêu(H)", mau: "den" } },
    { so: 0, sao: { sao: "Thiên Diêu(Đ)", mau: "den" } },
    { so: 1, sao: { sao: "Thiên Diêu(Đ)", mau: "den" } },
    { so: 2, sao: { sao: "Thiên Diêu(H)", mau: "den" } },
    { so: 3, sao: { sao: "Thiên Diêu(H)", mau: "den" } },
    { so: 4, sao: { sao: "Thiên Diêu(H)", mau: "den" } },
    { so: 5, sao: { sao: "Thiên Diêu(H)", mau: "den" } },
    { so: 6, sao: { sao: "Thiên Diêu(H)", mau: "den" } },
    { so: 7, sao: { sao: "Thiên Diêu(Đ)", mau: "den" } },
    { so: 8, sao: { sao: "Thiên Diêu(Đ)", mau: "den" } },
    { so: 9, sao: { sao: "Thiên Diêu(H)", mau: "den" } },
    { so: 10, sao: { sao: "Thiên Diêu(H)", mau: "den" } },
  ];
  const viTriThienDieu = bangAnThienDieu[AL.month - 1];
  thienBan[viTriThienDieu.so].phuTinhPhai.push(viTriThienDieu.sao);

  //2.5.12 An sao thien khoc
  const bangAnThienKhoc = {
    Tý: { so: 4, sao: { sao: "Thiên Khốc(Đ)", mau: "bac" } },
    Sửu: { so: 3, sao: { sao: "Thiên Khốc(H)", mau: "bac" } },
    Dần: { so: 2, sao: { sao: "Thiên Khốc(H)", mau: "bac" } },
    Mão: { so: 1, sao: { sao: "Thiên Khốc(Đ)", mau: "bac" } },
    Thìn: { so: 0, sao: { sao: "Thiên Khốc(H)", mau: "bac" } },
    Tỵ: { so: 11, sao: { sao: "Thiên Khốc(Đ)", mau: "bac" } },
    Ngọ: { so: 10, sao: { sao: "Thiên Khốc(Đ)", mau: "bac" } },
    Mùi: { so: 9, sao: { sao: "Thiên Khốc(H)", mau: "bac" } },
    Thân: { so: 8, sao: { sao: "Thiên Khốc(H)", mau: "bac" } },
    Dậu: { so: 7, sao: { sao: "Thiên Khốc(Đ)", mau: "bac" } },
    Tuất: { so: 6, sao: { sao: "Thiên Khốc(H)", mau: "bac" } },
    Hợi: { so: 5, sao: { sao: "Thiên Khốc(Đ)", mau: "bac" } },
  };
  const viTriThienKhoc = bangAnThienKhoc[canChi[7]];
  thienBan[viTriThienKhoc.so].phuTinhPhai.push(viTriThienKhoc.sao);

  // 2.5.13 An sao thien hu
  const bangAnThienHu = {
    Tý: { so: 4, sao: { sao: "Thiên Hư(Đ)", mau: "den" } },
    Sửu: { so: 5, sao: { sao: "Thiên Hư(Đ)", mau: "den" } },
    Dần: { so: 6, sao: { sao: "Thiên Hư(H)", mau: "den" } },
    Mão: { so: 7, sao: { sao: "Thiên Hư(Đ)", mau: "den" } },
    Thìn: { so: 8, sao: { sao: "Thiên Hư(H)", mau: "den" } },
    Tỵ: { so: 9, sao: { sao: "Thiên Hư(H)", mau: "den" } },
    Ngọ: { so: 10, sao: { sao: "Thiên Hư(Đ)", mau: "den" } },
    Mùi: { so: 11, sao: { sao: "Thiên Hư(Đ)", mau: "den" } },
    Thân: { so: 0, sao: { sao: "Thiên Hư(H)", mau: "den" } },
    Dậu: { so: 1, sao: { sao: "Thiên Hư(Đ)", mau: "den" } },
    Tuất: { so: 2, sao: { sao: "Thiên Hư(H)", mau: "den" } },
    Hợi: { so: 3, sao: { sao: "Thiên Hư(H)", mau: "den" } },
  };

  const viTriThienHu = bangAnThienHu[canChi[7]];
  thienBan[viTriThienHu.so].phuTinhPhai.push(viTriThienHu.sao);

  //2.5.14 an sao Lộc tồn
  const bangAnLocTon = {
    Giáp: { so: 0, sao: { sao: "Lộc Tồn(M)", mau: "vang" } },
    Ất: { so: 1, sao: { sao: "Lộc Tồn(M)", mau: "vang" } },
    Bính: { so: 3, sao: { sao: "Lộc Tồn(Đ)", mau: "vang" } },
    Đinh: { so: 4, sao: { sao: "Lộc Tồn(M)", mau: "vang" } },
    Mậu: { so: 3, sao: { sao: "Lộc Tồn(Đ)", mau: "vang" } },
    Kỷ: { so: 4, sao: { sao: "Lộc Tồn(M)", mau: "vang" } },
    Canh: { so: 6, sao: { sao: "Lộc Tồn(B)", mau: "vang" } },
    Tân: { so: 7, sao: { sao: "Lộc Tồn(B)", mau: "vang" } },
    Nhâm: { so: 9, sao: { sao: "Lộc Tồn(Đ)", mau: "vang" } },
    Quý: { so: 10, sao: { sao: "Lộc Tồn(M)", mau: "vang" } },
  };

  const viTriLocTon = bangAnLocTon[canChi[6]];
  thienBan[viTriLocTon.so].phuTinhTrai.unshift(viTriLocTon.sao);

  //2.5.15 an vog bac si
  const bangAnVongBacSi = {
    Giáp: [
      { sao: "Bác Sĩ", mau: "den" },
      { sao: "Lực Sĩ", mau: "do" },
      { sao: "Thanh Long", mau: "den" },
      { sao: "Tiểu Hao(H)", mau: "do" },
      { sao: "Tướng Quân", mau: "luc" },
      { sao: "Tấu Thư", mau: "bac" },
      { sao: "Phi Liêm", mau: "do" },
      { sao: "Hỉ Thần", mau: "do" },
      { sao: "Bệnh Phù", mau: "vang" },
      { sao: "Đại Hao(H)", mau: "do" },
      { sao: "Phục Binh", mau: "do" },
      { sao: "Quan Phủ", mau: "do" },
    ],

    Ất: [
      { sao: "Bác Sĩ", mau: "den" },
      { sao: "Lực Sĩ", mau: "do" },
      { sao: "Thanh Long", mau: "den" },
      { sao: "Tiểu Hao(H)", mau: "do" },
      { sao: "Tướng Quân", mau: "luc" },
      { sao: "Tấu Thư", mau: "bac" },
      { sao: "Phi Liêm", mau: "do" },
      { sao: "Hỉ Thần", mau: "do" },
      { sao: "Bệnh Phù", mau: "vang" },
      { sao: "Đại Hao(H)", mau: "do" },
      { sao: "Phục Binh", mau: "do" },
      { sao: "Quan Phủ", mau: "do" },
    ],

    Bính: [
      { sao: "Bác Sĩ", mau: "den" },
      { sao: "Lực Sĩ", mau: "do" },
      { sao: "Thanh Long", mau: "den" },
      { sao: "Tiểu Hao(Đ)", mau: "do" },
      { sao: "Tướng Quân", mau: "luc" },
      { sao: "Tấu Thư", mau: "bac" },
      { sao: "Phi Liêm", mau: "do" },
      { sao: "Hỉ Thần", mau: "do" },
      { sao: "Bệnh Phù", mau: "vang" },
      { sao: "Đại Hao(Đ)", mau: "do" },
      { sao: "Phục Binh", mau: "do" },
      { sao: "Quan Phủ", mau: "do" },
    ],

    Đinh: [
      { sao: "Bác Sĩ", mau: "den" },
      { sao: "Lực Sĩ", mau: "do" },
      { sao: "Thanh Long", mau: "den" },
      { sao: "Tiểu Hao(Đ)", mau: "do" },
      { sao: "Tướng Quân", mau: "luc" },
      { sao: "Tấu Thư", mau: "bac" },
      { sao: "Phi Liêm", mau: "do" },
      { sao: "Hỉ Thần", mau: "do" },
      { sao: "Bệnh Phù", mau: "vang" },
      { sao: "Đại Hao(Đ)", mau: "do" },
      { sao: "Phục Binh", mau: "do" },
      { sao: "Quan Phủ", mau: "do" },
    ],

    Mậu: [
      { sao: "Bác Sĩ", mau: "den" },
      { sao: "Lực Sĩ", mau: "do" },
      { sao: "Thanh Long", mau: "den" },
      { sao: "Tiểu Hao(Đ)", mau: "do" },
      { sao: "Tướng Quân", mau: "luc" },
      { sao: "Tấu Thư", mau: "bac" },
      { sao: "Phi Liêm", mau: "do" },
      { sao: "Hỉ Thần", mau: "do" },
      { sao: "Bệnh Phù", mau: "vang" },
      { sao: "Đại Hao(Đ)", mau: "do" },
      { sao: "Phục Binh", mau: "do" },
      { sao: "Quan Phủ", mau: "do" },
    ],

    Kỷ: [
      { sao: "Bác Sĩ", mau: "den" },
      { sao: "Lực Sĩ", mau: "do" },
      { sao: "Thanh Long", mau: "den" },
      { sao: "Tiểu Hao(Đ)", mau: "do" },
      { sao: "Tướng Quân", mau: "luc" },
      { sao: "Tấu Thư", mau: "bac" },
      { sao: "Phi Liêm", mau: "do" },
      { sao: "Hỉ Thần", mau: "do" },
      { sao: "Bệnh Phù", mau: "vang" },
      { sao: "Đại Hao(Đ)", mau: "do" },
      { sao: "Phục Binh", mau: "do" },
      { sao: "Quan Phủ", mau: "do" },
    ],

    Canh: [
      { sao: "Bác Sĩ", mau: "den" },
      { sao: "Lực Sĩ", mau: "do" },
      { sao: "Thanh Long", mau: "den" },
      { sao: "Tiểu Hao(H)", mau: "do" },
      { sao: "Tướng Quân", mau: "luc" },
      { sao: "Tấu Thư", mau: "bac" },
      { sao: "Phi Liêm", mau: "do" },
      { sao: "Hỉ Thần", mau: "do" },
      { sao: "Bệnh Phù", mau: "vang" },
      { sao: "Đại Hao(H)", mau: "do" },
      { sao: "Phục Binh", mau: "do" },
      { sao: "Quan Phủ", mau: "do" },
    ],

    Tân: [
      { sao: "Bác Sĩ", mau: "den" },
      { sao: "Lực Sĩ", mau: "do" },
      { sao: "Thanh Long", mau: "den" },
      { sao: "Tiểu Hao(H)", mau: "do" },
      { sao: "Tướng Quân", mau: "luc" },
      { sao: "Tấu Thư", mau: "bac" },
      { sao: "Phi Liêm", mau: "do" },
      { sao: "Hỉ Thần", mau: "do" },
      { sao: "Bệnh Phù", mau: "vang" },
      { sao: "Đại Hao(H)", mau: "do" },
      { sao: "Phục Binh", mau: "do" },
      { sao: "Quan Phủ", mau: "do" },
    ],

    Nhâm: [
      { sao: "Bác Sĩ", mau: "den" },
      { sao: "Lực Sĩ", mau: "do" },
      { sao: "Thanh Long", mau: "den" },
      { sao: "Tiểu Hao(Đ)", mau: "do" },
      { sao: "Tướng Quân", mau: "luc" },
      { sao: "Tấu Thư", mau: "bac" },
      { sao: "Phi Liêm", mau: "do" },
      { sao: "Hỉ Thần", mau: "do" },
      { sao: "Bệnh Phù", mau: "vang" },
      { sao: "Đại Hao(Đ)", mau: "do" },
      { sao: "Phục Binh", mau: "do" },
      { sao: "Quan Phủ", mau: "do" },
    ],

    Quý: [
      { sao: "Bác Sĩ", mau: "den" },
      { sao: "Lực Sĩ", mau: "do" },
      { sao: "Thanh Long", mau: "den" },
      { sao: "Tiểu Hao(Đ)", mau: "do" },
      { sao: "Tướng Quân", mau: "luc" },
      { sao: "Tấu Thư", mau: "bac" },
      { sao: "Phi Liêm", mau: "do" },
      { sao: "Hỉ Thần", mau: "do" },
      { sao: "Bệnh Phù", mau: "vang" },
      { sao: "Đại Hao(Đ)", mau: "do" },
      { sao: "Phục Binh", mau: "do" },
      { sao: "Quan Phủ", mau: "do" },
    ],
  };

  const viTriVongBacSi = bangAnVongBacSi[canChi[6]];
  const anVongBacSi = function (sao, viTri, GT, ADNN) {
    const adnn = ADNN + GT;

    if (adnn == "DươngNam" || adnn == "ÂmNữ") {
      for (i = 0; i < 12; i++) {
        let index = viTri + i;

        if (index > 11) {
          index -= 12;
        }

        if (i == 0) {
          thienBan[index].phuTinhTrai.push(sao[i]);
        }
        if (i == 1 || i == 2 || i == 5 || i == 7) {
          thienBan[index].phuTinhTrai.push(sao[i]);
        } else if (index < 11 || index == 11) {
          if (i > 0) {
            thienBan[index].phuTinhPhai.push(sao[i]);
          }
        }
      }
    }

    if (adnn == "ÂmNam" || adnn == "DươngNữ") {
      for (i = 0; i < 12; i++) {
        let index = viTri - i;
        if (index < 0) {
          index += 12;
        }
        if (i == 0) {
          thienBan[index].phuTinhTrai.push(sao[i]);
        }
        if (i == 1 || i == 2 || i == 5 || i == 7) {
          thienBan[index].phuTinhTrai.push(sao[i]);
        } else if (index < 11 || index == 11) {
          if (i > 0) {
            thienBan[index].phuTinhPhai.push(sao[i]);
          }
        }
      }
    }
  };
  anVongBacSi(viTriVongBacSi, viTriLocTon.so, gioiTinh, amDuongNamNu);

  //2.5.16 An theo Can Nam Sinh
  const bangAnSaoCanNam = {
    Giáp: [8, 5, 11, 5, 5, 7, 7, 3],
    Ất: [9, 6, 3, 6, 2, 6, 8, 4],
    Bính: [11, 8, 9, 7, 3, 10, 5, 10],
    Đinh: [0, 9, 9, 7, 0, 9, 6, 3],
    Mậu: [11, 8, 11, 5, 1, 1, 3, 4],
    Kỷ: [0, 9, 10, 6, 7, 0, 4, 6],
    Canh: [2, 11, 4, 0, 9, 4, 1, 0],
    Tân: [3, 0, 4, 0, 7, 3, 2, 4],
    Nhâm: [5, 2, 1, 3, 8, 4, 9, 7],
    Quý: [6, 3, 1, 3, 4, 3, 0, 8],
  };

  const viTriSaoCanNam = bangAnSaoCanNam[canChi[6]];
  thienBan[viTriSaoCanNam[0]].phuTinhTrai.push({
    sao: "Quốc Ấn",
    mau: "vang",
  });
  thienBan[viTriSaoCanNam[1]].phuTinhTrai.push({
    sao: "Đường Phù",
    mau: "luc",
  });
  thienBan[viTriSaoCanNam[2]].phuTinhTrai.push({
    sao: "Thiên Khôi",
    mau: "do",
  });
  thienBan[viTriSaoCanNam[3]].phuTinhTrai.push({
    sao: "Thiên Việt",
    mau: "do",
  });
  thienBan[viTriSaoCanNam[4]].phuTinhTrai.push({
    sao: "Thiên Quan",
    mau: "do",
  });
  thienBan[viTriSaoCanNam[5]].phuTinhTrai.push({
    sao: "Thiên Phúc",
    mau: "vang",
  });
  thienBan[viTriSaoCanNam[6]].phuTinhPhai.push({ sao: "Lưu Hà", mau: "den" });
  thienBan[viTriSaoCanNam[7]].phuTinhTrai.push({
    sao: "Thiên Trù",
    mau: "vang",
  });

  // 2.5.17 an sao theo chi nam sinh
  const bangAnSaoChiNam = {
    Tý: [2, 8, 8, 7, 3, 1, 7, 0, 8, 7, 3, 2, 3, 11],
    Sửu: [3, 7, 7, 8, 4, 0, 6, 0, 8, 4, 0, 11, 11, 0],
    Dần: [4, 6, 6, 9, 5, 11, 5, 3, 11, 1, 9, 8, 7, 1],
    Mão: [5, 5, 5, 10, 6, 10, 4, 3, 11, 10, 6, 5, 3, 2],
    Thìn: [6, 4, 4, 11, 7, 9, 3, 3, 11, 7, 3, 2, 11, 3],
    Tỵ: [7, 3, 3, 0, 8, 8, 2, 6, 2, 4, 0, 11, 7, 4],
    Ngọ: [8, 2, 2, 1, 9, 7, 1, 6, 2, 1, 9, 8, 3, 5],
    Mùi: [9, 1, 1, 2, 10, 6, 0, 6, 2, 10, 6, 5, 11, 6],
    Thân: [10, 0, 0, 3, 11, 5, 11, 9, 5, 7, 3, 2, 7, 7],
    Dậu: [11, 11, 11, 4, 0, 4, 10, 9, 5, 4, 0, 11, 3, 8],
    Tuất: [0, 10, 10, 5, 1, 3, 9, 9, 5, 1, 9, 8, 11, 9],
    Hợi: [1, 9, 9, 6, 2, 2, 8, 0, 8, 10, 6, 5, 7, 10],
  };

  const viTriSaoChiNam = bangAnSaoChiNam[canChi[7]];
  thienBan[viTriSaoChiNam[0]].phuTinhTrai.push({
    sao: "Long Trì",
    mau: "den",
  });
  thienBan[viTriSaoChiNam[1]].phuTinhTrai.push({
    sao: "Phượng Các",
    mau: "luc",
  });

  thienBan[viTriSaoChiNam[2]].phuTinhTrai.push({
    sao: "Giải Thần",
    mau: "luc",
  });
  thienBan[viTriSaoChiNam[3]].phuTinhTrai.push({
    sao: "Thiên Đức",
    mau: "do",
  });

  thienBan[viTriSaoChiNam[4]].phuTinhTrai.push({
    sao: "Nguyệt Đức",
    mau: "do",
  });
  thienBan[viTriSaoChiNam[5]].phuTinhTrai.push({
    sao: "Hồng Loan",
    mau: "den",
  });

  thienBan[viTriSaoChiNam[6]].phuTinhTrai.push({
    sao: "Thiên Hỷ",
    mau: "den",
  });
  thienBan[viTriSaoChiNam[7]].phuTinhPhai.push({
    sao: "Cô Thần",
    mau: "vang",
  });
  thienBan[viTriSaoChiNam[8]].phuTinhPhai.push({
    sao: "Quả Tú",
    mau: "vang",
  });

  thienBan[viTriSaoChiNam[9]].phuTinhTrai.push({
    sao: "Đào Hoa",
    mau: "luc",
  });
  thienBan[viTriSaoChiNam[10]].phuTinhPhai.push({
    sao: "Kiếp Sát",
    mau: "do",
  });

  thienBan[viTriSaoChiNam[11]].phuTinhTrai.push({
    sao: "Hoa cái",
    mau: "bac",
  });
  thienBan[viTriSaoChiNam[12]].phuTinhPhai.push({
    sao: "Phá Toái",
    mau: "do",
  });
  thienBan[viTriSaoChiNam[13]].phuTinhPhai.push({
    sao: "Thiên Không",
    mau: "do",
  });

  // 2.5.18 - an sao theo thang sinh
  const bangAnSaoThangSinh = [
    [11, 6, 5],
    [0, 7, 6],
    [1, 8, 7],
    [2, 9, 8],
    [3, 10, 9],
    [4, 11, 10],
    [5, 0, 11],
    [6, 1, 0],
    [7, 2, 1],
    [8, 10, 2],
    [9, 4, 3],
    [10, 5, 4],
  ];
  const viTriSaoThangSinh = bangAnSaoThangSinh[AL.month - 1];
  thienBan[viTriSaoThangSinh[0]].phuTinhTrai.push({
    sao: "Thiên Y",
    mau: "den",
  });
  thienBan[viTriSaoThangSinh[1]].phuTinhTrai.push({
    sao: "Thiên Giải",
    mau: "do",
  });
  thienBan[viTriSaoThangSinh[2]].phuTinhTrai.push({
    sao: "Địa Giải",
    mau: "vang",
  });

  // 2.5.19 - an sao thao gio sinh
  const bangAnSaoGioSinh = {
    Tý: [4, 0],
    Sửu: [5, 1],
    Dần: [6, 2],
    Mão: [7, 3],
    Thìn: [8, 4],
    Tỵ: [9, 5],
    Ngọ: [3, 6],
    Mùi: [11, 7],
    Thân: [0, 8],
    Dậu: [1, 9],
    Tuất: [2, 3],
    Hợi: [3, 11],
  };

  const viTriSaoGioSinh = bangAnSaoGioSinh[chiGioSinh];
  thienBan[viTriSaoGioSinh[0]].phuTinhTrai.push({
    sao: "Thai Phụ",
    mau: "bac",
  });
  thienBan[viTriSaoGioSinh[1]].phuTinhTrai.push({
    sao: "Phong Cáo",
    mau: "vang",
  });

  //2.5.19 An sao Ân Quang, Thiên Quý
  const anSaoNgaySinh = function (vk, vx, tp, hb, day) {
    let te = (day % 12) - 1;
    let tt = tp + day - 1;
    if (tt > 11) {
      tt = tt % 12;
    }
    let bt = hb - te;
    if (bt < 0) {
      bt += 11;
    }
    let tq = vk - te + 1;
    if (tq < 0) {
      tq += 11 + 1;
    }
    let aq = vx + te - 1;
    if (aq > 11) {
      aq -= 11;
    }
    return [tt, bt, tq, aq];
  };

  const viTriSaoNgaySinh = anSaoNgaySinh(
    viTriVanKhuc,
    viTriVanXuong,
    viTriTaPhu,
    viTriHuuBat,
    AL.day
  );

  thienBan[viTriSaoNgaySinh[0]].phuTinhTrai.push({
    sao: "Tam Thai",
    mau: "den",
  });
  thienBan[viTriSaoNgaySinh[1]].phuTinhTrai.push({
    sao: "Bát Toạ",
    mau: "luc",
  });
  thienBan[viTriSaoNgaySinh[2]].phuTinhTrai.push({
    sao: "Thiên Quý",
    mau: "vang",
  });
  thienBan[viTriSaoNgaySinh[3]].phuTinhTrai.push({
    sao: "Ân Quang",
    mau: "luc",
  });

  // 2.5.20 an cac sao co dinh

  // sao thien la , sao dia vong,
  thienBan[2].phuTinhPhai.push({ sao: "Thiên La", mau: "bac" });
  thienBan[8].phuTinhPhai.push({ sao: "Địa Võng", mau: " bac" });

  // sao thien thuong sao thien su, sao thien tai ,sao thien tho
  for (i = 0; i < 12; i++) {
    const cung = thienBan[i].tenCung;
    if (cung == "NÔ BỘC") {
      thienBan[i].phuTinhPhai.push({ sao: "Thiên Thương", mau: "vang" });
    }
    if (cung == "TẬT ÁCH") {
      thienBan[i].phuTinhPhai.push({ sao: "Thiên Sứ", mau: "vang" });
    }
    if (cung == "MỆNH") {
      let vt = CHI.indexOf(chiNamSinh) + i;
      if (vt > 11) {
        vt -= 12;
      }
      thienBan[vt].phuTinhTrai.push({ sao: "Thiên Tài", mau: "vang" });
    }
  }

  let viTriThienTho = cungThanIndex + CHI.indexOf(chiNamSinh);
  if (viTriThienTho > 11) {
    viTriThienTho -= 12;
  }
  thienBan[viTriThienTho].phuTinhTrai.push({ sao: "Thiên Thọ", mau: "vang" });

  // sao dau quan

  let viTriSaoDauQuan = khoiVongThaiTue - AL.month + 1;

  if (viTriSaoDauQuan < 0) {
    viTriSaoDauQuan += 12;
  }

  viTriSaoDauQuan = viTriSaoDauQuan + CHI.indexOf(chiGioSinh);

  if (viTriSaoDauQuan > 11) {
    viTriSaoDauQuan -= 12;
  }
  thienBan[viTriSaoDauQuan].phuTinhPhai.push({ sao: "Đẩu Quân", mau: "do" });

  // 2.5.21 an vong trang sinh
  const bangAnVongTrangSinh = [
    "Tràng Sinh",
    "Dưỡng",
    "Thai",
    "Tuyệt",
    "Mộ",
    "Tử",
    "Bệnh",
    "Suy",
    "Đế Vượng",
    "Lâm Quan",
    "Quan Đới",
    "Mộc Dục",
  ];
  const vongTrangSinh = {
    "Mộc Tam Cục": 9,
    "Thủy Nhị Cục": 6,
    "Kim Tứ Cục": 3,
    "Hỏa Lục Cục": 0,
    "Thổ Ngũ Cục": 6,
  };

  const viTriVongTrangSinh = vongTrangSinh[cuc];
  for (i = 0; i < 12; i++) {
    let tinh = i + viTriVongTrangSinh;
    if (tinh > 11) {
      tinh -= 12;
    }
    thienBan[tinh].vongTrangSinh = {
      sao: bangAnVongTrangSinh[i],
      mau: "den",
    };
  }

  // 2.5.22 An Dai han
  const anDaiHan = function () {
    const bangAnDaiHan = {
      "Thủy Nhị Cục": [2, 12, 22, 32, 42, 52, 62, 72, 82, 92, 102, 112],
      "Mộc Tam Cục": [3, 13, 23, 33, 43, 53, 63, 73, 83, 93, 103, 113],
      "Kim Tứ Cục": [4, 14, 24, 34, 44, 54, 64, 74, 84, 94, 104, 114],
      "Thổ Ngũ Cục": [5, 15, 25, 35, 45, 55, 65, 75, 85, 95, 105, 115],
      "Hỏa Lục Cục": [6, 16, 26, 36, 46, 56, 66, 76, 86, 96, 106, 116],
    };

    const daiHan = bangAnDaiHan[cuc];
    const adnn = amDuongNamNu + gioiTinh;
    
    if (adnn == "DươngNam" || adnn == "ÂmNữ") {
      for (i = 0; i < 12; i++) {
        let vitrimenh = CHIANSAO.indexOf(viTriCungMenh);
        let tinh = vitrimenh + i;
        if (tinh > 11) {
          tinh -= 12;
        }
        thienBan[tinh].daiVan = { sao: daiHan[i], mau: "den" };
      }
    }

    if (adnn == "ÂmNam" || adnn == "DươngNữ") {
      let vitrimenh = CHIANSAO.indexOf(viTriCungMenh);
      for (i = 0; i < 12; i++) {
        let tinh = vitrimenh - i;
        
        if (tinh < 0) {
          tinh += 12;
        }
        
        thienBan[tinh].daiVan = { sao: daiHan[i], mau: "den" };
      }
    }
  };
  anDaiHan();

  // 2.5.23 an tieu han

  const bangAnTieuHan = {
    "Tý": 8,
    "Sửu": 5,
    "Dần": 2,
    "Mão": 11,
    "Thìn": 8,
    "Tỵ": 5,
    "Ngọ": 2,
    "Mùi": 11,
    "Thân": 8,
    "Dậu": 5,
    "Tuất": 2,
    "Hợi": 11
  }

  let viTriKhoiTieuHan = bangAnTieuHan[canChi[7]]

  
  console.log(viTriKhoiTieuHan, gioiTinh)
   


  // 2.5.24 An các Sao lưu

  // lấy năm xem hạn
  const namXemHan = inputData.namXemHan;

  // tính can chi năm xem hạn
  const tinhCanChiNamXemHan = function(namXemHan){
    const currentDate = new Date();

  const day = currentDate.getDate(); // Lấy ngày (từ 1 đến 31)
  const month = currentDate.getMonth() + 1; // Lấy tháng (từ 0 đến 11, cần cộng 1 để có tháng từ 1 đến 12)
  const year = currentDate.getFullYear(); // Lấy năm
  
  if(namXemHan == year){
    const namXemHanDL = new SolarDate ( new Date(`${year},${month},${day}`))
    const namXemHanAL = LunarDate.fromSolarDate(namXemHanDL)
    const canNamXemHan = CAN[(namXemHanAL.year + 6) % 10]
    const chiNamXemhan = CHI[(namXemHanAL.year + 8) % 12] 

    return [canNamXemHan,chiNamXemhan]
  } else{
    const namXemHanDL = new SolarDate ( new Date(`${namXemHan},7,7`))
    const namXemHanAL = LunarDate.fromSolarDate(namXemHanDL)
    const canNamXemHan = CAN[(namXemHanAL.year + 6) % 10]
    const chiNamXemhan = CHI[(namXemHanAL.year + 8) % 12] 
    return [canNamXemHan,chiNamXemhan]
  }
  }
  const canChiNamXemHan = tinhCanChiNamXemHan(namXemHan)

  

  // 2.6
  // cuối cùng tạo thông tin cho địa bàn
  diaBan = {
    hoVaTen: inputData.tenInput,
    gioiTinh: gioiTinh,
    gioSinhDL: gioDuongLinh,
    ngaySinhDL: DL.day,
    thangSinhDL: DL.month,
    namSinhDL: DL.year,
    canGioSinh: canGioSinh,
    gioSinhAL: chiGioSinh,
    ngaySinhAL: AL.day,
    canNgay: canChi[0],
    chiNgay: canChi[1],
    canChiNgay: canChi[2],
    thangSinhAL: AL.month,
    canThang: canChi[3],
    chiThang: canChi[4],
    canChiThang: canChi[5],
    namSinhAL: AL.year,
    canNam: canChi[6],
    chiNam: canChi[7],
    canChiNam: canChi[8],
    amDuongNamNu: amDuongNamNu + " " + gioiTinh,
    menhNapAm: napMenhAm,
    cuc: cuc,
    namXemHan: namXemHan,
  };
  return { inputData, diaBan, thienBan };
}


module.exports = laplaso ;

// màu ghi: #9D9C98
// màu đỏ: #DD3E39
// màu vàng: #E6D753
// màu lục:  #3C9636
// màu xanh: #2309EF

// Done - 6 - Đổi lịch âm dương

// Done 7 - Xác định can chi

// Done 8 - Xác định âm dương của nam nữ

// Done 9 - Xác định bản mệnh

// Done 10 - Xác định vị trí cung mệnh thân

// Done 11 - Xác định vị trí các cung còn lại

// Done Xác định cục

// done 12 - An sao tử vi và các chính tinh còn lại

// done An văn xương văn khúc

// done An tứ hoá

// done  - An KHông Kiếp

// Done 13 - An phụ tinh theo giờ sinh
//    Done - An Thai Phụ, Phong cáo
// an các sao có VĐH:
// done  Hoả Linh
// done Thiên mã
// Done thiên hình
// Done kình dương
// đại tiểu hao

// Done An vòng thái tuế : Thái Tuế, Thiếu Dương, Tang Môn, Thiếu Âm,
// DOne Quan Phù, Tử Phù, Tuế Phá, Long Đức, Bạch Hổ, Phúc Đức, Điếu Khách, Trực Phù

// Done Đà La
// Done thiên khốc
// Done thiên diêu
// Donethiên hư

// Done An lộc tồn và vòng bác sĩ

// 14 - Done An phụ tinh theo tháng sinh

// 15 - Done An phụ tinh theo can của năm sinh

// 16 - Done An phụ tinh theo chi năm

// 20 -DOne  An sao vòng bác sĩ

// Done  Ân Quang, Thiên Quý

// Done Tam Thai, Bát Tọa

// Done các sao cố định

//17 - An tuần triệt theo can chi năm sinh

// 21 - done AN sao vòng Tràng Sinh

// 24 - Done An số Đại hạn, Tiểu hạn, Nguyệt hạn, Thời hạn

// 23 - An sao lưu
