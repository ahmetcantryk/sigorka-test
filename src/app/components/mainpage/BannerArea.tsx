'use client';

import { useEffect, useRef } from 'react';
import Script from 'next/script';
import '../styles/banner-area.css';

const bannerData = [
  {
    id: 1,
    title: "Katılım Sigortalarının En Avantajlı Ürünleri Bir Tık Uzağında",
    description: "Hemen Sigorka.com'a tıklayarak ihtiyacın olan tüm Katılım Sigorta ürünlerine bir tık ile ulaşmak artık mümkün.",
    link: "/aracim",
    buttonText: "Hemen Teklif Al",
    image: "/images/banner-area-phone.png",
    image2x: "/images/banner-area-phone@2x.png"
  },
  {
    id: 2,
    title: "İhtiyacın Olan Katılım Sigorta Ürünlerini Anında Karşılaştır ve Teklif Al.",
    description: "Sigorka.com sadece Katılım Sigorta ürünlerini karşılaştırmalı olarak sunar, anında poliçe tekliflerini sıralar. Artık tüm sigorta ürünleri içinde kaybolmak zorunda değilsin, Katılım Sigortaları arasından sana en uygun olanını anında seçebilirsin.",
    link: "/sagligim",
    buttonText: "Hemen Teklif Al",
    image: "/images/banner-area-phone.png",
    image2x: "/images/banner-area-phone@2x.png"
  },
  {
    id: 3,
    title: "Sigorka.com Canlı Destek Hattımıza Bağlan, Tekliflerini Anında Gönderelim.",
    description: "Sigorka.com'da görüntülediğin tekliflerden sana en uygun olanına karar mı veremedin? Hemen platformun içinden canlı olarak Sigorka.com danışmanımıza bağlan. Anında yazışarak ihtiyaçlarını birlikte belirleyelim. İhtiyaçlarına en uygun ve avantajlı \"kişiye özel poliçe tekliflerini\" anında gönderelim.",
    link: "/yuvam",
    buttonText: "Hemen Teklif Al",
    image: "/images/banner-area-phone.png",
    image2x: "/images/banner-area-phone@2x.png"
  }
];

const BannerArea = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const customDotsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initCarousel = async () => {
      if (typeof window !== "undefined" && sliderRef.current) {
        try {
          const jQuery = (await import("jquery")).default;
          window.$ = window.jQuery = jQuery;
          require("owl.carousel");

          const $slider = jQuery(sliderRef.current);
          
          // Özel dots oluştur
          const dotsHtml = bannerData.map((_, index) => 
            `<button role="button" class="owl-dot">${index + 1}</button>`
          ).join('');
          jQuery('#customDots').html(dotsHtml);
          
          $slider.owlCarousel({
            loop: true,
            margin: 0,
            nav: false,
            dots: true,
            dotsContainer: '#customDots',
            autoplay: true,
            autoplayTimeout: 5000,
            autoplayHoverPause: true,
            responsive: {
              0: {
                items: 1
              }
            }
          });

          // Aktif dot'u güncelle
          $slider.on('changed.owl.carousel', function(event) {
            const currentItem = event.item.index - event.relatedTarget._clones.length / 2;
            const actualIndex = (currentItem + bannerData.length) % bannerData.length;
            jQuery('#customDots .owl-dot').removeClass('active');
            jQuery('#customDots .owl-dot').eq(actualIndex).addClass('active');
          });

          // İlk dot'u aktif yap
          jQuery('#customDots .owl-dot').first().addClass('active');
        } catch (error) {
          console.error("Carousel yüklenirken hata oluştu:", error);
        }
      }
    };

    initCarousel();
  }, []);

  return (
    <>
    

      <section className="banner-area">
        <div className="banner-area__container container">
          <h3 className="section-title">
            <span>Üç Kolay Adımda "Güvenli Geleceğe Katılım"</span>
          </h3>
          <div ref={sliderRef} className="banner-area__slider owl-carousel owl-theme">
            {bannerData.map((banner) => (
              <div key={banner.id} className="banner-area__item">
                <div className="row">
                  <div className="col-xl-6 col-lg-7">
                    <div className="banner-area__item-content">
                      <h3>{banner.title}</h3>
                      <p>{banner.description}</p>
                      <a href={banner.link} target="_self" className="btn btn-primary">
                        {banner.buttonText}
                      </a>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-5">
                    <div className="banner-area__item-img">
                      <img
                        src={banner.image}
                        srcSet={`${banner.image2x} 2x`}
                        alt="Bir tık uzağında!"
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div id="customDots" ref={customDotsRef} className="owl-dots"></div>
        </div>
      </section>
    </>
  );
};

export default BannerArea; 