import React from 'react';
import path from 'path';
import { promises as fs } from 'fs';
import Banner from '../../components/common/Banner';
import '../../../styles/subpage.min.css';
import { notFound } from 'next/navigation';
import Breadcrumb from '../../components/common/Breadcrumb';
import { Metadata } from 'next';

type Kampanya = {
  slug: string;
  title: string;
  summary: string;
  image: string;
  detailImage: string;
  detailHtml: string;
  ctaText: string;
  ctaLink: string;
};

async function getKampanya(slug: string): Promise<Kampanya | undefined> {
  const filePath = path.join(process.cwd(), 'src/app/kampanyalar/kampanyalar.json');
  const data = await fs.readFile(filePath, 'utf8');
  const kampanyalar: Kampanya[] = JSON.parse(data);
  return kampanyalar.find((k) => k.slug === slug);
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const kampanya = await getKampanya(params.slug);
  if (!kampanya) {
    return {
      title: "Kampanya Bulunamadı | Sigorka",
      description: "Aradığınız kampanya bulunamadı. Güncel kampanyalarımızı incelemek için sitemizi ziyaret edin."
    };
  }

  return {
    title: `${kampanya.title} - Sigorta Fırsatları | Sigorka`,
    description: "Sigorta kampanyalarına dair tüm detaylar, katılım koşulları ve geçerlilik tarihleri bu sayfada sizi bekliyor. Sigorta hizmetlerimiz için sitemizi ziyaret edin.",
    alternates: {
      canonical: `https://sigorka.com/kampanyalar/${kampanya.slug}`
    },
    openGraph: {
      title: `${kampanya.title} - Sigorta Fırsatları | Sigorka`,
      description: "Sigorta kampanyalarına dair tüm detaylar, katılım koşulları ve geçerlilik tarihleri bu sayfada sizi bekliyor. Sigorta hizmetlerimiz için sitemizi ziyaret edin.",
      url: `https://sigorka.com/kampanyalar/${kampanya.slug}`,
      type: "article",
      images: [
        {
          url: kampanya.image,
          alt: kampanya.title
        }
      ]
    },
    twitter: {
      title: `${kampanya.title} - Sigorta Fırsatları | Sigorka`,
      description: "Sigorta kampanyalarına dair tüm detaylar, katılım koşulları ve geçerlilik tarihleri bu sayfada sizi bekliyor. Sigorta hizmetlerimiz için sitemizi ziyaret edin.",
      card: "summary_large_image",
      images: [kampanya.image]
    }
  };
}

export default async function KampanyaDetayPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const kampanya = await getKampanya(slug);
  if (!kampanya) notFound();
  return (
    <>
      <Banner title1="" title2="Kampanyalar" size="sm" />
      <section className="blog-section campaign-detail-section">
        <div className="container container--sm">
          
          <div className="blog-promo">
            <div className="blog-promo__item text-center">
              <div className="campaign-detail-img">
                <img src={kampanya.image} className="img-fluid" alt={kampanya.title} />
              </div>
            </div>
            <div className="text-content my-5">
              <div dangerouslySetInnerHTML={{ __html: kampanya.detailHtml }} />
            </div>
          </div>
          <div className="offer-banner offer-banner-home-bg mt-2 mb-5">
            <div className="offer-banner__content">
              <h3>{kampanya.ctaText.includes('Konut') ? 'Katılım Konut Sigortasına mı ihtiyacınız var?' : kampanya.ctaText.includes('Kasko') ? 'Katılım Kasko Sigortasına mı ihtiyacınız var?' : 'Kampanyadan yararlanmak için hemen teklif alın.'}</h3>
              <p>En uygun fiyatlarla teklif almak için hemen tıklayın.</p>
            </div>
            <div className="offer-banner__cta">
              <a className="btn btn-wide btn-tertiary" href={kampanya.ctaLink} target="_self">{kampanya.ctaText}</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 