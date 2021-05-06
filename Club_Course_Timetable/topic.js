var topic = [
    "尚未開學",
    "國定假日",
    "環境準備",
    "隨機性",
    "重複性",
    "條件判斷"
];

var startDate = new Date();

function setMonthAndDay(startMonth,startDay){
     //把社長說的日期變成javascript需要的日期時間格事
     startDate.setMonth(startMonth-1,starDay);
     startDate.setHours(0);
     startDate.setMinutes(0);
     startDate.setSeconds(0);
}

setMonthAndDay(2,21);