import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {AppPageRoutes} from '../../const';
import MainPage from '../../pages/main-page/main-page';
import LoginPage from '../../pages/login-page/login-page';
import PropertyPage from '../../pages/property-page/property-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import {OffersType} from '../../types/offersType';
import {ReviewsType} from '../../types/reviewsType';

type AppHomePageProps = {
  amountRentalOffers: number;
  offers: OffersType [];
  reviews: ReviewsType [];
}

function App({amountRentalOffers, offers, reviews}: AppHomePageProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppPageRoutes.Main}
          element={<MainPage amountRentalOffers={amountRentalOffers} offers={offers}/>}
        />
        <Route
          path={AppPageRoutes.Login}
          element={<LoginPage/>}
        />
        <Route
          path={AppPageRoutes.Room}
          element={<PropertyPage offers={offers} reviews={reviews}/>}
        />
        <Route
          path="*"
          element={<NotFoundPage/>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
