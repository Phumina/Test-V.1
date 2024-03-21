/*const Band = [
    { name: "Eve", member: 2 , popularSong: "Nuh I'd win"},
  
];
const result = members.find((member) => {
    return member.age > 25;
});
console.log(result);
*/
/*
const Band = {
    member: 5,
    name:"nice",
    popularSong:"KK"
}
const bandDetail = ()=>{
    return console.log(Band.name=Band.member=Band.popularSong);
}

bandDetail();
*/
const member = [
    {name: "a", money:"500"},
    {name: "b", money:"400"},
    {name: "c", money:"5200"},
    {name: "d", money:"1200"},
];
const result = member.filter((member) => member.money >450);
const result1 = result.map((member2) => {return member.name});

console.log(result1);
