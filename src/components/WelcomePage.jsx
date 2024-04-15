
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

function ImageWithAlt({ src, alt, className }) {
  return <img loading="lazy" src={src} alt={alt} className={className} />;
}

ImageWithAlt.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
};

function WelcomePage(varPage) {
  return (
    <main className="main">
      <header className="flex gap-5 justify-between items-start self-start ml-auto whitespace-nowrap">
      <Link to="/SignUpPage" >
        <div className="flex flex-col text-base font-medium text-indigo-300 cursor-pointer left-[20.188rem] ">
          <div className="mt-5 underline">Skip</div>
        </div>
      </Link>
      
      </header>
      <ImageWithAlt src={varPage.cardImage} alt="Feature graphic" className="mt-24 w-full aspect-[1.49]" />
      <h1 className="mt-24 text-xl font-semibold text-zinc-800">
        {varPage.title}
      </h1>
      <p className="mt-6 text-base font-medium text-neutral-500">
      {varPage.para}
      </p>
      <Link to={varPage.redirect} >
        <ImageWithAlt src={varPage.nextIcon} alt="Burn icon" className="self-end mt-24 ml-auto aspect-square w-[60px]" />
      </Link>
    </main>
  );
}

export default WelcomePage;