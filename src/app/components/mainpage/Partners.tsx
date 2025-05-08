import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
const Partners = () => {
  return (
    <section className="partners">
      <div className="partners__container container">
        <h3 className="section-title"><span>Anlaşmalı Sigorta Şirketleri</span></h3>
        <div className="row flex-row flex-nowrap flex-sm-wrap">
          <div className="col-md-3 col-4">
            <Link href="/anlasmali-sigorta-sirketleri/bereket-sigorta" target="_self" className="partners__item">
              <Image src="/images/partners/bereket-sigorta.png"
                 className="partners__item-img"
                alt="Bereket Sigorta" width={114} height={29} />
            </Link>
          </div>
          <div className="col-md-3 col-4">
            <Link href="/anlasmali-sigorta-sirketleri/hdi-katilim-sigorta" target="_self" className="partners__item">
              <Image src="/images/partners/hdi-katilim.png"
                 className="partners__item-img"
                alt="HDI Katılım Sigorta" width={77} height={77} />
            </Link>
          </div>
          <div className="col-md-3 col-4">
            <Link href="/anlasmali-sigorta-sirketleri/katilim-emeklilik" target="_self" className="partners__item">
              <Image src="/images/partners/katilim-emeklilik.png"
                 className="partners__item-img"
                alt="Katılım Emeklilik" width={151} height={35} />
            </Link>
          </div>
          <div className="w-100"> </div>
          <div className="col-md-3 col-4">
            <Link href="/anlasmali-sigorta-sirketleri/neova-katilim-sigorta" target="_self" className="partners__item">
              <Image src="/images/partners/neova.png"
                 className="partners__item-img"
                alt="Neova Sigorta" width={200} height={66} />
            </Link>
          </div>
          <div className="col-md-3 col-4">
            <Link href="/anlasmali-sigorta-sirketleri/turkiye-katilim-sigorta" target="_self" className="partners__item">
              <Image src="/images/partners/turkiye-katilim.png"
                 className="partners__item-img"
                alt="Türkiye Katılım Sigorta" width={137} height={63} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners; 