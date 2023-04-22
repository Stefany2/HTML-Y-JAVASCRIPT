const evento = new Date ('April 22 ,2023  9:48:30');

evento.setDate(30);

console.log(evento.getDate());
//EXPECT OUTPUT: 24

evento.setDate(14);
// Only 31days in August !

console.log(evento.getDate());
//Expected outpu: 1
