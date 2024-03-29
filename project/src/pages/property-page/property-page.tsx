import LogoComponent from '../../components/logo-component/logo-component';
import CredentialComponent from '../../components/credential-component/credential-component';
import FeedbackFormComponent from '../../components/feedback-form-component/feedback-form-component';
import ReviewComponent from '../../components/review-component/review-component';
import {Navigate, useParams} from 'react-router-dom';
import {OffersType} from '../../types/offersType';
import {ReviewsType} from '../../types/reviewsType';
import {useState} from 'react';
import MapComponent from '../../components/map-component/map-component';
import OfferCardComponent from '../../components/offer-card-component/offer-card-component';

type PropertyPageProps = {
  offers: OffersType[];
  reviews: ReviewsType[];
}

type ImageProps = {
  image: string;
}

const ImageComponent = ({image}: ImageProps): JSX.Element => (
  <div className="property__image-wrapper">
    <img className="property__image" src={image} alt=""/>
  </div>);

const renderIsPro = (offer: OffersType | undefined): JSX.Element | undefined => {
  if (offer?.host.isPro) {
    return <span className="property__user-status">Pro</span>;
  }
};

function PropertyPage({offers, reviews}: PropertyPageProps) {
  const id = useParams().id;
  const [activeOffer, setActiveOffer] = useState<null | number>(null);
  const currentOffer: OffersType | undefined = offers.find((offer) => offer.id === Number(id));

  if (!currentOffer) {
    return <Navigate to="/404"/>;
  }

  const offersNearby: OffersType[] = offers.filter((offer) => offer.id !== currentOffer.id).slice(0, 3);

  return (
    <div className="page">
      <div style={{display: 'none'}}>
        <svg xmlns="http://www.w3.org/2000/svg">
          <symbol id="icon-arrow-select" viewBox="0 0 7 4">
            <path fillRule="evenodd" clipRule="evenodd" d="M0 0l3.5 2.813L7 0v1.084L3.5 4 0 1.084V0z"></path>
          </symbol>
          <symbol id="icon-bookmark" viewBox="0 0 17 18">
            <path
              d="M3.993 2.185l.017-.092V2c0-.554.449-1 .99-1h10c.522 0 .957.41.997.923l-2.736 14.59-4.814-2.407-.39-.195-.408.153L1.31 16.44 3.993 2.185z"
            >
            </path>
          </symbol>
          <symbol id="icon-star" viewBox="0 0 13 12">
            <path fillRule="evenodd" clipRule="evenodd"
              d="M6.5 9.644L10.517 12 9.451 7.56 13 4.573l-4.674-.386L6.5 0 4.673 4.187 0 4.573 3.549 7.56 2.483 12 6.5 9.644z"
            >
            </path>
          </symbol>
        </svg>
      </div>

      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <LogoComponent/>
            </div>
            <CredentialComponent/>
          </div>
        </div>
      </header>

      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {currentOffer.images.map((img: string) => (<ImageComponent image={img} key={img}/>)) || ''};
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              <div className="property__mark">
                <span>{currentOffer.type}</span>
              </div>
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {currentOffer.title}
                </h1>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: '80%'}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{currentOffer.rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {currentOffer.type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {currentOffer.bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {currentOffer.maxAdults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{currentOffer.price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {currentOffer.goods.map((good: string) => (
                    <li className="property__inside-item" key={good}>{good}</li>)) || ''}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="property__avatar user__avatar" src={currentOffer.host.avatarUrl} width="74"
                      height="74" alt="Host avatar"
                    />
                  </div>
                  <span className="property__user-name">{currentOffer.host.name}</span>
                  {renderIsPro(currentOffer)}
                </div>
                <div className="property__description">
                  <p className="property__text">{currentOffer.description}</p>
                </div>
              </div>
              <section className="property__reviews reviews">
                <h2 className="reviews__title">Reviews &middot;
                  <span className="reviews__amount">
                    {reviews.length}
                  </span>
                </h2>
                {reviews.map((review) => (<ReviewComponent review={review} key={review.id}/>))}
                <FeedbackFormComponent/>
              </section>
            </div>
          </div>
          <section className="property__map map" style={{width: '90%', marginLeft: '5%'}} >
            <MapComponent offers={[...offersNearby, currentOffer]} activeOffer={activeOffer}/>
          </section>
        </section>

        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              {offersNearby.map((offer) => (<OfferCardComponent offer={offer} setActiveOffer={setActiveOffer} key={offer.id}/>))};
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default PropertyPage;
