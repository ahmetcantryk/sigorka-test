import BlogPromoSlider from '../components/blog/BlogPromoSlider';
import BlogClientArea from '../components/blog/BlogClientArea';
import '../../styles/main.min.css';
import '../../styles/subpage.min.css';
import '../../styles/armorbroker.css';

export const metadata = {
  title: "Sigorta Blogu - Güncel Haberler ve İpuçları | Sigorka",
  description: "Sigortacılıkla ilgili güncel yazılar, ipuçları ve rehberler için blog sayfamızı ziyaret edin. Daha fazlası için sitemizi ziyaret ederek hizmetlere göz atın.",
  alternates: {
    canonical: "https://sigorka.com/blog"
  },
  openGraph: {
    title: "Sigorta Blogu - Güncel Haberler ve İpuçları | Sigorka",
    description: "Sigortacılıkla ilgili güncel yazılar, ipuçları ve rehberler için blog sayfamızı ziyaret edin. Daha fazlası için sitemizi ziyaret ederek hizmetlere göz atın.",
    url: "https://sigorka.com/blog",
    type: "website"
  },
  twitter: {
    title: "Sigorta Blogu - Güncel Haberler ve İpuçları | Sigorka",
    description: "Sigortacılıkla ilgili güncel yazılar, ipuçları ve rehberler için blog sayfamızı ziyaret edin. Daha fazlası için sitemizi ziyaret ederek hizmetlere göz atın.",
    card: "summary_large_image"
  }
};

export default async function BlogPage() {
  // Blogları serverda fetch et
  const res = await fetch('http://localhost:3000/content/blogs.json', { cache: 'no-store' });
  const blogs = await res.json();
  // Tarihe göre sıralayıp en güncel 3 blogu promoBlogs olarak seç
  const sorted = blogs.slice().sort((a: any, b: any) => {
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
  blogs.forEach((blog: any) => {
    if (blog.categories) {
      blog.categories.forEach((cat: any) => {
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
            <BlogPromoSlider promoBlogs={promoBlogs} />
          </div>
        </section>
      )}
      <section className="blog-section">
        <div className="container container--sm">
          <BlogClientArea blogs={blogs} categories={categories} />
        </div>
      </section>
    </>
  );
}