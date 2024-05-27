// Route lập lá số tử vi bac phái 
const posthinethilaso = (req, res) => {
    const ok = req.body;
    const {
        SolarDate,
        LunarDate,
        _calendar,
    } = require("@nghiavuive/lunar_date_vi/dist/index.cjs");
    const { tinhCanGioSinhAL, tinhCanChi } = require("../services/canchi.service");
    const { an14ChinhTinh } = require("../services/an14chinhtinhbp.service");
    const { tinhCucLaSo } = require("../services/timcuclaso.service");
    const path = require('path')

    

    // check du lieu dau vao
    let inputData = {
        ngayInput: parseInt(ok.ngaySinh),
        thangInput: parseInt(ok.thangSinh),
        namInput: parseInt(ok.namSinh),
        loaiLichInput: parseInt(ok.loaiLich),
    };

    // check ngay thang dung chua
    function checkTime() {
        // Trường hơp input là lịch dương
        if (inputData.loaiLichInput == 1) {
            if(!SolarDate.isValidDate({day: inputData.ngayInput, 
                month: inputData.thangInput, year: inputData.namInput})){
                    return 1
                }
                return 2
        }
        // Trường hơp input là lịch Am
        else {
            // truong hop sai
            if((!LunarDate.isValidDate({ day: inputData.ngayInput, 
            month: inputData.thangInput, year: inputData.namInput }))){
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
                canCungTH: undefined,
                tuHoaHuongTam: [],
                tuHoaLyTam: []
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
                canCungTH: undefined,
                tuHoaHuongTam: [],
                tuHoaLyTam: []
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
                canCungTH: undefined,
                tuHoaHuongTam: [],
                tuHoaLyTam: []
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
                canCungTH: undefined,
                tuHoaHuongTam: [],
                tuHoaLyTam: []
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
                canCungTH: undefined,
                tuHoaHuongTam: [],
                tuHoaLyTam: []
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
                canCungTH: undefined,
                tuHoaHuongTam: [],
                tuHoaLyTam: []
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
                canCungTH: undefined,
                tuHoaHuongTam: [],
                tuHoaLyTam: []
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
                canCungTH: undefined,
                tuHoaHuongTam: [],
                tuHoaLyTam: []
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
                canCungTH: undefined,
                tuHoaHuongTam: [],
                tuHoaLyTam: []
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
                canCungTH: undefined,
                tuHoaHuongTam: [],
                tuHoaLyTam: []
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
                canCungTH: undefined,
                tuHoaHuongTam: [],
                tuHoaLyTam: []
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
                canCungTH: undefined,
                tuHoaHuongTam: [],
                tuHoaLyTam: []
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
                // Khởi tạo lịch dương
                const DL = new SolarDate({ day: inputData.ngayInput, month: inputData.thangInput, year: inputData.namInput });


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
                { sao: "Văn Xương", mau: "#9D9C98", TH: 15 },
                { sao: "Văn Khúc", mau: "#000000", TH: 16 },
            ],
            [
                7,
                3,
                { sao: "Văn Xương", mau: "#9D9C98", TH: 15 },
                { sao: "Văn Khúc", mau: "#000000", TH: 16 },
            ],
            [
                6,
                4,
                { sao: "Văn Xương", mau: "#9D9C98", TH: 15 },
                { sao: "Văn Khúc", mau: "#000000", TH: 16 },
            ],
            [
                5,
                5,
                { sao: "Văn Xương", mau: "#9D9C98", TH: 15 },
                { sao: "Văn Khúc", mau: "#000000", TH: 16 },
            ],
            [
                4,
                6,
                { sao: "Văn Xương", mau: "#9D9C98", TH: 15 },
                { sao: "Văn Khúc", mau: "#000000", TH: 16 },
            ],
            [
                3,
                7,
                { sao: "Văn Xương", mau: "#9D9C98", TH: 15 },
                { sao: "Văn Khúc", mau: "#000000", TH: 16 },
            ],
            [
                2,
                8,
                { sao: "Văn Xương", mau: "#9D9C98", TH: 15 },
                { sao: "Văn Khúc", mau: "#000000", TH: 16 },
            ],
            [
                1,
                9,
                { sao: "Văn Xương", mau: "#9D9C98", TH: 15 },
                { sao: "Văn Khúc", mau: "#000000", TH: 16 },
            ],
            [
                0,
                10,
                { sao: "Văn Xương", mau: "#9D9C98", TH: 15 },
                { sao: "Văn Khúc", mau: "#000000", TH: 16 },
            ],
            [
                11,
                11,
                { sao: "Văn Xương", mau: "#9D9C98", TH: 15 },
                { sao: "Văn Khúc", mau: "#000000", TH: 16 },
            ],
            [
                10,
                0,
                { sao: "Văn Xương", mau: "#9D9C98", TH: 15 },
                { sao: "Văn Khúc", mau: "#000000", TH: 16 },
            ],
            [
                9,
                1,
                { sao: "Văn Xương", mau: "#9D9C98", TH: 15 },
                { sao: "Văn Khúc", mau: "#000000", TH: 16 },
            ],
        ];
        // tìm vị trí và an sao Văn Xương, Văn Khúc
        let viTriXuongKhuc = bangAnSaoXuongKhuc[inputData.gioSinhInput - 1];
        let viTriVanXuong = viTriXuongKhuc[0];
        let viTriVanKhuc = viTriXuongKhuc[1];
        thienBan[viTriVanXuong].chinhTinh.push(viTriXuongKhuc[2]);
        thienBan[viTriVanKhuc].chinhTinh.push(viTriXuongKhuc[3]);

        //2.5.3 An Tả Phụ +, hữu Bật
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
        thienBan[viTriTaPhu].chinhTinh.push({
            sao: "Tả Phụ +",
            mau: "#E6D753",
            TH: 17,
        });
        thienBan[viTriHuuBat].chinhTinh.push({
            sao: "Hữu Bật -",
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
                { sao: "A", mau: "#DD3E39" },
                { sao: "B", mau: "#DD3E39" },
                { sao: "C", mau: "#DD3E39" },
                { sao: "D", mau: "#DD3E39" },
            ],

            [
                6,
                12,
                1,
                8,
                { sao: "A", mau: "#DD3E39" },
                { sao: "B", mau: "#DD3E39" },
                { sao: "C", mau: "#DD3E39" },
                { sao: "D", mau: "#DD3E39" },
            ],

            [
                3,
                6,
                15,
                2,
                { sao: "A", mau: "#DD3E39" },
                { sao: "B", mau: "#DD3E39" },
                { sao: "C", mau: "#DD3E39" },
                { sao: "D", mau: "#DD3E39" },
            ],

            [
                8,
                3,
                6,
                10,
                { sao: "A", mau: "#DD3E39" },
                { sao: "B", mau: "#DD3E39" },
                { sao: "C", mau: "#DD3E39" },
                { sao: "D", mau: "#DD3E39" },
            ],

            [
                9,
                8,
                18,
                6,
                { sao: "A", mau: "#DD3E39" },
                { sao: "B", mau: "#DD3E39" },
                { sao: "C", mau: "#DD3E39" },
                { sao: "D", mau: "#DD3E39" },
            ],

            [
                4,
                9,
                12,
                16,
                { sao: "A", mau: "#DD3E39" },
                { sao: "B", mau: "#DD3E39" },
                { sao: "C", mau: "#DD3E39" },
                { sao: "D", mau: "#DD3E39" },
            ],

            [
                5,
                4,
                8,
                3,
                { sao: "A", mau: "#DD3E39" },
                { sao: "B", mau: "#DD3E39" },
                { sao: "C", mau: "#DD3E39" },
                { sao: "D", mau: "#DD3E39" },
            ],

            [
                10,
                5,
                16,
                15,
                { sao: "A", mau: "#DD3E39" },
                { sao: "B", mau: "#DD3E39" },
                { sao: "C", mau: "#DD3E39" },
                { sao: "D", mau: "#DD3E39" },
            ],

            [
                12,
                1,
                17,
                4,
                { sao: "A", mau: "#DD3E39" },
                { sao: "B", mau: "#DD3E39" },
                { sao: "C", mau: "#DD3E39" },
                { sao: "D", mau: "#DD3E39" },
            ],

            [
                14,
                10,
                8,
                9,
                { sao: "A", mau: "#DD3E39" },
                { sao: "B", mau: "#DD3E39" },
                { sao: "C", mau: "#DD3E39" },
                { sao: "D", mau: "#DD3E39" },
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
            thienBan[timViTriTuHoa(viTriTuHoa[0])].phuTinhTrai.push(viTriTuHoa[4]);
            thienBan[timViTriTuHoa(viTriTuHoa[1])].phuTinhTrai.push(viTriTuHoa[5]);
            thienBan[timViTriTuHoa(viTriTuHoa[2])].phuTinhTrai.push(viTriTuHoa[6]);
            thienBan[timViTriTuHoa(viTriTuHoa[3])].phuTinhTrai.push(viTriTuHoa[7]);
        };
        anTuHoa(canNam);



        // 2.5.10 - An Vòng thái tuế
        const bangAnVongThaiTue = [
            { sao: "1,13,25,37,49,61,73,85", mau: "#000000" },
            { sao: "2,14,26,38,50,62,74,86", mau: "#000000" },
            { sao: "3,15,27,39,51,63,75,87", mau: "#000000" },
            { sao: "4,16,28,40,52,64,76,88", mau: "#000000" },
            { sao: "5,17,29,41,53,65,77,89", mau: "#000000" },
            { sao: "6,18,30,42,54,66,78,90", mau: "#000000" },
            { sao: "7,19,31,43,55,67,79,91", mau: "#000000" },
            { sao: "8,20,32,44,56,68,80,92", mau: "#000000" },
            { sao: "9,21,33,45,57,69,81,93", mau: "#000000" },
            { sao: "10,22,34,46,58,70,82,94", mau: "#000000" },
            { sao: "11,23,35,47,59,71,83,95", mau: "#000000" },
            { sao: "12,24,36,48,60,72,84,96", mau: "#000000" },
        ]
        const khoiVongThaiTue = CHIANSAO.indexOf(canChi[7]);
        for (i = 0; i < 12; i++) {
            let index = khoiVongThaiTue + i;

            if (index > 11) {
                index -= 12;
            }
            thienBan[index].phuTinhPhai.push(bangAnVongThaiTue[i]);
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

        // 2.5.22.1 An can cung ve tren la so
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
                    "Ấ.Sửu"]
            }

            for (i = 0; i <= 11; i++) {
                thienBan[i].canCung = { sao: canCung[i], mau: "#000000" };
            }
        }
        anCanCung(canChi[6])


        // an can cung tu hoa

        const anCanCungTH = function (canNam) {
            let canCung = []
            if (canNam == "Giáp" || canNam == "Kỷ") {
                canCung = [
                    "Bính",
                    "Đinh",
                    "Mậu",
                    "Kỷ",
                    "Canh",
                    "Tân",
                    "Nhâm",
                    "Quý",
                    "Giáp",
                    "Ất",
                    "Bính",
                    "Đinh"]
            }
            else if (canNam == "Ất" || canNam == "Canh") {
                canCung = [
                    "Mậu",
                    "Kỷ",
                    "Canh",
                    "Tân",
                    "Nhâm",
                    "Quý",
                    "Giáp",
                    "Ất",
                    "Bính",
                    "Đinh",
                    "Mậu",
                    "Kỷ"]
            }
            else if (canNam == "Bính" || canNam == "Tân") {
                canCung = [
                    "Canh",
                    "Tân",
                    "Nhâm",
                    "Quý",
                    "Giáp",
                    "Ất",
                    "Bính",
                    "Đinh",
                    "Mậu",
                    "Kỷ",
                    "Canh",
                    "Tân"]
            }
            else if (canNam == "Đinh" || canNam == "Nhâm") {
                canCung = [
                    "Nhâm",
                    "Quý",
                    "Giáp",
                    "Ất",
                    "Bính",
                    "Đinh",
                    "Mậu",
                    "Kỷ",
                    "Canh",
                    "Tân",
                    "Nhâm",
                    "Quý"]
            }
            else if (canNam == "Mậu" || canNam == "Quý") {
                canCung = [
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
                    "Giáp",
                    "Ất"]
            }

            for (i = 0; i <= 11; i++) {
                thienBan[i].canCungTH = { sao: canCung[i], mau: "#000000" };
            }
        }
        anCanCungTH(canChi[6])


        // xác định tự hóa ly tâm và hướng tâm 
        //TH 1 - tu vi       TH 2 - liemtrinh    TH 3 - thien dong      TH 4 - vu khuc
        //Th 5 - thai duong  Th 6 - thien co     TH 7 - thien phu      TH 8 - thai am
        //Th 9 - tham lang   Th 10 - cu mon      Th 11 - thien tuong   Th 12 - thien luong
        //Th 13 - that sat   Th 14 - Pha quan    TH15 - Văn Xương      TH16  - Văn khúc 
        // th 17 - Tả Phụ    th18 - hữu bật

        const anTuHoaLT = function (a, b, c, d, i, j) {
            if (thienBan[j].chinhTinh[i].TH == a) {
                thienBan[j].tuHoaLyTam.push("A")
            } else if (thienBan[j].chinhTinh[i].TH == b) {
                thienBan[j].tuHoaLyTam.push("B")
            } else if (thienBan[j].chinhTinh[i].TH == c) {
                thienBan[j].tuHoaLyTam.push("C")
            } else if (thienBan[j].chinhTinh[i].TH == d) {
                thienBan[j].tuHoaLyTam.push("D")
            }
        }

        const antultp1 = function (j) {
            if (thienBan[j].canCungTH.sao == "Giáp") {
                for (i = 0; i < thienBan[j].chinhTinh.length; i++) {
                    anTuHoaLT(2, 14, 4, 5, i, j)
                }
            } else if (thienBan[j].canCungTH.sao == "Ất") {
                for (i = 0; i < thienBan[j].chinhTinh.length; i++) {
                    anTuHoaLT(6, 12, 1, 8, i, j)
                }
            } else if (thienBan[j].canCungTH.sao == "Bính") {
                for (i = 0; i < thienBan[j].chinhTinh.length; i++) {
                    anTuHoaLT(3, 6, 15, 2, i, j)
                }
            } else if (thienBan[j].canCungTH.sao == "Đinh") {
                for (i = 0; i < thienBan[j].chinhTinh.length; i++) {
                    anTuHoaLT(8, 3, 6, 10, i, j)
                }
            } else if (thienBan[j].canCungTH.sao == "Mậu") {
                for (i = 0; i < thienBan[j].chinhTinh.length; i++) {
                    anTuHoaLT(9, 8, 18, 6, i, j)
                }
            } else if (thienBan[j].canCungTH.sao == "Kỷ") {
                for (i = 0; i < thienBan[j].chinhTinh.length; i++) {
                    anTuHoaLT(4, 9, 12, 16, i, j)
                }
            } else if (thienBan[j].canCungTH.sao == "Canh") {
                for (i = 0; i < thienBan[j].chinhTinh.length; i++) {
                    anTuHoaLT(5, 4, 8, 3, i, j)
                }
            } else if (thienBan[j].canCungTH.sao == "Tân") {
                for (i = 0; i < thienBan[j].chinhTinh.length; i++) {
                    anTuHoaLT(10, 5, 15, 16, i, j)
                }
            } else if (thienBan[j].canCungTH.sao == "Nhâm") {
                for (i = 0; i < thienBan[j].chinhTinh.length; i++) {
                    anTuHoaLT(12, 1, 17, 4, i, j)
                }
            } else if (thienBan[j].canCungTH.sao == "Quý") {
                for (i = 0; i < thienBan[j].chinhTinh.length; i++) {
                    anTuHoaLT(14, 10, 8, 9, i, j)
                }
            }
        }




        const anthl = function (so) {
            for (k = 0; k < so; k++) {
                antultp1(k)
            }
        }
        anthl(12);
        // done an tứ hóa ly tâm


        // an tứ hóa hướng tâm
        const anTuHoaHT = function (a, b, c, d, i, j, e) {
            if (thienBan[e].chinhTinh[i].TH == a) {
                thienBan[j].tuHoaHuongTam.push("A")
            } else if (thienBan[e].chinhTinh[i].TH == b) {
                thienBan[j].tuHoaHuongTam.push("B")
            } else if (thienBan[e].chinhTinh[i].TH == c) {
                thienBan[j].tuHoaHuongTam.push("C")
            } else if (thienBan[e].chinhTinh[i].TH == d) {
                thienBan[j].tuHoaHuongTam.push("D")
            }
        }

        const antuht = function (j) {
            let e = (j + 6) % 12

            if (thienBan[j].canCungTH.sao == "Giáp") {
                for (i = 0; i < thienBan[e].chinhTinh.length; i++) {
                    anTuHoaHT(2, 14, 4, 5, i, j, e)
                }
            } else if (thienBan[j].canCungTH.sao == "Ất") {
                for (i = 0; i < thienBan[e].chinhTinh.length; i++) {
                    anTuHoaHT(6, 12, 1, 8, i, j, e)
                }
            } else if (thienBan[j].canCungTH.sao == "Bính") {
                for (i = 0; i < thienBan[e].chinhTinh.length; i++) {
                    anTuHoaHT(3, 6, 15, 2, i, j, e)
                }
            } else if (thienBan[j].canCungTH.sao == "Đinh") {
                for (i = 0; i < thienBan[e].chinhTinh.length; i++) {
                    anTuHoaHT(8, 3, 6, 10, i, j, e)
                }
            } else if (thienBan[j].canCungTH.sao == "Mậu") {
                for (i = 0; i < thienBan[e].chinhTinh.length; i++) {
                    anTuHoaHT(9, 8, 18, 6, i, j, e)
                }
            } else if (thienBan[j].canCungTH.sao == "Kỷ") {
                for (i = 0; i < thienBan[e].chinhTinh.length; i++) {
                    anTuHoaHT(4, 9, 12, 16, i, j, e)
                }
            } else if (thienBan[j].canCungTH.sao == "Canh") {
                for (i = 0; i < thienBan[e].chinhTinh.length; i++) {
                    anTuHoaHT(5, 4, 8, 3, i, j, e)
                }
            } else if (thienBan[j].canCungTH.sao == "Tân") {
                for (i = 0; i < thienBan[e].chinhTinh.length; i++) {
                    anTuHoaHT(10, 5, 15, 16, i, j, e)
                }
            } else if (thienBan[j].canCungTH.sao == "Nhâm") {
                for (i = 0; i < thienBan[e].chinhTinh.length; i++) {
                    anTuHoaHT(12, 1, 17, 4, i, j, e)
                }
            } else if (thienBan[j].canCungTH.sao == "Quý") {
                for (i = 0; i < thienBan[e].chinhTinh.length; i++) {
                    anTuHoaHT(14, 10, 8, 9, i, j, e)
                }
            }
        }

        const anthht = function (so) {
            for (k = 0; k < so; k++) {
                antuht(k)
            }
        }
        anthht(12);
        // done an tứ hóa hướng tâm

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

        const canChiNamXemHandb = ("- " + canChiNamXemHan[0] + " " + canChiNamXemHan[1])

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
        };
        return { inputData, diaBan, thienBan };
    }
    const datapost = laplaso(ok.hoTen, ok.ngaySinh, ok.thangSinh, ok.namSinh, ok.gioiTinh, ok.gioSinh, ok.loaiLich, ok.namXemHan)

    const { createCanvas, registerFont, Canvas, Image } = require('canvas')
    const canvas = createCanvas(800, 900, "png")
    const ctx = canvas.getContext('2d')
    registerFont(path.join(__dirname, 'image', 'RobotoCondensed-Black.ttf'), { family: 'font' })

    const btgs = (datapost.diaBan.canGioSinh + " " + datapost.diaBan.gioSinhAL)
    const btns = (datapost.diaBan.canNgay + " " + datapost.diaBan.chiNgay)
    const btts = (datapost.diaBan.canThang + " " + datapost.diaBan.chiThang)
    const btnas = (datapost.diaBan.canNam + " " + datapost.diaBan.chiNam)

    // vẽ khung 
    ctx.fillStyle = "#F7F7F7";
    ctx.fillRect(0, 0, 800, 900);
    ctx.fillStyle = 'black';
    ctx.fillRect(49, 250, 1, 600);
    ctx.fillRect(224, 250, 1, 600);
    ctx.fillRect(399, 250, 1, 150);
    ctx.fillRect(399, 700, 1, 150);
    ctx.fillRect(574, 250, 1, 600);
    ctx.fillRect(749, 250, 1, 600);
    ctx.fillRect(49, 250, 700, 1);
    ctx.fillRect(49, 400, 700, 1);
    ctx.fillRect(49, 550, 175, 1);
    ctx.fillRect(574, 550, 175, 1);
    ctx.fillRect(49, 700, 700, 1);
    ctx.fillRect(49, 850, 700, 1);

    ctx.fillRect(49, 20, 1, 180);
    ctx.fillRect(749, 20, 1, 180);
    ctx.fillRect(49, 200, 700, 1);
    ctx.fillRect(49, 20, 700, 1);


    // vẽ địa bàn
    let x0 = 150;
    let y0 = 60;

    function circle(y, radius, color) {
        ctx.beginPath();
        ctx.fillStyle = color;
        ctx.arc(x0, y + y0, radius, 0, Math.PI * 2);
        ctx.fill();
    }
    let radius = 25;
    circle(0, radius, 'white')
    ctx.fillStyle = 'black';
    ctx.beginPath();
    ctx.arc(x0, y0, radius, -Math.PI * .5, Math.PI * .5);
    ctx.fill();
    circle(radius / 2, radius / 2, 'white');
    circle(-radius / 2, radius / 2, 'black');
    circle(radius / 2, radius / 8, 'black');
    circle(-radius / 2, radius / 8, 'white');
    ctx.fillStyle = 'black';
    ctx.font = '25px "font" ';
    ctx.fillText("Minh Phúc", 60 + (200 - (ctx.measureText("Minh Phúc").width)) / 2, 120);
    ctx.fillText("Đường", 60 + (200 - (ctx.measureText("Đường").width)) / 2, 150);

    ctx.fillStyle = 'black';
    ctx.font = '15px "font" ';
    ctx.fillText("minhphucduong.vn", 50 + (200 - (ctx.measureText("minhphucduong.vn").width)) / 2, 190);

    ctx.fillStyle = 'black';
    ctx.font = '12px "font" ';
    ctx.fillText("DL:", 275, 150);
    ctx.fillText("AL:", 275, 170);
    ctx.fillText("BT:", 275, 190);

    ctx.fillText(datapost.diaBan.gioSinhDL, 275 + (200 - (ctx.measureText(datapost.diaBan.gioSinhDL).width)) / 2, 150);
    ctx.fillText(datapost.diaBan.gioSinhAL, 275 + (200 - (ctx.measureText(datapost.diaBan.gioSinhAL).width)) / 2, 170);
    ctx.fillText(btgs, 275 + (200 - (ctx.measureText(btgs).width)) / 2, 190);

    ctx.fillText(datapost.diaBan.ngaySinhDL, 375 + (200 - (ctx.measureText(datapost.diaBan.ngaySinhDL).width)) / 2, 150);
    ctx.fillText(datapost.diaBan.ngaySinhAL, 375 + (200 - (ctx.measureText(datapost.diaBan.ngaySinhAL).width)) / 2, 170);
    ctx.fillText(btns, 375 + (200 - (ctx.measureText(btns).width)) / 2, 190);

    ctx.fillText(datapost.diaBan.thangSinhDL, 475 + (200 - (ctx.measureText(datapost.diaBan.thangSinhDL).width)) / 2, 150);
    ctx.fillText(datapost.diaBan.thangSinhAL, 475 + (200 - (ctx.measureText(datapost.diaBan.thangSinhAL).width)) / 2, 170);
    ctx.fillText(btts, 475 + (200 - (ctx.measureText(btts).width)) / 2, 190);

    ctx.fillText(datapost.diaBan.namSinhDL, 575 + (200 - (ctx.measureText(datapost.diaBan.namSinhDL).width)) / 2, 150);
    ctx.fillText(datapost.diaBan.namSinhAL, 575 + (200 - (ctx.measureText(datapost.diaBan.namSinhAL).width)) / 2, 170);
    ctx.fillText(btnas, 575 + (200 - (ctx.measureText(btnas).width)) / 2, 190);

    ctx.fillStyle = 'black';
    ctx.font = '14px font';
    ctx.fillText("Họ và tên:", 275, 40);
    ctx.fillText("Giờ", 270 + (200 - (ctx.measureText("Giờ").width)) / 2, 130);
    ctx.fillText("Ngày", 375 + (200 - (ctx.measureText("Ngày").width)) / 2, 130);
    ctx.fillText("Tháng", 475 + (200 - (ctx.measureText("Tháng").width)) / 2, 130);
    ctx.fillText("Năm", 575 + (200 - (ctx.measureText("Năm").width)) / 2, 130);
    ctx.fillText("Năm xem:", 500, 65);
    ctx.fillText("Âm Dương:", 275, 65);
    ctx.fillText("Ngũ hành:", 500, 90);
    ctx.fillText("Cục:", 275, 90);
    ctx.fillText(datapost.diaBan.hoVaTen, 370, 40);
    ctx.fillText(datapost.diaBan.namXemHan, 590, 65);
    ctx.fillText(datapost.diaBan.canChiNamXemHanDB, 630, 65);
    ctx.fillText(datapost.diaBan.amDuongNamNu, 370, 65);
    ctx.fillText(datapost.diaBan.menhNapAm, 590, 90);
    ctx.fillText(datapost.diaBan.cuc, 370, 90);
    // Done vẽ xong địa bàn.


    // vẽ tên cung 
    ctx.fillStyle = 'black';
    ctx.font = ' 12px "font" ';
    ctx.fillText(datapost.thienBan[0].tenCung, 50 + (175 - (ctx.measureText(datapost.thienBan[0].tenCung).width)) / 2, 720);
    ctx.fillText(datapost.thienBan[1].tenCung, 50 + (175 - (ctx.measureText(datapost.thienBan[1].tenCung).width)) / 2, 570);
    ctx.fillText(datapost.thienBan[2].tenCung, 50 + (175 - (ctx.measureText(datapost.thienBan[2].tenCung).width)) / 2, 420);
    ctx.fillText(datapost.thienBan[3].tenCung, 50 + (175 - (ctx.measureText(datapost.thienBan[3].tenCung).width)) / 2, 270);
    ctx.fillText(datapost.thienBan[4].tenCung, 225 + (175 - (ctx.measureText(datapost.thienBan[4].tenCung).width)) / 2, 270);
    ctx.fillText(datapost.thienBan[5].tenCung, 400 + (175 - (ctx.measureText(datapost.thienBan[5].tenCung).width)) / 2, 270);
    ctx.fillText(datapost.thienBan[6].tenCung, 575 + (175 - (ctx.measureText(datapost.thienBan[6].tenCung).width)) / 2, 270);
    ctx.fillText(datapost.thienBan[7].tenCung, 575 + (175 - (ctx.measureText(datapost.thienBan[7].tenCung).width)) / 2, 420);
    ctx.fillText(datapost.thienBan[8].tenCung, 575 + (175 - (ctx.measureText(datapost.thienBan[8].tenCung).width)) / 2, 570);
    ctx.fillText(datapost.thienBan[9].tenCung, 575 + (175 - (ctx.measureText(datapost.thienBan[9].tenCung).width)) / 2, 720);
    ctx.fillText(datapost.thienBan[10].tenCung, 400 + (175 - (ctx.measureText(datapost.thienBan[10].tenCung).width)) / 2, 720);
    ctx.fillText(datapost.thienBan[11].tenCung, 225 + (175 - (ctx.measureText(datapost.thienBan[11].tenCung).width)) / 2, 720);
    // Done vẽ tên cung 


    // vẽ chính tinh
    const veChinhTinh = function (cung, w, h) {
        if (cung.chinhTinh.length > 0) {
            for (i = 0; i < cung.chinhTinh.length; i++) {
                if (cung.chinhTinh[i].mau == "#9D9C98") {
                    ctx.fillStyle = "#9D9C98"
                    ctx.font = '14px "font"';
                    ctx.fillText(cung.chinhTinh[i].sao, w + (175 - (ctx.measureText(cung.chinhTinh[i].sao).width)) / 2, h)
                } else if (cung.chinhTinh[i].mau == "#DD3E39") {
                    ctx.fillStyle = "#DD3E39"
                    ctx.font = '14px "font"';
                    ctx.fillText(cung.chinhTinh[i].sao, w + (175 - (ctx.measureText(cung.chinhTinh[i].sao).width)) / 2, h)
                }
                else if (cung.chinhTinh[i].mau == "#E6D753") {
                    ctx.fillStyle = "#E1B500"
                    ctx.font = '14px "font"';
                    ctx.fillText(cung.chinhTinh[i].sao, w + (175 - (ctx.measureText(cung.chinhTinh[i].sao).width)) / 2, h)
                }
                else if (cung.chinhTinh[i].mau == "#3C9636") {
                    ctx.fillStyle = "#3C9636"
                    ctx.font = '14px "font"';
                    ctx.fillText(cung.chinhTinh[i].sao, w + (175 - (ctx.measureText(cung.chinhTinh[i].sao).width)) / 2, h)
                }
                else if (cung.chinhTinh[i].mau == "#000000") {
                    ctx.fillStyle = 'black'
                    ctx.font = '14px "font"';
                    ctx.fillText(cung.chinhTinh[i].sao, w + (175 - (ctx.measureText(cung.chinhTinh[i].sao).width)) / 2, h)
                }
                h += 20;
            }
        }

    }


    veChinhTinh(datapost.thienBan[0], 50, 740)
    veChinhTinh(datapost.thienBan[1], 50, 590)
    veChinhTinh(datapost.thienBan[2], 50, 440)
    veChinhTinh(datapost.thienBan[3], 50, 290)
    veChinhTinh(datapost.thienBan[4], 225, 290)
    veChinhTinh(datapost.thienBan[5], 400, 290)
    veChinhTinh(datapost.thienBan[6], 575, 290)
    veChinhTinh(datapost.thienBan[7], 575, 440)
    veChinhTinh(datapost.thienBan[8], 575, 590)
    veChinhTinh(datapost.thienBan[9], 575, 740)
    veChinhTinh(datapost.thienBan[10], 400, 740)
    veChinhTinh(datapost.thienBan[11], 225, 740)
    // DOne vẽ chính tinh

    // Vẽ Phụ tinh trai
    const veChinhTinhTrai = function (cung, w, h) {

        if (cung.phuTinhTrai.length > 0) {

            for (i = 0; i < cung.phuTinhTrai.length; i++) {

                ctx.fillStyle = "#DD3E39"
                ctx.font = '15px "font"';
                ctx.fillText(cung.phuTinhTrai[i].sao, w + 1, h + 3)
                ctx.beginPath();
                ctx.arc(w + 6, h - 2, 12, 0, 2 * Math.PI, false);
                ctx.lineWidth = 2;
                ctx.strokeStyle = '#DD3E39'; // Màu của viền
                ctx.stroke();
                h += 27;
            }
        }

    }

    veChinhTinhTrai(datapost.thienBan[0], 60, 740)
    veChinhTinhTrai(datapost.thienBan[1], 60, 590)
    veChinhTinhTrai(datapost.thienBan[2], 60, 440)
    veChinhTinhTrai(datapost.thienBan[3], 60, 290)
    veChinhTinhTrai(datapost.thienBan[4], 235, 290)
    veChinhTinhTrai(datapost.thienBan[5], 410, 290)
    veChinhTinhTrai(datapost.thienBan[6], 585, 290)
    veChinhTinhTrai(datapost.thienBan[7], 585, 440)
    veChinhTinhTrai(datapost.thienBan[8], 585, 590)
    veChinhTinhTrai(datapost.thienBan[9], 585, 740)
    veChinhTinhTrai(datapost.thienBan[10], 410, 740)
    veChinhTinhTrai(datapost.thienBan[11], 235, 740)
    //Done ve phu trinh trai



    // vẽ can cung 
    ctx.fillStyle = 'black';
    ctx.font = '11px "font"';
    ctx.fillText(datapost.thienBan[0].canCung.sao, 55, 720);
    ctx.fillText(datapost.thienBan[1].canCung.sao, 55, 570);
    ctx.fillText(datapost.thienBan[2].canCung.sao, 55, 420);
    ctx.fillText(datapost.thienBan[3].canCung.sao, 55, 270);
    ctx.fillText(datapost.thienBan[4].canCung.sao, 230, 270);
    ctx.fillText(datapost.thienBan[5].canCung.sao, 405, 270);
    ctx.fillText(datapost.thienBan[6].canCung.sao, 580, 270);
    ctx.fillText(datapost.thienBan[7].canCung.sao, 580, 420);
    ctx.fillText(datapost.thienBan[8].canCung.sao, 580, 570);
    ctx.fillText(datapost.thienBan[9].canCung.sao, 580, 720);
    ctx.fillText(datapost.thienBan[10].canCung.sao, 405, 720);
    ctx.fillText(datapost.thienBan[11].canCung.sao, 230, 720);
    //Done vẽ can cung



    //vẽ đại vận 
    ctx.fillText(datapost.thienBan[0].daiVan.sao, 220 - (ctx.measureText(datapost.thienBan[0].daiVan.sao).width), 720);
    ctx.fillText(datapost.thienBan[1].daiVan.sao, 220 - (ctx.measureText(datapost.thienBan[1].daiVan.sao).width), 570);
    ctx.fillText(datapost.thienBan[2].daiVan.sao, 220 - (ctx.measureText(datapost.thienBan[2].daiVan.sao).width), 420);
    ctx.fillText(datapost.thienBan[3].daiVan.sao, 220 - (ctx.measureText(datapost.thienBan[3].daiVan.sao).width), 270);
    ctx.fillText(datapost.thienBan[4].daiVan.sao, 395 - (ctx.measureText(datapost.thienBan[4].daiVan.sao).width), 270);
    ctx.fillText(datapost.thienBan[5].daiVan.sao, 570 - (ctx.measureText(datapost.thienBan[5].daiVan.sao).width), 270);
    ctx.fillText(datapost.thienBan[6].daiVan.sao, 745 - (ctx.measureText(datapost.thienBan[6].daiVan.sao).width), 270);
    ctx.fillText(datapost.thienBan[7].daiVan.sao, 745 - (ctx.measureText(datapost.thienBan[7].daiVan.sao).width), 420);
    ctx.fillText(datapost.thienBan[8].daiVan.sao, 745 - (ctx.measureText(datapost.thienBan[8].daiVan.sao).width), 570);
    ctx.fillText(datapost.thienBan[9].daiVan.sao, 745 - (ctx.measureText(datapost.thienBan[9].daiVan.sao).width), 720);
    ctx.fillText(datapost.thienBan[10].daiVan.sao, 570 - (ctx.measureText(datapost.thienBan[10].daiVan.sao).width), 720);
    ctx.fillText(datapost.thienBan[11].daiVan.sao, 395 - (ctx.measureText(datapost.thienBan[11].daiVan.sao).width), 720);
    // Done 

    // ve nam xem han
    ctx.fillStyle = 'black';
    ctx.font = '11px "font"';
    ctx.fillText(datapost.thienBan[0].phuTinhPhai[0].sao, 55, 845);
    ctx.fillText(datapost.thienBan[1].phuTinhPhai[0].sao, 55, 695);
    ctx.fillText(datapost.thienBan[2].phuTinhPhai[0].sao, 55, 545);
    ctx.fillText(datapost.thienBan[3].phuTinhPhai[0].sao, 55, 395);
    ctx.fillText(datapost.thienBan[4].phuTinhPhai[0].sao, 230, 395);
    ctx.fillText(datapost.thienBan[5].phuTinhPhai[0].sao, 405, 395);
    ctx.fillText(datapost.thienBan[6].phuTinhPhai[0].sao, 580, 395);
    ctx.fillText(datapost.thienBan[7].phuTinhPhai[0].sao, 580, 545);
    ctx.fillText(datapost.thienBan[8].phuTinhPhai[0].sao, 580, 695);
    ctx.fillText(datapost.thienBan[9].phuTinhPhai[0].sao, 580, 845);
    ctx.fillText(datapost.thienBan[10].phuTinhPhai[0].sao, 405, 845);
    ctx.fillText(datapost.thienBan[11].phuTinhPhai[0].sao, 230, 845);
    // done ve nam xem han


    // vẽ tự hóa ly tâm
    const vetuhoalytam1 = function (cung, w, h) {

        if (cung.tuHoaLyTam.length > 0) {
            ctx.fillStyle = "#DD3E39"
            // Bắt đầu vẽ mũi tên
            ctx.beginPath();
            ctx.moveTo(w - 4, h + 25); // Điểm bắt đầu
            ctx.lineTo(w - 4, h + 35);
            ctx.lineTo(w - 12, h + 30);
            // Điểm kết thúc
            ctx.closePath();

            // Vẽ mũi tên
            ctx.fill();
            ctx.stroke();
            ctx.fillRect(w - 4, h + 29, 50, 2);
            for (i = 0; i < cung.tuHoaLyTam.length; i++) {
                ctx.fillStyle = "#DD3E39"
                ctx.font = '15px "font"';
                ctx.fillText(cung.tuHoaLyTam[i], w + 16, h + 15)
                ctx.beginPath();

                w -= 12;
            }
        }
    }

    const vetuhoalytam2 = function (cung, w, h) {

        if (cung.tuHoaLyTam.length > 0) {
            ctx.fillStyle = "#DD3E39"
            ctx.fillRect(w + 94, h - 118, 2, 45);
            // Bắt đầu vẽ mũi tên
            ctx.beginPath();
            ctx.moveTo(w + 90, h - 110); // Điểm bắt đầu
            ctx.lineTo(w + 95, h - 120);
            ctx.lineTo(w + 100, h - 110);
            // Điểm kết thúc
            ctx.closePath();

            // Vẽ mũi tên
            ctx.fill();
            ctx.stroke();
            for (i = 0; i < cung.tuHoaLyTam.length; i++) {
                ctx.fillStyle = "#DD3E39"
                ctx.font = '15px "font"';
                ctx.fillText(cung.tuHoaLyTam[i], w + 105, h - 90)
                ctx.beginPath();

                w += 12;
            }
        }
    }

    const vetuhoalytam3 = function (cung, w, h) {

        if (cung.tuHoaLyTam.length > 0) {
            ctx.fillStyle = "#DD3E39"
            ctx.fillRect(w + 190, h + 29, 50, 2);
            // Bắt đầu vẽ mũi tên
            ctx.beginPath();
            ctx.moveTo(w + 238, h + 25); // Điểm bắt đầu
            ctx.lineTo(w + 238, h + 35);
            ctx.lineTo(w + 248, h + 30);
            // Điểm kết thúc
            ctx.closePath();

            // Vẽ mũi tên
            ctx.fill();
            ctx.stroke();
            for (i = 0; i < cung.tuHoaLyTam.length; i++) {
                ctx.fillStyle = "#DD3E39"
                ctx.font = '15px "font"';
                ctx.fillText(cung.tuHoaLyTam[i], w + 208, h + 15)
                ctx.beginPath();

                w += 12;
            }
        }
    }

    const vetuhoalytam4 = function (cung, w, h) {

        if (cung.tuHoaLyTam.length > 0) {
            ctx.fillStyle = "#DD3E39"
            ctx.fillRect(w + 169, h + 60, 2, 50);
            // Bắt đầu vẽ mũi tên
            ctx.beginPath();
            ctx.moveTo(w + 165, h + 100); // Điểm bắt đầu
            ctx.lineTo(w + 175, h + 100);
            ctx.lineTo(w + 170, h + 110);
            // Điểm kết thúc
            ctx.closePath();

            // Vẽ mũi tên
            ctx.fill();
            ctx.stroke();
            for (i = 0; i < cung.tuHoaLyTam.length; i++) {
                ctx.fillStyle = "#DD3E39"
                ctx.font = '15px "font"';
                ctx.fillText(cung.tuHoaLyTam[i], w + 148, h + 95)
                ctx.beginPath();

                w -= 12;
            }
        }
    }
    vetuhoalytam1(datapost.thienBan[0], 20, 780)
    vetuhoalytam1(datapost.thienBan[1], 20, 630)
    vetuhoalytam1(datapost.thienBan[2], 20, 480)
    vetuhoalytam1(datapost.thienBan[3], 20, 330)
    vetuhoalytam2(datapost.thienBan[4], 195, 330)
    vetuhoalytam2(datapost.thienBan[5], 370, 330)
    vetuhoalytam3(datapost.thienBan[6], 545, 330)
    vetuhoalytam3(datapost.thienBan[7], 545, 480)
    vetuhoalytam3(datapost.thienBan[8], 545, 630)
    vetuhoalytam3(datapost.thienBan[9], 545, 780)
    vetuhoalytam4(datapost.thienBan[10], 375, 780)
    vetuhoalytam4(datapost.thienBan[11], 205, 780)
    // Done ve tứ hóa ly tâm

    // vẽ tự hóa hướng tâm 
    const vetuhoahuongtam1 = function (cung, w, h) {
        if (cung.tuHoaHuongTam.length > 0) {
            ctx.fillStyle = "#DD3E39"
            // Bắt đầu vẽ mũi tên
            ctx.beginPath();
            ctx.moveTo(w + 553, h - 377); // Điểm bắt đầu
            ctx.lineTo(w + 540, h - 373);
            ctx.lineTo(w + 547, h - 365);
            // Điểm kết thúc
            ctx.closePath();

            // Vẽ mũi tên
            ctx.fill();
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(w + 206, h - 80); // Di chuyển tới điểm (x1, y1)
            ctx.lineTo(w + 555, h - 380); // Vẽ đường thẳng đến điểm (x2, y2)
            ctx.stroke();
            for (i = 0; i < cung.tuHoaHuongTam.length; i++) {
                ctx.fillStyle = "#DD3E39"
                ctx.font = '15px "font"';
                ctx.fillText(cung.tuHoaHuongTam[i], w + 520, h - 363)
                ctx.beginPath();
                w -= 12;
            }
        }
    }
    const vetuhoahuongtam2 = function (cung, w, h) {
        if (cung.tuHoaHuongTam.length > 0) {
            ctx.fillStyle = "#DD3E39"
            // Bắt đầu vẽ mũi tên
            ctx.beginPath();
            ctx.moveTo(w + 553, h - 300); // Điểm bắt đầu
            ctx.lineTo(w + 542, h - 300);
            ctx.lineTo(w + 547, h - 290);
            // Điểm kết thúc
            ctx.closePath();

            // Vẽ mũi tên
            ctx.fill();
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(w + 204, h - 155); // Di chuyển tới điểm (x1, y1)
            ctx.lineTo(w + 555, h - 300); // Vẽ đường thẳng đến điểm (x2, y2)
            ctx.stroke();
            for (i = 0; i < cung.tuHoaHuongTam.length; i++) {
                ctx.fillStyle = "#DD3E39"
                ctx.font = '15px "font"';
                ctx.fillText(cung.tuHoaHuongTam[i], w + 530, h - 300)
                ctx.beginPath();
                w -= 12;
            }
        }
    }
    const vetuhoahuongtam3 = function (cung, w, h) {
        if (cung.tuHoaHuongTam.length > 0) {
            ctx.fillStyle = "#DD3E39"
            // Bắt đầu vẽ mũi tên
            ctx.beginPath();
            ctx.moveTo(w + 553, h - 155); // Điểm bắt đầu
            ctx.lineTo(w + 547, h - 165);
            ctx.lineTo(w + 542, h - 153);
            // Điểm kết thúc
            ctx.closePath();

            // Vẽ mũi tên
            ctx.fill();
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(w + 204, h - 300); // Di chuyển tới điểm (x1, y1)
            ctx.lineTo(w + 555, h - 155); // Vẽ đường thẳng đến điểm (x2, y2)
            ctx.stroke();
            for (i = 0; i < cung.tuHoaHuongTam.length; i++) {
                ctx.fillStyle = "#DD3E39"
                ctx.font = '15px "font"';
                ctx.fillText(cung.tuHoaHuongTam[i], w + 525, h -148)
                ctx.beginPath();
                w -= 12;
            }
        }
    }

    const vetuhoahuongtam4 = function (cung, w, h) {
        if (cung.tuHoaHuongTam.length > 0) {
            ctx.fillStyle = "#DD3E39"
            // Bắt đầu vẽ mũi tên
            ctx.beginPath();
            ctx.moveTo(w + 554, h - 81); // Điểm bắt đầu
            ctx.lineTo(w + 549, h - 92);
            ctx.lineTo(w + 543, h - 83);
            // Điểm kết thúc
            ctx.closePath();

            // Vẽ mũi tên
            ctx.fill();
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(w + 204, h - 380); // Di chuyển tới điểm (x1, y1)
            ctx.lineTo(w + 555, h - 80); // Vẽ đường thẳng đến điểm (x2, y2)
            ctx.stroke();
            for (i = 0; i < cung.tuHoaHuongTam.length; i++) {
                ctx.fillStyle = "#DD3E39"
                ctx.font = '15px "font"';
                ctx.fillText(cung.tuHoaHuongTam[i], w + 525, h -85)
                ctx.beginPath();
                w -= 12;
            }
        }
    }
    const vetuhoahuongtam5 = function (cung, w, h) {
        if (cung.tuHoaHuongTam.length > 0) {
            ctx.fillStyle = "#DD3E39"
            // Bắt đầu vẽ mũi tên
            ctx.beginPath();
            ctx.moveTo(w + 470, h - 81); // Điểm bắt đầu
            ctx.lineTo(w + 469, h - 90);
            ctx.lineTo(w + 462, h - 84);
            // Điểm kết thúc
            ctx.closePath();

            // Vẽ mũi tên
            ctx.fill();
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(w + 294, h - 380); // Di chuyển tới điểm (x1, y1)
            ctx.lineTo(w + 470, h - 80); // Vẽ đường thẳng đến điểm (x2, y2)
            ctx.stroke();
            for (i = 0; i < cung.tuHoaHuongTam.length; i++) {
                ctx.fillStyle = "#DD3E39"
                ctx.font = '15px "font"';
                ctx.fillText(cung.tuHoaHuongTam[i], w + 445, h -85)
                ctx.beginPath();
                w -= 12;
            }
        }
    }

    const vetuhoahuongtam6 = function (cung, w, h) {
        if (cung.tuHoaHuongTam.length > 0) {
            ctx.fillStyle = "#DD3E39"
            // Bắt đầu vẽ mũi tên
            ctx.beginPath();
            ctx.moveTo(w + 294, h - 81); // Điểm bắt đầu
            ctx.lineTo(w + 293, h - 89);
            ctx.lineTo(w + 302, h - 84);
            // Điểm kết thúc
            ctx.closePath();

            // Vẽ mũi tên
            ctx.fill();
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(w + 470, h - 380); // Di chuyển tới điểm (x1, y1)
            ctx.lineTo(w + 294, h - 80); // Vẽ đường thẳng đến điểm (x2, y2)
            ctx.stroke();
            for (i = 0; i < cung.tuHoaHuongTam.length; i++) {
                ctx.fillStyle = "#DD3E39"
                ctx.font = '15px "font"';
                ctx.fillText(cung.tuHoaHuongTam[i], w + 310, h -85)
                ctx.beginPath();
                w += 12;
            }
        }
    }

    const vetuhoahuongtam7 = function (cung, w, h) {
        if (cung.tuHoaHuongTam.length > 0) {
            ctx.fillStyle = "#DD3E39"
            // Bắt đầu vẽ mũi tên
            ctx.beginPath();
            ctx.moveTo(w + 206, h - 80); // Điểm bắt đầu
            ctx.lineTo(w + 215, h - 82);
            ctx.lineTo(w + 210, h - 88);
            // Điểm kết thúc
            ctx.closePath();

            // Vẽ mũi tên
            ctx.fill();
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(w + 206, h - 80); // Di chuyển tới điểm (x1, y1)
            ctx.lineTo(w + 555, h - 380); // Vẽ đường thẳng đến điểm (x2, y2)
            ctx.stroke();
            for (i = 0; i < cung.tuHoaHuongTam.length; i++) {
                ctx.fillStyle = "#DD3E39"
                ctx.font = '15px "font"';
                ctx.fillText(cung.tuHoaHuongTam[i], w + 230, h -85)
                ctx.beginPath();
                w += 12;
            }
        }
    }

    const vetuhoahuongtam8 = function (cung, w, h) {
        if (cung.tuHoaHuongTam.length > 0) {
            ctx.fillStyle = "#DD3E39"
            // Bắt đầu vẽ mũi tên
            ctx.beginPath();
            ctx.moveTo(w + 206, h - 155); // Điểm bắt đầu
            ctx.lineTo(w + 215, h - 155);
            ctx.lineTo(w + 212, h - 163);
            // Điểm kết thúc
            ctx.closePath();

            // Vẽ mũi tên
            ctx.fill();
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(w + 204, h - 155); // Di chuyển tới điểm (x1, y1)
            ctx.lineTo(w + 555, h - 300); // Vẽ đường thẳng đến điểm (x2, y2)
            ctx.stroke();
            for (i = 0; i < cung.tuHoaHuongTam.length; i++) {
                ctx.fillStyle = "#DD3E39"
                ctx.font = '15px "font"';
                ctx.fillText(cung.tuHoaHuongTam[i], w + 210, h -140)
                ctx.beginPath();
                w += 12;
            }
        }
    }

    const vetuhoahuongtam9 = function (cung, w, h) {
        if (cung.tuHoaHuongTam.length > 0) {
            ctx.fillStyle = "#DD3E39"
            // Bắt đầu vẽ mũi tên
            ctx.beginPath();
            ctx.moveTo(w + 206, h - 300); // Điểm bắt đầu
            ctx.lineTo(w + 209, h - 292);
            ctx.lineTo(w + 213, h - 302);
            // Điểm kết thúc
            ctx.closePath();

            // Vẽ mũi tên
            ctx.fill();
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(w + 204, h - 300); // Di chuyển tới điểm (x1, y1)
            ctx.lineTo(w + 555, h - 155); // Vẽ đường thẳng đến điểm (x2, y2)
            ctx.stroke();
            for (i = 0; i < cung.tuHoaHuongTam.length; i++) {
                ctx.fillStyle = "#DD3E39"
                ctx.font = '15px "font"';
                ctx.fillText(cung.tuHoaHuongTam[i], w + 220, h -300)
                ctx.beginPath();
                w += 12;
            }
        }
    }

    const vetuhoahuongtam10 = function (cung, w, h) {
        if (cung.tuHoaHuongTam.length > 0) {
            ctx.fillStyle = "#DD3E39"
            // Bắt đầu vẽ mũi tên
            ctx.beginPath();
            ctx.moveTo(w + 205, h - 379); // Điểm bắt đầu
            ctx.lineTo(w + 208, h - 372);
            ctx.lineTo(w + 213, h - 378);
            // Điểm kết thúc
            ctx.closePath();

            // Vẽ mũi tên
            ctx.fill();
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(w + 204, h - 380); // Di chuyển tới điểm (x1, y1)
            ctx.lineTo(w + 555, h - 80); // Vẽ đường thẳng đến điểm (x2, y2)
            ctx.stroke();
            for (i = 0; i < cung.tuHoaHuongTam.length; i++) {
                ctx.fillStyle = "#DD3E39"
                ctx.font = '15px "font"';
                ctx.fillText(cung.tuHoaHuongTam[i], w + 225, h -365)
                ctx.beginPath();
                w += 12;
            }
        }
    }

    const vetuhoahuongtam11 = function (cung, w, h) {
        if (cung.tuHoaHuongTam.length > 0) {
            ctx.fillStyle = "#DD3E39"
            // Bắt đầu vẽ mũi tên
            ctx.beginPath();
            ctx.moveTo(w + 295, h - 379); // Điểm bắt đầu
            ctx.lineTo(w + 293, h - 372);
            ctx.lineTo(w + 302, h - 377);
            // Điểm kết thúc
            ctx.closePath();

            // Vẽ mũi tên
            ctx.fill();
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(w + 294, h - 380); // Di chuyển tới điểm (x1, y1)
            ctx.lineTo(w + 470, h - 80); // Vẽ đường thẳng đến điểm (x2, y2)
            ctx.stroke();
            for (i = 0; i < cung.tuHoaHuongTam.length; i++) {
                ctx.fillStyle = "#DD3E39"
                ctx.font = '15px "font"';
                ctx.fillText(cung.tuHoaHuongTam[i], w + 310, h -365)
                ctx.beginPath();
                w += 12;
            }
        }
    }
    const vetuhoahuongtam12 = function (cung, w, h) {
        if (cung.tuHoaHuongTam.length > 0) {
            ctx.fillStyle = "#DD3E39"
            // Bắt đầu vẽ mũi tên
            ctx.beginPath();
            ctx.moveTo(w + 470, h - 379); // Điểm bắt đầu
            ctx.lineTo(w + 471, h - 372);
            ctx.lineTo(w + 463, h - 375);
            // Điểm kết thúc
            ctx.closePath();

            // Vẽ mũi tên
            ctx.fill();
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(w + 470, h - 380); // Di chuyển tới điểm (x1, y1)
            ctx.lineTo(w + 294, h - 80); // Vẽ đường thẳng đến điểm (x2, y2)
            ctx.stroke();
            for (i = 0; i < cung.tuHoaHuongTam.length; i++) {
                ctx.fillStyle = "#DD3E39"
                ctx.font = '15px "font"';
                ctx.fillText(cung.tuHoaHuongTam[i], w + 445, h -365)
                ctx.beginPath();
                w -= 12;
            }
        }
    }


    vetuhoahuongtam1(datapost.thienBan[0], 20, 780)
    vetuhoahuongtam2(datapost.thienBan[1], 20, 780)
    vetuhoahuongtam3(datapost.thienBan[2], 20, 780)
    vetuhoahuongtam4(datapost.thienBan[3], 20, 780)
    vetuhoahuongtam5(datapost.thienBan[4], 20, 780)
    vetuhoahuongtam6(datapost.thienBan[5], 20, 780)
    vetuhoahuongtam7(datapost.thienBan[6], 20, 780)
    vetuhoahuongtam8(datapost.thienBan[7], 20, 780)
    vetuhoahuongtam9(datapost.thienBan[8], 20, 780)
    vetuhoahuongtam10(datapost.thienBan[9], 20, 780)
    vetuhoahuongtam11(datapost.thienBan[10], 20, 780)
    vetuhoahuongtam12(datapost.thienBan[11], 20, 780)
    ctx.fillStyle = 'blue';
    ctx.font = '15px "font" ';
    ctx.fillText("Luận giải phí tùy tâm", 90 + (800 - (ctx.measureText("Luận giải phí tùy tâm - Zalo 0961330812").width)) / 2, 550);
    ctx.fillText("Zalo 0961428241", 100 + (800 - (ctx.measureText("Luận giải phí tùy tâm - Zalo 0961330812").width)) / 2, 570);



    // Gửi ảnh canvas đã tạo đến trang 2

    return res.render('hienthilasobacphai', { image: canvas.toDataURL() });
}

module.exports = posthinethilaso;
