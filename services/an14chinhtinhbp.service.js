 // Định nghĩa một đối tượng lưu trữ vị trí cung + Tử Vi - dựa trên ngày và Cục
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

    // Hàm tính vị trí cung + Tử Vi - dựa trên ngày sinh và Cục
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

      // + Tử Vi - tại Dần 
      [ 
        [{sao: "+ Tử Vi -", mau: "#E6D753", TH: 1},{sao:"+ Thiên Phủ", mau:"#E6D753", TH: 7}],
        [{sao: "- Thái Âm -", mau: "#000000", TH: 8}],
        [{sao: "- Tham Lang +",mau:"#000000", TH: 9}],
        [{sao:"- Cự Môn -", mau:"#000000", TH: 10}],
        [{sao:"- Liêm Trinh +-",mau:"#DD3E39", TH: 2},{sao:"+ Thiên Tướng",mau:"#000000", TH: 11}],
        [{sao:"- Thiên Lương +",mau:"#3C9636", TH: 12}],
        [{sao:"+ Thất Sát", mau:"#9D9C98", TH: 13}],
        [{sao:"- Thiên Đồng +", mau:"#000000", TH: 3}],
        [{sao:"- Vũ Khúc -", mau:"#9D9C98", TH: 4}],
        [{sao:"+ Thái Dương +", mau:"#DD3E39", TH: 5}],
        [{sao:"- Phá Quân -", mau:"#000000", TH: 14}],
        [{sao:"- Thiên Cơ +", mau:"#3C9636", TH: 6}]
      ],


      // + Tử Vi - tại Mão
      [
        [{sao:"- Thiên Cơ +", mau:"#3C9636", TH: 6},{sao: "- Thái Âm -", mau: "#000000", TH: 8}],
        [{sao: "+ Tử Vi -", mau: "#E6D753", TH: 1},{sao: "- Tham Lang +",mau:"#000000", TH: 9}],
        [{sao:"- Cự Môn -", mau:"#000000", TH: 10}],
        [{sao:"+ Thiên Tướng",mau:"#000000", TH: 11}],
        [{sao:"- Thiên Lương +",mau:"#3C9636", TH: 12}],
        [{sao:"- Liêm Trinh +-",mau:"#DD3E39", TH: 2},{sao:"+ Thất Sát", mau:"#9D9C98", TH: 13}],
        [],
        [],
        [{sao:"- Thiên Đồng +", mau:"#000000", TH: 3}],
        [{sao:"- Vũ Khúc -", mau:"#9D9C98" , TH: 4},{sao:"- Phá Quân -", mau:"#000000", TH: 14}],
        [{sao:"+ Thái Dương +", mau:"#DD3E39", TH: 5}],
        [{sao:"+ Thiên Phủ", mau:"#E6D753", TH: 7}]
      ],


      // + Tử Vi - tại Thìn
      [
        [{sao: "- Tham Lang +",mau:"#000000", TH: 9}],
        [{sao:"- Thiên Cơ +", mau:"#3C9636", TH: 6},{sao:"- Cự Môn -", mau:"#000000", TH: 10}],
        [{sao: "+ Tử Vi -", mau: "#E6D753", TH: 1},{sao:"+ Thiên Tướng",mau:"#000000", TH: 11}],
        [{sao:"- Thiên Lương +",mau:"#3C9636", TH: 12}],
        [{sao:"+ Thất Sát", mau:"#9D9C98", TH: 13}],
        [],
        [{sao:"- Liêm Trinh +-",mau:"#DD3E39", TH: 2}],
        [],
        [{sao:"- Phá Quân -", mau:"#000000", TH: 14}],
        [{sao:"- Thiên Đồng +", mau:"#000000", TH: 3}],
        [{sao:"- Vũ Khúc -", mau:"#9D9C98", TH: 4},{sao:"+ Thiên Phủ", mau:"#E6D753", TH: 7}],
        [{sao:"+ Thái Dương +", mau:"#DD3E39", TH: 5}, {sao: "- Thái Âm -", mau: "#000000", TH: 8}],
      ],


      // + Tử Vi - tại Tỵ
      [
        [{sao:"+ Thái Dương +", mau:"#DD3E39", TH: 5},{sao:"- Cự Môn -", mau:"#000000", TH: 10}],
        [{sao:"+ Thiên Tướng",mau:"#000000", TH: 11}],
        [{sao:"- Thiên Cơ +", mau:"#3C9636", TH: 6},{sao:"- Thiên Lương +",mau:"#3C9636", TH: 12}],
        [{sao: "+ Tử Vi -", mau: "#E6D753", TH: 1},{sao:"+ Thất Sát", mau:"#9D9C98", TH: 13}],
        [],
        [],
        [],
        [{sao:"- Liêm Trinh +-",mau:"#DD3E39", TH: 2},{sao:"- Phá Quân -", mau:"#000000", TH: 14}],
        [],
        [{sao:"+ Thiên Phủ", mau:"#E6D753", TH: 7}],
        [{sao:"- Thiên Đồng +", mau:"#000000", TH: 3},{sao: "- Thái Âm -", mau: "#000000", TH: 8}],
        [{sao:"- Vũ Khúc -", mau:"#9D9C98", TH: 4},{sao: "- Tham Lang +",mau:"#000000", TH: 9}]
      ],


      // + Tử Vi - tại Ngọ
      [
        [{sao:"- Vũ Khúc -", mau:"#9D9C98", TH: 4},{sao:"+ Thiên Tướng",mau:"#000000", TH: 11}],
        [{sao:"+ Thái Dương +", mau:"#DD3E39", TH: 5},{sao:"- Thiên Lương +",mau:"#3C9636", TH: 12}],
        [{sao:"+ Thất Sát", mau:"#9D9C98", TH: 13}],
        [{sao:"- Thiên Cơ +", mau:"#3C9636", TH: 6}],
        [{sao: "+ Tử Vi -", mau: "#E6D753", TH: 1}],
        [],
        [{sao:"- Phá Quân -", mau:"#000000", TH: 14}],
        [],
        [{sao:"- Liêm Trinh +-",mau:"#DD3E39", TH: 2},{sao:"+ Thiên Phủ", mau:"#E6D753", TH: 7}],
        [{sao: "- Thái Âm -", mau: "#000000", TH: 8}],
        [{sao: "- Tham Lang +",mau:"#000000", TH: 9}],
        [{sao:"- Thiên Đồng +", mau:"#000000", TH: 3},{sao:"- Cự Môn -", mau:"#000000", TH: 10}],
      ],


      //+ Tử Vi - tại Mùi 
      [
        [{sao:"- Thiên Đồng +", mau:"#000000", TH: 3}, {sao:"- Thiên Lương +",mau:"#3C9636", TH: 12}],
        [{sao:"- Vũ Khúc -", mau:"#9D9C98", TH: 4}, {sao:"+ Thất Sát", mau:"#9D9C98", TH: 13}],
        [{sao:"+ Thái Dương +", mau:"#DD3E39", TH: 5}],
        [],
        [{sao:"- Thiên Cơ +", mau:"#3C9636", TH: 6}],
        [{sao: "+ Tử Vi -", mau: "#E6D753", TH: 1},{sao:"- Phá Quân -", mau:"#000000", TH: 14}],
        [],
        [{sao:"+ Thiên Phủ", mau:"#E6D753", TH: 7}],
        [{sao: "- Thái Âm -", mau: "#000000", TH: 8}],
        [{sao:"- Liêm Trinh +-",mau:"#DD3E39", TH: 2}, {sao: "- Tham Lang +",mau:"#000000", TH: 9}],
        [{sao:"- Cự Môn -", mau:"#000000", TH: 10}],
        [{sao:"+ Thiên Tướng",mau:"#000000", TH: 11}]
      ],

      //+ Tử Vi - tại Thân 
      [
        [{sao:"+ Thất Sát", mau:"#9D9C98", TH: 13}],
        [{sao:"- Thiên Đồng +", mau:"#000000", TH: 3}],
        [{sao:"- Vũ Khúc -", mau:"#9D9C98", TH: 4}],
        [{sao:"+ Thái Dương +", mau:"#DD3E39", TH: 5}],
        [{sao:"- Phá Quân -", mau:"#000000", TH: 14}],
        [{sao:"- Thiên Cơ +", mau:"#3C9636", TH: 6}],
        [{sao: "+ Tử Vi -", mau: "#E6D753", TH: 1},{sao:"+ Thiên Phủ", mau:"#E6D753", TH: 7}],
        [{sao: "- Thái Âm -", mau: "#000000", TH: 8}],
        [{sao: "- Tham Lang +",mau:"#000000", TH: 9}],
        [{sao:"- Cự Môn -", mau:"#000000", TH: 10}],
        [{sao:"- Liêm Trinh +-",mau:"#DD3E39", TH: 2}, {sao:"+ Thiên Tướng",mau:"#000000", TH: 11}],
        [{sao:"- Thiên Lương +",mau:"#3C9636", TH: 12}]
      ],


      //+ Tử Vi - tại Dậu
      [
        [],
        [],
        [{sao:"- Thiên Đồng +", mau:"#000000", TH: 3}],
        [{sao:"- Vũ Khúc -", mau:"#9D9C98", TH: 4},{sao:"- Phá Quân -", mau:"#000000", TH: 14}],
        [{sao:"+ Thái Dương +", mau:"#DD3E39", TH: 5}],
        [{sao:"+ Thiên Phủ", mau:"#E6D753", TH: 7}],
        [{sao:"- Thiên Cơ +", mau:"#3C9636", TH: 6},{sao: "- Thái Âm -", mau: "#000000", TH: 8}],
        [{sao: "+ Tử Vi -", mau: "#E6D753", TH: 1},{sao: "- Tham Lang +",mau:"#000000", TH: 9}],
        [{sao:"- Cự Môn -", mau:"#000000", TH: 10}],
        [{sao:"+ Thiên Tướng",mau:"#000000", TH: 11}],
        [{sao:"- Thiên Lương +",mau:"#3C9636", TH: 12}],
        [{sao:"- Liêm Trinh +-",mau:"#DD3E39", TH: 2},{sao:"+ Thất Sát", mau:"#9D9C98", TH: 13}],
      ],


      //+ Tử Vi - tại Tuất
      [
        [{sao:"- Liêm Trinh +-",mau:"#DD3E39", TH: 2}],
        [],
        [{sao:"- Phá Quân -", mau:"#000000", TH: 14}],
        [{sao:"- Thiên Đồng +", mau:"#000000", TH: 3}],
        [{sao:"- Vũ Khúc -", mau:"#9D9C98", TH: 4},{sao:"+ Thiên Phủ", mau:"#E6D753", TH: 7}],
        [{sao:"+ Thái Dương +", mau:"#DD3E39", TH: 5}, {sao: "- Thái Âm -", mau: "#000000", TH: 8}],
        [{sao: "- Tham Lang +",mau:"#000000", TH: 9}],
        [{sao:"- Thiên Cơ +", mau:"#3C9636", TH: 6},{sao:"- Cự Môn -", mau:"#000000", TH: 10}],
        [{sao: "+ Tử Vi -", mau: "#E6D753", TH: 1},{sao:"+ Thiên Tướng",mau:"#000000", TH: 11}],
        [{sao:"- Thiên Lương +",mau:"#3C9636", TH: 12}],
        [{sao:"+ Thất Sát", mau:"#9D9C98", TH: 13}],
        [],
      ],
      

      // + Tử Vi - ở Hợi
      [
        [],
        [{sao:"- Liêm Trinh +-",mau:"#DD3E39", TH: 2},{sao:"- Phá Quân -", mau:"#000000", TH: 14}],
        [],
        [{sao:"+ Thiên Phủ", mau:"#E6D753", TH: 7}],
        [{sao:"- Thiên Đồng +", mau:"#000000", TH: 3},{sao: "- Thái Âm -", mau: "#000000", TH: 8}],
        [{sao:"- Vũ Khúc -", mau:"#9D9C98", TH: 4},{sao: "- Tham Lang +",mau:"#000000", TH: 9}],
        [{sao:"+ Thái Dương +", mau:"#DD3E39", TH: 5},{sao:"- Cự Môn -", mau:"#000000", TH: 10}],
        [{sao:"+ Thiên Tướng",mau:"#000000", TH: 11}],
        [{sao:"- Thiên Cơ +", mau:"#3C9636", TH: 6},{sao:"- Thiên Lương +",mau:"#3C9636", TH: 12}],
        [{sao: "+ Tử Vi -", mau: "#E6D753", TH: 1},{sao:"+ Thất Sát", mau:"#9D9C98", TH: 13}],
        [],
        [],
      ],


      // + Tử Vi - ở Tý
      [
        [{sao:"- Phá Quân -", mau:"#000000", TH: 14}],
        [],
        [{sao:"- Liêm Trinh +-",mau:"#DD3E39", TH: 2},{sao:"+ Thiên Phủ", mau:"#E6D753", TH: 7}],
        [{sao: "- Thái Âm -", mau: "#000000", TH: 8}],
        [{sao: "- Tham Lang +",mau:"#000000", TH: 9}],
        [{sao:"- Thiên Đồng +", mau:"#000000", TH: 3},{sao:"- Cự Môn -", mau:"#000000", TH: 10}],
        [{sao:"- Vũ Khúc -", mau:"#9D9C98", TH: 4},{sao:"+ Thiên Tướng",mau:"#000000", TH: 11}],
        [{sao:"+ Thái Dương +", mau:"#DD3E39", TH: 5},{sao:"- Thiên Lương +",mau:"#3C9636", TH: 12}],
        [{sao:"+ Thất Sát", mau:"#9D9C98", TH: 13}],
        [{sao:"- Thiên Cơ +", mau:"#3C9636", TH: 6}],
        [{sao: "+ Tử Vi -", mau: "#E6D753", TH: 1}],
        [],
      ],

      // + Tử Vi - ở cung sửu
      [
        [],
        [{sao:"+ Thiên Phủ", mau:"#E6D753", TH: 7}],
        [{sao: "- Thái Âm -", mau: "#000000", TH: 8}],
        [{sao:"- Liêm Trinh +-",mau:"#DD3E39", TH: 2}, {sao: "- Tham Lang +",mau:"#000000", TH: 9}],
        [{sao:"- Cự Môn -", mau:"#000000", TH: 10}],
        [{sao:"+ Thiên Tướng",mau:"#000000", TH: 11}],
        [{sao:"- Thiên Đồng +", mau:"#000000", TH: 3}, {sao:"- Thiên Lương +",mau:"#3C9636", TH: 12}],
        [{sao:"- Vũ Khúc -", mau:"#9D9C98", TH: 4}, {sao:"+ Thất Sát", mau:"#9D9C98", TH: 13}],
        [{sao:"+ Thái Dương +", mau:"#DD3E39", TH: 5}],
        [],
        [{sao:"- Thiên Cơ +", mau:"#3C9636", TH: 6}],
        [{sao: "+ Tử Vi -", mau: "#E6D753", TH: 1},{sao:"- Phá Quân -", mau:"#000000", TH: 14}],
      ]

    ]

    let viTri14ChinhTinh = bangAn14ChinhTinh[saoTuViIndex]
    
    return viTri14ChinhTinh
    }

    module.exports ={
        an14ChinhTinh
    }