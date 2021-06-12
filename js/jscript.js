//date
class VDate  {
  constructor(){
    let date = new Date();
    this.year = date.getFullYear();
    this.month = date.getMonth()+1;
    this.day = date.getDay();
  }

  today(){
    let currDate = this.year+"-"+addZero(this.month)+"-"+addZero(this.day);
    return currDate;
  }
};

function addZero(number){
  number = (number >-1 && number < 9) ? "0"+number : number;
  return number;
}
