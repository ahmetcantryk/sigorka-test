import Banner from '../components/common/Banner';
import Breadcrumb from '../components/common/Breadcrumb';
import CallCenter from '../components/common/CallCenter';
import React from 'react';
import '../../styles/subpage.min.css';

export const metadata = {
  title: "Sigorka Hakkında - Kimiz, Ne Yapıyoruz? | Sigorka",
  description: "Katılım sigortacılığını dijitalle buluşturan Sigorka markasının kimliği hakkında tüm detaylı bilgilere bu sayfa üzerinden kolayca ulaşabilirsiniz.",
  alternates: {
    canonical: "https://sigorka.com/biz-kimiz"
  },
  openGraph: {
    title: "Sigorka Hakkında - Kimiz, Ne Yapıyoruz? | Sigorka",
    description: "Katılım sigortacılığını dijitalle buluşturan Sigorka markasının kimliği hakkında tüm detaylı bilgilere bu sayfa üzerinden kolayca ulaşabilirsiniz.",
    url: "https://sigorka.com/biz-kimiz",
    type: "website"
  },
  twitter: {
    title: "Sigorka Hakkında - Kimiz, Ne Yapıyoruz? | Sigorka",
    description: "Katılım sigortacılığını dijitalle buluşturan Sigorka markasının kimliği hakkında tüm detaylı bilgilere bu sayfa üzerinden kolayca ulaşabilirsiniz.",
    card: "summary_large_image"
  }
};

export default function BizKimizPage() {
  return (
    <>
      <Banner title1="Hakkımızda" title2="Biz Kimiz?" size="sm" />
      <section className="page-content">
        <div className="container">
          <Breadcrumb items={[
            { name: "Ana Sayfa", href: "/" },
            { name: "Hakkımızda" },
            { name: "Biz Kimiz?" }
          ]} />
          <div className="text-content">
            <h3>Güvenli geleceğe katılım.</h3>
            <h4>
              Türkiye'nin ilk ve tek online katılım sigortası platformu
              Sigorka.com'a hoş geldiniz.
            </h4>

            <p>
              Kasko, Trafik, DASK, Konut, Yangın Sigortaları ve Sağlık Sigortası
              branşlarında ihtiyacınıza uygun tasarlanmış karşılaştırmalı sigorta
              tekliflerini <strong>online olarak</strong> veya
              <strong>çağrı merkezi</strong> aracılığıyla sunar. Bunu yaparken, en
              yeni ve ileri teknolojileri kullanır.
            </p>
            <ul className="prop-list prop-list--w100">
              <li>
                Her zaman doğru bilgiyi sağlama misyonuyla, şeffaflık ve
                tarafsızlık ilkesiyle siz müşterilerinin yanında yer alır.
              </li>
              <li>
                Poliçelerinizi, online platform üzerinde hazırlayarak, fiyat
                tekliflerini anında görebilmenizi sağlar.
              </li>
            </ul>
            <p>
              Sigorta ürünlerinizi bu sayede hızlı, pratik ve güvenli bir şekilde
              satın alabilirsiniz. <strong>Hem de 7/24!</strong>
            </p>
            <h4>
              Sektörün önde gelen katılım sigorta kuruluşlarının ürünlerini kendi
              çatısı altında sunan<br />
              Sigorka.com'un temelleri 2023 yılında atılmıştır.
            </h4>
            <p>
              Bir ARMOR KATILIM SİGORTA VE REASÜRANS BROKERLİĞİ A.Ş. markası olan
              Sigorka.com, Türkiye pazarında katılım sigortacılığının lideri olma
              yolunda ilerlemektedir.
            </p>
            <p>
              Sigorka.com, yurt dışı merkezli birçok reasürans şirketlerinin yanı
              sıra,
            </p>
            <div className="row custom-gutters flex-row mb-4">
              <div className="col-md-3 col-xl-2 col-6 mb-3">
                <a href="#" className="partners__item">
                  <img
                    src="/images/partners/bereket-sigorta.png"
                    srcSet="/images/partners/bereket-sigorta@2x.png 2x"
                    className="partners__item-img"
                    alt="Bereket Sigorta"
                  />
                </a>
              </div>
              <div className="col-md-3 col-xl-2 col-6 mb-3">
                <a href="#" className="partners__item">
                  <img
                    src="/images/partners/hdi-katilim.png"
                    srcSet="/images/partners/hdi-katilim@2x.png 2x"
                    className="partners__item-img"
                    alt="HDI Katılım Sigorta"
                  />
                </a>
              </div>
              <div className="col-md-3 col-xl-2 col-6 mb-3">
                <a href="#" className="partners__item">
                  <img
                    src="/images/partners/katilim-emeklilik.png"
                    srcSet="/images/partners/katilim-emeklilik@2x.png 2x"
                    className="partners__item-img"
                    alt="Katılım Emeklilik"
                  />
                </a>
              </div>
              <div className="col-md-3 col-xl-2 col-6 mb-3">
                <a href="#" className="partners__item">
                  <img
                    src="/images/partners/turkiye-katilim.png"
                    srcSet="/images/partners/turkiye-katilim@2x.png 2x"
                    className="partners__item-img"
                    alt="Türkiye Katılım Sigorta"
                  />
                </a>
              </div>
            </div>
            <p>
              gibi öncü Türk katılım sigorta şirketleri ile güçlü iş birliği
              içindedir.
            </p>
          </div>
        </div>
      </section>
      <CallCenter />
    </>
  );
} 