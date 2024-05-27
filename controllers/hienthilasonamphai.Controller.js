// Route lập lá số tử vi nam phái 
const posthinethilaso = (req, res) => {
    const ok = req.body;
    const {
        SolarDate,
        LunarDate,
        _calendar,
    } = require("@nghiavuive/lunar_date_vi/dist/index.cjs");
    const { tinhCanGioSinhAL, tinhCanChi } = require("../services/canchi.service");
    const { an14ChinhTinh } = require("../services/an14chinhtinh.service");
    const { tinhCucLaSo } = require("../services/timcuclaso.service");
    const path = require('path')

    // check du lieu dau vao
    let inputDataC = {
        ngayInput: parseInt(ok.ngaySinh),
        thangInput: parseInt(ok.thangSinh),
        namInput: parseInt(ok.namSinh),
        loaiLichInput: parseInt(ok.loaiLich),
    };

    // check ngay thang dung chua
    function checkTime() {
      
        // Trường hơp input là lịch dương
        if (inputDataC.loaiLichInput == 1) {
           
            if(!SolarDate.isValidDate({day: inputDataC.ngayInput, 
                month: inputDataC.thangInput, year: inputDataC.namInput})){
                    return 1
                }
                return 2
        }
        // Trường hơp input là lịch Am
        else {     
            // truong hop sai
            if((!LunarDate.isValidDate({ day: inputDataC.ngayInput, 
            month: inputDataC.thangInput, year: inputDataC.namInput }))){
                return 1
            }
            // truong hop dung
            return 2     
        }
    }
    let check = checkTime()

    if(check == 1){
        return res.render('loikhilaplasotuvibacphai')
    }

    const laplaso = function (IhoTen, IngaySinh, IthangSinh, InamSinh, IgioiTinh, IgioSinh, IloaiLich, InamXemHan) {
        // Khai báo các biến nhập vào
        let inputData = {
            tenInput: IhoTen,
            ngayInput: parseInt(IngaySinh),
            thangInput: parseInt(IthangSinh),
            namInput: parseInt(InamSinh),
            gioiTinhInput: parseInt(IgioiTinh),
            gioSinhInput: parseInt(IgioSinh),
            loaiLichInput: parseInt(IloaiLich),
            namXemHan: parseInt(InamXemHan),
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

        // 1.2.2 xác định nạp âm Mệnh
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
                const DL =  new SolarDate({ day: inputData.ngayInput, month: inputData.thangInput, year: inputData.namInput });

                // Chuyển thành lịch âm
                const AL = LunarDate.fromSolarDate(DL)



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

        // 1.2.7 tính nạp âm Mệnh
        const napMenhAm = tinhMenhNapAm(AL.year);

        // ---------------   xong địa bàn -----------------

        // 2 lập thiên bàn

        // 2.1 Xác định tên cung
        function tinhTen12Cung(number) {
            if (number == 1) {
                let ten12Cung = [
                    "Mệnh",
                    "Phụ Mẫu",
                    "Phúc Đức",
                    "Điền Trạch",
                    "Quan Lộc",
                    "Nô Bộc",
                    "Thiên Di",
                    "Tật Ách",
                    "Tài Bạch",
                    "Tử Tức",
                    "Thê",
                    "Huynh Đệ",
                ];

                return ten12Cung;
            } else {
                let ten12Cung = [
                    "Mệnh",
                    "Phụ Mẫu",
                    "Phúc Đức",
                    "Điền Trạch",
                    "Quan Lộc",
                    "Nô Bộc",
                    "Thiên Di",
                    "Tật Ách",
                    "Tài Bạch",
                    "Tử Tức",
                    "Phu",
                    "Huynh Đệ",
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
            let cungThan = parseInt(thangAL) + parseInt(gioSinh) - 2;
            if (cungThan >= 12) {
                cungThan %= 12;
            }
            return cungThan;
        }

        let cungThanIndex = timCungThan(AL.month, inputData.gioSinhInput);
        console.log(cungThanIndex)
        thienBan[
            cungThanIndex
        ].tenCung = `${thienBan[cungThanIndex].tenCung} (Thân)`;


        // 2.4 - Tìm cục
        const viTriCungMenh = thienBan[cungMenhIndex].tenCungThienBan;
        const cuc = tinhCucLaSo(canChi[6], viTriCungMenh);

        // 2.5 - An sao tử vi
        // Định nghĩa một đối tượng lưu trữ vị trí cung Tử vi dựa trên ngày và Cục
        let viTri14ChinhTinh = an14ChinhTinh(AL, cuc, CHI);

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
                { sao: "Văn Xương(Đ)", mau: "#9D9C98", TH: 15 },
                { sao: "Văn Khúc(Đ)", mau: "#000000", TH: 16 },
            ],
            [
                7,
                3,
                { sao: "Văn Xương(H)", mau: "#9D9C98", TH: 15 },
                { sao: "Văn Khúc(Đ)", mau: "#000000", TH: 16 },
            ],
            [
                6,
                4,
                { sao: "Văn Xương(H)", mau: "#9D9C98", TH: 15 },
                { sao: "Văn Khúc(H)", mau: "#000000", TH: 16 },
            ],
            [
                5,
                5,
                { sao: "Văn Xương(Đ)", mau: "#9D9C98", TH: 15 },
                { sao: "Văn Khúc(Đ)", mau: "#000000", TH: 16 },
            ],
            [
                4,
                6,
                { sao: "Văn Xương(H)", mau: "#9D9C98", TH: 15 },
                { sao: "Văn Khúc(H)", mau: "#000000", TH: 16 },
            ],
            [
                3,
                7,
                { sao: "Văn Xương(Đ)", mau: "#9D9C98", TH: 15 },
                { sao: "Văn Khúc(H)", mau: "#000000", TH: 16 },
            ],
            [
                2,
                8,
                { sao: "Văn Xương(Đ)", mau: "#9D9C98", TH: 15 },
                { sao: "Văn Khúc(Đ)", mau: "#000000", TH: 16 },
            ],
            [
                1,
                9,
                { sao: "Văn Xương(H)", mau: "#9D9C98", TH: 15 },
                { sao: "Văn Khúc(Đ)", mau: "#000000", TH: 16 },
            ],
            [
                0,
                10,
                { sao: "Văn Xương(H)", mau: "#9D9C98", TH: 15 },
                { sao: "Văn Khúc(H)", mau: "#000000", TH: 16 },
            ],
            [
                11,
                11,
                { sao: "Văn Xương(Đ)", mau: "#9D9C98", TH: 15 },
                { sao: "Văn Khúc(Đ)", mau: "#000000", TH: 16 },
            ],
            [
                10,
                0,
                { sao: "Văn Xương(H)", mau: "#9D9C98", TH: 15 },
                { sao: "Văn Khúc(H)", mau: "#000000", TH: 16 },
            ],
            [
                9,
                1,
                { sao: "Văn Xương(Đ)", mau: "#9D9C98", TH: 15 },
                { sao: "Văn Khúc(H)", mau: "#000000", TH: 16 },
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
            mau: "#E6D753",
            TH: 17,
        });
        thienBan[viTriHuuBat].phuTinhTrai.push({
            sao: "Hữu Bật",
            mau: "#000000",
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
                { sao: "Hoá Lộc(Đ)", mau: "#3C9636" },
                { sao: "Hoá Quyền(Đ)", mau: "#3C9636" },
                { sao: "Hoá Khoa(Đ)", mau: "#000000" },
                { sao: "Hoá Kị(H)", mau: "#000000" },
            ],

            [
                6,
                12,
                1,
                8,
                { sao: "Hoá Lộc(V)", mau: "#3C9636" },
                { sao: "Hoá Quyền(V)", mau: "#3C9636" },
                { sao: "Hoá Khoa(Đ)", mau: "#000000" },
                { sao: "Hoá Kị(H)", mau: "#000000" },
            ],

            [
                3,
                6,
                15,
                2,
                { sao: "Hoá Lộc(Đ)", mau: "#3C9636" },
                { sao: "Hoá Quyền(V)", mau: "#3C9636" },
                { sao: "Hoá Khoa(Đ)", mau: "#000000" },
                { sao: "Hoá Kị(H)", mau: "#000000" },
            ],

            [
                8,
                3,
                6,
                10,
                { sao: "Hoá Lộc(Đ)", mau: "#3C9636" },
                { sao: "Hoá Quyền(V)", mau: "#3C9636" },
                { sao: "Hoá Khoa(Đ)", mau: "#000000" },
                { sao: "Hoá Kị(B)", mau: "#000000" },
            ],

            [
                9,
                8,
                18,
                6,
                { sao: "Hoá Lộc(Đ)", mau: "#3C9636" },
                { sao: "Hoá Quyền(Đ)", mau: "#3C9636" },
                { sao: "Hoá Khoa(V)", mau: "#000000" },
                { sao: "Hoá Kị(H)", mau: "#000000" },
            ],

            [
                4,
                9,
                12,
                16,
                { sao: "Hoá Lộc(V)", mau: "#3C9636" },
                { sao: "Hoá Quyền(V)", mau: "#3C9636" },
                { sao: "Hoá Khoa(V)", mau: "#000000" },
                { sao: "Hoá Kị(H)", mau: "#000000" },
            ],

            [
                5,
                4,
                8,
                3,
                { sao: "Hoá Lộc(Đ)", mau: "#3C9636" },
                { sao: "Hoá Quyền(Đ)", mau: "#3C9636" },
                { sao: "Hoá Khoa(Đ)", mau: "#000000" },
                { sao: "Hoá Kị(H)", mau: "#000000" },
            ],

            [
                10,
                5,
                16,
                15,
                { sao: "Hoá Lộc(V)", mau: "#3C9636" },
                { sao: "Hoá Quyền(V)", mau: "#3C9636" },
                { sao: "Hoá Khoa(Đ)", mau: "#000000" },
                { sao: "Hoá Kị(H)", mau: "#000000" },
            ],

            [
                12,
                1,
                17,
                4,
                { sao: "Hoá Lộc(B)", mau: "#3C9636" },
                { sao: "Hoá Quyền(V)", mau: "#3C9636" },
                { sao: "Hoá Khoa(Đ)", mau: "#000000" },
                { sao: "Hoá Kị(H)", mau: "#000000" },
            ],

            [
                14,
                10,
                8,
                9,
                { sao: "Hoá Lộc(Đ)", mau: "#3C9636" },
                { sao: "Hoá Quyền(B)", mau: "#3C9636" },
                { sao: "Hoá Khoa(V)", mau: "#000000" },
                { sao: "Hoá Kị(H)", mau: "#000000" },
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
            { sao: "Địa Không(H)", mau: "#DD3E39" },
            { sao: "Địa Không(Đ)", mau: "#DD3E39" },
            { sao: "Địa Không(H)", mau: "#DD3E39" },
            { sao: "Địa Không(H)", mau: "#DD3E39" },
            { sao: "Địa Không(Đ)", mau: "#DD3E39" },
            { sao: "Địa Không(H)", mau: "#DD3E39" },
            { sao: "Địa Không(H)", mau: "#DD3E39" },
            { sao: "Địa Không(Đ)", mau: "#DD3E39" },
            { sao: "Địa Không(H)", mau: "#DD3E39" },
            { sao: "Địa Không(H)", mau: "#DD3E39" },
            { sao: "Địa Không(Đ)", mau: "#DD3E39" },
            { sao: "Địa Không(H)", mau: "#DD3E39" },
        ];

        const diaKiep = [
            { sao: "Địa Kiếp(H)", mau: "#DD3E39" },
            { sao: "Địa Kiếp(Đ)", mau: "#DD3E39" },
            { sao: "Địa Kiếp(H)", mau: "#DD3E39" },
            { sao: "Địa Kiếp(H)", mau: "#DD3E39" },
            { sao: "Địa Kiếp(Đ)", mau: "#DD3E39" },
            { sao: "Địa Kiếp(H)", mau: "#DD3E39" },
            { sao: "Địa Kiếp(H)", mau: "#DD3E39" },
            { sao: "Địa Kiếp(Đ)", mau: "#DD3E39" },
            { sao: "Địa Kiếp(H)", mau: "#DD3E39" },
            { sao: "Địa Kiếp(H)", mau: "#DD3E39" },
            { sao: "Địa Kiếp(Đ)", mau: "#DD3E39" },
            { sao: "Địa Kiếp(H)", mau: "#DD3E39" },
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
                Dần: { so: 11, sao: { sao: "Hoả Tinh(Đ)", mau: "#DD3E39" } },
                Ngọ: { so: 11, sao: { sao: "Hoả Tinh(Đ)", mau: "#DD3E39" } },
                Tuất: { so: 11, sao: { sao: "Hoả Tinh(Đ)", mau: "#DD3E39" } },
                Thân: { so: 0, sao: { sao: "Hoả Tinh(Đ)", mau: "#DD3E39" } },
                Tý: { so: 0, sao: { sao: "Hoả Tinh(Đ)", mau: "#DD3E39" } },
                Thìn: { so: 0, sao: { sao: "Hoả Tinh(Đ)", mau: "#DD3E39" } },
                Tỵ: { so: 1, sao: { sao: "Hoả Tinh(H)", mau: "#DD3E39" } },
                Dậu: { so: 1, sao: { sao: "Hoả Tinh(H)", mau: "#DD3E39" } },
                Sửu: { so: 1, sao: { sao: "Hoả Tinh(H)", mau: "#DD3E39" } },
                Hợi: { so: 7, sao: { sao: "Hoả Tinh(Đ)", mau: "#DD3E39" } },
                Mão: { so: 7, sao: { sao: "Hoả Tinh(Đ)", mau: "#DD3E39" } },
                Mùi: { so: 7, sao: { sao: "Hoả Tinh(Đ)", mau: "#DD3E39" } },
            },
            LT: {
                Dần: { so: 1, sao: { sao: "Linh Tinh(H)", mau: "#DD3E39" } },
                Ngọ: { so: 1, sao: { sao: "Linh Tinh(H)", mau: "#DD3E39" } },
                Tuất: { so: 1, sao: { sao: "Linh Tinh(H)", mau: "#DD3E39" } },
                Thân: { so: 8, sao: { sao: "Linh Tinh(Đ)", mau: "#DD3E39" } },
                Tý: { so: 8, sao: { sao: "Linh Tinh(Đ)", mau: "#DD3E39" } },
                Thìn: { so: 8, sao: { sao: "Linh Tinh(Đ)", mau: "#DD3E39" } },
                Tỵ: { so: 8, sao: { sao: "Linh Tinh(Đ)", mau: "#DD3E39" } },
                Dậu: { so: 8, sao: { sao: "Linh Tinh(Đ)", mau: "#DD3E39" } },
                Sửu: { so: 8, sao: { sao: "Linh Tinh(Đ)", mau: "#DD3E39" } },
                Hợi: { so: 8, sao: { sao: "Linh Tinh(Đ)", mau: "#DD3E39" } },
                Mão: { so: 8, sao: { sao: "Linh Tinh(Đ)", mau: "#DD3E39" } },
                Mùi: { so: 8, sao: { sao: "Linh Tinh(Đ)", mau: "#DD3E39" } },
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

                if (anHT > 11) {
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
                if (anLT > 11) {
                    anLT -= 12;
                }
                thienBan[anHT].phuTinhPhai.push(hoaTinh);
                thienBan[anLT].phuTinhPhai.push(linhTinh);
            }
        };
        anHoaLinh(chiNamSinh, gioSinhDL, gioiTinh, amDuongNamNu, bangAnHoaLinhTinh);

        // 2.5.7 - An sao thiên mã
        const bangAnThienMa = {
            Tý: { so: 0, sao: { sao: "Thiên Mã(Đ)", mau: "#DD3E39" } },
            Sửu: { so: 9, sao: { sao: "Thiên Mã(H)", mau: "#DD3E39" } },
            Dần: { so: 6, sao: { sao: "Thiên Mã(H)", mau: "#DD3E39" } },
            Mão: { so: 3, sao: { sao: "Thiên Mã(Đ)", mau: "#DD3E39" } },
            Thìn: { so: 0, sao: { sao: "Thiên Mã(Đ)", mau: "#DD3E39" } },
            Tỵ: { so: 9, sao: { sao: "Thiên Mã(H)", mau: "#DD3E39" } },
            Ngọ: { so: 6, sao: { sao: "Thiên Mã(H)", mau: "#DD3E39" } },
            Mùi: { so: 3, sao: { sao: "Thiên Mã(Đ)", mau: "#DD3E39" } },
            Thân: { so: 0, sao: { sao: "Thiên Mã(Đ)", mau: "#DD3E39" } },
            Dậu: { so: 9, sao: { sao: "Thiên Mã(H)", mau: "#DD3E39" } },
            Tuất: { so: 6, sao: { sao: "Thiên Mã(H)", mau: "#DD3E39" } },
            Hợi: { so: 3, sao: { sao: "Thiên Mã(Đ)", mau: "#DD3E39" } },
        };

        const viTriThienMa = bangAnThienMa[chiNamSinh];
        thienBan[viTriThienMa.so].phuTinhTrai.push(viTriThienMa.sao);

        //2.5.8 - An sao thien hinh
        const bangAnThienHinh = [
            { so: 7, sao: { sao: "Thiên Hình(Đ)", mau: "#DD3E39" } },
            { so: 8, sao: { sao: "Thiên Hình(H)", mau: "#DD3E39" } },
            { so: 9, sao: { sao: "Thiên Hình(H)", mau: "#DD3E39" } },
            { so: 10, sao: { sao: "Thiên Hình(H)", mau: "#DD3E39" } },
            { so: 11, sao: { sao: "Thiên Hình(H)", mau: "#DD3E39" } },
            { so: 0, sao: { sao: "Thiên Hình(Đ)", mau: "#DD3E39" } },
            { so: 1, sao: { sao: "Thiên Hình(Đ)", mau: "#DD3E39" } },
            { so: 2, sao: { sao: "Thiên Hình(H)", mau: "#DD3E39" } },
            { so: 3, sao: { sao: "Thiên Hình(Đ)", mau: "#DD3E39" } },
            { so: 4, sao: { sao: "Thiên Hình(H)", mau: "#DD3E39" } },
            { so: 5, sao: { sao: "Thiên Hình(H)", mau: "#DD3E39" } },
            { so: 6, sao: { sao: "Thiên Hình(Đ)", mau: "#DD3E39" } },
        ];
        const viTriThienHinh = bangAnThienHinh[AL.month - 1];
        thienBan[viTriThienHinh.so].phuTinhPhai.push(viTriThienHinh.sao);

        // 2.5.9 - An sao Kình DƯơng
        const bangAnKinhDuong = {
            Giáp: { so: 1, sao: { sao: "Kinh Dương(H)", mau: "#9D9C98" } },
            Ất: { so: 2, sao: { sao: "Kinh Dương(Đ)", mau: "#9D9C98" } },
            Bính: { so: 4, sao: { sao: "Kinh Dương(H)", mau: "#9D9C98" } },
            Đinh: { so: 5, sao: { sao: "Kinh Dương(Đ)", mau: "#9D9C98" } },
            Mậu: { so: 4, sao: { sao: "Kinh Dương(H)", mau: "#9D9C98" } },
            Kỷ: { so: 5, sao: { sao: "Kinh Dương(Đ)", mau: "#9D9C98" } },
            Canh: { so: 7, sao: { sao: "Kinh Dương(H)", mau: "#9D9C98" } },
            Tân: { so: 8, sao: { sao: "Kinh Dương(Đ)", mau: "#9D9C98" } },
            Nhâm: { so: 10, sao: { sao: "Kinh Dương(H)", mau: "#9D9C98" } },
            Quý: { so: 11, sao: { sao: "Kinh Dương(Đ)", mau: "#9D9C98" } },
        };
        const viTriKinhDuong = bangAnKinhDuong[canChi[6]];
        thienBan[viTriKinhDuong.so].phuTinhPhai.push(viTriKinhDuong.sao);

        // 2.5.10 - An Vòng thái tuế
        const bangAnVongThaiTue = {
            Tý: [
                { sao: "Thái Tuế", mau: "#DD3E39" },
                { sao: "Thiếu Dương", mau: "#DD3E39" },
                { sao: "Tang Môn(Đ)", mau: "#3C9636" },
                { sao: "Thiếu Âm(H)", mau: "#000000" },
                { sao: "Quan Phù", mau: "#DD3E39" },
                { sao: "Tử Phù", mau: "#DD3E39" },
                { sao: "Tuế Phá", mau: "#DD3E39" },
                { sao: "Long Đức", mau: "#000000" },
                { sao: "Bạch Hổ(Đ)", mau: "#9D9C98" },
                { sao: "Phúc Đức", mau: "#E6D753" },
                { sao: "Điếu Khách", mau: "#DD3E39" },
                { sao: "Trực Phù", mau: "#DD3E39" },
            ],

            Sửu: [
                { sao: "Thái Tuế", mau: "#DD3E39" },
                { sao: "Thiếu Dương", mau: "#DD3E39" },
                { sao: "Tang Môn(Đ)", mau: "#3C9636" },
                { sao: "Thiếu Âm(H)", mau: "#000000" },
                { sao: "Quan Phù", mau: "#DD3E39" },
                { sao: "Tử Phù", mau: "#DD3E39" },
                { sao: "Tuế Phá", mau: "#DD3E39" },
                { sao: "Long Đức", mau: "#000000" },
                { sao: "Bạch Hổ(Đ)", mau: "#9D9C98" },
                { sao: "Phúc Đức", mau: "#E6D753" },
                { sao: "Điếu Khách", mau: "#DD3E39" },
                { sao: "Trực Phù", mau: "#DD3E39" },
            ],

            Dần: [
                { sao: "Thái Tuế", mau: "#DD3E39" },
                { sao: "Thiếu Dương", mau: "#DD3E39" },
                { sao: "Tang Môn(H)", mau: "#3C9636" },
                { sao: "Thiếu Âm(H)", mau: "#000000" },
                { sao: "Quan Phù", mau: "#DD3E39" },
                { sao: "Tử Phù", mau: "#DD3E39" },
                { sao: "Tuế Phá", mau: "#DD3E39" },
                { sao: "Long Đức", mau: "#000000" },
                { sao: "Bạch Hổ(H)", mau: "#9D9C98" },
                { sao: "Phúc Đức", mau: "#E6D753" },
                { sao: "Điếu Khách", mau: "#DD3E39" },
                { sao: "Trực Phù", mau: "#DD3E39" },
            ],

            Mão: [
                { sao: "Thái Tuế", mau: "#DD3E39" },
                { sao: "Thiếu Dương", mau: "#DD3E39" },
                { sao: "Tang Môn(H)", mau: "#3C9636" },
                { sao: "Thiếu Âm(H)", mau: "#000000" },
                { sao: "Quan Phù", mau: "#DD3E39" },
                { sao: "Tử Phù", mau: "#DD3E39" },
                { sao: "Tuế Phá", mau: "#DD3E39" },
                { sao: "Long Đức", mau: "#000000" },
                { sao: "Bạch Hổ(H)", mau: "#9D9C98" },
                { sao: "Phúc Đức", mau: "#E6D753" },
                { sao: "Điếu Khách", mau: "#DD3E39" },
                { sao: "Trực Phù", mau: "#DD3E39" },
            ],

            Thìn: [
                { sao: "Thái Tuế", mau: "#DD3E39" },
                { sao: "Thiếu Dương", mau: "#DD3E39" },
                { sao: "Tang Môn(H)", mau: "#3C9636" },
                { sao: "Thiếu Âm(H)", mau: "#000000" },
                { sao: "Quan Phù", mau: "#DD3E39" },
                { sao: "Tử Phù", mau: "#DD3E39" },
                { sao: "Tuế Phá", mau: "#DD3E39" },
                { sao: "Long Đức", mau: "#000000" },
                { sao: "Bạch Hổ(H)", mau: "#9D9C98" },
                { sao: "Phúc Đức", mau: "#E6D753" },
                { sao: "Điếu Khách", mau: "#DD3E39" },
                { sao: "Trực Phù", mau: "#DD3E39" },
            ],

            Tỵ: [
                { sao: "Thái Tuế", mau: "#DD3E39" },
                { sao: "Thiếu Dương", mau: "#DD3E39" },
                { sao: "Tang Môn(H)", mau: "#3C9636" },
                { sao: "Thiếu Âm(Đ)", mau: "#000000" },
                { sao: "Quan Phù", mau: "#DD3E39" },
                { sao: "Tử Phù", mau: "#DD3E39" },
                { sao: "Tuế Phá", mau: "#DD3E39" },
                { sao: "Long Đức", mau: "#000000" },
                { sao: "Bạch Hổ(H)", mau: "#9D9C98" },
                { sao: "Phúc Đức", mau: "#E6D753" },
                { sao: "Điếu Khách", mau: "#DD3E39" },
                { sao: "Trực Phù", mau: "#DD3E39" },
            ],

            Ngọ: [
                { sao: "Thái Tuế", mau: "#DD3E39" },
                { sao: "Thiếu Dương", mau: "#DD3E39" },
                { sao: "Tang Môn(Đ)", mau: "#3C9636" },
                { sao: "Thiếu Âm(Đ)", mau: "#000000" },
                { sao: "Quan Phù", mau: "#DD3E39" },
                { sao: "Tử Phù", mau: "#DD3E39" },
                { sao: "Tuế Phá", mau: "#DD3E39" },
                { sao: "Long Đức", mau: "#000000" },
                { sao: "Bạch Hổ(Đ)", mau: "#9D9C98" },
                { sao: "Phúc Đức", mau: "#E6D753" },
                { sao: "Điếu Khách", mau: "#DD3E39" },
                { sao: "Trực Phù", mau: "#DD3E39" },
            ],

            Mùi: [
                { sao: "Thái Tuế", mau: "#DD3E39" },
                { sao: "Thiếu Dương", mau: "#DD3E39" },
                { sao: "Tang Môn(Đ)", mau: "#3C9636" },
                { sao: "Thiếu Âm(Đ)", mau: "#000000" },
                { sao: "Quan Phù", mau: "#DD3E39" },
                { sao: "Tử Phù", mau: "#DD3E39" },
                { sao: "Tuế Phá", mau: "#DD3E39" },
                { sao: "Long Đức", mau: "#000000" },
                { sao: "Bạch Hổ(Đ)", mau: "#9D9C98" },
                { sao: "Phúc Đức", mau: "#E6D753" },
                { sao: "Điếu Khách", mau: "#DD3E39" },
                { sao: "Trực Phù", mau: "#DD3E39" },
            ],

            Thân: [
                { sao: "Thái Tuế", mau: "#DD3E39" },
                { sao: "Thiếu Dương", mau: "#DD3E39" },
                { sao: "Tang Môn(H)", mau: "#3C9636" },
                { sao: "Thiếu Âm(Đ)", mau: "#000000" },
                { sao: "Quan Phù", mau: "#DD3E39" },
                { sao: "Tử Phù", mau: "#DD3E39" },
                { sao: "Tuế Phá", mau: "#DD3E39" },
                { sao: "Long Đức", mau: "#000000" },
                { sao: "Bạch Hổ(H)", mau: "#9D9C98" },
                { sao: "Phúc Đức", mau: "#E6D753" },
                { sao: "Điếu Khách", mau: "#DD3E39" },
                { sao: "Trực Phù", mau: "#DD3E39" },
            ],

            Dậu: [
                { sao: "Thái Tuế", mau: "#DD3E39" },
                { sao: "Thiếu Dương", mau: "#DD3E39" },
                { sao: "Tang Môn(H)", mau: "#3C9636" },
                { sao: "Thiếu Âm(Đ)", mau: "#000000" },
                { sao: "Quan Phù", mau: "#DD3E39" },
                { sao: "Tử Phù", mau: "#DD3E39" },
                { sao: "Tuế Phá", mau: "#DD3E39" },
                { sao: "Long Đức", mau: "#000000" },
                { sao: "Bạch Hổ(H)", mau: "#9D9C98" },
                { sao: "Phúc Đức", mau: "#E6D753" },
                { sao: "Điếu Khách", mau: "#DD3E39" },
                { sao: "Trực Phù", mau: "#DD3E39" },
            ],

            Tuất: [
                { sao: "Thái Tuế", mau: "#DD3E39" },
                { sao: "Thiếu Dương", mau: "#DD3E39" },
                { sao: "Tang Môn(H)", mau: "#3C9636" },
                { sao: "Thiếu Âm(H)", mau: "#000000" },
                { sao: "Quan Phù", mau: "#DD3E39" },
                { sao: "Tử Phù", mau: "#DD3E39" },
                { sao: "Tuế Phá", mau: "#DD3E39" },
                { sao: "Long Đức", mau: "#000000" },
                { sao: "Bạch Hổ(H)", mau: "#9D9C98" },
                { sao: "Phúc Đức", mau: "#E6D753" },
                { sao: "Điếu Khách", mau: "#DD3E39" },
                { sao: "Trực Phù", mau: "#DD3E39" },
            ],

            Hợi: [
                { sao: "Thái Tuế", mau: "#DD3E39" },
                { sao: "Thiếu Dương", mau: "#DD3E39" },
                { sao: "Tang Môn(H)", mau: "#3C9636" },
                { sao: "Thiếu Âm(H)", mau: "#000000" },
                { sao: "Quan Phù", mau: "#DD3E39" },
                { sao: "Tử Phù", mau: "#DD3E39" },
                { sao: "Tuế Phá", mau: "#DD3E39" },
                { sao: "Long Đức", mau: "#000000" },
                { sao: "Bạch Hổ(H)", mau: "#9D9C98" },
                { sao: "Phúc Đức", mau: "#E6D753" },
                { sao: "Điếu Khách", mau: "#DD3E39" },
                { sao: "Trực Phù", mau: "#DD3E39" },
            ],
        };

        const viTriVongThaiTue = bangAnVongThaiTue[canChi[7]];
        const khoiVongThaiTue = CHIANSAO.indexOf(canChi[7]);
        for (i = 0; i < 12; i++) {
            let index = khoiVongThaiTue + i;

            if (index > 11) {
                index -= 12;
            }

            if (i == 1 || i == 3 || i == 7 || i == 9) {
                thienBan[index].phuTinhTrai.push(viTriVongThaiTue[i]);
            } else if (index < 11 || index == 11) {
                thienBan[index].phuTinhPhai.push(viTriVongThaiTue[i]);
            }
        }

        // 2.5.10 - an sao Đà La
        const bangAnSaoDaLa = {
            Giáp: { so: 11, sao: { sao: "Đà La(Đ)", mau: "#9D9C98" } },
            Ất: { so: 0, sao: { sao: "Đà La(H)", mau: "#9D9C98" } },
            Bính: { so: 2, sao: { sao: "Đà La(Đ)", mau: "#9D9C98" } },
            Đinh: { so: 3, sao: { sao: "Đà La(Đ)", mau: "#9D9C98" } },
            Mậu: { so: 2, sao: { sao: "Đà La(Đ)", mau: "#9D9C98" } },
            Kỷ: { so: 3, sao: { sao: "Đà La(Đ)", mau: "#9D9C98" } },
            Canh: { so: 5, sao: { sao: "Đà La(Đ)", mau: "#9D9C98" } },
            Tân: { so: 6, sao: { sao: "Đà La(H)", mau: "#9D9C98" } },
            Nhâm: { so: 8, sao: { sao: "Đà La(Đ)", mau: "#9D9C98" } },
            Quý: { so: 9, sao: { sao: "Đà La(H)", mau: "#9D9C98" } },
        };

        const viTriDaLa = bangAnSaoDaLa[canChi[6]];
        thienBan[viTriDaLa.so].phuTinhPhai.push(viTriDaLa.sao);

        // 2.5.11 - An Thien Dieu
        const bangAnThienDieu = [
            { so: 11, sao: { sao: "Thiên Diêu(H)", mau: "#000000" } },
            { so: 0, sao: { sao: "Thiên Diêu(Đ)", mau: "#000000" } },
            { so: 1, sao: { sao: "Thiên Diêu(Đ)", mau: "#000000" } },
            { so: 2, sao: { sao: "Thiên Diêu(H)", mau: "#000000" } },
            { so: 3, sao: { sao: "Thiên Diêu(H)", mau: "#000000" } },
            { so: 4, sao: { sao: "Thiên Diêu(H)", mau: "#000000" } },
            { so: 5, sao: { sao: "Thiên Diêu(H)", mau: "#000000" } },
            { so: 6, sao: { sao: "Thiên Diêu(H)", mau: "#000000" } },
            { so: 7, sao: { sao: "Thiên Diêu(Đ)", mau: "#000000" } },
            { so: 8, sao: { sao: "Thiên Diêu(Đ)", mau: "#000000" } },
            { so: 9, sao: { sao: "Thiên Diêu(H)", mau: "#000000" } },
            { so: 10, sao: { sao: "Thiên Diêu(H)", mau: "#000000" } },
        ];
        const viTriThienDieu = bangAnThienDieu[AL.month - 1];
        thienBan[viTriThienDieu.so].phuTinhPhai.push(viTriThienDieu.sao);

        //2.5.12 An sao thien khoc
        const bangAnThienKhoc = {
            Tý: { so: 4, sao: { sao: "Thiên Khốc(Đ)", mau: "#9D9C98" } },
            Sửu: { so: 3, sao: { sao: "Thiên Khốc(H)", mau: "#9D9C98" } },
            Dần: { so: 2, sao: { sao: "Thiên Khốc(H)", mau: "#9D9C98" } },
            Mão: { so: 1, sao: { sao: "Thiên Khốc(Đ)", mau: "#9D9C98" } },
            Thìn: { so: 0, sao: { sao: "Thiên Khốc(H)", mau: "#9D9C98" } },
            Tỵ: { so: 11, sao: { sao: "Thiên Khốc(Đ)", mau: "#9D9C98" } },
            Ngọ: { so: 10, sao: { sao: "Thiên Khốc(Đ)", mau: "#9D9C98" } },
            Mùi: { so: 9, sao: { sao: "Thiên Khốc(H)", mau: "#9D9C98" } },
            Thân: { so: 8, sao: { sao: "Thiên Khốc(H)", mau: "#9D9C98" } },
            Dậu: { so: 7, sao: { sao: "Thiên Khốc(Đ)", mau: "#9D9C98" } },
            Tuất: { so: 6, sao: { sao: "Thiên Khốc(H)", mau: "#9D9C98" } },
            Hợi: { so: 5, sao: { sao: "Thiên Khốc(Đ)", mau: "#9D9C98" } },
        };
        const viTriThienKhoc = bangAnThienKhoc[canChi[7]];
        thienBan[viTriThienKhoc.so].phuTinhPhai.push(viTriThienKhoc.sao);

        // 2.5.13 An sao thien hu
        const bangAnThienHu = {
            Tý: { so: 4, sao: { sao: "Thiên Hư(Đ)", mau: "#000000" } },
            Sửu: { so: 5, sao: { sao: "Thiên Hư(Đ)", mau: "#000000" } },
            Dần: { so: 6, sao: { sao: "Thiên Hư(H)", mau: "#000000" } },
            Mão: { so: 7, sao: { sao: "Thiên Hư(Đ)", mau: "#000000" } },
            Thìn: { so: 8, sao: { sao: "Thiên Hư(H)", mau: "#000000" } },
            Tỵ: { so: 9, sao: { sao: "Thiên Hư(H)", mau: "#000000" } },
            Ngọ: { so: 10, sao: { sao: "Thiên Hư(Đ)", mau: "#000000" } },
            Mùi: { so: 11, sao: { sao: "Thiên Hư(Đ)", mau: "#000000" } },
            Thân: { so: 0, sao: { sao: "Thiên Hư(H)", mau: "#000000" } },
            Dậu: { so: 1, sao: { sao: "Thiên Hư(Đ)", mau: "#000000" } },
            Tuất: { so: 2, sao: { sao: "Thiên Hư(H)", mau: "#000000" } },
            Hợi: { so: 3, sao: { sao: "Thiên Hư(H)", mau: "#000000" } },
        };

        const viTriThienHu = bangAnThienHu[canChi[7]];
        thienBan[viTriThienHu.so].phuTinhPhai.push(viTriThienHu.sao);

        //2.5.14 an sao Lộc tồn
        const bangAnLocTon = {
            Giáp: { so: 0, sao: { sao: "Lộc Tồn(M)", mau: "#E6D753" } },
            Ất: { so: 1, sao: { sao: "Lộc Tồn(M)", mau: "#E6D753" } },
            Bính: { so: 3, sao: { sao: "Lộc Tồn(Đ)", mau: "#E6D753" } },
            Đinh: { so: 4, sao: { sao: "Lộc Tồn(M)", mau: "#E6D753" } },
            Mậu: { so: 3, sao: { sao: "Lộc Tồn(Đ)", mau: "#E6D753" } },
            Kỷ: { so: 4, sao: { sao: "Lộc Tồn(M)", mau: "#E6D753" } },
            Canh: { so: 6, sao: { sao: "Lộc Tồn(B)", mau: "#E6D753" } },
            Tân: { so: 7, sao: { sao: "Lộc Tồn(B)", mau: "#E6D753" } },
            Nhâm: { so: 9, sao: { sao: "Lộc Tồn(Đ)", mau: "#E6D753" } },
            Quý: { so: 10, sao: { sao: "Lộc Tồn(M)", mau: "#E6D753" } },
        };

        const viTriLocTon = bangAnLocTon[canChi[6]];
        thienBan[viTriLocTon.so].phuTinhTrai.unshift(viTriLocTon.sao);

        //2.5.15 an vog bac si
        const bangAnVongBacSi = {
            Giáp: [
                { sao: "Bác Sĩ", mau: "#000000" },
                { sao: "Lực Sĩ", mau: "#DD3E39" },
                { sao: "Thanh Long", mau: "#000000" },
                { sao: "Tiểu Hao(H)", mau: "#DD3E39" },
                { sao: "Tướng Quân", mau: "#3C9636" },
                { sao: "Tấu Thư", mau: "#9D9C98" },
                { sao: "Phi Liêm", mau: "#DD3E39" },
                { sao: "Hỉ Thần", mau: "#DD3E39" },
                { sao: "Bệnh Phù", mau: "#E6D753" },
                { sao: "Đại Hao(H)", mau: "#DD3E39" },
                { sao: "Phục Binh", mau: "#DD3E39" },
                { sao: "Quan Phủ", mau: "#DD3E39" },
            ],

            Ất: [
                { sao: "Bác Sĩ", mau: "#000000" },
                { sao: "Lực Sĩ", mau: "#DD3E39" },
                { sao: "Thanh Long", mau: "#000000" },
                { sao: "Tiểu Hao(H)", mau: "#DD3E39" },
                { sao: "Tướng Quân", mau: "#3C9636" },
                { sao: "Tấu Thư", mau: "#9D9C98" },
                { sao: "Phi Liêm", mau: "#DD3E39" },
                { sao: "Hỉ Thần", mau: "#DD3E39" },
                { sao: "Bệnh Phù", mau: "#E6D753" },
                { sao: "Đại Hao(H)", mau: "#DD3E39" },
                { sao: "Phục Binh", mau: "#DD3E39" },
                { sao: "Quan Phủ", mau: "#DD3E39" },
            ],

            Bính: [
                { sao: "Bác Sĩ", mau: "#000000" },
                { sao: "Lực Sĩ", mau: "#DD3E39" },
                { sao: "Thanh Long", mau: "#000000" },
                { sao: "Tiểu Hao(Đ)", mau: "#DD3E39" },
                { sao: "Tướng Quân", mau: "#3C9636" },
                { sao: "Tấu Thư", mau: "#9D9C98" },
                { sao: "Phi Liêm", mau: "#DD3E39" },
                { sao: "Hỉ Thần", mau: "#DD3E39" },
                { sao: "Bệnh Phù", mau: "#E6D753" },
                { sao: "Đại Hao(Đ)", mau: "#DD3E39" },
                { sao: "Phục Binh", mau: "#DD3E39" },
                { sao: "Quan Phủ", mau: "#DD3E39" },
            ],

            Đinh: [
                { sao: "Bác Sĩ", mau: "#000000" },
                { sao: "Lực Sĩ", mau: "#DD3E39" },
                { sao: "Thanh Long", mau: "#000000" },
                { sao: "Tiểu Hao(Đ)", mau: "#DD3E39" },
                { sao: "Tướng Quân", mau: "#3C9636" },
                { sao: "Tấu Thư", mau: "#9D9C98" },
                { sao: "Phi Liêm", mau: "#DD3E39" },
                { sao: "Hỉ Thần", mau: "#DD3E39" },
                { sao: "Bệnh Phù", mau: "#E6D753" },
                { sao: "Đại Hao(Đ)", mau: "#DD3E39" },
                { sao: "Phục Binh", mau: "#DD3E39" },
                { sao: "Quan Phủ", mau: "#DD3E39" },
            ],

            Mậu: [
                { sao: "Bác Sĩ", mau: "#000000" },
                { sao: "Lực Sĩ", mau: "#DD3E39" },
                { sao: "Thanh Long", mau: "#000000" },
                { sao: "Tiểu Hao(Đ)", mau: "#DD3E39" },
                { sao: "Tướng Quân", mau: "#3C9636" },
                { sao: "Tấu Thư", mau: "#9D9C98" },
                { sao: "Phi Liêm", mau: "#DD3E39" },
                { sao: "Hỉ Thần", mau: "#DD3E39" },
                { sao: "Bệnh Phù", mau: "#E6D753" },
                { sao: "Đại Hao(Đ)", mau: "#DD3E39" },
                { sao: "Phục Binh", mau: "#DD3E39" },
                { sao: "Quan Phủ", mau: "#DD3E39" },
            ],

            Kỷ: [
                { sao: "Bác Sĩ", mau: "#000000" },
                { sao: "Lực Sĩ", mau: "#DD3E39" },
                { sao: "Thanh Long", mau: "#000000" },
                { sao: "Tiểu Hao(Đ)", mau: "#DD3E39" },
                { sao: "Tướng Quân", mau: "#3C9636" },
                { sao: "Tấu Thư", mau: "#9D9C98" },
                { sao: "Phi Liêm", mau: "#DD3E39" },
                { sao: "Hỉ Thần", mau: "#DD3E39" },
                { sao: "Bệnh Phù", mau: "#E6D753" },
                { sao: "Đại Hao(Đ)", mau: "#DD3E39" },
                { sao: "Phục Binh", mau: "#DD3E39" },
                { sao: "Quan Phủ", mau: "#DD3E39" },
            ],

            Canh: [
                { sao: "Bác Sĩ", mau: "#000000" },
                { sao: "Lực Sĩ", mau: "#DD3E39" },
                { sao: "Thanh Long", mau: "#000000" },
                { sao: "Tiểu Hao(H)", mau: "#DD3E39" },
                { sao: "Tướng Quân", mau: "#3C9636" },
                { sao: "Tấu Thư", mau: "#9D9C98" },
                { sao: "Phi Liêm", mau: "#DD3E39" },
                { sao: "Hỉ Thần", mau: "#DD3E39" },
                { sao: "Bệnh Phù", mau: "#E6D753" },
                { sao: "Đại Hao(H)", mau: "#DD3E39" },
                { sao: "Phục Binh", mau: "#DD3E39" },
                { sao: "Quan Phủ", mau: "#DD3E39" },
            ],

            Tân: [
                { sao: "Bác Sĩ", mau: "#000000" },
                { sao: "Lực Sĩ", mau: "#DD3E39" },
                { sao: "Thanh Long", mau: "#000000" },
                { sao: "Tiểu Hao(H)", mau: "#DD3E39" },
                { sao: "Tướng Quân", mau: "#3C9636" },
                { sao: "Tấu Thư", mau: "#9D9C98" },
                { sao: "Phi Liêm", mau: "#DD3E39" },
                { sao: "Hỉ Thần", mau: "#DD3E39" },
                { sao: "Bệnh Phù", mau: "#E6D753" },
                { sao: "Đại Hao(H)", mau: "#DD3E39" },
                { sao: "Phục Binh", mau: "#DD3E39" },
                { sao: "Quan Phủ", mau: "#DD3E39" },
            ],

            Nhâm: [
                { sao: "Bác Sĩ", mau: "#000000" },
                { sao: "Lực Sĩ", mau: "#DD3E39" },
                { sao: "Thanh Long", mau: "#000000" },
                { sao: "Tiểu Hao(Đ)", mau: "#DD3E39" },
                { sao: "Tướng Quân", mau: "#3C9636" },
                { sao: "Tấu Thư", mau: "#9D9C98" },
                { sao: "Phi Liêm", mau: "#DD3E39" },
                { sao: "Hỉ Thần", mau: "#DD3E39" },
                { sao: "Bệnh Phù", mau: "#E6D753" },
                { sao: "Đại Hao(Đ)", mau: "#DD3E39" },
                { sao: "Phục Binh", mau: "#DD3E39" },
                { sao: "Quan Phủ", mau: "#DD3E39" },
            ],

            Quý: [
                { sao: "Bác Sĩ", mau: "#000000" },
                { sao: "Lực Sĩ", mau: "#DD3E39" },
                { sao: "Thanh Long", mau: "#000000" },
                { sao: "Tiểu Hao(Đ)", mau: "#DD3E39" },
                { sao: "Tướng Quân", mau: "#3C9636" },
                { sao: "Tấu Thư", mau: "#9D9C98" },
                { sao: "Phi Liêm", mau: "#DD3E39" },
                { sao: "Hỉ Thần", mau: "#DD3E39" },
                { sao: "Bệnh Phù", mau: "#E6D753" },
                { sao: "Đại Hao(Đ)", mau: "#DD3E39" },
                { sao: "Phục Binh", mau: "#DD3E39" },
                { sao: "Quan Phủ", mau: "#DD3E39" },
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
            mau: "#E6D753",
        });
        thienBan[viTriSaoCanNam[1]].phuTinhTrai.push({
            sao: "Đường Phù",
            mau: "#3C9636",
        });
        thienBan[viTriSaoCanNam[2]].phuTinhTrai.push({
            sao: "Thiên Khôi",
            mau: "#DD3E39",
        });
        thienBan[viTriSaoCanNam[3]].phuTinhTrai.push({
            sao: "Thiên Việt",
            mau: "#DD3E39",
        });
        thienBan[viTriSaoCanNam[4]].phuTinhTrai.push({
            sao: "Thiên Quan",
            mau: "#DD3E39",
        });
        thienBan[viTriSaoCanNam[5]].phuTinhTrai.push({
            sao: "Thiên Phúc",
            mau: "#E6D753",
        });
        thienBan[viTriSaoCanNam[6]].phuTinhPhai.push({ sao: "Lưu Hà", mau: "#000000" });
        thienBan[viTriSaoCanNam[7]].phuTinhTrai.push({
            sao: "Thiên Trù",
            mau: "#E6D753",
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
            mau: "#000000",
        });
        thienBan[viTriSaoChiNam[1]].phuTinhTrai.push({
            sao: "Phượng Các",
            mau: "#3C9636",
        });

        thienBan[viTriSaoChiNam[2]].phuTinhTrai.push({
            sao: "Giải Thần",
            mau: "#3C9636",
        });
        thienBan[viTriSaoChiNam[3]].phuTinhTrai.push({
            sao: "Thiên Đức",
            mau: "#DD3E39",
        });

        thienBan[viTriSaoChiNam[4]].phuTinhTrai.push({
            sao: "Nguyệt Đức",
            mau: "#DD3E39",
        });
        thienBan[viTriSaoChiNam[5]].phuTinhTrai.push({
            sao: "Hồng Loan",
            mau: "#000000",
        });

        thienBan[viTriSaoChiNam[6]].phuTinhTrai.push({
            sao: "Thiên Hỷ",
            mau: "#000000",
        });
        thienBan[viTriSaoChiNam[7]].phuTinhPhai.push({
            sao: "Cô Thần",
            mau: "#E6D753",
        });
        thienBan[viTriSaoChiNam[8]].phuTinhPhai.push({
            sao: "Quả Tú",
            mau: "#E6D753",
        });

        thienBan[viTriSaoChiNam[9]].phuTinhTrai.push({
            sao: "Đào Hoa",
            mau: "#3C9636",
        });
        thienBan[viTriSaoChiNam[10]].phuTinhPhai.push({
            sao: "Kiếp Sát",
            mau: "#DD3E39",
        });

        thienBan[viTriSaoChiNam[11]].phuTinhTrai.push({
            sao: "Hoa cái",
            mau: "#9D9C98",
        });
        thienBan[viTriSaoChiNam[12]].phuTinhPhai.push({
            sao: "Phá Toái",
            mau: "#DD3E39",
        });
        thienBan[viTriSaoChiNam[13]].phuTinhPhai.push({
            sao: "Thiên Không",
            mau: "#DD3E39",
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
            mau: "#000000",
        });
        thienBan[viTriSaoThangSinh[1]].phuTinhTrai.push({
            sao: "Thiên Giải",
            mau: "#DD3E39",
        });
        thienBan[viTriSaoThangSinh[2]].phuTinhTrai.push({
            sao: "Địa Giải",
            mau: "#E6D753",
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
            mau: "#9D9C98",
        });
        thienBan[viTriSaoGioSinh[1]].phuTinhTrai.push({
            sao: "Phong Cáo",
            mau: "#E6D753",
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
                aq %= 12;
            }

            if (aq < 0) {
                aq += 12;
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
            mau: "#000000",
        });
        thienBan[viTriSaoNgaySinh[1]].phuTinhTrai.push({
            sao: "Bát Toạ",
            mau: "#3C9636",
        });
        thienBan[viTriSaoNgaySinh[2]].phuTinhTrai.push({
            sao: "Thiên Quý",
            mau: "#E6D753",
        });
        console.log(viTriSaoNgaySinh[3])
        thienBan[viTriSaoNgaySinh[3]].phuTinhTrai.push({
            sao: "Ân Quang",
            mau: "#3C9636",
        });

        // 2.5.20 an cac sao co dinh

        // sao thien la , sao dia vong,
        thienBan[2].phuTinhPhai.push({ sao: "Thiên La", mau: "#9D9C98" });
        thienBan[8].phuTinhPhai.push({ sao: "Địa Võng", mau: "#9D9C98" });

        // sao thien thuong sao thien su, sao thien tai ,sao thien tho
        for (i = 0; i < 12; i++) {
            const cung = thienBan[i].tenCung;
            if (cung == "Nô Bộc") {
                thienBan[i].phuTinhPhai.push({ sao: "Thiên Thương", mau: "#E6D753" });
            }
            if (cung == "Tật Ách") {
                thienBan[i].phuTinhPhai.push({ sao: "Thiên Sứ", mau: "#E6D753" });
            }
            if (cung == "Mệnh") {
                let vt = CHI.indexOf(chiNamSinh) + i;
                if (vt > 11) {
                    vt -= 12;
                }
                thienBan[vt].phuTinhTrai.push({ sao: "Thiên Tài", mau: "#E6D753" });
            }
        }

        let viTriThienTho = cungThanIndex + CHI.indexOf(chiNamSinh);
        if (viTriThienTho > 11) {
            viTriThienTho -= 12;
        }
        thienBan[viTriThienTho].phuTinhTrai.push({ sao: "Thiên Thọ", mau: "#E6D753" });

        // sao dau quan

        let viTriSaoDauQuan = khoiVongThaiTue - AL.month + 1;

        if (viTriSaoDauQuan < 0) {
            viTriSaoDauQuan += 12;
        }

        viTriSaoDauQuan = viTriSaoDauQuan + CHI.indexOf(chiGioSinh);

        if (viTriSaoDauQuan > 11) {
            viTriSaoDauQuan -= 12;
        }
        thienBan[viTriSaoDauQuan].phuTinhPhai.push({ sao: "Đẩu Quân", mau: "#DD3E39" });

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
                tinh = tinh % 12;
            }
            thienBan[tinh].vongTrangSinh = {
                sao: bangAnVongTrangSinh[i],
                mau: "#000000",
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
                    thienBan[tinh].daiVan = { sao: daiHan[i], mau: "#000000" };
                }
            }

            if (adnn == "ÂmNam" || adnn == "DươngNữ") {
                let vitrimenh = CHIANSAO.indexOf(viTriCungMenh);
                for (i = 0; i < 12; i++) {
                    let tinh = vitrimenh - i;

                    if (tinh < 0) {
                        tinh += 12;
                    }

                    thienBan[tinh].daiVan = { sao: daiHan[i], mau: "#000000" };
                }
            }
        };
        anDaiHan();

        // 2.5.22.1 An can cung
        const anCanCung = function (canNam) {
            let canCung = []
            if (canNam == "Giáp" || canNam == "Kỷ") {
                canCung = [
                    "B.Dần",
                    "Đ.Mão",
                    "M.Thìn",
                    "K.Tỵ",
                    "C.Ngọ",
                    "T.Mùi",
                    "N.Thân",
                    "Q.Dậu",
                    "G.Tuất",
                    "A.Hợi",
                    "B.Tý",
                    "Đ.Sửu"]
            }
            else if (canNam == "Ất" || canNam == "Canh") {
                canCung = [
                    "M.Dần",
                    "K.Mão",
                    "C.Thìn",
                    "T.Tỵ",
                    "N.Ngọ",
                    "Q.Mùi",
                    "G.Thân",
                    "Ấ.Dậu",
                    "B.Tuất",
                    "Đ.Hợi",
                    "M.Tý",
                    "K.Sửu"]
            }
            else if (canNam == "Bính" || canNam == "Tân") {
                canCung = [
                    "C.Dần",
                    "T.Mão",
                    "N.Thìn",
                    "Q.Tỵ",
                    "G.Ngọ",
                    "Ấ.Mùi",
                    "B.Thân",
                    "Đ.Dậu",
                    "M.Tuất",
                    "K.Hợi",
                    "C.Tý",
                    "T.Sửu"]
            }
            else if (canNam == "Đinh" || canNam == "Nhâm") {
                canCung = [
                    "N.Dần",
                    "Q.Mão",
                    "G.Thìn",
                    "Ấ.Tỵ",
                    "B.Ngọ",
                    "Đ.Mùi",
                    "M.Thân",
                    "K.Dậu",
                    "C.Tuất",
                    "T.Hợi",
                    "N.Tý",
                    "Q.Sửu"]
            }
            else if (canNam == "Mậu" || canNam == "Quý") {
                canCung = [
                    "G.Dần",
                    "Ấ.Mão",
                    "B.Thìn",
                    "Đ.Tỵ",
                    "M.Ngọ",
                    "K.Mùi",
                    "C.Thân",
                    "T.Dậu",
                    "N.Tuất",
                    "Q.Hợi",
                    "G.Tý",
                    "Ất.Sửu"]
            }

            for (i = 0; i <= 11; i++) {
                thienBan[i].canCung = { sao: canCung[i], mau: "#000000" };
            }
        }
        anCanCung(canChi[6])




        // 2.5.23 An các Sao lưu

        // lấy năm xem hạn
        const namXemHan = inputData.namXemHan;

        // tính can chi năm xem hạn
        const tinhCanChiNamXemHan = function (namXemHan) {
            const currentDate = new Date();

            const day = currentDate.getDate(); // Lấy ngày (từ 1 đến 31)
            const month = currentDate.getMonth() + 1; // Lấy tháng (từ 0 đến 11, cần cộng 1 để có tháng từ 1 đến 12)
            const year = currentDate.getFullYear(); // Lấy năm

            if (namXemHan == year) {
                const namXemHanDL = new SolarDate(new Date(`${year},${month},${day}`))
                const namXemHanAL = LunarDate.fromSolarDate(namXemHanDL)
                const canNamXemHan = CAN[(namXemHanAL.year + 6) % 10]
                const chiNamXemhan = CHI[(namXemHanAL.year + 8) % 12]

                return [canNamXemHan, chiNamXemhan, namXemHanAL.year]
            } else {
                const namXemHanDL = new SolarDate(new Date(`${namXemHan},7,7`))
                const namXemHanAL = LunarDate.fromSolarDate(namXemHanDL)
                const canNamXemHan = CAN[(namXemHanAL.year + 6) % 10]
                const chiNamXemhan = CHI[(namXemHanAL.year + 8) % 12]
                return [canNamXemHan, chiNamXemhan, namXemHanAL.year]
            }
        }
        const canChiNamXemHan = tinhCanChiNamXemHan(namXemHan)


        // 2.5.24 an tiêu hạn
        const bangAnTieuHan = [["Thìn", "Tỵ", "Ngọ", "Mùi", "Thân", "Dậu", "Tuất", "Hợi", "Tý", "Sửu", "Dần", "Mão"], // Tý Mão Ngọ Dậu -Nam
        ["Thân", "Dậu", "Tuất", "Hợi", "Tý", "Sửu", "Dần", "Mão", "Thìn", "Tỵ", "Ngọ", "Mùi"], // Sửu Thìn Mùi Tuất- nam
        ["Tý", "Sửu", "Dần", "Mão", "Thìn", "Tỵ", "Ngọ", "Mùi", "Thân", "Dậu", "Tuất", "Hợi"],// Dần Tỵ thân Hợi - Nam
        ["Thân", "Mùi", "Ngọ", "Tỵ", "Thìn", "Mão", "Dần", "Sửu", "Tý", "Hợi", "Tuất", "Dậu"], //Tý Ngọ- Nữ 
        ["Ngọ", "Tỵ", "Thìn", "Mão", "Dần", "Sửu", "Tý", "Hợi", "Tuất", "Dậu", "Thân", "Mùi"], // Sửu Mùi Nứ
        ["Thìn", "Mão", "Dần", "Sửu", "Tý", "Hợi", "Tuất", "Dậu", "Thân", "Mùi", "Ngọ", "Tỵ"], // Dần Thân nữ
        ["Dần", "Sửu", "Tý", "Hợi", "Tuất", "Dậu", "Thân", "Mùi", "Ngọ", "Tỵ", "Thìn", "Mão"],  // Mão dậu nữ
        ["Tý", "Hợi", "Tuất", "Dậu", "Thân", "Mùi", "Ngọ", "Tỵ", "Thìn", "Mão", "Dần", "Sửu"], // Thìn  tuất nữ
        ["Tuất", "Dậu", "Thân", "Mùi", "Ngọ", "Tỵ", "Thìn", "Mão", "Dần", "Sửu", "Tý", "Hợi"], // Tỵ hợi Nữ    
        ];

        const anTieuHan = function (canNam, gioiTinh, amDuongNamNu) {
            const adnn = amDuongNamNu + gioiTinh;
            if (adnn == "DươngNam" || adnn == "ÂmNữ") {
                if (canNam == "Tý" || canNam == "Mão" || canNam == "Ngọ" || canNam == "Dậu") {
                    for (i = 0; i < 12; i++) {
                        thienBan[i].tieuHan = bangAnTieuHan[0][i];
                    }
                }
                if (canNam == "Sửu" || canNam == "Thìn" || canNam == "Mùi" || canNam == "Tuất") {
                    for (i = 0; i < 12; i++) {
                        thienBan[i].tieuHan = bangAnTieuHan[1][i];
                    }
                }
                if (canNam == "Dần" || canNam == "Thân" || canNam == "Tỵ" || canNam == "Hợi") {
                    for (i = 0; i < 12; i++) {
                        thienBan[i].tieuHan = bangAnTieuHan[2][i];
                    }
                }

            }
            if (adnn == "ÂmNam" || adnn == "DươngNữ") {
                if (canNam == "Tý" || canNam == "Ngọ") {
                    for (i = 0; i < 12; i++) {
                        thienBan[i].tieuHan = bangAnTieuHan[3][i];
                    }
                }
                if (canNam == "Sửu" || canNam == "Mùi") {
                    for (i = 0; i < 12; i++) {
                        thienBan[i].tieuHan = bangAnTieuHan[4][i];
                    }
                }
                if (canNam == "Dần" || canNam == "Thân") {
                    for (i = 0; i < 12; i++) {
                        thienBan[i].tieuHan = bangAnTieuHan[5][i];
                    }
                }
                if (canNam == "Mão" || canNam == "Dậu") {
                    for (i = 0; i < 12; i++) {
                        thienBan[i].tieuHan = bangAnTieuHan[6][i];
                    }
                }
                if (canNam == "Thìn" || canNam == "Tuất") {
                    for (i = 0; i < 12; i++) {
                        thienBan[i].tieuHan = bangAnTieuHan[7][i];
                    }
                }
                if (canNam == "Tỵ" || canNam == "Hợi") {
                    for (i = 0; i < 12; i++) {
                        thienBan[i].tieuHan = bangAnTieuHan[8][i];
                    }
                }
            }

        }
        anTieuHan(canChi[7], gioiTinh, amDuongNamNu)
        // done an tieu hạn

        //2.5.25 an Nguyêt hạn
        // An nguyệt hạn 
        const anNguyetHan = function (chiNam, thangSinhAL, gioSinhAL) {
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

            const thang = [{ sao: "T1", mau: "#000000" }, { sao: "T2", mau: "#000000" },
            { sao: "T3", mau: "#000000" }, { sao: "T4", mau: "#000000" },
            { sao: "T5", mau: "#000000" }, { sao: "T6", mau: "#000000" },
            { sao: "T7", mau: "#000000" }, { sao: "T8", mau: "#000000" },
            { sao: "T9", mau: "#000000" }, { sao: "T10", mau: "#000000" },
            { sao: "T11", mau: "#000000" }, { sao: "T12", mau: "#000000" }]

            let cungKhoi = 0;

            for (i = 0; i < 12; i++) {
                let check = thienBan[i].tieuHan
                if (check == chiNam) {
                    cungKhoi = i;

                    cungKhoi = cungKhoi - parseInt(thangSinhAL)
                    if (cungKhoi < 0) {
                        cungKhoi += 13
                    }


                    cungKhoi = cungKhoi + parseInt(CHI.indexOf(gioSinhAL))
                    if (cungKhoi > 11) {
                        cungKhoi = cungKhoi % 12
                    }

                }
            }

            for (i = 0; i < 12; i++) {
                let anNT = cungKhoi + i
                if (anNT > 11) {
                    anNT = anNT % 12
                }
                thienBan[anNT].nguyetHan = thang[i]

            }
        }

        anNguyetHan(canChiNamXemHan[1], AL.month, chiGioSinh)

        // Done an Nguyệt hạn 

        // 2.5.26 An sao lưu
        // luu thai tue
        const anSaoLuu = function (bangChi, chiNamXemhan,canNamXemHan) {
            const bangAnLuuThaiTue = [
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
                "Sửu"
            ];

            const viTriLuuThaiTue = bangAnLuuThaiTue.indexOf(chiNamXemhan)
            let viTriLuuTangMon = parseInt(viTriLuuThaiTue) + 2;
            if (viTriLuuTangMon > 11) {
                viTriLuuTangMon = viTriLuuTangMon % 12
            }

            let viTriLuuBachHo = parseInt(viTriLuuThaiTue) + 8;

            if (viTriLuuBachHo > 11) {
                viTriLuuBachHo = viTriLuuBachHo % 12
            }

            let vitriThienHu = bangChi.indexOf(chiNamXemhan) + 4
            if (vitriThienHu > 11) {
                vitriThienHu = vitriThienHu % 12
            }

            let vitriThienKhoc = 4 - bangChi.indexOf(chiNamXemhan)
            if (vitriThienKhoc < 0) {
                vitriThienKhoc += 12
            }

            let vitriluuThienMa = 0
            if (chiNamXemhan == "Tỵ" || chiNamXemhan == "Dậu" || chiNamXemhan == "Sửu") {
                vitriluuThienMa = 9;
            } else if (chiNamXemhan == "Hợi" || chiNamXemhan == "Mão" || chiNamXemhan == "Mùi") {
                vitriluuThienMa = 3;
            } else if (chiNamXemhan == "Dần" || chiNamXemhan == "Ngọ" || chiNamXemhan == "Tuất") {
                vitriluuThienMa = 6;
            } else if (chiNamXemhan == "Thân" || chiNamXemhan == "Tý" || chiNamXemhan == "Thìn") {
                vitriluuThienMa = 0;
            }

            let viTriLuuLocTon = 0 
            if (canNamXemHan == "Giáp") {
                viTriLuuLocTon = 0
            } else if (canNamXemHan == "Kỷ" || canNamXemHan == "Đinh") {
                viTriLuuLocTon = 4
            } else if (canNamXemHan == "Ất") {
                viTriLuuLocTon = 1
            } else if (canNamXemHan == "Canh") {
                viTriLuuLocTon = 6
            } else if (canNamXemHan == "Bính" || canNamXemHan == "Mậu") {
                viTriLuuLocTon = 3
            } else if (canNamXemHan == "Tân") {
                viTriLuuLocTon = 7
            } else if (canNamXemHan == "Nhâm") {
                viTriLuuLocTon = 9
            } else if (canNamXemHan == "Quý") {
                viTriLuuLocTon = 10
            } 
            let vitriluukinhduong = viTriLuuLocTon + 1

            let vitriluudala = viTriLuuLocTon -1 
            if(vitriluudala < 0){
                vitriluudala +=12
            }
            



            thienBan[viTriLuuThaiTue].phuTinhPhai.push({ sao: "L.Thái Tuế", mau: "#DD3E39" })
            thienBan[viTriLuuTangMon].phuTinhPhai.push({ sao: "L.Tang Môn", mau: "#2309EF" })
            thienBan[viTriLuuBachHo].phuTinhPhai.push({ sao: "L.Bạch Hổ", mau: "#9D9C98" })
            thienBan[vitriThienHu].phuTinhPhai.push({ sao: "L.Thiên Hư", mau: "#000000" })
            thienBan[vitriThienKhoc].phuTinhPhai.push({ sao: "L.Thiên Khốc", mau: "#9D9C98" })
            thienBan[vitriluuThienMa].phuTinhTrai.push({ sao: "L.Thiên Mã", mau: "#DD3E39" })
            thienBan[viTriLuuLocTon].phuTinhTrai.push({ sao: "L.Lộc Tồn", mau: "#E6D753" })
            thienBan[vitriluukinhduong].phuTinhPhai.push({ sao: "L.Kinh Dương", mau: "#9D9C98" })
            thienBan[vitriluudala].phuTinhPhai.push({ sao: "L.Đà La", mau: "#9D9C98" })

        }

        anSaoLuu(CHI, canChiNamXemHan[1],canChiNamXemHan[0])


        const canChiNamXemHandb = ("- " + canChiNamXemHan[0] + " " + canChiNamXemHan[1])

        // an sao triêt
        const timvitritriet = function (canNamSinh) {
            if (canNamSinh == "Đinh" || canNamSinh == "Nhâm") {
                return 1
            } else if (canNamSinh == "Bính" || canNamSinh == "Tân") {
                return 2
            } else if (canNamSinh == "Ất" || canNamSinh == "Canh") {
                return 3
            } else if (canNamSinh == "Giáp" || canNamSinh == "Kỷ") {
                return 4
            } else if (canNamSinh == "Mậu" || canNamSinh == "Quý") {
                return 6
            }
        }

        const timvitrituan = function (canNamSinh) {
            const tuan = CAN.indexOf(canNamSinh)
            let check = khoiVongThaiTue - tuan
            if (check < 0) {
                check += 12
            }

            if (check == 10) {
                return 6
            } else if (check == 0) {
                return 5
            }
            else if (check == 2) {
                return 1
            }
            else if (check == 4) {
                return 2
            }
            else if (check == 6) {
                return 3
            }
            else if (check == 8) {
                return 4
            }
        }



        const vtTriet = timvitritriet(canChi[6])
        const vtTuan = timvitrituan(canChi[6])


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
            canChiNamXemHanDB: canChiNamXemHandb,
            vitritriet: vtTriet,
            vitrituan: vtTuan
        };
        return { inputData, diaBan, thienBan };
    }
    const datapost = laplaso(ok.hoTen, ok.ngaySinh, ok.thangSinh, ok.namSinh, ok.gioiTinh, ok.gioSinh, ok.loaiLich, ok.namXemHan)

    const { createCanvas, registerFont, Canvas, Image } = require('canvas')
    const canvas = createCanvas(720, 960, "png")
    const ctx = canvas.getContext('2d')
    registerFont(path.join(__dirname, 'image', 'RobotoCondensed-Black.ttf'), { family: 'font' })

    const btgs = (datapost.diaBan.canGioSinh + " " + datapost.diaBan.gioSinhAL)
    const btns = (datapost.diaBan.canNgay + " " + datapost.diaBan.chiNgay)
    const btts = (datapost.diaBan.canThang + " " + datapost.diaBan.chiThang)
    const btnas = (datapost.diaBan.canNam + " " + datapost.diaBan.chiNam)

    // vẽ khung 
    ctx.fillStyle = "#F7F7F7";
    ctx.fillRect(0, 0, 720, 960);
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, 1, 960);
    ctx.fillRect(179, 0, 1, 960);
    ctx.fillRect(359, 0, 1, 240);
    ctx.fillRect(359, 720, 1, 240);
    ctx.fillRect(539, 0, 1, 960);
    ctx.fillRect(719, 0, 1, 960);
    ctx.fillRect(0, 0, 960, 1);
    ctx.fillRect(0, 239, 960, 1);
    ctx.fillRect(0, 479, 180, 1);
    ctx.fillRect(540, 479, 180, 1);
    ctx.fillRect(0, 719, 960, 1);
    ctx.fillRect(0, 959, 960, 1);

    let x0 = 720 / 2;
    let y0 = 280;

    function circle(y, radius, color) {
        ctx.beginPath();
        ctx.fillStyle = color;
        ctx.arc(x0, y + y0, radius, 0, Math.PI * 2);
        ctx.fill();
    }
    let radius = 20;
    circle(0, radius, 'white')
    ctx.fillStyle = 'black';
    ctx.beginPath();
    ctx.arc(x0, y0, radius, -Math.PI * .5, Math.PI * .5);
    ctx.fill();
    circle(radius / 2, radius / 2, 'white');
    circle(-radius / 2, radius / 2, 'black');
    circle(radius / 2, radius / 8, 'black');
    circle(-radius / 2, radius / 8, 'white');

    // vẽ địa bàn
    ctx.fillStyle = 'black';
    ctx.font = '25px "font" ';
    ctx.fillText("Minh Phúc Đường", (720 - (ctx.measureText("Minh Phúc Đường").width)) / 2, 335);

    ctx.fillStyle = 'blue';
    ctx.font = '15px "font" ';
    ctx.fillText("Luận giải phí tùy tâm - Zalo 0961428241", (720 - (ctx.measureText("Luận giải phí tùy tâm - Zalo 0961330812").width)) / 2, 700);

    ctx.fillStyle = 'black';
    ctx.font = '15px "font" ';
    ctx.fillText("minhphucduong.vn", (720 - (ctx.measureText("minhphucduong.vn").width)) / 2, 680);

    ctx.fillStyle = 'black';
    ctx.font = '12px "font" ';
    ctx.fillText("DL:", canvas.width / 2 - 170, canvas.height / 2.5 + 50);
    ctx.fillText("AL:", canvas.width / 2 - 170, canvas.height / 2.5 + 75);
    ctx.fillText("BT:", canvas.width / 2 - 170, canvas.height / 2.5 + 100);

    ctx.fillText(datapost.diaBan.gioSinhDL, 170 + (180 - (ctx.measureText(datapost.diaBan.gioSinhDL).width)) / 2, canvas.height / 2.5 + 50);
    ctx.fillText(datapost.diaBan.gioSinhAL, 170 + (180 - (ctx.measureText(datapost.diaBan.gioSinhAL).width)) / 2, canvas.height / 2.5 + 75);
    ctx.fillText(btgs, 170 + (180 - (ctx.measureText(btgs).width)) / 2, canvas.height / 2.5 + 100);

    ctx.fillText(datapost.diaBan.ngaySinhDL, 260 + (180 - (ctx.measureText(datapost.diaBan.ngaySinhDL).width)) / 2, canvas.height / 2.5 + 50);
    ctx.fillText(datapost.diaBan.ngaySinhAL, 260 + (180 - (ctx.measureText(datapost.diaBan.ngaySinhAL).width)) / 2, canvas.height / 2.5 + 75);
    ctx.fillText(btns, 260 + (180 - (ctx.measureText(btns).width)) / 2, canvas.height / 2.5 + 100);

    ctx.fillText(datapost.diaBan.thangSinhDL, 335 + (180 - (ctx.measureText(datapost.diaBan.thangSinhDL).width)) / 2, canvas.height / 2.5 + 50);
    ctx.fillText(datapost.diaBan.thangSinhAL, 335 + (180 - (ctx.measureText(datapost.diaBan.thangSinhAL).width)) / 2, canvas.height / 2.5 + 75);
    ctx.fillText(btts, 335 + (180 - (ctx.measureText(btts).width)) / 2, canvas.height / 2.5 + 100);

    ctx.fillText(datapost.diaBan.namSinhDL, 405 + (180 - (ctx.measureText(datapost.diaBan.namSinhDL).width)) / 2, canvas.height / 2.5 + 50);
    ctx.fillText(datapost.diaBan.namSinhAL, 405 + (180 - (ctx.measureText(datapost.diaBan.namSinhAL).width)) / 2, canvas.height / 2.5 + 75);
    ctx.fillText(btnas, 405 + (180 - (ctx.measureText(btnas).width)) / 2, canvas.height / 2.5 + 100);

    ctx.fillStyle = 'black';
    ctx.font = '14px font';
    ctx.fillText("Họ và tên:", canvas.width / 2.6, canvas.height / 2.5);
    ctx.fillText("Giờ", 170 + (180 - (ctx.measureText("Giờ").width)) / 2, canvas.height / 2.5 + 30);
    ctx.fillText("Ngày", 260 + (180 - (ctx.measureText("Ngày").width)) / 2, canvas.height / 2.5 + 30);
    ctx.fillText("Tháng", 335 + (180 - (ctx.measureText("Tháng").width)) / 2, canvas.height / 2.5 + 30);
    ctx.fillText("Năm", 405 + (180 - (ctx.measureText("Năm").width)) / 2, canvas.height / 2.5 + 30);
    ctx.fillText("Năm xem:", canvas.width / 2.8, canvas.height / 2.5 + 150);
    ctx.fillText("Âm Dương:", canvas.width / 2.8, canvas.height / 2.5 + 175);
    ctx.fillText("Ngũ hành:", canvas.width / 2.8, canvas.height / 2.5 + 200);
    ctx.fillText("Cục:", canvas.width / 2.8, canvas.height / 2.5 + 225);
    ctx.fillText(datapost.diaBan.hoVaTen, canvas.width / 2, canvas.height / 2.5);
    ctx.fillText(datapost.diaBan.namXemHan, canvas.width / 2, canvas.height / 2.5 + 150);
    ctx.fillText(datapost.diaBan.canChiNamXemHanDB, canvas.width / 2 + 40, canvas.height / 2.5 + 150);
    ctx.fillText(datapost.diaBan.amDuongNamNu, canvas.width / 2, canvas.height / 2.5 + 175);
    ctx.fillText(datapost.diaBan.menhNapAm, canvas.width / 2, canvas.height / 2.5 + 200);
    ctx.fillText(datapost.diaBan.cuc, canvas.width / 2, canvas.height / 2.5 + 225);
    // Done vẽ xong địa bàn.

    // vẽ vòng tràng sinh
    ctx.fillStyle = 'black';
    ctx.font = '12px font';
    ctx.fillText(datapost.thienBan[0].vongTrangSinh.sao, (180 - (ctx.measureText(datapost.thienBan[0].vongTrangSinh.sao).width)) / 2, 950);
    ctx.fillText(datapost.thienBan[1].vongTrangSinh.sao, (180 - (ctx.measureText(datapost.thienBan[1].vongTrangSinh.sao).width)) / 2, 710);
    ctx.fillText(datapost.thienBan[2].vongTrangSinh.sao, (180 - (ctx.measureText(datapost.thienBan[2].vongTrangSinh.sao).width)) / 2, 470);
    ctx.fillText(datapost.thienBan[3].vongTrangSinh.sao, (180 - (ctx.measureText(datapost.thienBan[3].vongTrangSinh.sao).width)) / 2, 230);
    ctx.fillText(datapost.thienBan[4].vongTrangSinh.sao, 180 + (180 - (ctx.measureText(datapost.thienBan[4].vongTrangSinh.sao).width)) / 2, 230);
    ctx.fillText(datapost.thienBan[5].vongTrangSinh.sao, 360 + (180 - (ctx.measureText(datapost.thienBan[5].vongTrangSinh.sao).width)) / 2, 230);
    ctx.fillText(datapost.thienBan[6].vongTrangSinh.sao, 540 + (180 - (ctx.measureText(datapost.thienBan[6].vongTrangSinh.sao).width)) / 2, 230);
    ctx.fillText(datapost.thienBan[7].vongTrangSinh.sao, 540 + (180 - (ctx.measureText(datapost.thienBan[7].vongTrangSinh.sao).width)) / 2, 470);
    ctx.fillText(datapost.thienBan[8].vongTrangSinh.sao, 540 + (180 - (ctx.measureText(datapost.thienBan[8].vongTrangSinh.sao).width)) / 2, 710);
    ctx.fillText(datapost.thienBan[9].vongTrangSinh.sao, 540 + (180 - (ctx.measureText(datapost.thienBan[9].vongTrangSinh.sao).width)) / 2, 950);
    ctx.fillText(datapost.thienBan[10].vongTrangSinh.sao, 360 + (180 - (ctx.measureText(datapost.thienBan[10].vongTrangSinh.sao).width)) / 2, 950);
    ctx.fillText(datapost.thienBan[11].vongTrangSinh.sao, 180 + (180 - (ctx.measureText(datapost.thienBan[11].vongTrangSinh.sao).width)) / 2, 950);
    // DOne vẽ vòng tràng sinh 

    // vẽ tên cung 
    ctx.fillStyle = 'black';
    ctx.font = ' 12px "font" ';
    ctx.fillText(datapost.thienBan[0].tenCung, (180 - (ctx.measureText(datapost.thienBan[0].tenCung).width)) / 2, 742);
    ctx.fillText(datapost.thienBan[1].tenCung, (180 - (ctx.measureText(datapost.thienBan[1].tenCung).width)) / 2, 502);
    ctx.fillText(datapost.thienBan[2].tenCung, (180 - (ctx.measureText(datapost.thienBan[2].tenCung).width)) / 2, 262);
    ctx.fillText(datapost.thienBan[3].tenCung, (180 - (ctx.measureText(datapost.thienBan[3].tenCung).width)) / 2, 22);
    ctx.fillText(datapost.thienBan[4].tenCung, 180 + (180 - (ctx.measureText(datapost.thienBan[4].tenCung).width)) / 2, 22);
    ctx.fillText(datapost.thienBan[5].tenCung, 360 + (180 - (ctx.measureText(datapost.thienBan[5].tenCung).width)) / 2, 22);
    ctx.fillText(datapost.thienBan[6].tenCung, 540 + (180 - (ctx.measureText(datapost.thienBan[6].tenCung).width)) / 2, 22);
    ctx.fillText(datapost.thienBan[7].tenCung, 540 + (180 - (ctx.measureText(datapost.thienBan[7].tenCung).width)) / 2, 262);
    ctx.fillText(datapost.thienBan[8].tenCung, 540 + (180 - (ctx.measureText(datapost.thienBan[8].tenCung).width)) / 2, 502);
    ctx.fillText(datapost.thienBan[9].tenCung, 540 + (180 - (ctx.measureText(datapost.thienBan[9].tenCung).width)) / 2, 742);
    ctx.fillText(datapost.thienBan[10].tenCung, 360 + (180 - (ctx.measureText(datapost.thienBan[10].tenCung).width)) / 2, 742);
    ctx.fillText(datapost.thienBan[11].tenCung, 180 + (180 - (ctx.measureText(datapost.thienBan[11].tenCung).width)) / 2, 742);
    // Done vẽ tên cung 


    // vẽ chính tinh
    const veChinhTinh = function (cung, w, h) {
        if (cung.chinhTinh.length > 0) {
            for (i = 0; i < cung.chinhTinh.length; i++) {
                if (cung.chinhTinh[i].mau == "#9D9C98") {
                    ctx.fillStyle = "#9D9C98"
                    ctx.font = '14px "font"';
                    ctx.fillText(cung.chinhTinh[i].sao, w + (180 - (ctx.measureText(cung.chinhTinh[i].sao).width)) / 2, h)
                } else if (cung.chinhTinh[i].mau == "#DD3E39") {
                    ctx.fillStyle = "#DD3E39"
                    ctx.font = '14px "font"';
                    ctx.fillText(cung.chinhTinh[i].sao, w + (180 - (ctx.measureText(cung.chinhTinh[i].sao).width)) / 2, h)
                }
                else if (cung.chinhTinh[i].mau == "#E6D753") {
                    ctx.fillStyle = "#E1B500"
                    ctx.font = '14px "font"';
                    ctx.fillText(cung.chinhTinh[i].sao, w + (180 - (ctx.measureText(cung.chinhTinh[i].sao).width)) / 2, h)
                }
                else if (cung.chinhTinh[i].mau == "#3C9636") {
                    ctx.fillStyle = "#3C9636"
                    ctx.font = '14px "font"';
                    ctx.fillText(cung.chinhTinh[i].sao, w + (180 - (ctx.measureText(cung.chinhTinh[i].sao).width)) / 2, h)
                }
                else if (cung.chinhTinh[i].mau == "#000000") {
                    ctx.fillStyle = 'black'
                    ctx.font = '14px "font"';
                    ctx.fillText(cung.chinhTinh[i].sao, w + (180 - (ctx.measureText(cung.chinhTinh[i].sao).width)) / 2, h)
                }
                h += 20;
            }
        }

    }


    veChinhTinh(datapost.thienBan[0], 0, 760)
    veChinhTinh(datapost.thienBan[1], 0, 520)
    veChinhTinh(datapost.thienBan[2], 0, 285)
    veChinhTinh(datapost.thienBan[3], 0, 40)
    veChinhTinh(datapost.thienBan[4], 180, 40)
    veChinhTinh(datapost.thienBan[5], 360, 40)
    veChinhTinh(datapost.thienBan[6], 540, 40)
    veChinhTinh(datapost.thienBan[7], 540, 285)
    veChinhTinh(datapost.thienBan[8], 540, 520)
    veChinhTinh(datapost.thienBan[9], 540, 760)
    veChinhTinh(datapost.thienBan[10], 360, 760)
    veChinhTinh(datapost.thienBan[11], 180, 760)
    // DOne vẽ chính tinh

    // Vẽ Phụ tinh trai
    const veChinhTinhTrai = function (cung, w, h) {
        if (cung.phuTinhTrai.length > 0) {

            for (i = 0; i < cung.phuTinhTrai.length; i++) {
                if (cung.phuTinhTrai[i].mau == "#9D9C98") {
                    ctx.fillStyle = "#9D9C98"
                    ctx.font = '11px "font"';
                    ctx.fillText(cung.phuTinhTrai[i].sao, w, h)
                } else if (cung.phuTinhTrai[i].mau == "#DD3E39") {
                    ctx.fillStyle = "#DD3E39"
                    ctx.font = '11px "font"';
                    ctx.fillText(cung.phuTinhTrai[i].sao, w, h)
                }
                else if (cung.phuTinhTrai[i].mau == "#E6D753") {
                    ctx.fillStyle = "#E1B500"
                    ctx.font = '11px "font"';
                    ctx.fillText(cung.phuTinhTrai[i].sao, w, h)
                }
                else if (cung.phuTinhTrai[i].mau == "#3C9636") {
                    ctx.fillStyle = "#3C9636"
                    ctx.font = '11px "font"';
                    ctx.fillText(cung.phuTinhTrai[i].sao, w, h)
                }
                else if (cung.phuTinhTrai[i].mau == "#000000") {
                    ctx.fillStyle = 'black'
                    ctx.font = '11px "font"';
                    ctx.fillText(cung.phuTinhTrai[i].sao, w, h)
                }
                h += 15;
            }
        }

    }

    veChinhTinhTrai(datapost.thienBan[0], 5, 800)
    veChinhTinhTrai(datapost.thienBan[1], 5, 560)
    veChinhTinhTrai(datapost.thienBan[2], 5, 325)
    veChinhTinhTrai(datapost.thienBan[3], 5, 90)
    veChinhTinhTrai(datapost.thienBan[4], 185, 90)
    veChinhTinhTrai(datapost.thienBan[5], 365, 90)
    veChinhTinhTrai(datapost.thienBan[6], 545, 90)
    veChinhTinhTrai(datapost.thienBan[7], 545, 325)
    veChinhTinhTrai(datapost.thienBan[8], 545, 560)
    veChinhTinhTrai(datapost.thienBan[9], 545, 800)
    veChinhTinhTrai(datapost.thienBan[10], 365, 800)
    veChinhTinhTrai(datapost.thienBan[11], 185, 800)
    //Done ve phu trinh trai


    // Vẽ Phụ tinh phai
    const veChinhTinhPhai = function (cung, w, h) {
        if (cung.phuTinhPhai.length > 0) {

            for (i = 0; i < cung.phuTinhPhai.length; i++) {
                if (cung.phuTinhPhai[i].mau == "#9D9C98") {
                    ctx.fillStyle = "#9D9C98"
                    ctx.font = '11px "font"';
                    ctx.fillText(cung.phuTinhPhai[i].sao, w, h)
                } else if (cung.phuTinhPhai[i].mau == "#DD3E39") {
                    ctx.fillStyle = "#DD3E39"
                    ctx.font = '11px "font"';
                    ctx.fillText(cung.phuTinhPhai[i].sao, w, h)
                }
                else if (cung.phuTinhPhai[i].mau == "#E6D753") {
                    ctx.fillStyle = "#E1B500"
                    ctx.font = '11px "font"';
                    ctx.fillText(cung.phuTinhPhai[i].sao, w, h)
                }
                else if (cung.phuTinhPhai[i].mau == "#3C9636") {
                    ctx.fillStyle = "#3C9636"
                    ctx.font = '11px "font"';
                    ctx.fillText(cung.phuTinhPhai[i].sao, w, h)
                }
                else if (cung.phuTinhPhai[i].mau == "#000000") {
                    ctx.fillStyle = 'black'
                    ctx.font = '11px "font"';
                    ctx.fillText(cung.phuTinhPhai[i].sao, w, h)
                }
                h += 15;
            }
        }

    }

    veChinhTinhPhai(datapost.thienBan[0], 95, 800)
    veChinhTinhPhai(datapost.thienBan[1], 95, 560)
    veChinhTinhPhai(datapost.thienBan[2], 95, 325)
    veChinhTinhPhai(datapost.thienBan[3], 95, 90)
    veChinhTinhPhai(datapost.thienBan[4], 275, 90)
    veChinhTinhPhai(datapost.thienBan[5], 455, 90)
    veChinhTinhPhai(datapost.thienBan[6], 635, 90)
    veChinhTinhPhai(datapost.thienBan[7], 635, 325)
    veChinhTinhPhai(datapost.thienBan[8], 635, 560)
    veChinhTinhPhai(datapost.thienBan[9], 635, 800)
    veChinhTinhPhai(datapost.thienBan[10], 455, 800)
    veChinhTinhPhai(datapost.thienBan[11], 275, 800)
    //Done ve phu trinh trai

    // vẽ can cung 
    ctx.fillStyle = 'black';
    ctx.font = '11px "font"';
    ctx.fillText(datapost.thienBan[0].canCung.sao, 5, 740);
    ctx.fillText(datapost.thienBan[1].canCung.sao, 5, 495);
    ctx.fillText(datapost.thienBan[2].canCung.sao, 5, 255);
    ctx.fillText(datapost.thienBan[3].canCung.sao, 5, 15);
    ctx.fillText(datapost.thienBan[4].canCung.sao, 185, 15);
    ctx.fillText(datapost.thienBan[5].canCung.sao, 365, 15);
    ctx.fillText(datapost.thienBan[6].canCung.sao, 545, 15);
    ctx.fillText(datapost.thienBan[7].canCung.sao, 545, 255);
    ctx.fillText(datapost.thienBan[8].canCung.sao, 545, 495);
    ctx.fillText(datapost.thienBan[9].canCung.sao, 545, 740);
    ctx.fillText(datapost.thienBan[10].canCung.sao, 365, 740);
    ctx.fillText(datapost.thienBan[11].canCung.sao, 185, 740);
    //Done vẽ can cung

    // Vẽ nguyệt hạn 
    ctx.fillStyle = 'black';
    ctx.font = '12px "font"';
    ctx.fillText(datapost.thienBan[0].nguyetHan.sao, 175 - (ctx.measureText(datapost.thienBan[0].nguyetHan.sao).width), 950);
    ctx.fillText(datapost.thienBan[1].nguyetHan.sao, 175 - (ctx.measureText(datapost.thienBan[1].nguyetHan.sao).width), 710);
    ctx.fillText(datapost.thienBan[2].nguyetHan.sao, 175 - (ctx.measureText(datapost.thienBan[2].nguyetHan.sao).width), 470);
    ctx.fillText(datapost.thienBan[3].nguyetHan.sao, 175 - (ctx.measureText(datapost.thienBan[3].nguyetHan.sao).width), 230);
    ctx.fillText(datapost.thienBan[4].nguyetHan.sao, 355 - (ctx.measureText(datapost.thienBan[4].nguyetHan.sao).width), 230);
    ctx.fillText(datapost.thienBan[5].nguyetHan.sao, 535 - (ctx.measureText(datapost.thienBan[5].nguyetHan.sao).width), 230);
    ctx.fillText(datapost.thienBan[6].nguyetHan.sao, 715 - (ctx.measureText(datapost.thienBan[6].nguyetHan.sao).width), 230);
    ctx.fillText(datapost.thienBan[7].nguyetHan.sao, 715 - (ctx.measureText(datapost.thienBan[7].nguyetHan.sao).width), 470);
    ctx.fillText(datapost.thienBan[8].nguyetHan.sao, 715 - (ctx.measureText(datapost.thienBan[8].nguyetHan.sao).width), 710);
    ctx.fillText(datapost.thienBan[9].nguyetHan.sao, 715 - (ctx.measureText(datapost.thienBan[9].nguyetHan.sao).width), 950);
    ctx.fillText(datapost.thienBan[10].nguyetHan.sao, 535 - (ctx.measureText(datapost.thienBan[10].nguyetHan.sao).width), 950);
    ctx.fillText(datapost.thienBan[11].nguyetHan.sao, 355 - (ctx.measureText(datapost.thienBan[11].nguyetHan.sao).width), 950);
    //Done vẽ nguyệt hạn 

    // vẽ tiểu hạn 
    ctx.fillText(datapost.thienBan[0].tieuHan, 5, 950);
    ctx.fillText(datapost.thienBan[1].tieuHan, 5, 710);
    ctx.fillText(datapost.thienBan[2].tieuHan, 5, 470);
    ctx.fillText(datapost.thienBan[3].tieuHan, 5, 230);
    ctx.fillText(datapost.thienBan[4].tieuHan, 185, 230);
    ctx.fillText(datapost.thienBan[5].tieuHan, 365, 230);
    ctx.fillText(datapost.thienBan[6].tieuHan, 545, 230);
    ctx.fillText(datapost.thienBan[7].tieuHan, 545, 470);
    ctx.fillText(datapost.thienBan[8].tieuHan, 545, 710);
    ctx.fillText(datapost.thienBan[9].tieuHan, 545, 950);
    ctx.fillText(datapost.thienBan[10].tieuHan, 365, 950);
    ctx.fillText(datapost.thienBan[11].tieuHan, 185, 950);
    //Done vẽ tiểu hạn 

    //vẽ đại vận 
    ctx.fillText(datapost.thienBan[0].daiVan.sao, 175 - (ctx.measureText(datapost.thienBan[0].daiVan.sao).width), 740);
    ctx.fillText(datapost.thienBan[1].daiVan.sao, 175 - (ctx.measureText(datapost.thienBan[1].daiVan.sao).width), 495);
    ctx.fillText(datapost.thienBan[2].daiVan.sao, 175 - (ctx.measureText(datapost.thienBan[2].daiVan.sao).width), 255);
    ctx.fillText(datapost.thienBan[3].daiVan.sao, 175 - (ctx.measureText(datapost.thienBan[3].daiVan.sao).width), 15);
    ctx.fillText(datapost.thienBan[4].daiVan.sao, 355 - (ctx.measureText(datapost.thienBan[4].daiVan.sao).width), 15);
    ctx.fillText(datapost.thienBan[5].daiVan.sao, 535 - (ctx.measureText(datapost.thienBan[5].daiVan.sao).width), 15);
    ctx.fillText(datapost.thienBan[6].daiVan.sao, 715 - (ctx.measureText(datapost.thienBan[6].daiVan.sao).width), 15);
    ctx.fillText(datapost.thienBan[7].daiVan.sao, 715 - (ctx.measureText(datapost.thienBan[7].daiVan.sao).width), 255);
    ctx.fillText(datapost.thienBan[8].daiVan.sao, 715 - (ctx.measureText(datapost.thienBan[8].daiVan.sao).width), 495);
    ctx.fillText(datapost.thienBan[9].daiVan.sao, 715 - (ctx.measureText(datapost.thienBan[9].daiVan.sao).width), 740);
    ctx.fillText(datapost.thienBan[10].daiVan.sao, 535 - (ctx.measureText(datapost.thienBan[10].daiVan.sao).width), 740);
    ctx.fillText(datapost.thienBan[11].daiVan.sao, 355 - (ctx.measureText(datapost.thienBan[11].daiVan.sao).width), 740);


    // vẽ Tuần triệt
    const veTuanTriet = function (triet, tuan) {
        if (triet == tuan) {
            if (triet = 1) {
                ctx.fillStyle = "Black";
                ctx.fillRect(((180 - 85) / 2), 712, 85, 15);
                ctx.fillStyle = 'White';
                ctx.font = '11px "font"';
                ctx.fillText("Tuần - Triệt ", (180 - (ctx.measureText("Tuần - Triệt").width)) / 2, 723);
            } else if (triet = 2) {
                ctx.fillStyle = "Black";
                ctx.fillRect(((180 - 85) / 2), 232, 85, 15);
                ctx.fillStyle = 'White';
                ctx.font = '11px "font"';
                ctx.fillText("Tuần - Triệt ", (180 - (ctx.measureText("Tuần - Triệt").width)) / 2, 243);
            } else if (triet = 3) {
                ctx.fillStyle = "Black";
                ctx.fillRect((180 + (360 - 85) / 2), 232, 85, 15);
                ctx.fillStyle = 'White';
                ctx.font = '11px "font"';
                ctx.fillText("Tuần - Triệt ", (180 + (360 - (ctx.measureText("Tuần - Triệt").width)) / 2), 243);
            } else if (triet = 4) {
                ctx.fillStyle = "Black";
                ctx.fillRect((540 + (180 - 85) / 2), 232, 85, 15);
                ctx.fillStyle = 'White';
                ctx.font = '11px "font"';
                ctx.fillText("Tuần - Triệt ", (540 + (180 - (ctx.measureText("Tuần - Triệt").width)) / 2), 243);
            } else if (triet = 6) {
                ctx.fillStyle = "Black";
                ctx.fillRect((180 + (360 - 85) / 2), 712, 85, 15);
                ctx.fillStyle = 'White';
                ctx.font = '11px "font"';
                ctx.fillText("Tuần - Triệt ", (180 + (360 - (ctx.measureText("Tuần - Triệt").width)) / 2), 723);
            }
        } else {
            let ok = [triet, tuan]
            for (i = 0; i < 2; i++) {
                if (i == 0) {
                    if (ok[0] == 1) {
                        ctx.fillStyle = "Black";
                        ctx.fillRect(((180 - 50) / 2), 712, 50, 15);
                        ctx.fillStyle = 'White';
                        ctx.font = '11px "font"';
                        ctx.fillText("Triệt", ((180 - (ctx.measureText("Triệt").width)) / 2), 723);
                    } else if (ok[0] == 2) {
                        ctx.fillStyle = "Black";
                        ctx.fillRect(((180 - 50) / 2), 232, 50, 15);
                        ctx.fillStyle = 'White';
                        ctx.font = '11px "font"';
                        ctx.fillText("Triệt", ((180 - (ctx.measureText("Triệt").width)) / 2), 243);
                    } else if (ok[0] == 3) {
                        ctx.fillStyle = "Black";
                        ctx.fillRect((180 + (360 - 50) / 2), 232, 50, 15);
                        ctx.fillStyle = 'White';
                        ctx.font = '11px "font"';
                        ctx.fillText("Triệt", (180 + (360 - (ctx.measureText("Triệt").width)) / 2), 243);
                    } else if (ok[0] == 4) {
                        ctx.fillStyle = "Black";
                        ctx.fillRect((540 + (180 - 50) / 2), 232, 50, 15);
                        ctx.fillStyle = 'White';
                        ctx.font = '11px "font"';
                        ctx.fillText("Triệt", (540 + (180 - (ctx.measureText("Triệt").width)) / 2), 243);
                    } else if (ok[0] == 6) {
                        ctx.fillStyle = "Black";
                        ctx.fillRect((180 + (360 - 50) / 2), 712, 50, 15);
                        ctx.fillStyle = 'White';
                        ctx.font = '11px "font"';
                        ctx.fillText("Triệt", (180 + (360 - (ctx.measureText("Triệt").width)) / 2), 723);
                    }
                }

                if (i == 1) {
                    if (ok[1] == 1) {
                        ctx.fillStyle = "Black";
                        ctx.fillRect(((180 - 50) / 2), 712, 50, 15);
                        ctx.fillStyle = 'White';
                        ctx.font = '11px "font"';
                        ctx.fillText("Tuần", ((180 - (ctx.measureText("Tuần").width)) / 2), 723);
                    } else if (ok[1] == 2) {
                        ctx.fillStyle = "Black";
                        ctx.fillRect(((180 - 50) / 2), 232, 50, 15);
                        ctx.fillStyle = 'White';
                        ctx.font = '11px "font"';
                        ctx.fillText("Tuần", ((180 - (ctx.measureText("Tuần").width)) / 2), 243);
                    } else if (ok[1] == 3) {
                        ctx.fillStyle = "Black";
                        ctx.fillRect((180 + (360 - 50) / 2), 232, 50, 15);
                        ctx.fillStyle = 'White';
                        ctx.font = '11px "font"';
                        ctx.fillText("Tuần", (180 + (360 - (ctx.measureText("Tuần").width)) / 2), 243);
                    } else if (ok[1] == 4) {
                        ctx.fillStyle = "Black";
                        ctx.fillRect((540 + (180 - 50) / 2), 232, 50, 15);
                        ctx.fillStyle = 'White';
                        ctx.font = '11px "font"';
                        ctx.fillText("Tuần", (540 + (180 - (ctx.measureText("Tuần").width)) / 2), 243);
                    } else if (ok[1] == 5) {
                        ctx.fillStyle = "Black";
                        ctx.fillRect((540 + (180 - 50) / 2), 712, 50, 15);
                        ctx.fillStyle = 'White';
                        ctx.font = '11px "font"';
                        ctx.fillText("Tuần", (540 + (180 - (ctx.measureText("Tuần").width)) / 2), 723);
                    } else if (ok[1] == 6) {
                        ctx.fillStyle = "Black";
                        ctx.fillRect((180 + (360 - 50) / 2), 712, 50, 15);
                        ctx.fillStyle = 'White';
                        ctx.font = '11px "font"';
                        ctx.fillText("Tuần", (180 + (360 - (ctx.measureText("Tuần").width)) / 2), 723);
                    }
                }

            }
        }
    }

    veTuanTriet(datapost.diaBan.vitritriet, datapost.diaBan.vitrituan)

    // Gửi ảnh canvas đã tạo đến trang 2

    return res.render('hienthilasonamphai', { image: canvas.toDataURL() });
}

module.exports = posthinethilaso;
