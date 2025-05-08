import React from 'react';
import Image from 'next/image';

const CallCenter: React.FC = () => (
  <section className="call-center">
    <div className="call-center__container container">
      <div className="call-center__icon">
        <Image
          src="/images/call-center.png"
          alt="Call Center"
          width={400}
          height={400}
          className="img-fluid"
          style={{ objectFit: 'cover', width: '100%', height: 'auto' }}
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