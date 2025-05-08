'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container footer__container">
        <div className="row">
          <div className="col-lg-3 footer__left">
            <Image src="/images/sigorka-logo-white-new.svg" alt="Sigorka" className="footer__logo" width={230} height={62} />
          </div>
          <div className="col-lg-9 footer__right">
            <div className="row no-gutters">
              <div className="col footer-col">
                <div className="footer-nav">
                  <h3 className="footer-nav__title">Ürünler</h3>
                  <Link href="/aracim" className="footer-nav__subtitle">Aracım</Link>
                  <div className="footer-nav__group d-none d-sm-block">
                    <Link href="/kasko-sigortasi" className="footer-nav__item">Katılım Kasko Sigortası</Link>
                    <Link href="/zorunlu-trafik-sigortasi" className="footer-nav__item">Katılım Zorunlu Trafik Sigortası</Link>
                    <Link href="/imm" className="footer-nav__item">Katılım İMM Sigortası</Link>
                  </div>
                  <Link href="/sagligim" className="footer-nav__subtitle">Sağlığım</Link>
                  <div className="footer-nav__group d-none d-sm-block">
                    <Link href="/ozel-saglik-sigortasi" className="footer-nav__item">Özel Sağlık Katılım Sigortası</Link>
                    <Link href="/seyahat-saglik-sigortasi" className="footer-nav__item">Seyahat Sağlık Katılım Sigortası</Link>
                    <Link href="/tamamlayici-saglik-sigortasi" className="footer-nav__item">Tamamlayıcı Sağlık Katılım Sigortası</Link>
                    <Link href="/yabanci-saglik-sigortasi" className="footer-nav__item">Yabancı Sağlık Katılım Sigortası</Link>
                  </div>
                  <Link href="/yuvam" className="footer-nav__subtitle">Yuvam</Link>
                  <div className="footer-nav__group d-none d-sm-block">
                    <Link href="/dask" className="footer-nav__item">Katılım DASK Sigortası</Link>
                    <Link href="/konut-sigortasi" className="footer-nav__item">Katılım Konut Sigortası</Link>
                    <Link href="/ferdi-kaza-sigortasi" className="footer-nav__item">Katılım Ferdi Kaza Sigortası</Link>
                  </div>
                </div>
              </div>
              <div className="col footer-col">
                <div className="footer-nav">
                  <Link href="/kampanyalar" className="footer-nav__title">Kampanyalar</Link>
                  <Link href="/biz-kimiz" className="footer-nav__title">Hakkımızda</Link>
                  <div className="footer-nav__group d-none d-sm-block">
                    <Link href="/biz-kimiz" className="footer-nav__item">Biz Kimiz?</Link>
                    <Link href="/neden-katilim-sigortaciligi" className="footer-nav__item">Neden Katılım Sigortacılığı</Link>
                    <Link href="/anlasmali-sigorta-sirketleri" className="footer-nav__item">Anlaşmalı Sigorta Şirketleri</Link>
                  </div>
                  <Link href="/sikca-sorulan-sorular" className="footer-nav__title">Bilgi Merkezi</Link>
                  <div className="footer-nav__group d-none d-sm-block">
                    <Link href="/blog" className="footer-nav__item">Sigorta Blog</Link>
                    <Link href="/sozluk" className="footer-nav__item">Sigorta Sözlük</Link>
                    <Link href="/sikca-sorulan-sorular" className="footer-nav__item">S.S.S</Link>
                    <Link href="/kutuphane" className="footer-nav__item">Kütüphane</Link>
                  </div>
                </div>
              </div>
              <div className="col footer-col">
                <div className="footer-nav">
                  <div className="footer-nav__group">
                    <h3 className="footer-nav__title">İletişim</h3>
                    <h4 className="footer-nav__subtitle">Sigorka Merkez Ofis</h4>
                    <div className="footer-nav__item">Batman Sokak, GFY Plaza, Kat: 13 Sahrayıcedid - Istanbul</div>
                  </div>
                  <div className="footer-nav__group">
                    <h4 className="footer-nav__subtitle">Telefon</h4>
                    <div className="footer-nav__item">0850 404 04 04</div>
                  </div>
                  <div className="footer-nav__group">
                    <h4 className="footer-nav__subtitle">Bizi Takip Edin</h4>
                    <div className="footer__social">
                      <a className="footer__social-item" href="https://www.facebook.com/profile.php?id=61562848803157" target="_blank" rel="noreferrer noopener">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a className="footer__social-item" href="https://www.instagram.com/sigorkacom/" target="_blank" rel="noreferrer noopener">
                        <i className="fab fa-instagram"></i>
                      </a>
                      <a className="footer__social-item" href="https://www.linkedin.com/company/sigorkacom/" target="_blank" rel="noreferrer noopener">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </div>
                  </div>
                  <div className="footer-nav__group">
                    <Link href="/bilgi-toplumu-hizmetleri" className="footer-nav__item footer-nav__item--underline">Bilgi Toplumu Hizmetleri</Link>
                    <Link href="/kvkk" className="footer-nav__item footer-nav__item--underline">Kişisel Verilerin Korunması</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="footer__copyright">© Copyright {currentYear} sigorka.com. Tüm hakları saklıdır.</p>
      </div>
    </footer>
  );
} 