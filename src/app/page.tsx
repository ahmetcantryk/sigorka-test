export const metadata = {
  title: "Sigorka | Katılım Sigortacılığına Modern Yaklaşım",
  description: "Sigorta dünyasını yüksek hizmet kalitesiyle yeniden tanımlayan Sigorka ile katılım sigortacılığında dijital ve kullanıcı dostu çözümler sizi bekliyor.",
  alternates: {
    canonical: "https://sigorka.com/"
  },
  openGraph: {
    title: "Sigorka | Katılım Sigortacılığına Modern Yaklaşım",
    description: "Sigorta dünyasını yüksek hizmet kalitesiyle yeniden tanımlayan Sigorka ile katılım sigortacılığında dijital ve kullanıcı dostu çözümler sizi bekliyor.",
    url: "https://sigorka.com/",
    type: "website"
  },
  twitter: {
    title: "Sigorka | Katılım Sigortacılığına Modern Yaklaşım",
    description: "Sigorta dünyasını yüksek hizmet kalitesiyle yeniden tanımlayan Sigorka ile katılım sigortacılığında dijital ve kullanıcı dostu çözümler sizi bekliyor.",
    card: "summary_large_image"
  }
};

import Promo from './components/mainpage/Promo';
import '../styles/mainpage.css';
import Categories from './components/mainpage/Categories';
import BannerArea from './components/mainpage/BannerArea';
import WhyUs from './components/mainpage/WhyUs';
import Campaigns from './components/mainpage/Campaigns';
import Blog from './components/mainpage/Blog';
import Partners from './components/mainpage/Partners';
import Products from './components/mainpage/Products';
import FAQ from './components/mainpage/FAQ';

export default function Home() {
  return (
    <main>
      <Promo />
      <Categories />
      <Campaigns />
      <BannerArea />
      <WhyUs />
      <Blog />
      <Partners />
      <Products />
      <FAQ />
    </main>
  );
}
