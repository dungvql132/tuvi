 // Định nghĩa một đối tượng lưu trữ vị trí cung Tử vi dựa trên ngày và Cục
    function an14ChinhTinh (AL,cuc,CHI){
        const viTriCungTuVi = {
      1: {
        "Thủy Nhị Cục": "Sửu",
        "Mộc Tam Cục": "Thìn",
        "Kim Tứ Cục": "Hợi",
        "Thổ Ngũ Cục": "Ngọ",
        "Hỏa Lục Cục": "Dậu",
      },
      2: {
        "Thủy Nhị Cục": "Dần",
        "Mộc Tam Cục": "Sửu",
        "Kim Tứ Cục": "Thìn",
        "Thổ Ngũ Cục": "Hợi",
        "Hỏa Lục Cục": "Ngọ",
      },
      3: {
        "Thủy Nhị Cục": "Dần",
        "Mộc Tam Cục": "Dần",
        "Kim Tứ Cục": "Sửu",
        "Thổ Ngũ Cục": "Thìn",
        "Hỏa Lục Cục": "Hợi",
      },
      4: {
        "Thủy Nhị Cục": "Mão",
        "Mộc Tam Cục": "Tỵ",
        "Kim Tứ Cục": "Dần",
        "Thổ Ngũ Cục": "Sửu",
        "Hỏa Lục Cục": "Thìn",
      },
      5: {
        "Thủy Nhị Cục": "Mão",
        "Mộc Tam Cục": "Dần",
        "Kim Tứ Cục": "Tý",
        "Thổ Ngũ Cục": "Dần",
        "Hỏa Lục Cục": "Sửu",
      },
      6: {
        "Thủy Nhị Cục": "Thìn",
        "Mộc Tam Cục": "Mão",
        "Kim Tứ Cục": "Tỵ",
        "Thổ Ngũ Cục": "Mùi",
        "Hỏa Lục Cục": "Dần",
      },
      7: {
        "Thủy Nhị Cục": "Thìn",
        "Mộc Tam Cục": "Ngọ",
        "Kim Tứ Cục": "Dần",
        "Thổ Ngũ Cục": "Tý",
        "Hỏa Lục Cục": "Tuất",
      },
      8: {
        "Thủy Nhị Cục": "Tỵ",
        "Mộc Tam Cục": "Mão",
        "Kim Tứ Cục": "Mão",
        "Thổ Ngũ Cục": "Tỵ",
        "Hỏa Lục Cục": "Mùi",
      },
      9: {
        "Thủy Nhị Cục": "Tỵ",
        "Mộc Tam Cục": "Thìn",
        "Kim Tứ Cục": "Sửu",
        "Thổ Ngũ Cục": "Dần",
        "Hỏa Lục Cục": "Tý",
      },
      10: {
        "Thủy Nhị Cục": "Ngọ",
        "Mộc Tam Cục": "Mùi",
        "Kim Tứ Cục": "Ngọ",
        "Thổ Ngũ Cục": "Mão",
        "Hỏa Lục Cục": "Tỵ",
      },
      11: {
        "Thủy Nhị Cục": "Ngọ",
        "Mộc Tam Cục": "Thìn",
        "Kim Tứ Cục": "Mão",
        "Thổ Ngũ Cục": "Thân",
        "Hỏa Lục Cục": "Dần",
      },
      12: {
        "Thủy Nhị Cục": "Mùi",
        "Mộc Tam Cục": "Tỵ",
        "Kim Tứ Cục": "Thìn",
        "Thổ Ngũ Cục": "Sửu",
        "Hỏa Lục Cục": "Mão",
      },
      13: {
        "Thủy Nhị Cục": "Mùi",
        "Mộc Tam Cục": "Thân",
        "Kim Tứ Cục": "Dần",
        "Thổ Ngũ Cục": "Ngọ",
        "Hỏa Lục Cục": "Hợi",
      },
      14: {
        "Thủy Nhị Cục": "Thân",
        "Mộc Tam Cục": "Tỵ",
        "Kim Tứ Cục": "Mùi",
        "Thổ Ngũ Cục": "Mão",
        "Hỏa Lục Cục": "Thân",
      },
      15: {
        "Thủy Nhị Cục": "Thân",
        "Mộc Tam Cục": "Ngọ",
        "Kim Tứ Cục": "Thìn",
        "Thổ Ngũ Cục": "Thìn",
        "Hỏa Lục Cục": "Sửu",
      },
      16: {
        "Thủy Nhị Cục": "Dậu",
        "Mộc Tam Cục": "Dậu",
        "Kim Tứ Cục": "Tỵ",
        "Thổ Ngũ Cục": "Dậu",
        "Hỏa Lục Cục": "Ngọ",
      },
      17: {
        "Thủy Nhị Cục": "Dậu",
        "Mộc Tam Cục": "Ngọ",
        "Kim Tứ Cục": "Mão",
        "Thổ Ngũ Cục": "Dần",
        "Hỏa Lục Cục": "Mão",
      },
      18: {
        "Thủy Nhị Cục": "Tuất",
        "Mộc Tam Cục": "Mùi",
        "Kim Tứ Cục": "Thân",
        "Thổ Ngũ Cục": "Mùi",
        "Hỏa Lục Cục": "Thìn",
      },
      19: {
        "Thủy Nhị Cục": "Tuất",
        "Mộc Tam Cục": "Tuất",
        "Kim Tứ Cục": "Tỵ",
        "Thổ Ngũ Cục": "Thìn",
        "Hỏa Lục Cục": "Tý",
      },
      20: {
        "Thủy Nhị Cục": "Hợi",
        "Mộc Tam Cục": "Mùi",
        "Kim Tứ Cục": "Ngọ",
        "Thổ Ngũ Cục": "Tỵ",
        "Hỏa Lục Cục": "Dậu",
      },
      21: {
        "Thủy Nhị Cục": "Hợi",
        "Mộc Tam Cục": "Thân",
        "Kim Tứ Cục": "Thìn",
        "Thổ Ngũ Cục": "Tuất",
        "Hỏa Lục Cục": "Dần",
      },
      22: {
        "Thủy Nhị Cục": "Tý",
        "Mộc Tam Cục": "Hợi",
        "Kim Tứ Cục": "Dậu",
        "Thổ Ngũ Cục": "Mão",
        "Hỏa Lục Cục": "Mùi",
      },
      22: {
        "Thủy Nhị Cục": "Tý",
        "Mộc Tam Cục": "Hợi",
        "Kim Tứ Cục": "Dậu",
        "Thổ Ngũ Cục": "Mão",
        "Hỏa Lục Cục": "Mùi",
      },
      23: {
        "Thủy Nhị Cục": "Tý",
        "Mộc Tam Cục": "Thân",
        "Kim Tứ Cục": "Ngọ",
        "Thổ Ngũ Cục": "Thân",
        "Hỏa Lục Cục": "Thìn",
      },
      24: {
        "Thủy Nhị Cục": "Sửu",
        "Mộc Tam Cục": "Dậu",
        "Kim Tứ Cục": "Mùi",
        "Thổ Ngũ Cục": "Tỵ",
        "Hỏa Lục Cục": "Tỵ",
      },
      25: {
        "Thủy Nhị Cục": "Sửu",
        "Mộc Tam Cục": "Tý",
        "Kim Tứ Cục": "Tỵ",
        "Thổ Ngũ Cục": "Ngọ",
        "Hỏa Lục Cục": "Sửu",
      },
      26: {
        "Thủy Nhị Cục": "Dần",
        "Mộc Tam Cục": "Dậu",
        "Kim Tứ Cục": "Tuất",
        "Thổ Ngũ Cục": "Hợi",
        "Hỏa Lục Cục": "Tuất",
      },
      27: {
        "Thủy Nhị Cục": "Dần",
        "Mộc Tam Cục": "Tuất",
        "Kim Tứ Cục": "Mùi",
        "Thổ Ngũ Cục": "Thìn",
        "Hỏa Lục Cục": "Mão",
      },
      28: {
        "Thủy Nhị Cục": "Mão",
        "Mộc Tam Cục": "Sửu",
        "Kim Tứ Cục": "Thân",
        "Thổ Ngũ Cục": "Dậu",
        "Hỏa Lục Cục": "Thân",
      },
      29: {
        "Thủy Nhị Cục": "Mão",
        "Mộc Tam Cục": "Tuất",
        "Kim Tứ Cục": "Ngọ",
        "Thổ Ngũ Cục": "Ngọ",
        "Hỏa Lục Cục": "Tỵ",
      },
      30: {
        "Thủy Nhị Cục": "Thìn",
        "Mộc Tam Cục": "Hợi",
        "Kim Tứ Cục": "Hợi",
        "Thổ Ngũ Cục": "Mùi",
        "Hỏa Lục Cục": "Ngọ",
      },
    };

    // Hàm tính vị trí cung Tử vi dựa trên ngày sinh và Cục
    function timCungTuVi(ngaySinh, cuc) {
      const cungTuVi = viTriCungTuVi[ngaySinh];
      const ctv = cungTuVi[cuc]
      return ctv
    }
    
    const viTriSaoTuVi = timCungTuVi(AL.day, cuc);
 
    let saoTuViIndex = (CHI.indexOf(viTriSaoTuVi) - 2)

    if(saoTuViIndex < 0){
      saoTuViIndex += 12
    }
    const bangAn14ChinhTinh = [
      

      // Tử vi tại Dần 
      [ 
        [{sao: "TỬ VI(M)", mau: "#E6D753", TH: 1},{sao:"THIÊN PHỦ(M)", mau:"#E6D753", TH: 7}],
        [{sao: "THÁI ÂM(H)", mau: "#000000", TH: 8}],
        [{sao: "THAM LANG(V)",mau:"#000000", TH: 9}],
        [{sao:"CỰ MÔN(H)", mau:"#000000", TH: 10}],
        [{sao:"LIÊM TRINH(V)",mau:"#DD3E39", TH: 2},{sao:"THIÊN TƯỚNG(V)",mau:"#000000", TH: 11}],
        [{sao:"THIÊN LƯƠNG(Đ)",mau:"#3C9636", TH: 12}],
        [{sao:"THẤT SÁT(M)", mau:"#9D9C98", TH: 13}],
        [{sao:"THIÊN ĐỒNG(H)", mau:"#000000", TH: 3}],
        [{sao:"VŨ KHÚC(M)", mau:"#9D9C98", TH: 4}],
        [{sao:"THÁI DƯƠNG(H)", mau:"#DD3E39", TH: 5}],
        [{sao:"PHÁ QUÂN(M)", mau:"#000000", TH: 14}],
        [{sao:"THIÊN CƠ(Đ)", mau:"#3C9636", TH: 6}]
      ],


      // Tử vi tại Mão
      [
        [{sao:"THIÊN CƠ(H)", mau:"#3C9636", TH: 6},{sao: "THÁI ÂM(H)", mau: "#000000", TH: 8}],
        [{sao: "TỬ VI(B)", mau: "#E6D753", TH: 1},{sao: "THAM LANG(H)",mau:"#000000", TH: 9}],
        [{sao:"CỰ MÔN(H)", mau:"#000000", TH: 10}],
        [{sao:"THIÊN TƯỚNG(Đ)",mau:"#000000", TH: 11}],
        [{sao:"THIÊN LƯƠNG(M)",mau:"#3C9636", TH: 12}],
        [{sao:"LIÊM TRINH(Đ)",mau:"#DD3E39", TH: 2},{sao:"THẤT SÁT(Đ)", mau:"#9D9C98", TH: 13}],
        [],
        [],
        [{sao:"THIÊN ĐỒNG(H)", mau:"#000000", TH: 3}],
        [{sao:"VŨ KHÚC(H)", mau:"#9D9C98" , TH: 4},{sao:"PHÁ QUÂN(H)", mau:"#000000", TH: 14}],
        [{sao:"THÁI DƯƠNG(H)", mau:"#DD3E39", TH: 5}],
        [{sao:"THIÊN PHỦ(B)", mau:"#E6D753", TH: 7}]
      ],


      // Tử vi tại Thìn
      [
        [{sao: "THAM LANG(Đ)",mau:"#000000", TH: 9}],
        [{sao:"THIÊN CƠ(M)", mau:"#3C9636", TH: 6},{sao:"CỰ MÔN(M)", mau:"#000000", TH: 10}],
        [{sao: "TỬ VI(V)", mau: "#E6D753", TH: 1},{sao:"THIÊN TƯỚNG(V)",mau:"#000000", TH: 11}],
        [{sao:"THIÊN LƯƠNG(H)",mau:"#3C9636", TH: 12}],
        [{sao:"THẤT SÁT(M)", mau:"#9D9C98", TH: 13}],
        [],
        [{sao:"LIÊM TRINH(V)",mau:"#DD3E39", TH: 2}],
        [],
        [{sao:"PHÁ QUÂN(Đ)", mau:"#000000", TH: 14}],
        [{sao:"THIÊN ĐỒNG(Đ)", mau:"#000000", TH: 3}],
        [{sao:"VŨ KHÚC(V)", mau:"#9D9C98", TH: 4},{sao:"THIÊN PHỦ(M)", mau:"#E6D753", TH: 7}],
        [{sao:"THÁI DƯƠNG(Đ)", mau:"#DD3E39", TH: 5}, {sao: "THÁI ÂM(Đ)", mau: "#000000", TH: 8}],
      ],


      // Tử vi tại Tỵ
      [
        [{sao:"THÁI DƯƠNG(V)", mau:"#DD3E39", TH: 5},{sao:"CỰ MÔN(V)", mau:"#000000", TH: 10}],
        [{sao:"THIÊN TƯỚNG(H)",mau:"#000000", TH: 11}],
        [{sao:"THIÊN CƠ(M)", mau:"#3C9636", TH: 6},{sao:"THIÊN LƯƠNG(M)",mau:"#3C9636", TH: 12}],
        [{sao: "TỬ VI(M)", mau: "#E6D753", TH: 1},{sao:"THẤT SÁT(V)", mau:"#9D9C98", TH: 13}],
        [],
        [],
        [],
        [{sao:"LIÊM TRINH(H)",mau:"#DD3E39", TH: 2},{sao:"PHÁ QUÂN(H)", mau:"#000000", TH: 14}],
        [],
        [{sao:"THIÊN PHỦ(Đ)", mau:"#E6D753", TH: 7}],
        [{sao:"THIÊN ĐỒNG(V)", mau:"#000000", TH: 3},{sao: "THÁI ÂM(V)", mau: "#000000", TH: 8}],
        [{sao:"VŨ KHÚC(M)", mau:"#9D9C98", TH: 4},{sao: "THAM LANG(M)",mau:"#000000", TH: 9}]
      ],


      // Tử vi tại Ngọ
      [
        [{sao:"VŨ KHÚC(V)", mau:"#9D9C98", TH: 4},{sao:"THIÊN TƯỚNG(M)",mau:"#000000", TH: 11}],
        [{sao:"THÁI DƯƠNG(V)", mau:"#DD3E39", TH: 5},{sao:"THIÊN LƯƠNG(V)",mau:"#3C9636", TH: 12}],
        [{sao:"THẤT SÁT(H)", mau:"#9D9C98", TH: 13}],
        [{sao:"THIÊN CƠ(V)", mau:"#3C9636", TH: 6}],
        [{sao: "TỬ VI(M)", mau: "#E6D753", TH: 1}],
        [],
        [{sao:"PHÁ QUÂN(H)", mau:"#000000", TH: 14}],
        [],
        [{sao:"LIÊM TRINH(M)",mau:"#DD3E39", TH: 2},{sao:"THIÊN PHỦ(V)", mau:"#E6D753", TH: 7}],
        [{sao: "THÁI ÂM(M)", mau: "#000000", TH: 8}],
        [{sao: "THAM LANG(H)",mau:"#000000", TH: 9}],
        [{sao:"THIÊN ĐỒNG(H)", mau:"#000000", TH: 3},{sao:"CỰ MÔN(H)", mau:"#000000", TH: 10}],
      ],


      //Tử vi tại Mùi 
      [
        [{sao:"THIÊN ĐỒNG(M)", mau:"#000000", TH: 3}, {sao:"THIÊN LƯƠNG(V)",mau:"#3C9636", TH: 12}],
        [{sao:"VŨ KHÚC(Đ)", mau:"#9D9C98", TH: 4}, {sao:"THẤT SÁT(H)", mau:"#9D9C98", TH: 13}],
        [{sao:"THÁI DƯƠNG(V)", mau:"#DD3E39", TH: 5}],
        [],
        [{sao:"THIÊN CƠ(Đ)", mau:"#3C9636", TH: 6}],
        [{sao: "TỬ VI(Đ)", mau: "#E6D753", TH: 1},{sao:"PHÁ QUÂN(V)", mau:"#000000", TH: 14}],
        [],
        [{sao:"THIÊN PHỦ(B)", mau:"#E6D753", TH: 7}],
        [{sao: "THÁI ÂM(M)", mau: "#000000", TH: 8}],
        [{sao:"LIÊM TRINH(H)",mau:"#DD3E39", TH: 2}, {sao: "THAM LANG(H)",mau:"#000000", TH: 9}],
        [{sao:"CỰ MÔN(V)", mau:"#000000", TH: 10}],
        [{sao:"THIÊN TƯỚNG(Đ)",mau:"#000000", TH: 11}]
      ],

      //Tử vi tại Thân 
      [
        [{sao:"THẤT SÁT(M)", mau:"#9D9C98", TH: 13}],
        [{sao:"THIÊN ĐỒNG(Đ)", mau:"#000000", TH: 3}],
        [{sao:"VŨ KHÚC(M)", mau:"#9D9C98", TH: 4}],
        [{sao:"THÁI DƯƠNG(M)", mau:"#DD3E39", TH: 5}],
        [{sao:"PHÁ QUÂN(M)", mau:"#000000", TH: 14}],
        [{sao:"THIÊN CƠ(Đ)", mau:"#3C9636", TH: 6}],
        [{sao: "TỬ VI(M)", mau: "#E6D753", TH: 1},{sao:"THIÊN PHỦ(M)", mau:"#E6D753", TH: 7}],
        [{sao: "THÁI ÂM(M)", mau: "#000000", TH: 8}],
        [{sao: "THAM LANG(V)",mau:"#000000", TH: 9}],
        [{sao:"CỰ MÔN(Đ)", mau:"#000000", TH: 10}],
        [{sao:"LIÊM TRINH(V)",mau:"#DD3E39", TH: 2}, {sao:"THIÊN TƯỚNG(V)",mau:"#000000", TH: 11}],
        [{sao:"THIÊN LƯƠNG(Đ)",mau:"#3C9636", TH: 12}]
      ],


      //Tử vi tại Dậu
      [
        [],
        [],
        [{sao:"THIÊN ĐỒNG(H)", mau:"#000000", TH: 3}],
        [{sao:"VŨ KHÚC(H)", mau:"#9D9C98", TH: 4},{sao:"PHÁ QUÂN(H)", mau:"#000000", TH: 14}],
        [{sao:"THÁI DƯƠNG(M)", mau:"#DD3E39", TH: 5}],
        [{sao:"THIÊN PHỦ(Đ)", mau:"#E6D753", TH: 7}],
        [{sao:"THIÊN CƠ(V)", mau:"#3C9636", TH: 6},{sao: "THÁI ÂM(V)", mau: "#000000", TH: 8}],
        [{sao: "TỬ VI(B)", mau: "#E6D753", TH: 1},{sao: "THAM LANG(H)",mau:"#000000", TH: 9}],
        [{sao:"CỰ MÔN(H)", mau:"#000000", TH: 10}],
        [{sao:"THIÊN TƯỚNG(Đ)",mau:"#000000", TH: 11}],
        [{sao:"THIÊN LƯƠNG(V)",mau:"#3C9636", TH: 12}],
        [{sao:"LIÊM TRINH(Đ)",mau:"#DD3E39", TH: 2},{sao:"THẤT SÁT(Đ)", mau:"#9D9C98", TH: 13}],
      ],


      //Tử vi tại Tuất
      [
        [{sao:"LIÊM TRINH(V)",mau:"#DD3E39", TH: 2}],
        [],
        [{sao:"PHÁ QUÂN(Đ)", mau:"#000000", TH: 14}],
        [{sao:"THIÊN ĐỒNG(Đ)", mau:"#000000", TH: 3}],
        [{sao:"VŨ KHÚC(V)", mau:"#9D9C98", TH: 4},{sao:"THIÊN PHỦ(M)", mau:"#E6D753", TH: 7}],
        [{sao:"THÁI DƯƠNG(Đ)", mau:"#DD3E39", TH: 5}, {sao: "THÁI ÂM(Đ)", mau: "#000000", TH: 8}],
        [{sao: "THAM LANG(Đ)",mau:"#000000", TH: 9}],
        [{sao:"THIÊN CƠ(M)", mau:"#3C9636", TH: 6},{sao:"CỰ MÔN(M)", mau:"#000000", TH: 10}],
        [{sao: "TỬ VI(V)", mau: "#E6D753", TH: 1},{sao:"THIÊN TƯỚNG(V)",mau:"#000000", TH: 11}],
        [{sao:"THIÊN LƯƠNG(H)",mau:"#3C9636", TH: 12}],
        [{sao:"THẤT SÁT(M)", mau:"#9D9C98", TH: 13}],
        [],
      ],
      

      // tử vi ở Hợi
      [
        [],
        [{sao:"LIÊM TRINH(H)",mau:"#DD3E39", TH: 2},{sao:"PHÁ QUÂN(H)", mau:"#000000", TH: 14}],
        [],
        [{sao:"THIÊN PHỦ(Đ)", mau:"#E6D753", TH: 7}],
        [{sao:"THIÊN ĐỒNG(H)", mau:"#000000", TH: 3},{sao: "THÁI ÂM(H)", mau: "#000000", TH: 8}],
        [{sao:"VŨ KHÚC(M)", mau:"#9D9C98", TH: 4},{sao: "THAM LANG(M)",mau:"#000000", TH: 9}],
        [{sao:"THÁI DƯƠNG(H)", mau:"#DD3E39", TH: 5},{sao:"CỰ MÔN(Đ)", mau:"#000000", TH: 10}],
        [{sao:"THIÊN TƯỚNG(H)",mau:"#000000", TH: 11}],
        [{sao:"THIÊN CƠ(M)", mau:"#3C9636", TH: 6},{sao:"THIÊN LƯƠNG(M)",mau:"#3C9636", TH: 12}],
        [{sao: "TỬ VI(B)", mau: "#E6D753", TH: 1},{sao:"THẤT SÁT(V)", mau:"#9D9C98", TH: 13}],
        [],
        [],
      ],


      // Tử vi ở Tý
      [
        [{sao:"PHÁ QUÂN(H)", mau:"#000000", TH: 14}],
        [],
        [{sao:"LIÊM TRINH(M)",mau:"#DD3E39", TH: 2},{sao:"THIÊN PHỦ(V)", mau:"#E6D753", TH: 7}],
        [{sao: "THÁI ÂM(M)", mau: "#000000", TH: 8}],
        [{sao: "THAM LANG(H)",mau:"#000000", TH: 9}],
        [{sao:"THIÊN ĐỒNG(H)", mau:"#000000", TH: 3},{sao:"CỰ MÔN(H)", mau:"#000000", TH: 10}],
        [{sao:"VŨ KHÚC(V)", mau:"#9D9C98", TH: 4},{sao:"THIÊN TƯỚNG(M)",mau:"#000000", TH: 11}],
        [{sao:"THÁI DƯƠNG(H)", mau:"#DD3E39", TH: 5},{sao:"THIÊN LƯƠNG(H)",mau:"#3C9636", TH: 12}],
        [{sao:"THẤT SÁT(H)", mau:"#9D9C98", TH: 13}],
        [{sao:"THIÊN CƠ(H)", mau:"#3C9636", TH: 6}],
        [{sao: "TỬ VI(B)", mau: "#E6D753", TH: 1}],
        [],
      ],

      // tử vi ở cung sửu
      [
        [],
        [{sao:"THIÊN PHỦ(B)", mau:"#E6D753", TH: 7}],
        [{sao: "THÁI ÂM(H)", mau: "#000000", TH: 8}],
        [{sao:"LIÊM TRINH(H)",mau:"#DD3E39", TH: 2}, {sao: "THAM LANG(H)",mau:"#000000", TH: 9}],
        [{sao:"CỰ MÔN(V)", mau:"#000000", TH: 10}],
        [{sao:"THIÊN TƯỚNG(Đ)",mau:"#000000", TH: 11}],
        [{sao:"THIÊN ĐỒNG(M)", mau:"#000000", TH: 3}, {sao:"THIÊN LƯƠNG(V)",mau:"#3C9636", TH: 12}],
        [{sao:"VŨ KHÚC(Đ)", mau:"#9D9C98", TH: 4}, {sao:"THẤT SÁT(H)", mau:"#9D9C98", TH: 13}],
        [{sao:"THÁI DƯƠNG(H)", mau:"#DD3E39", TH: 5}],
        [],
        [{sao:"THIÊN CƠ(Đ)", mau:"#3C9636", TH: 6}],
        [{sao: "TỬ VI(Đ)", mau: "#E6D753", TH: 1},{sao:"PHÁ QUÂN(V)", mau:"#000000", TH: 14}],
      ]

    ]

    let viTri14ChinhTinh = bangAn14ChinhTinh[saoTuViIndex]
    
    return viTri14ChinhTinh
    }

    module.exports ={
        an14ChinhTinh
    }