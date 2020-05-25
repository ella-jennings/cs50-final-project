export const CityEnum = {
    YELLOW: "yellow",
    RED: "red",
    BLUE: "blue",
    PURPLE: "purple",
    GREEN: "green", 
    WHITE: "white"
}

export const Deal = "Deal";

export const GetInitialCards = () =>  {
  return {
    Deal1: {
        selected: false,
        value: Deal,
        reference: "Deal1",
    },
    Deal2: {
        selected: false,
        value: Deal,
        reference: "Deal2",
    },
    Deal3: {
        selected: false,
        value: Deal,
        reference: "Deal3",
    },
    2: {
        selected: false,
        value: 2,
        reference: 2,
    },
    3: {
        selected: false,
        value: 3,
        reference: 3,
    },
    4: {
        selected: false,
        value: 4,
        reference: 4,
    },
    5: {
        selected: false,
        value: 5,
        reference: 5,
    },
    6: {
        selected: false,
        value: 6,
        reference: 6,
    },
    7: {
        selected: false,
        value: 7,
        reference: 7,
    },
    8: {
        selected: false,
        value: 8,
        reference: 8,
    },
    9: {
        selected: false,
        value: 9,
        reference: 9,
    },
    10: {
        selected: false,
        value: 10,
        reference: 10,
    },
  }
}
  
export const InitialCities = {
  [CityEnum.YELLOW]: {
    cards: GetInitialCards(),
    colour: CityEnum.YELLOW,
    total: 0
  },
  [CityEnum.BLUE]: {
    cards: GetInitialCards(),
    colour: CityEnum.BLUE,
    total: 0
  },
  [CityEnum.RED]: {
    cards: GetInitialCards(),
    colour: CityEnum.RED,
    total: 0
  },
  [CityEnum.WHITE]: {
    cards: GetInitialCards(),
    colour: CityEnum.WHITE,
    total: 0
  },
  [CityEnum.GREEN]: {
    cards: GetInitialCards(),
    colour: CityEnum.GREEN,
    total: 0
  },
  [CityEnum.PURPLE]: {
    cards: GetInitialCards(),
    colour: CityEnum.PURPLE,
    total: 0
  }
}