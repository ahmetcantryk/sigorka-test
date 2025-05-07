'use client';

import { useEffect, useRef } from 'react';
import Script from 'next/script';

declare global {
  interface Window {
    $: any;
    jQuery: any;
  }
}

const campaignsData = [
  {
    id: 1,
    title: "1.200 TL değerinde EDİS erken uyarı sistemi hediyeli Konut Sigortaları",
    description: "Konut Sigortanızı sigorka.comda yaptırın, 1.200 TLlik EDİS erken uyarı sistemi ile depremden bir adım önde olun.",
    image: "/images/campaigns/konut-edis.jpg",
    link: "/konut-edis-kampanyasi",
    alt: "Edis Konut Kampanyası"
  },
  {
    id: 2,
    title: "Katılım Tamamlayıcı Sağlık Sigortası Ayda 229 TLden Başlayan Fiyatlarla!",
    description: "Sağlıkta güvenceyi ertelemeyin! Katılım tamamlayıcı sağlık sigortalarıyla riskleri unutun, üstelik ayda 229 TLden başlayan fiyatlarla sahip olma fırsatını yakalayın.",
    image: "/images/campaigns/tss-kampanyasi.jpg",
    link: "/tss-kampanyasi",
    alt: "Katılım Tamamlayıcı Sağlık Sigortası Kampanyası"
  },
  {
    id: 3,
    title: "1000 TLlik yakıt çeki hediye!",
    description: "Katılım Kasko Sigortası yaptırana 1000 TLlik akaryakıt çeki kazanma fırsatı.",
    image: "/images/campaigns/yakit-ceki.jpg",
    link: "/yakit-ceki",
    alt: "Yakıt Çeki Kampanyası"
  },
  {
    id: 4,
    title: "750 TLlik A101 çeki hediye!",
    description: "Katılım Konut Sigortası yaptırana A101den 750 TLlik hediye çeki kazanma fırsatı.",
    image: "/images/campaigns/a101-hediye-ceki.jpg",
    link: "/a101-hediye-ceki",
    alt: "A101den Hediye Çeki Kampanyası"
  }
];

const Campaigns = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadCarousel = async () => {
      if (typeof window !== "undefined" && sliderRef.current) {
        try {
          const jQuery = (await import("jquery")).default;
          window.$ = window.jQuery = jQuery;
          require("owl.carousel");

          jQuery(sliderRef.current).owlCarousel({
            loop: true,
            margin: 20,
            nav: true,
            dots: true,
            autoplay: true,
            autoplayTimeout: 5000,
            autoplayHoverPause: true,
            navText: [
              '<span class="icon-angle-left"></span>',
              '<span class="icon-angle-right"></span>'
            ],
            responsive: {
              0: {
                items: 1
              }
            }
          });
        } catch (error) {
          console.error("Carousel yüklenirken hata oluştu:", error);
        }
      }
    };

    loadCarousel();
  }, []);

  return (
    <>
      <Script src="/owl-carousel/owl.carousel.min.js" strategy="afterInteractive" />
      <link rel="stylesheet" href="/owl-carousel/owl.carousel.min.css" />
      <link rel="stylesheet" href="/owl-carousel/owl.theme.default.min.css" />

      <section className="campaigns">
        <div className="campaigns__container container">
          <h3 className="section-title"><span>Kampanyalar</span></h3>
          <div ref={sliderRef} className="campaigns__slider owl-carousel owl-theme">
            {campaignsData.map((campaign) => (
              <div key={campaign.id} className="campaigns__item">
                <div className="row">
                  <div className="col-md-5">
                    <a className="campaigns__item-img h-100" href={campaign.link} target="_self">
                      <img src={campaign.image} alt={campaign.alt} />
                    </a>
                  </div>
                  <div className="col-md-7">
                    <div className="campaigns__item-content h-100">
                      <h4>{campaign.title}</h4>
                      <p>{campaign.description}</p>
                      <a href={campaign.link} target="_self">
                        Detaylı Bilgi <span className="icon-arrow-right"></span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Campaigns; 