'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import './campaigns.css';

const campaignsData = [
  {
    id: 1,
    title: "1.200 TL değerinde EDİS erken uyarı sistemi hediyeli Konut Sigortaları",
    description: "Konut Sigortanızı sigorka.comda yaptırın, 1.200 TLlik EDİS erken uyarı sistemi ile depremden bir adım önde olun.",
    image: "/images/campaigns/konut-edis.jpg",
    link: "/kampanyalar/konut-edis-kampanyasi",
    alt: "Edis Konut Kampanyası"
  },
  {
    id: 2,
    title: "Katılım Tamamlayıcı Sağlık Sigortası Ayda 229 TLden Başlayan Fiyatlarla!",
    description: "Sağlıkta güvenceyi ertelemeyin! Katılım tamamlayıcı sağlık sigortalarıyla riskleri unutun, üstelik ayda 229 TLden başlayan fiyatlarla sahip olma fırsatını yakalayın.",
    image: "/images/campaigns/tss-kampanyasi.jpg",
    link: "/kampanyalar/tss-kampanyasi",
    alt: "Katılım Tamamlayıcı Sağlık Sigortası Kampanyası"
  },
  {
    id: 3,
    title: "1000 TLlik yakıt çeki hediye!",
    description: "Katılım Kasko Sigortası yaptırana 1000 TLlik akaryakıt çeki kazanma fırsatı.",
    image: "/images/campaigns/yakit-ceki.jpg",
    link: "/kampanyalar/yakit-ceki",
    alt: "Yakıt Çeki Kampanyası"
  },
  {
    id: 4,
    title: "750 TLlik A101 çeki hediye!",
    description: "Katılım Konut Sigortası yaptırana A101den 750 TLlik hediye çeki kazanma fırsatı.",
    image: "/images/campaigns/a101-hediye-ceki.jpg",
    link: "/kampanyalar/a101-hediye-ceki",
    alt: "A101den Hediye Çeki Kampanyası"
  }
];

const Campaigns = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="campaigns">
      <div className="campaigns__container container">
        <h3 className="section-title"><span>Kampanyalar</span></h3>
        <div className="campaigns__slider-wrapper">
          <Swiper
            modules={[Autoplay, Navigation]}
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            navigation={{
              prevEl: '.campaigns__nav-prev',
              nextEl: '.campaigns__nav-next',
            }}
            className="campaigns__slider"
            onSwiper={(swiper: SwiperType) => {
              swiperRef.current = swiper;
            }}
          >
            {campaignsData.map((campaign) => (
              <SwiperSlide key={campaign.id}>
                <div className="campaigns__item">
                  <div className="row">
                    <div className="col-md-5">
                      <Link className="campaigns__item-img h-100" href={campaign.link}>
                        <Image src={campaign.image} alt={campaign.alt} width={330} height={277} />
                      </Link>
                    </div>
                    <div className="col-md-7">
                      <div className="campaigns__item-content h-100">
                        <h4>{campaign.title}</h4>
                        <p>{campaign.description}</p>
                        <Link href={campaign.link}>
                          Detaylı Bilgi <span className="icon-arrow-right"></span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <button className="campaigns__nav campaigns__nav-prev">
            <span className="icon-angle-left"></span>
          </button>
          <button className="campaigns__nav campaigns__nav-next">
            <span className="icon-angle-right"></span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Campaigns; 