import React from 'react';

const CallCenter: React.FC = () => (
  <section className="call-center">
    <div className="call-center__container container">
      <div className="call-center__icon">
        <img
          src="/images/icon-call-center.svg"
          className="img-fluid"
          alt="Müşteri Hizmetleri"
        />
      </div>
      <div className="call-center__desc">
        <p>
          7 gün 24 saat boyunca<br />
          her türlü soru ve yorumlarınız için:
        </p>
      </div>
      <div className="call-center__cta">
        <h4>Müşteri Hizmetleri Merkezi</h4>
        <h5><a href="tel:08504040404">0 850 404 04 04</a></h5>
      </div>
    </div>
  </section>
);

export default CallCenter; 