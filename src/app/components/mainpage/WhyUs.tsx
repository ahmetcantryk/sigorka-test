import React from 'react';
// import { FaShieldAlt, FaClock, FaHandshake, FaUserFriends } from 'react-icons/fa';

const WhyUs = () => {
  return (
    <section className="why-us">
      <div className="why-us__container container">
        <h3 className="section-title">
          <span>Neden Biz?</span>
        </h3>
        <div className="row flex-row">
          <div className="col-md-3 col-6 mb-3">
            <div className="why-us__item h-100">
              <div className="why-us__item-img">
                <img src="/images/why-us/etik.svg" className="img-fluid" alt="Etiğiz" />
              </div>
              <h4 className="why-us__item-title">Etiğiz</h4>
              <p className="why-us__item-desc">
                Sigorka her bir kullanıcısına en yüksek ahlaki değerlerimize uygun şekilde hizmet verir.
              </p>
            </div>
          </div>

          <div className="col-md-3 col-6 mb-3">
            <div className="why-us__item h-100">
              <div className="why-us__item-img">
                <img src="/images/why-us/seffaf.svg" className="img-fluid" alt="Şeffafız" />
              </div>
              <h4 className="why-us__item-title">Şeffafız</h4>
              <p className="why-us__item-desc">
                Açık ve dürüst olmaya inandığımız için şeffaflık markamızın özüdür.
              </p>
            </div>
          </div>

          <div className="col-md-3 col-6 mb-3">
            <div className="why-us__item h-100">
              <div className="why-us__item-img">
                <img src="/images/why-us/sorumlu.svg" className="img-fluid" alt="Size Karşı Sorumluyuz" />
              </div>
              <h4 className="why-us__item-title">Size Karşı Sorumluyuz</h4>
              <p className="why-us__item-desc">
                Sorumluluk bilinci markamızın temel taşlarındandır ve taahhütümüzü yansıtır.
              </p>
            </div>
          </div>

          <div className="col-md-3 col-6 mb-3">
            <div className="why-us__item h-100">
              <div className="why-us__item-img">
                <img src="/images/why-us/profesyonel.svg" className="img-fluid" alt="Profesyonel ve Bilgiliyiz" />
              </div>
              <h4 className="why-us__item-title">Profesyonel ve Bilgiliyiz</h4>
              <p className="why-us__item-desc">
                Sigorka Ailesi sürekli öğrenme kültürünü teşvik eder.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs; 