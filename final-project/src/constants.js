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

  export const InitialCities = {
    [CityEnum.YELLOW]: {
      cards: InitialCards,
      colour: CityEnum.YELLOW,
      total: 0
    },
    [CityEnum.BLUE]: {
      cards: InitialCards,
      colour: CityEnum.BLUE,
      total: 0
    },
    [CityEnum.RED]: {
      cards: InitialCards,
      colour: CityEnum.RED,
      total: 0
    },
    [CityEnum.WHITE]: {
      cards: InitialCards,
      colour: CityEnum.WHITE,
      total: 0
    },
    [CityEnum.GREEN]: {
      cards: InitialCards,
      colour: CityEnum.GREEN,
      total: 0
    },
    [CityEnum.PURPLE]: {
      cards: InitialCards,
      colour: CityEnum.PURPLE,
      total: 0
    }
  }