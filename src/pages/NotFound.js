import notfound from '../assets/images/notfound.png';

import '../assets/scss/pages/not-found.scss';

const NotFound = () => {
  return (
    <div className="container">
      <img src={ notfound } alt="Image Erreur 404" />
    </div>
  );
};

export default NotFound;
