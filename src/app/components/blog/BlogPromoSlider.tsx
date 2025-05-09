"use client";
import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';
import Link from 'next/link';
import { slugify } from './slugify';

interface Blog {
  id: number;
  title: string;
  summary: string;
  imageUrl: string;
  slug?: string;
}

interface BlogPromoSliderProps {
  promoBlogs: Blog[];
}

export default function BlogPromoSlider({ promoBlogs }: BlogPromoSliderProps) {
  const swiperRef = useRef<SwiperType | null>(null);

  if (!promoBlogs?.length) return null;
  return (
    <Swiper
      modules={[Autoplay, Navigation, Pagination]}
      spaceBetween={0}
      slidesPerView={1}
      loop={true}
      // autoplay={{
      //   delay: 3000,
      //   disableOnInteraction: false,
      // }}
      navigation={{
        prevEl: '.blog-promo .owl-nav .owl-prev',
        nextEl: '.blog-promo .owl-nav .owl-next',
      }}
      pagination={{
        el: '.blog-promo .owl-dots',
        clickable: true,
        renderBullet: function (index, className) {
          return `<button class="${className} owl-dot"><span></span></button>`;
        },
      }}
      className="blog-promo__slider owl-theme"
      onSwiper={(swiper: SwiperType) => {
        swiperRef.current = swiper;
      }}
    >
      {promoBlogs.map((blog) => (
        <SwiperSlide key={blog.id}>
          <div className="blog-promo__item">
            <Image 
              src={blog.imageUrl} 
              className="blog-promo__item-img" 
              alt={blog.title} 
              width={800}
              height={450}
              style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
            />
            <div className="blog-promo__item-content">
              <h3>{blog.title}</h3>
              <p>{blog.summary}</p>
              <Link href={`/blog/${blog.slug || slugify(blog.title)}`} target="_self" className="btn btn-outline">Devamını Oku</Link>
            </div>
          </div>
        </SwiperSlide>
      ))}
      <div className="owl-nav">
        <button className="owl-prev"><span className="icon-angle-left"></span></button>
        <button className="owl-next"><span className="icon-angle-right"></span></button>
      </div>
      <div className="owl-dots"></div>
    </Swiper>
  );
} 