/*const member = [
    { name: "a", money: 500 },
    { name: "b", money: 400 },
    { name: "c", money: 5200 },
    { name: "d", money: 1200 },
];

const memberDetail = member.find((member) => {
    return member.money > 450;  
});

memberDetail(); 
*/
const member = [
    {name: "a", money:"500"},
    {name: "b", money:"400"},
    {name: "c", money:"5200"},
    {name: "d", money:"1200"}
];
const result = member.filter((member) => member.money >450);
const result1 = result.map((member2) => {return member.name});

console.log(result1);
