const validatePincode = (pincode) => {
  // input จะต้องมีความยาวมากกว่าหรือเท่ากับ 6 ตัวอักษร
  if (pincode?.length < 6) return false;

  let countDup = 0;
  for (let index = 0; index < pincode.length; index++) {
    const code = pincode[index];

    // input จะต้องกันไม่ให้มีเลขซ้ำติดกันเกิน 2 ตัว
    // input จะต้องกันไม่ให้มีเลขชุดซ้ำ เกิน 2 ชุด
    if (countDup > 2) return false;
    if (code === pincode[index + 1]) countDup++;

    // input จะต้องกันไม่ให้มีเลขเรียงกันเกิน 2 ตัว
    if (
      pincode[index + 1] &&
      pincode[index + 2] &&
      ((Number(code) + 1 === Number(pincode[index + 1]) &&
        Number(code) + 2 === Number(pincode[index + 2])) ||
        (Number(code) - 1 === Number(pincode[index + 1]) &&
          Number(code) - 2 === Number(pincode[index + 2])))
    )
      return false;
  }

  return true;
};


// testing code
const testFailCase = ["17283",'118822', "123743", "321895" , "112233", "882211"]
const testCorrectCase = ["172839" , "111762", "124578", "887712"]

let countTestingCorrect = 0

for (const test of testFailCase) {
    if(validatePincode(test) === false) countTestingCorrect++;
}

for (const test of testCorrectCase) {
    if(validatePincode(test) === true) countTestingCorrect++;
}

// ถ้าจำนวนคำตอบ ตรงกับจำนวนเทสเคสที่ผ่านหมายถึงผ่านทั้งหมด
if(countTestingCorrect === (testFailCase.length + testCorrectCase.length)) {
    console.log("Validate pincode test case is correct")
} else {
    console.log("Validate pincode test case is fail")
}
