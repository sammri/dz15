const users = [
    {
    name: "samir",
    balance: 50,
    },
    {
    name: "dima",
    balance: 50,
    },
    {
    name: "kostek",
    balance: 50,
    },
];



const calculateTotalBalance = users => {
    let sum = 0;
    for (const key in users) {
            sum += users[key]["balance"];
        }
    return sum;
};
  
  console.log(calculateTotalBalance(users)); 