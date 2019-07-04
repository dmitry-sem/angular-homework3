import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

export interface IHotel {
  _id: number;
  type: HotelType;

  img: string;
  address: string;
  phone: number;
  weather: IWeather;
  social_info: ISocialInfo;
}

export interface IWeather {
  title: string;
  icon: string;
  water: number;
  temperature: number;
}

export interface ISocialInfo {
  title: string;
  img: string;
  followers: number;
  following: number;
}

export enum HotelType {
  ONE_STAR = 'one',
  TWO_STAR = 'two',
  THREE_STAR = 'three',
  FOUR_STAR = 'four',
  FIVE_STAR = 'five'
}

const hotels: IHotel[] = [
  {
    _id: 1,
    type: HotelType.TWO_STAR,
    img: 'assets/img/1/1.jpg',
    phone: 1111111111,
    address: 'Address 1',
    weather: {
      title: 'Weather 1',
      icon: '',
      water: 1,
      temperature: 1
    },
    social_info: {
      title: 'Social info 1',
      img: 'assets/img/1/2.jpg',
      followers: 1,
      following: 1
    }
  },
  {
    _id: 2,
    type: HotelType.TWO_STAR,
    img: 'assets/img/2/1.jpg',
    phone: 2222222222,
    address: 'Address 2',
    weather: {
      title: 'Weather 2',
      icon: '',
      water: 2,
      temperature: 2
    },
    social_info: {
      title: 'Social info 2',
      img: 'assets/img/2/2.jpg',
      followers: 2,
      following: 2
    }
  },
  {
    _id: 3,
    type: HotelType.THREE_STAR,
    img: 'assets/img/3/1.jpg',
    phone: 3333333333,
    address: 'Address 3',
    weather: {
      title: 'Weather 3',
      icon: '',
      water: 3,
      temperature: 3
    },
    social_info: {
      title: 'Social info 3',
      img: 'assets/img/3/2.jpg',
      followers: 3,
      following: 3
    }
  },
  {
    _id: 4,
    type: HotelType.FOUR_STAR,
    img: 'assets/img/4/1.jpg',
    phone: 4444444444,
    address: 'Address 4',
    weather: {
      title: 'Weather 4',
      icon: '',
      water: 4,
      temperature: 4
    },
    social_info: {
      title: 'Social info 4',
      img: 'assets/img/4/2.jpg',
      followers: 4,
      following: 4
    }
  },
  {
    _id: 5,
    type: HotelType.FIVE_STAR,
    img: 'assets/img/5/1.jpg',
    phone: 55555555555,
    address: 'Address 5',
    weather: {
      title: 'Weather 5',
      icon: '',
      water: 5,
      temperature: 5
    },
    social_info: {
      title: 'Social info 5',
      img: 'assets/img/5/2.jpg',
      followers: 5,
      following: 5
    }
  },
  {
    _id: 6,
    type: HotelType.THREE_STAR,
    img: 'assets/img/6/1.jpg',
    phone: 66666666666,
    address: 'Address 6',
    weather: {
      title: 'Weather 6',
      icon: '',
      water: 6,
      temperature: 6
    },
    social_info: {
      title: 'Social info 6',
      img: 'assets/img/6/2.jpg',
      followers: 6,
      following: 6
    }
  },
  {
    _id: 7,
    type: HotelType.ONE_STAR,
    img: 'assets/img/7/1.jpg',
    phone: 777777777,
    address: 'Address 7',
    weather: {
      title: 'Weather 7',
      icon: '',
      water: 7,
      temperature: 7
    },
    social_info: {
      title: 'Social info 7',
      img: 'assets/img/7/2.jpg',
      followers: 7,
      following: 7
    }
  },
  {
    _id: 8,
    type: HotelType.THREE_STAR,
    img: 'assets/img/8/1.jpg',
    phone: 88888888,
    address: 'Address 8',
    weather: {
      title: 'Weather 8',
      icon: '',
      water: 8,
      temperature: 8
    },
    social_info: {
      title: 'Social info 8',
      img: 'assets/img/8/2.jpg',
      followers: 8,
      following: 8
    }
  },
  {
    _id: 9,
    type: HotelType.THREE_STAR,
    img: 'assets/img/9/1.jpg',
    phone: 99999999999,
    address: 'Address 9',
    weather: {
      title: 'Weather 9',
      icon: '',
      water: 9,
      temperature: 9
    },
    social_info: {
      title: 'Social info 9',
      img: 'assets/img/9/2.jpg',
      followers: 9,
      following: 9
    }
  }
];


export const hotels$: Observable<IHotel[]> = of(hotels).pipe(
  delay(1500)
);
