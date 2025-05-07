import React from 'react';
import path from 'path';
import { promises as fs } from 'fs';
import Banner from '../components/common/Banner';
import Breadcrumb from '../components/common/Breadcrumb';
import '../../styles/subpage.min.css';

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
            {kampanyalar.map((kampanya) => (
              <div key={kampanya.slug} className="col-lg-4 col-md-6 mb-4">
                <a href={`/kampanyalar/${kampanya.slug}`} className="blog-post" target="_self">
                  <div className="blog-post__img">
                    <img src={kampanya.detailImage} className="img-fluid" alt={kampanya.title} />
                  </div>
                  <div className="blog-post__content">
                    <h4 className="blog-post__title">{kampanya.title}</h4>
                    <p className="blog-post__summary">Detaylı bilgi ve kampanya şartları için tıklayın.</p>
                    <span className="blog-post__link">Devamını Oku <span className="icon-arrow-right"></span></span>
                  </div>
                </a>
              </div>
            ))}
            
          </div>
        </div>
      </section>
    </>
  );
} 