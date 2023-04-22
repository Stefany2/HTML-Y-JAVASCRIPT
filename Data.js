const evento = new Date ('August 19 ,1975 23:15:30');

evento.setDate(24);

console.log(evento.getDate());
//EXPECT OUTPUT: 24

evento.setDate(32);
// Only 31days in August !

console.log(evento.getDate());
//Expected outpu: 1
