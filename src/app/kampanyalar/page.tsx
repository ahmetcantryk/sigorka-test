import React from 'react';
import path from 'path';
import { promises as fs } from 'fs';
import Banner from '../components/common/Banner';
import Breadcrumb from '../components/common/Breadcrumb';
import '../../styles/subpage.min.css';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';

export type Kampanya = {
  slug: string;
  title: string;
  summary: string;
  image: string;
  detailImage: string;
};

async function getKampanyalar(): Promise<Kampanya[]> {
  const filePath = path.join(process.cwd(), 'src/app/kampanyalar/kampanyalar.json');
  const data = await fs.readFile(filePath, 'utf8');
  return JSON.parse(data);
}

export const metadata: Metadata = {
  title: "Sigorta Kampanyaları | Sigorka Fırsatları",
  description: "Sigorka'nın avantajlı sigorta kampanyalarını keşfedin. Size özel indirimler, hediyeler ve fırsatlardan yararlanın. Hemen kampanyaları inceleyin!",
  alternates: {
    canonical: "https://sigorka.com/kampanyalar"
  },
  openGraph: {
    title: "Sigorta Kampanyaları | Sigorka Fırsatları",
    description: "Sigorka'nın avantajlı sigorta kampanyalarını keşfedin. Size özel indirimler, hediyeler ve fırsatlardan yararlanın. Hemen kampanyaları inceleyin!",
    url: "https://sigorka.com/kampanyalar",
    type: "website"
  },
  twitter: {
    title: "Sigorta Kampanyaları | Sigorka Fırsatları",
    description: "Sigorka'nın avantajlı sigorta kampanyalarını keşfedin. Size özel indirimler, hediyeler ve fırsatlardan yararlanın. Hemen kampanyaları inceleyin!",
    card: "summary_large_image"
  }
};

export default async function KampanyalarPage() {
  const kampanyalar = (await getKampanyalar()).slice().reverse();
  return (
    <>
      <Banner title1="" title2="Kampanyalar" size="sm" />
      <section className="blog-section campaigns-section mt-5">
        <div className="container container--sm">
          <Breadcrumb items={[
            { name: 'Ana Sayfa', href: '/' },
            { name: 'Kampanyalar' }
          ]} />
          <div className="row">
            {kampanyalar.map((kampanya, index) => (
              <div key={kampanya.slug} className="col-lg-4 col-md-6 mb-4">
                <Link href={`/kampanyalar/${kampanya.slug}`} className="blog-post">
                  <div className="blog-post__img">
                    <Image 
                      src={kampanya.detailImage} 
                      className="img-fluid" 
                      alt={kampanya.title} 
                      width={337} 
                      height={282}
                      priority={index < 3} // İlk 3 görsel için priority true
                      loading={index < 3 ? undefined : "lazy"} // Diğerleri için lazy loading
                    />
                  </div>
                  <div className="blog-post__content">
                    <h4 className="blog-post__title">{kampanya.title}</h4>
                    <p className="blog-post__summary">Detaylı bilgi ve kampanya şartları için tıklayın.</p>
                    <span className="blog-post__link">Devamını Oku <span className="icon-arrow-right"></span></span>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
} 