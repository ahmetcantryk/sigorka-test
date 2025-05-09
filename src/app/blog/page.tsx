import BlogPromoSlider from '../components/blog/BlogPromoSlider';
import BlogClientArea from '../components/blog/BlogClientArea';
import '../../styles/main.min.css';
import '../../styles/subpage.min.css';
import '../../styles/armorbroker.css';
import { Metadata } from 'next';


interface Category {
  id: number;
  name: string;
}

interface Blog {
  id?: number;
  title: string;
  date: string;
  slug?: string;
  content?: string;
  image?: string;
  imageUrl?: string; 
  summary?: string;
  categories?: Category[];
}

export const metadata: Metadata = {
  title: 'Blog | Sigorka',
  description: 'Sigorka blog sayfasında sigorta, finans ve güvenlik konularındaki tüm güncel yazılarımızı bulabilirsiniz.',
  alternates: {
    canonical: "https://sigorka.com/blog"
  },
  openGraph: {
    title: 'Blog | Sigorka',
    description: 'Sigorka blog sayfasında sigorta, finans ve güvenlik konularındaki tüm güncel yazılarımızı bulabilirsiniz.',
    url: 'https://sigorka.com/blog',
    type: 'website',
    images: [
      {
        url: '/images/sigorka-og-image.png',
        width: 1200,
        height: 630,
        alt: 'Sigorka Blog'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog | Sigorka',
    description: 'Sigorka blog sayfasında sigorta, finans ve güvenlik konularındaki tüm güncel yazılarımızı bulabilirsiniz.',
    images: ['/images/sigorka-og-image.png']
  }
};

export default async function BlogPage() {
  // Statik import kullanarak JSON dosyasını getiriyoruz
  const blogs = (await import('../../../public/content/blogs.json')).default as Blog[];
  // Tarihe göre sıralayıp en güncel 3 blogu promoBlogs olarak seç
  const sorted = blogs.slice().sort((a: Blog, b: Blog) => {
    const aylar = ['Ocak','Şubat','Mart','Nisan','Mayıs','Haziran','Temmuz','Ağustos','Eylül','Ekim','Kasım','Aralık'];
    const parseDate = (str: string) => {
      const [gun, ay, yil] = str.split(' ');
      const ayIndex = aylar.findIndex(a => a.toLowerCase() === ay.toLowerCase());
      if (ayIndex === -1 || isNaN(Number(gun)) || isNaN(Number(yil))) return 0;
      return new Date(Number(yil), ayIndex, Number(gun)).getTime();
    };
    return parseDate(b.date) - parseDate(a.date);
  });
  const promoBlogs = sorted.slice(0, 3);
  // Kategorileri çıkar
  const categories = [{ id: 1, name: 'Tüm Yazılar' }];
  blogs.forEach((blog: Blog) => {
    if (blog.categories) {
      blog.categories.forEach((cat: Category) => {
        if (cat && cat.id && !categories.find(c => c.id === cat.id)) {
          categories.push({ id: cat.id, name: cat.name });
        }
      });
    }
  });
  return (
    <>
      <section className="cover cover--sm">
        <div className="container cover__container">
          <h1 className="cover__title-1">Bilgi Merkezi</h1>
          <h2 className="cover__title-2">Blog</h2>
        </div>
      </section>
      {/* Blog Promo Alanı - Server'dan veri ile */}
      {promoBlogs.length > 0 && (
        <section className="blog-promo mb-5">
          <div className="container container--sm">
            <BlogPromoSlider promoBlogs={promoBlogs.map(blog => ({
              id: blog.id || 0,
              title: blog.title,
              summary: blog.summary || blog.content?.slice(0, 100) || '',
              imageUrl: blog.imageUrl || blog.image || '/images/no-image.jpg',
              slug: blog.slug
            }))} />
          </div>
        </section>
      )}
      <section className="blog-section">
        <div className="container container--sm">
          <BlogClientArea blogs={sorted} categories={categories} />
        </div>
      </section>
    </>
  );
}