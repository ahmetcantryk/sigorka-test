import Banner from '../components/common/Banner';
import Breadcrumb from '../components/common/Breadcrumb';
import CallCenter from '../components/common/CallCenter';
import React from 'react';
import '../../styles/subpage.min.css';
import path from 'path';
import { promises as fs } from 'fs';

export const metadata = {
  title: "Anlaşmalı Sigorta Şirketleri | Sigorka Partnerleri",
  description: "Sigorka iş birliğiyle hizmet veren tüm sigortacılık şirketlerini bu sayfa üzerinden inceleyebilir, aralarında detaylı karşılaştırmalar yapabilirsiniz.",
  alternates: {
    canonical: "https://sigorka.com/anlasmali-sigorta-sirketleri"
  },
  openGraph: {
    title: "Anlaşmalı Sigorta Şirketleri | Sigorka Partnerleri",
    description: "Sigorka iş birliğiyle hizmet veren tüm sigortacılık şirketlerini bu sayfa üzerinden inceleyebilir, aralarında detaylı karşılaştırmalar yapabilirsiniz.",
    url: "https://sigorka.com/anlasmali-sigorta-sirketleri",
    type: "website"
  },
  twitter: {
    title: "Anlaşmalı Sigorta Şirketleri | Sigorka Partnerleri",
    description: "Sigorka iş birliğiyle hizmet veren tüm sigortacılık şirketlerini bu sayfa üzerinden inceleyebilir, aralarında detaylı karşılaştırmalar yapabilirsiniz.",
    card: "summary_large_image"
  }
};

export type Sirket = {
  slug: string;
  name: string;
  logo: string;
  logo2x?: string;
  summary: string;
  link: string;
};

async function getSirketler(): Promise<Sirket[]> {
  const filePath = path.join(process.cwd(), 'src/app/anlasmali-sigorta-sirketleri/sirketler.json');
  const data = await fs.readFile(filePath, 'utf8');
  return JSON.parse(data);
}

export default async function AnlasmaliSigortaSirketleriPage() {
  const sirketler = await getSirketler();
  return (
    <>
      <Banner title1="Hakkımızda" title2="Anlaşmalı Sigorta Şirketleri" size="sm" />
      <section className="page-content">
        <div className="container container--sm">
          <Breadcrumb items={[
            { name: "Ana Sayfa", href: "/" },
            { name: "Hakkımızda" },
            { name: "Anlaşmalı Sigorta Şirketleri" }
          ]} />
          <div className="row flex-row justify-content-center mb-5 mt-5">
            {sirketler.map((sirket) => (
              <div key={sirket.slug} className="col-xl-4 col-lg-5 col-md-6">
                <div className="partner-box">
                  <a href={sirket.link} target="_self" className="partner-box__img">
                    <img
                      src={sirket.logo}
                      srcSet={sirket.logo2x ? `${sirket.logo2x} 2x` : undefined}
                      alt={sirket.name}
                    />
                  </a>
                  <div className="partner-box__content">
                    <h4>{sirket.name}</h4>
                    <p>{sirket.summary}</p>
                    <a className="btn btn-wide btn-outline-bg" href={sirket.link} target="_self">Detaylı Bilgi</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CallCenter />
    </>
  );
} 