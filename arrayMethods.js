const nums = [4, 1, 100, 5];


nums.sort((a, b) => a - b); 
console.log(nums); // [1, 4, 5, 100] ✅
const users = [
    { id: 1, name: "Miracline" },
    { id: 2, name: "Vishnu" }
  ];
  
  const userMap = users.reduce((acc, user) => {
    acc[user.id] = user.name;
    return acc;
  }, {});
  
  console.log(userMap);
  // { 1: 'Miracline', 2: 'Vishnu' }
  