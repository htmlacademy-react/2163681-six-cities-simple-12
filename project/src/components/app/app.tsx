import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {AppPageRoutes} from '../../const';
import MainPage from '../../pages/main-page/main-page';
import LoginPage from '../../pages/login-page/login-page';
import PropertyPage from '../../pages/property-page/property-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';

type AppHomePageProps = {
  amountRentalOffers: number;
}

function App({amountRentalOffers}: AppHomePageProps):JSX.Element
{
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppPageRoutes.Main}
          element={<MainPage amountRentalOffers={amountRentalOffers}/>}
        />
        <Route
          path={AppPageRoutes.Login}
          element={<LoginPage/>}
        />
        <Route
          path={AppPageRoutes.Room}
          element={<PropertyPage/>}
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
