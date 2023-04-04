let popupCookie = getCookie("event-popup");
let date1 = new Date();
date1.setTime(date1.getTime() + 100000);
let time = JSON.parse(popupCookie).time;
let date = new Date(time);
console.log(date);