import { notFound } from 'next/navigation';
import '../../../styles/main.min.css';
import '../../../styles/subpage.min.css';
import '../../../styles/armor.css';
import Image from 'next/image';

import BlogCard from '../../components/blog/BlogCard';
import { slugify } from '../../components/blog/slugify';

interface Category {
  id: number;
  name: string;
}

interface Blog {
  id?: number;
  title: string;
  date: string;
  slug?: string;
  imageUrl?: string;
  htmlContent?: string;
  categories?: Category[];
}

export default async function BlogDetailPage(paramsPromise: Promise<{ params: { slug: string } }>) {
  const { params } = await paramsPromise;
  const { slug } = params;
  const res = await fetch('http://localhost:3000/content/blogs.json', { cache: 'no-store' });
  const blogs = await res.json() as Blog[];
  const blog = blogs.find((b: Blog) => (b.slug || slugify(b.title)) === slug);
  if (!blog) return notFound();

  // Benzer yazılar: aynı kategoriden, bu blog hariç, son 3 blog
  let similarBlogs: Blog[] = [];
  if (!blog.categories || blog.categories.length === 0) {
    similarBlogs = blogs.filter((b: Blog) => (b.slug || slugify(b.title)) !== slug).slice(0, 3);
  } else {
    const catId = blog.categories[0].id;
    similarBlogs = blogs
      .filter((b: Blog) => (b.slug || slugify(b.title)) !== slug && b.categories && b.categories.some((c: Category) => c.id === catId))
      .slice(0, 3);
  }

  return (
    <>
      <section className="cover cover--sm">
        <div className="container cover__container">
          <h1 className="cover__title-1">Bilgi Merkezi</h1>
          <h2 className="cover__title-2">Blog</h2>
        </div>
      </section>
      <section className="blog-post">
        <div className="container container--sm">
          <div className="blog-post-intro">
            <div className="row">
              <div className="col-md-8">
                <div className="blog-post-intro__img">
                  <Image 
                    className="blog-promo__item-img" 
                    src={blog.imageUrl || '/images/no-image.jpg'} 
                    alt={blog.title}
                    width={800}
                    height={500}
                    style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                    priority
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="offer-banner offer-banner--alt">
                  <div className="offer-banner__content">
                    <h3>Katılım Zorunlu Trafik Sigortasına mı ihtiyacınız var?</h3>
                    <p>En uygun tekliflerle aracınızı sigortalamak için şimdi teklif alın.</p>
                  </div>
                  <div className="offer-banner__cta">
                    <a className="btn btn-wide btn-tertiary" href="/zorunlu-trafik-sigortasi" target="_self">Hemen Teklif Alın</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-content selected-blog-container">
            <h3>{blog.title}</h3>
            <span className="date">{blog.date}</span>
            <div dangerouslySetInnerHTML={{ __html: blog.htmlContent || '' }} />
          </div>
          <div className="offer-banner offer-banner-car-bg mt-2 mb-5">
            <div className="offer-banner__content">
              <h3>Katılım Kasko Sigortasına mı ihtiyacınız var?</h3>
              <p>En uygun tekliflerle aracınızı kaskolamak için şimdi teklif alın.</p>
            </div>
            <div className="offer-banner__cta">
              <a className="btn btn-wide btn-tertiary" href="/kasko-sigortasi" target="_self">Hemen Teklif Alın</a>
            </div>
          </div>
          <h3 className="blog-section__title">Benzer Yazılar</h3>
          <div className="row suggest-blogs">
            {similarBlogs.map((b) => <BlogCard key={b.id} blog={{...b, slug: b.slug || slugify(b.title)}} />)}
          </div>
        </div>
      </section>
    </>
  );
} 