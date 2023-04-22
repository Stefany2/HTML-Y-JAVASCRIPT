let now = new Date();
alert( now ); // muestra en pantalla la fecha y la hora actuales

// 0 significa 01.01.1970 UTC+0
let April04_2023 = new Date(0);
alert( April04_2023 );

// ahora se le agregan 24 horas, se obtiene 02.01.1970 UTC+0
let April03_2023= new Date(24 * 3600 * 1000);
alert( April03_2023 );

