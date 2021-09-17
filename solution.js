// https://programmers.co.kr/learn/courses/30/lessons/77486

function solution(enroll, referral, seller, amount) {
  const organizationMap = {};
  const profitMap = {};
  for (let i = 0; i < enroll.length; i++) {
    profitMap[enroll[i]] = 0;
    organizationMap[enroll[i]] = referral[i];
  }

  const PRICE = 100;
  for (let i = 0; i < seller.length; i++) {
    const name = seller[i];
    const totalProfit = PRICE * amount[i];
    DFS(name, totalProfit);
  }

  function DFS(name, accMoney) {
    const partnerProfit = parseInt(accMoney / 10);
    const myPartner = organizationMap[name];
    const myProfit = accMoney - partnerProfit;
    profitMap[name] += myProfit;
    if (!partnerProfit || myPartner === "-") return;
    DFS(myPartner, partnerProfit);
  }

  return enroll.map((name) => profitMap[name]);
}

console.log(
  solution(
    ["john", "mary", "edward", "sam", "emily", "jaimie", "tod", "young"],
    ["-", "-", "mary", "edward", "mary", "mary", "jaimie", "edward"],
    ["young", "john", "tod", "emily", "mary"],
    [12, 4, 2, 5, 10]
  )
);
