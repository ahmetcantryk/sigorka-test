import Banner from '../components/common/Banner';
import Breadcrumb from '../components/common/Breadcrumb';
import CallCenter from '../components/common/CallCenter';
import React from 'react';
import '../../styles/subpage.min.css';

export default function KutuphanePage() {
  return (
    <>
      <Banner title1="Bilgi Merkezi" title2="Kütüphane" size="sm" />
      <section className="page-content">
        <div className="container container--sm">
          <Breadcrumb items={[
            { name: "Ana Sayfa", href: "/" },
            { name: "Bilgi Merkezi" },
            { name: "Kütüphane" }
          ]} />
          <p className="mb-5">
            Sigorta ve katılım sigortacılığı hakkında bilgilendirici dokümanlarımıza aşağıdan ulaşabilirsiniz.
          </p>
          <div className="row">
            <div className="col-md-6 col-lg-4 mb-4">
              <div className="partners__item flex-column align-items-start justify-content-between">
                <h5 className="mb-0">
                  Katılım Bankaları Sigorta Uygulamalarında Tekafülün Yeri ve Geleceği
                </h5>
                <p>
                  <strong>Hazırlayan:</strong> Serdar Polat
                </p>
                <div className="align-self-end">
                  <a
                    href="/Content/docs/katilim-bankalarinin-sigorta-uygulamalarinda-tekafulun-yeri-ve-gelecegi.pdf"
                    className="btn btn-secondary btn-library"
                    download="Katılım_Bankaları_Sigorta_Uygulamalarında_Tekafülün_Yeri_ve_Geleceği.pdf"
                    rel="noopener noreferrer"
                  >
                    İndir (PDF)
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CallCenter />
    </>
  );
} 