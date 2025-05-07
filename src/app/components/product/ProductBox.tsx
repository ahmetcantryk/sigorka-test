import React from 'react';

interface ProductBoxProps {
  title: string;
  img: string;
  alt: string;
  link: string;
}

const ProductBox: React.FC<ProductBoxProps> = ({ title, img, alt, link }) => (
  <a href={link} className="product-box">
    <div className="product-box__img">
      <img src={img} className="img-fluid" alt={alt} />
    </div>
    <h4 className="product-box__title" dangerouslySetInnerHTML={{ __html: title }} />
    <span className="product-box__link">
      Teklif Al <span className="icon-arrow-right"></span>
    </span>
  </a>
);

export default ProductBox; 