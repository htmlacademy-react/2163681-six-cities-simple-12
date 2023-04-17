import {OffersType} from '../types/offersType';

export const offers: OffersType [] = [
  {
    bedrooms: 3,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      },
      name: 'Amsterdam'
    },
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    goods: [
      'Heating'
    ],
    host: {
      avatarUrl: 'img/avatar-angelina.jpg',
      id: 3,
      isPro: true,
      name: 'Angelina'
    },
    id: 1,
    images: [
      'img/room.jpg',
      'img/apartment-01.jpg'
    ],
    isPremium: false,
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 8
    },
    maxAdults: 4,
    previewImage: 'img/room.jpg',
    price: 120,
    rating: 3.2,
    title: 'Beautiful & luxurious studio at great location',
    type: 'apartment'
  },

  {
    bedrooms: 2,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      },
      name: 'Amsterdam'
    },
    description: 'Green Globe certified Hilton Seychelles Labriz Resort & Spa is located on Silhouette Island. It offers spacious, fully equipped villas with a private terrace.',
    goods: [
      'Heating',
      'Washing machine',
      'Towels',
      'Coffee machine'
    ],
    host: {
      avatarUrl: 'img/avatar-angelina.jpg',
      id: 4,
      isPro: false,
      name: 'Eugene'
    },
    id: 2,
    images: [
      'img/apartment-01.jpg'
    ],
    isPremium: false,
    location: {
      latitude: 52.3609553943508,
      longitude: 4.85309666406198,
      zoom: 8
    },
    maxAdults: 3,
    previewImage: 'img/apartment-01.jpg',
    price: 180,
    rating: 3.8,
    title: 'Hilton Seychelles Labriz Resort & Spa',
    type: 'hotel'
  },

  {
    bedrooms: 2,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      },
      name: 'Amsterdam'
    },
    description: 'B&B VILLA KiKi is located in Anse-à-la-Mouche Bay. The hotel features a restaurant, shared lounge, bar, garden and terrace. The windows offer sea views.',
    goods: [
      'Towels',
      'Heating',
      'Coffee machine',
      'Baby seat',
      'Kitchen',
      'Dishwasher',
      'Cabel TV'
    ],
    host: {
      avatarUrl: 'img/avatar-angelina.jpg',
      id: 5,
      isPro: true,
      name: 'Alexandra'
    },
    id: 3,
    images: [
      'img/apartment-02.jpg',
      'img/room.jpg'
    ],
    isPremium: false,
    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
      zoom: 8
    },
    maxAdults: 2,
    previewImage: 'img/apartment-02.jpg',
    price: 190,
    rating: 4.3,
    title: 'VILLA KIKI Seychelles',
    type: 'villa'
  },

  {
    bedrooms: 4,
    city: {
      location: {
        latitude: 52.379916,
        longitude: 4.896668,
        zoom: 10
      },
      name: 'Amsterdam'
    },
    description: 'Set in Mahe, a few steps from Anse Royale Beach, Laïla, Seychelles, a Tribute Portfolio Resort offers accommodation with a fitness centre, free private parking, a restaurant and a bar.',
    goods: [
      'Towels',
      'Heating',
      'Coffee machine',
      'Baby seat',
      'Kitchen',
      'Dishwasher',
      'Cabel TV',
      'Wi-Fi',
      'Washing machine'
    ],
    host: {
      avatarUrl: 'img/avatar-angelina.jpg',
      id: 6,
      isPro: false,
      name: 'Michael'
    },
    id: 4,
    images: [
      'img/apartment-03.jpg',
      'img/studio-01.jpg'
    ],
    isPremium: false,
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 8
    },
    maxAdults: 4,
    previewImage: 'img/apartment-03.jpg',
    price: 200,
    rating: 4.2,
    title: 'Laïla, Seychelles, a Tribute Portfolio Resort',
    type: 'apartment'
  },
];
