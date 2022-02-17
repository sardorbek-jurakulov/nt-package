const CTO = "Temurbek Adhamov";

const firstBranchAddress = "Tashkent shahri, Olmazor tumani, Kichik halqa yo'li 72A";
const secondBranchAddress = "Toshkent shahri, Shayxontoxur tumani, Xadra maydoni (C-14) v/m 100011";
const thirdBranchAddress = "Toshkent shahri, Chilonzor tumani, 9-kvartal, 100097";

const firstBranchWorkingTimes = "09:00 - 19:00";
const secondBranchWorkingTimes = "09:00 - 19:00";
const thirdBranchWorkingTimes = "09:00 - 19:00";

const firstBranchInfo = {
  address: firstBranchAddress,
  workingTimes: firstBranchWorkingTimes
}

const secondBranchInfo = {
  address: secondBranchAddress,
  workingTimes: secondBranchWorkingTimes
}

const thirdBranchInfo = {
  address: thirdBranchAddress,
  workingTimes: thirdBranchWorkingTimes
}

const CoFounder = (founderName) => {
  return founderName;
}

const allBranchesInfo = (firstBranch, secondBranch, thirdBranch) => {
  return {
    firstBranch,
    secondBranch,
    thirdBranch
  };
}

module.exports.CoFounder = CoFounder(CTO);
module.exports.allBranchesInfo = allBranchesInfo(firstBranchInfo, secondBranchInfo, thirdBranchInfo);