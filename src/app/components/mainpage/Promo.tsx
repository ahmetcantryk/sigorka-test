'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import '../../../styles/mainpage.css';

export default function Promo() {
  const [imagesLoaded, setImagesLoaded] = useState(0);
  const totalImages = 20;
  const promoRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<HTMLDivElement>(null);
  const layersRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Pervane animasyonu
    gsap.to("#pervane img", {
      rotation: 360,
      duration: 15,
      repeat: -1,
      ease: "linear",
    });

    // Ana animasyon timeline'ı
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".promo-wrapper",
        start: "top top",
        end: "+=400%",
        scrub: 1,
        pin: true,
        pinSpacing: true,
        anticipatePin: 1,
      }
    });

    // Mobil için animasyon parametreleri
    if (window.innerWidth < 768) {
      timeline
        .to("#basaklar", { scale: 2, y: "5%", duration: 4 }, 0)
        .to("#bugday-tarlasi", { scale: 2, y: "5%", duration: 4 }, 0)
        .to("#uzaktaki-tarlalar", { scale: 2, y: "5%", duration: 4 }, 0)
        .to("#tepeler", { scale: 2, y: "-10%", duration: 4 }, 0)
        .to(".promo__title", { opacity: 0, y: "-180%", duration: 4 }, 0)
        .to("#zemin", { scale: 2, y: "-10%", duration: 4 }, 0)
        .to("#degirmen, #pervane", { scale: 2, y: "-10%", duration: 4 }, 0)
        .to("#bulutlar", { scale: 2, y: "-10%", duration: 4 }, 0)
        .to("#sahne-2", { y: "-100%", duration: 4 }, 2);
    } else {
      timeline
        .to("#basaklar", { scale: 2, y: "20%", duration: 4 }, 0)
        .to("#bugday-tarlasi", { scale: 2, y: "25%", duration: 4 }, 0)
        .to("#uzaktaki-tarlalar", { scale: 2, y: "30%", duration: 4 }, 0)
        .to("#tepeler", { scale: 2, y: "-16%", duration: 4 }, 0)
        .to(".promo__title", { opacity: 0, y: "-180%", duration: 4 }, 0)
        .to("#zemin", { scale: 2, y: "-16%", duration: 4 }, 0)
        .to("#degirmen, #pervane", { scale: 2, y: "-16%", duration: 4 }, 0)
        .to("#bulutlar", { scale: 2, y: "-18%", duration: 4 }, 0)
        .to("#sahne-2", { y: "-90%", duration: 4 }, 2);
    }

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  useEffect(() => {
    // Görsellerin yüklenme kontrolü
    const checkImageLoaded = () => {
      setImagesLoaded(prev => prev + 1);
    };

    const images = document.querySelectorAll('.promo img');
    images.forEach(img => {
      if ((img as HTMLImageElement).complete) {
        checkImageLoaded();
      } else {
        img.addEventListener('load', checkImageLoaded);
      }
    });

    return () => {
      images.forEach(img => {
        img.removeEventListener('load', checkImageLoaded);
      });
    };
  }, []);

  return (
    <div className="promo-wrapper">
      <section className="promo" ref={promoRef}>
        {imagesLoaded < totalImages && (
          <div className="spinner active" id="loading-spinner">
            <Image 
              src="/images/spinner.svg" 
              alt="Loading" 
              width={50} 
              height={50}
              unoptimized
            />
          </div>
        )}
        <div className="promo__scene-1" ref={sceneRef}>
          <div className="promo__title">
            <h1>
              Türkiye&apos;nin İlk ve Tek
              <span>Katılım Sigorta Pazar Yerine</span>
              Hoş Geldiniz!

            </h1>
          </div>
          <div className="layer" id="basaklar" ref={(el) => (layersRef.current[0] = el!)}>
            <Image
              src="/images/promo/basaklar.png"
              alt="Başaklar"
              className="img-fluid img-desktop"
              width={1920}
              height={1080}
              quality={100}
              priority
              unoptimized
            />
            <Image
              src="/images/promo/basaklar-m.png"
              alt="Başaklar"
              className="img-fluid img-mobile"
              width={768}
              height={1024}
              quality={100}
              priority
              unoptimized
            />
          </div>
          <div className="layer" id="bugday-tarlasi" ref={(el) => (layersRef.current[1] = el!)}>
            <Image
              src="/images/promo/bugday-tarlasi.png"
              alt="Buğday Tarlası"
              className="img-fluid img-desktop"
              width={1920}
              height={1080}
              quality={100}
              priority
              unoptimized
            />
            <Image
              src="/images/promo/bugday-tarlasi-m.png"
              alt="Buğday Tarlası"
              className="img-fluid img-mobile"
              width={768}
              height={1024}
              quality={100}
              priority
              unoptimized
            />
          </div>
          <div className="layer" id="uzaktaki-tarlalar" ref={(el) => (layersRef.current[2] = el!)}>
            <Image
              src="/images/promo/uzak-tarla.png"
              alt="Uzaktaki Tarlalar"
              className="img-fluid img-desktop"
              width={1920}
              height={1080}
              quality={100}
              priority
              unoptimized
            />
            <Image
              src="/images/promo/uzak-tarla-m.png"
              alt="Uzaktaki Tarlalar"
              className="img-fluid img-mobile"
              width={768}
              height={1024}
              quality={100}
              priority
              unoptimized
            />
          </div>
          <div className="layer" id="tepeler" ref={(el) => (layersRef.current[3] = el!)}>
            <Image
              src="/images/promo/tepeler.png"
              alt="Tepeler"
              className="img-fluid img-desktop"
              width={1920}
              height={1080}
              quality={100}
              priority
              unoptimized
            />
            <Image
              src="/images/promo/tepeler-m.png"
              alt="Tepeler"
              className="img-fluid img-mobile"
              width={768}
              height={1024}
              quality={100}
              priority
              unoptimized
            />
          </div>
          <div className="layer" id="zemin" ref={(el) => (layersRef.current[4] = el!)}>
            <Image
              src="/images/promo/zemin.png"
              alt="Zemin"
              className="img-fluid img-desktop"
              width={1920}
              height={1080}
              quality={100}
              priority
              unoptimized
            />
            <Image
              src="/images/promo/zemin-m.png"
              alt="Zemin"
              className="img-fluid img-mobile"
              width={768}
              height={1024}
              quality={100}
              priority
              unoptimized
            />
          </div>
          <div className="layer" id="bulutlar" ref={(el) => (layersRef.current[5] = el!)}>
            <Image
              src="/images/promo/bulutlar.png"
              alt="Bulutlar"
              className="img-fluid img-desktop"
              width={1920}
              height={1080}
              quality={100}
              priority
              unoptimized
            />
            <Image
              src="/images/promo/bulutlar-m.png"
              alt="Bulutlar"
              className="img-fluid img-mobile"
              width={768}
              height={1024}
              quality={100}
              priority
              unoptimized
            />
          </div>
          <div className="layer" id="degirmen" ref={(el) => (layersRef.current[6] = el!)}>
            <Image
              src="/images/promo/degirmen.png"
              alt="Değirmen"
              className="img-fluid img-desktop"
              width={1920}
              height={1080}
              quality={100}
              priority
              unoptimized
            />
            <Image
              src="/images/promo/degirmen-m.png"
              alt="Değirmen"
              className="img-fluid img-mobile"
              width={768}
              height={1024}
              quality={100}
              priority
              unoptimized
            />
          </div>
          <div className="layer" id="pervane" ref={(el) => (layersRef.current[7] = el!)}>
            <Image
              src="/images/promo/pervane.png"
              alt="Pervane"
              className="img-fluid img-desktop"
              width={1920}
              height={1080}
              quality={100}
              priority
              unoptimized
            />
            <Image
              src="/images/promo/pervane-m.png"
              alt="Pervane"
              className="img-fluid img-mobile"
              width={768}
              height={1024}
              quality={100}
              priority
              unoptimized
            />
          </div>
          <div className="layer" id="sahne-2" ref={(el) => (layersRef.current[8] = el!)}>
            <Image
              src="/images/promo/sahne-2-2.png"
              alt="Sahne 2"
              className="img-fluid img-desktop"
              width={1920}
              height={1080}
              quality={100}
              priority
              unoptimized
            />
            <Image
              src="/images/promo/sahne-2-m.png"
              alt="Sahne 2"
              className="img-fluid img-mobile"
              width={768}
              height={1024}
              quality={100}
              priority
              unoptimized
            />
          </div>
        </div>
        <div className="scroll-down">
          <Image
            src="/images/icon-scroll-down.svg"
            alt="Başlamak için kaydırın"
            width={24}
            height={24}
            priority
            unoptimized
          />
        </div>
      </section>
    </div>
  );
} 