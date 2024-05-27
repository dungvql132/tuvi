const tinhCucLaSo = (canNam, cungMenh) => {
    const conditions = [
      { canNam: ["Mậu", "Quý"], cungMenh: ["Tý", "Sửu"], cuc: "Kim Tứ Cục" },
      {
        canNam: ["Mậu", "Quý"],
        cungMenh: ["Dần", "Mão"],
        cuc: "Thủy Nhị Cục",
      },
      {
        canNam: ["Mậu", "Quý"],
        cungMenh: ["Thìn", "Tỵ"],
        cuc: "Thổ Ngũ Cục",
      },
      {
        canNam: ["Mậu", "Quý"],
        cungMenh: ["Ngọ", "Mùi"],
        cuc: "Hỏa Lục Cục",
      },
      {
        canNam: ["Mậu", "Quý"],
        cungMenh: ["Thân", "Dậu"],
        cuc: "Mộc Tam Cục",
      },
      {
        canNam: ["Mậu", "Quý"],
        cungMenh: ["Tuất", "Hợi"],
        cuc: "Thủy Nhị Cục",
      },
      {
        canNam: ["Đinh", "Nhâm"],
        cungMenh: ["Tý", "Sửu"],
        cuc: "Mộc Tam Cục",
      },
      {
        canNam: ["Đinh", "Nhâm"],
        cungMenh: ["Dần", "Mão"],
        cuc: "Kim Tứ Cục",
      },
      {
        canNam: ["Đinh", "Nhâm"],
        cungMenh: ["Thìn", "Tỵ"],
        cuc: "Hỏa Lục Cục",
      },
      {
        canNam: ["Đinh", "Nhâm"],
        cungMenh: ["Ngọ", "Mùi"],
        cuc: "Thủy Nhị Cục",
      },
      {
        canNam: ["Đinh", "Nhâm"],
        cungMenh: ["Thân", "Dậu"],
        cuc: "Thổ Ngũ Cục",
      },
      {
        canNam: ["Đinh", "Nhâm"],
        cungMenh: ["Tuất", "Hợi"],
        cuc: "Kim Tứ Cục",
      },
      {
        canNam: ["Giáp", "Kỷ"],
        cungMenh: ["Tý", "Sửu"],
        cuc: "Thủy Nhị Cục",
      },
      {
        canNam: ["Giáp", "Kỷ"],
        cungMenh: ["Dần", "Mão"],
        cuc: "Hỏa Lục Cục",
      },
      {
        canNam: ["Giáp", "Kỷ"],
        cungMenh: ["Thìn", "Tỵ"],
        cuc: "Mộc Tam Cục",
      },
      {
        canNam: ["Giáp", "Kỷ"],
        cungMenh: ["Ngọ", "Mùi"],
        cuc: "Thổ Ngũ Cục",
      },
      {
        canNam: ["Giáp", "Kỷ"],
        cungMenh: ["Thân", "Dậu"],
        cuc: "Kim Tứ Cục",
      },
      {
        canNam: ["Giáp", "Kỷ"],
        cungMenh: ["Tuất", "Hợi"],
        cuc: "Hỏa Lục Cục",
      },
      { canNam: ["Ất", "Canh"], cungMenh: ["Tý", "Sửu"], cuc: "Hỏa Lục Cục" },
      {
        canNam: ["Ất", "Canh"],
        cungMenh: ["Dần", "Mão"],
        cuc: "Thổ Ngũ Cục",
      },
      { canNam: ["Ất", "Canh"], cungMenh: ["Thìn", "Tỵ"], cuc: "Kim Tứ Cục" },
      {
        canNam: ["Ất", "Canh"],
        cungMenh: ["Ngọ", "Mùi"],
        cuc: "Mộc Tam Cục",
      },
      {
        canNam: ["Ất", "Canh"],
        cungMenh: ["Thân", "Dậu"],
        cuc: "Thủy Nhị Cục",
      },
      {
        canNam: ["Ất", "Canh"],
        cungMenh: ["Tuất", "Hợi"],
        cuc: "Thổ Ngũ Cục",
      },
      {
        canNam: ["Bính", "Tân"],
        cungMenh: ["Tý", "Sửu"],
        cuc: "Thổ Ngũ Cục",
      },
      {
        canNam: ["Bính", "Tân"],
        cungMenh: ["Dần", "Mão"],
        cuc: "Mộc Tam Cục",
      },
      {
        canNam: ["Bính", "Tân"],
        cungMenh: ["Thìn", "Tỵ"],
        cuc: "Thủy Nhị Cục",
      },
      {
        canNam: ["Bính", "Tân"],
        cungMenh: ["Ngọ", "Mùi"],
        cuc: "Kim Tứ Cục",
      },
      {
        canNam: ["Bính", "Tân"],
        cungMenh: ["Thân", "Dậu"],
        cuc: "Hỏa Lục Cục",
      },
      {
        canNam: ["Bính", "Tân"],
        cungMenh: ["Tuất", "Hợi"],
        cuc: "Mộc Tam Cục",
      },
    ];

    let cuc = "";
    for (const condition of conditions) {
      if (
        condition.canNam.includes(canNam) &&
        condition.cungMenh.includes(cungMenh)
      ) {
        cuc = condition.cuc;
        break;
      }
    }

    return cuc;
  };

  module.exports ={
    tinhCucLaSo
  }