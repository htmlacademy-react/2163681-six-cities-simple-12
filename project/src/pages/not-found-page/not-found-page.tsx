import LogoComponent from '../../components/app/logo-component/logo-component';
import CredentialComponent from '../../components/app/credential-component/credential-component';

function NotFoundPage() {
  return (
    <div>
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

      <div>
        <p style={notFound}>404 Not Found</p>
      </div>
    </div>
  );
}

const notFound = {
  fontSize: '40px',
  fontWeight: '500',
  marginLeft: '40%',
  marginTop: '20%'
};

export default NotFoundPage;
