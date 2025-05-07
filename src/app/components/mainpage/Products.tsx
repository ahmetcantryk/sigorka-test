'use client';

import { useEffect, useRef } from 'react';
import Script from 'next/script';

declare global {
  interface Window {
    $: any;
    jQuery: any;
  }
}

const Products = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const products = [
    {
      id: 1,
      title: "Yabancı Sağlık Sigortası",
      image: "/images/product-icons/yabanci-saglik-sigortasi.svg",
      link: "/yabanci-saglik-sigortasi"
    },
    {
      id: 2,
      title: "Zorunlu Trafik Sigortası",
      image: "/images/product-icons/zorunlu-trafik-sigortasi.svg",
      link: "/zorunlu-trafik-sigortasi"
    },
    {
      id: 3,
      title: "Ferdi Kaza Sigortası",
      image: "/images/product-icons/ferdi-kaza-sigortasi.svg",
      link: "/ferdi-kaza-sigortasi"
    },
    {
      id: 4,
      title: "Tamamlayıcı Sağlık Sigortası",
      image: "/images/product-icons/tamamlayici-saglik-sigortasi.svg",
      link: "/tamamlayici-saglik-sigortasi"
    },
    {
      id: 5,
      title: "Zorunlu Deprem Sigortası",
      image: "/images/product-icons/dask.svg",
      link: "/dask"
    },
    {
      id: 6,
      title: "Kasko Sigortası",
      image: "/images/product-icons/kasko-sigortasi.svg",
      link: "/kasko-sigortasi"
    },
    {
      id: 7,
      title: "Seyahat Sağlık Sigortası",
      image: "/images/product-icons/seyahat-saglik-sigortasi.svg",
      link: "/seyahat-saglik-sigortasi"
    },
    {
      id: 8,
      title: "Konut Sigortası",
      image: "/images/product-icons/konut-sigortasi.svg",
      link: "/konut-sigortasi"
    },
    {
      id: 9,
      title: "İMM Sigortası",
      image: "/images/product-icons/imm-sigortasi.svg",
      link: "/imm"
    },
    {
      id: 10,
      title: "Özel Sağlık Sigortası",
      image: "/images/product-icons/ozel-saglik-katilim-sigortasi.svg",
      link: "/ozel-saglik-sigortasi"
    }
  ];

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
                items: 2
              },
              576: {
                items: 2
              },
              768: {
                items: 3
              },
              992: {
                items: 4
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
    
      <section className="products">
        <div className="products__container container">
          <h3 className="section-title"><span>Ürünler</span></h3>
          <div ref={sliderRef} className="products__slider owl-carousel owl-theme">
            {products.map((product) => (
              <a key={product.id} href={product.link} className="products__slider-item" target="_self">
                <div className="products__slider-img">
                  <img src={product.image} className="img-fluid" alt={product.title} />
                </div>
                <h4>{product.title}</h4>
                <span className="products__slider-link">Teklif Al <span className="icon-arrow-right"></span></span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Products; 