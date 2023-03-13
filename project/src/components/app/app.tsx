import MainPage from '../../pages/main-page/main-page';

type AppHomePageProps = {
  amountRentalOffers: number;
}

function App({amountRentalOffers}: AppHomePageProps):JSX.Element
{
  return (
    <MainPage amountRentalOffers={amountRentalOffers} />
  );
}

export default App;
