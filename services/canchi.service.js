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

// 1. Tính Can của giờ sinh
function tinhCanGioSinhAL(AL, gioSinhInput) {
  let indexCan = CAN.findIndex((check) => {
    return check === CAN[((AL.jd - 1) * 2) % 10];
  });
  let canGioSinhAL = CAN[(gioSinhInput - 1 + indexCan) % 10];
  return canGioSinhAL;
}


function tinhCanChi(AL) {
  const canNgay = CAN[(AL.jd + 9) % 10];
  const chiNgay = CHI[(AL.jd + 1) % 12];
  const canChiNgay = `${canNgay} ${chiNgay}`;

  const canThang = CAN[(AL.year * 12 + AL.month + 3) % 10];
  const chiThang = CHI[(AL.month + 1) % 12];
  let canChiThang = `${canThang}` + ' ' +`${chiThang}`;
  if (AL.leap === 1) {
    canChiThang += " (N)";
  }

  const canNam = CAN[(AL.year + 6) % 10]
  const chiNam = CHI[(AL.year + 8) % 12]
  const canChiNam= `${canNam}` + ' ' + `${chiNam}`
  
  return [canNgay,chiNgay,canChiNgay,canThang,chiThang,canChiThang,canNam,chiNam,canChiNam];
}

function jdn(dd, mm, yy) {
  const a = Math.floor((14 - mm) / 12);
  const y = yy + 4800 - a;
  const m = mm + 12 * a - 3;
  const jd =
    dd +
    Math.floor((153 * m + 2) / 5) +
    365 * y +
    Math.floor(y / 4) -
    Math.floor(y / 100) +
    Math.floor(y / 400) -
    32045;
  return jd;
}

module.exports = {
  tinhCanGioSinhAL,tinhCanChi
};
