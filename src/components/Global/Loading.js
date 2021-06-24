import loading from '../../assets/images/loading.gif';

import '../../assets/scss/global/_loading.scss';

const Loading = () => {
  return (
    <div id="loading">
      <span> Encore un instant, le contenu arrive ... </span>
      <img src={ loading } alt="GIF de chargement"/>
    </div>
  );
}

export default Loading;
