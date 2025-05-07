"use client";
import dynamic from 'next/dynamic';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';

const OwlCarousel = dynamic(() => import('react-owl-carousel'), { ssr: false });

export default function BlogPromoSlider({ promoBlogs }) {
  if (!promoBlogs?.length) return null;
  return (
    <OwlCarousel
      className="owl-theme"
      items={1}
      loop
      autoplay
      autoplayTimeout={3000}
      nav
      dots
      navText={['<span class="icon-angle-left"></span>', '<span class="icon-angle-right"></span>']}
      responsive={{
        0: { items: 1 },
        768: { items: 1 },
        992: { items: 1 }
      }}
      margin={10}
    >
      {promoBlogs.map((blog) => (
        <div className="blog-promo__item" key={blog.id}>
          <img src={blog.imageUrl} className="blog-promo__item-img" alt={blog.title} />
          <div className="blog-promo__item-content">
            <h3>{blog.title}</h3>
            <p>{blog.summary}</p>
            <a href={`/blog/${blog.slug || ''}`} target="_self" className="btn btn-outline">Devamını Oku</a>
          </div>
        </div>
      ))}
    </OwlCarousel>
  );
} 