import React from 'react';

type BannerProps = {
  title1: string;
  title2?: string;
  size?: 'sm' | 'md' | 'lg';
  bgImage?: string;
  icon?: string;
  icon2x?: string;
};

const Banner: React.FC<BannerProps> = ({ title1, title2, size = 'sm', bgImage, icon, icon2x }) => (
  <section
    className={`cover cover--${size}`}
    style={bgImage ? { backgroundImage: `url(${bgImage})` } : undefined}
  >
    <div className="container cover__container">
      {icon && (
        <img
          src={icon}
          srcSet={icon2x ? `${icon2x} 2x` : undefined}
          className="cover__icon img-fluid"
          alt={title2 || title1}
        />
      )}
      <h1 className="cover__title-1">{title1}</h1>
      {title2 && <h2 className="cover__title-2">{title2}</h2>}
    </div>
  </section>
);

export default Banner; 