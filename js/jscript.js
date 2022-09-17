//date
class VDate  {
  constructor(){
    this.date = new Date();
    this.year = this.date.getFullYear();
    this.month = this.date.getMonth()+1;
    this.day = this.date.getDay();
  }

  today(){
    let currDate = this.year+"-"+addZero(this.month)+"-"+addZero(this.day)+ "  "+this.timeNow();
    return currDate;
  }

  timeNow(){

    let time = this.date.getHours() + ":" + this.date.getMinutes();
    return time;
  }
};

function addZero(number){
  number = (number >-1 && number < 10) ? "0"+number : number;
  return number;
}
$(document).ready(function(){
  $('.date-today').html(new VDate().today());
});
