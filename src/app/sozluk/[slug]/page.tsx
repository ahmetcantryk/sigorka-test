import React from 'react';
import Banner from '../../components/common/Banner';
import Breadcrumb from '../../components/common/Breadcrumb';
import ProposalCta from '../../components/common/ProposalCta';
import '../../../styles/subpage.min.css';
import dictionary from '../dictionary.json';
import { Metadata } from 'next';
import Link from 'next/link';
interface DictionaryItem {
  id: number;
  title: string;
  summary: string;
  slug: string;
}

interface PageProps {
  params: {
    slug: string;
  }
}

// Next.js SSG için static paramlar
export async function generateStaticParams() {
  return dictionary.map((item) => ({ slug: item.slug }));
}

// Dinamik metadata oluşturma
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const selectedWord = dictionary.find((item) => item.slug === params.slug);
  
  if (!selectedWord) {
    return {
      title: "Sigorta Sözlüğü Detayları - Terim Açıklamaları | Sigorka",
      description: "Sigorta dünyasında sıkça geçen kavramların detaylı açıklamalarına göz atarak bu sayede, Sigorka ile birlikte tamamen bilinçli tercihler yapabilirsiniz.",
    };
  }

  return {
    title: `${selectedWord.title} - Sigorta Terimleri Sözlüğü | Sigorka`,
    description: "Sigorta dünyasında sıkça geçen kavramların detaylı açıklamalarına göz atarak bu sayede, Sigorka ile birlikte tamamen bilinçli tercihler yapabilirsiniz.",
    alternates: {
      canonical: `https://sigorka.com/sozluk/${selectedWord.slug}`
    },
    openGraph: {
      title: `${selectedWord.title} - Sigorta Terimleri Sözlüğü | Sigorka`,
      description: "Sigorta dünyasında sıkça geçen kavramların detaylı açıklamalarına göz atarak bu sayede, Sigorka ile birlikte tamamen bilinçli tercihler yapabilirsiniz.",
      url: `https://sigorka.com/sozluk/${selectedWord.slug}`,
      type: "article"
    },
    twitter: {
      title: `${selectedWord.title} - Sigorta Terimleri Sözlüğü | Sigorka`,
      description: "Sigorta dünyasında sıkça geçen kavramların detaylı açıklamalarına göz atarak bu sayede, Sigorka ile birlikte tamamen bilinçli tercihler yapabilirsiniz.",
      card: "summary_large_image"
    }
  };
}

/**
 * @param {{ params: { slug: string } }} props
 */
export default async function SozlukDetayPage(paramsPromise: Promise<{ params: { slug: string } }>) {
  const { params } = await paramsPromise;
  const { slug } = params;
  const selectedWord = dictionary.find((item) => item.slug === slug);
  
  // Önerilen kelimeleri rastgele seç
  const suggestedWords = dictionary
    .filter((item) => item.slug !== slug)
    .sort(() => Math.random() - 0.5)
    .slice(0, 6);

  if (!selectedWord) {
    return (
      <>
        <Banner title1="Bilgi Merkezi" title2="Sözlük" size="sm" />
        <section className="page-content">
          <div className="container container--sm">
            <p className="text-center">Aradığınız kelime bulunamadı.</p>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <Banner title1="Bilgi Merkezi" title2="Sözlük" size="sm" />
      <section className="page-content">
        <div className="container container--sm">
          <Breadcrumb items={[
            { name: 'Ana Sayfa', href: '/' },
            { name: 'Bilgi Merkezi', href: '#' },
            { name: 'Sözlük', href: '/sozluk' },
            { name: selectedWord.title }
          ]} />

          <div className="detail-container">
            <h1>{selectedWord.title}</h1>
            <p>{selectedWord.summary}</p>
          </div>

          <ProposalCta />

          <h3>Öneri Kelimeler</h3>
          <div className="row suggest-words">
            {suggestedWords.map((item: DictionaryItem) => (
              <div key={item.id} className="col-lg-4 col-md-6">
                <Link href={`/sozluk/${item.slug}`} className="dictionary-item">
                  <h4 className="dictionary-item__title">{item.title}</h4>
                  <p className="dictionary-item__summary">{item.summary}</p>
                  <span className="dictionary-item__link">
                    Devamını Oku <span className="icon-arrow-right"></span>
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
} 