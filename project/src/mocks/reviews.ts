import {ReviewsType} from '../types/reviewsType';

export const reviews: ReviewsType [] =
  [
    {
      comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
      date: 'Fri Mar 17 2023 12:41:16 GMT+0300 (Москва, стандартное время)',
      id: 1,
      rating: 4,
      user: {
        avatarUrl: 'img/avatar-max.jpg',
        id: 1,
        isPro: false,
        name: 'Oliver.conner'
      }
    },

    {
      comment: 'Wonderful apartment overlooking the mountains. You can watch the sunrise. The view from the terrace is amazing. There are two rooms on one floor. Very large terrace where you can have breakfast. Huge folding door to the terrace, it consists of three sections that move and form a large opening. The rooms are clean and the furniture is new. Everything has been completely removed. Internet is good. The hotel is suitable for a romantic getaway. Lots of singing birds and beautiful flowering trees. The hostess is very nice and hospitable, every day she brought a plate of fruit from her garden. The hotel is on a hill, you should definitely rent a car. I recommend this hotel for a romantic getaway.',
      date: 'Fri Apr 18 2022 13:11:10 GMT+0300 (Москва, стандартное время)',
      id: 2,
      rating: 3,
      user: {
        avatarUrl: 'img/avatar-max.jpg',
        id: 2,
        isPro: true,
        name: 'Max.adams'
      }
    }
  ];
