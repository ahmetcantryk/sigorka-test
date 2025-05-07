import React from 'react';

const Partners = () => {
  return (
    <section className="partners">
      <div className="partners__container container">
        <h3 className="section-title"><span>Anlaşmalı Sigorta Şirketleri</span></h3>
        <div className="row flex-row flex-nowrap flex-sm-wrap">
          <div className="col-md-3 col-4">
            <a href="/anlasmali-sigorta-sirketleri/bereket-sigorta" target="_self" className="partners__item">
              <img src="/images/partners/bereket-sigorta.png"
                srcSet="/images/partners/bereket-sigorta@2x.png 2x" className="partners__item-img"
                alt="Bereket Sigorta" />
            </a>
          </div>
          <div className="col-md-3 col-4">
            <a href="/anlasmali-sigorta-sirketleri/hdi-katilim-sigorta" target="_self" className="partners__item">
              <img src="/images/partners/hdi-katilim.png" srcSet="/images/partners/hdi-katilim@2x.png 2x"
                className="partners__item-img" alt="HDI Katılım Sigorta" />
            </a>
          </div>
          <div className="col-md-3 col-4">
            <a href="/anlasmali-sigorta-sirketleri/katilim-emeklilik" target="_self" className="partners__item">
              <img src="/images/partners/katilim-emeklilik.png"
                srcSet="/images/partners/katilim-emeklilik@2x.png 2x" className="partners__item-img"
                alt="Katılım Emeklilik" />
            </a>
          </div>
          <div className="w-100"> </div>
          <div className="col-md-3 col-4">
            <a href="/anlasmali-sigorta-sirketleri/neova-katilim-sigorta" target="_self" className="partners__item">
              <img src="/images/partners/neova.png" className="partners__item-img" alt="Neova Sigorta" />
            </a>
          </div>
          <div className="col-md-3 col-4">
            <a href="/anlasmali-sigorta-sirketleri/turkiye-katilim-sigorta" target="_self" className="partners__item">
              <img src="/images/partners/turkiye-katilim.png"
                srcSet="/images/partners/turkiye-katilim@2x.png 2x" className="partners__item-img"
                alt="Türkiye Katılım Sigorta" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners; 