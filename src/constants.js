export const CityEnum = {
    YELLOW: "yellow",
    RED: "red",
    BLUE: "blue",
    PURPLE: "purple",
    GREEN: "green", 
    WHITE: "white"
}

export const Deal = "Deal";

export const InitialCards = {
  "Deal1": false,
  "Deal2": false,
  "Deal3": false,
  2: false,
  3: false,
  4: false,
  5: false,
  6: false, 
  7: false,
  8: false,
  9: false,
  10: false
};

export const CardOrder = ["Deal1", "Deal2","Deal3", 2, 3, 4, 5, 6, 7, 8, 9, 10];
  
export const InitialCities = {
  [CityEnum.YELLOW]: 0,
  [CityEnum.RED]: 0,
  [CityEnum.BLUE]: 0,
  [CityEnum.GREEN]: 0,
  [CityEnum.WHITE]: 0,
  [CityEnum.PURPLE]: 0
}

export const createUUID = () => {
  var dt = new Date().getTime();
  var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = (dt + Math.random()*16)%16 | 0;
      dt = Math.floor(dt/16);
      return (c==='x' ? r :(r&0x3|0x8)).toString(16);
  });
  return uuid;
}