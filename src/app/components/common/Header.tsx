'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface DropdownState {
  [key: number]: boolean;
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [activeDropdowns, setActiveDropdowns] = useState<DropdownState>({});
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Mobil kontrolü
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 992);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);

    // Scroll kontrolü
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.classList.toggle('menu-open');
    if (isMenuOpen) {
      setActiveDropdowns({});
    }
  };

  const handleDropdownClick = (e: React.MouseEvent, index: number) => {
    if (isMobile) {
      e.preventDefault();
      setActiveDropdowns(prev => {
        const newState: DropdownState = { ...prev };
        Object.keys(newState).forEach(key => {
          newState[Number(key)] = false;
        });
        newState[index] = !prev[index];
        return newState;
      });
    }
  };

  const handleDropdownHover = (index: number, isEntering: boolean) => {
    if (!isMobile) {
      setActiveDropdowns(prev => ({
        ...prev,
        [index]: isEntering
      }));
    }
  };

  const getSubNavStyle = (index: number) => {
    if (isMobile) {
      return {
        display: 'block',
        opacity: activeDropdowns[index] ? 1 : 0,
        maxHeight: activeDropdowns[index] ? '1000px' : '0',
        overflow: 'hidden',
        transition: 'all 0.3s ease-in-out'
      };
    }
    return {
      display: activeDropdowns[index] ? 'block' : 'none',
      opacity: activeDropdowns[index] ? 1 : 0,
      transition: 'opacity 0.3s ease-in-out'
    };
  };

  return (
    <div className={`navbar ${isScrolled ? 'navbar--reverse' : ''}`} id="welcome_header_content">
      <div className="navbar__container container">
        <Link href="/" className="navbar__logo">
          <Image src="/images/sigorka-logo-new.svg" alt="Sigorka Logo" width={230} height={50} />
        </Link>
        <div className={`navbar__collapse ${isMenuOpen ? 'show' : ''}`}>
          <div className="navbar__mobile">
            <Link href="/insurer" className="btn btn-primary">Üye Girişi</Link>
          </div>
          <ul className="main-nav">
            {/* Teklif Al - Index 0 */}
            <li
              className={`main-nav__item main-nav__item--dropdown ${activeDropdowns[0] ? 'active' : ''}`}
              onMouseEnter={() => !isMobile && handleDropdownHover(0, true)}
              onMouseLeave={() => !isMobile && handleDropdownHover(0, false)}
            >
              <a
                className="main-nav__link"
                href="#"
                onClick={(e) => handleDropdownClick(e, 0)}
              >
                Teklif Al
                <span className={`icon-angle-down ${activeDropdowns[0] ? 'rotate' : ''}`}></span>
              </a>
              <div
                className={`sub-nav ${activeDropdowns[0] ? 'show' : ''}`}
                style={getSubNavStyle(0)}
              >
                <div className="row no-gutters">
                  <div className="col-12 col-lg-4">
                    <Link href="/aracim" className="nav-box">
                      <div className="nav-box__img">
                        <Image src="/images/aracim.png" alt="Aracım" width={50} height={57} />
                      </div>
                      <h4 className="nav-box__title">Aracım</h4>
                    </Link>
                    <ul className="sub-nav__nav">
                      <li className="sub-nav__item">
                        <Link href="/kasko-sigortasi" className="sub-nav__link">Katılım Kasko Sigortası</Link>
                      </li>
                      <li className="sub-nav__item">
                        <Link href="/zorunlu-trafik-sigortasi" className="sub-nav__link">Katılım Zorunlu Trafik Sigortası</Link>
                      </li>
                      <li className="sub-nav__item">
                        <Link href="/imm" className="sub-nav__link">Katılım İMM Sigortası</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="col-12 col-lg-4">
                    <Link href="/sagligim" className="nav-box">
                      <div className="nav-box__img">
                        <Image src="/images/sagligim.png" alt="Sağlığım" width={50} height={57} />
                      </div>
                      <h4 className="nav-box__title">Sağlığım</h4>
                    </Link>
                    <ul className="sub-nav__nav">
                      <li className="sub-nav__item">
                        <Link href="/ozel-saglik-sigortasi" className="sub-nav__link">Özel Sağlık Katılım Sigortası</Link>
                      </li>
                      <li className="sub-nav__item">
                        <Link href="/seyahat-saglik-sigortasi" className="sub-nav__link">Seyahat Sağlık Katılım Sigortası</Link>
                      </li>
                      <li className="sub-nav__item">
                        <Link href="/tamamlayici-saglik-sigortasi" className="sub-nav__link">Tamamlayıcı Sağlık Katılım Sigortası</Link>
                      </li>
                      <li className="sub-nav__item">
                        <Link href="/yabanci-saglik-sigortasi" className="sub-nav__link">Yabancı Sağlık Katılım Sigortası</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="col-12 col-lg-4">
                    <Link href="/yuvam" className="nav-box">
                      <div className="nav-box__img">
                        <Image src="/images/yuvam.png" alt="Yuvam" width={50} height={57} />
                      </div>
                      <h4 className="nav-box__title">Yuvam</h4>
                    </Link>
                    <ul className="sub-nav__nav">
                      <li className="sub-nav__item">
                        <Link href="/dask" className="sub-nav__link">Katılım DASK Sigortası</Link>
                      </li>
                      <li className="sub-nav__item">
                        <Link href="/konut-sigortasi" className="sub-nav__link">Katılım Konut Sigortası</Link>
                      </li>
                      <li className="sub-nav__item">
                        <Link href="/ferdi-kaza-sigortasi" className="sub-nav__link">Katılım Ferdi Kaza Sigortası</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>

            {/* Ürünler - Index 1 (NEW) */}
            <li
              className={`main-nav__item main-nav__item--dropdown ${activeDropdowns[1] ? 'active' : ''}`}
              onMouseEnter={() => !isMobile && handleDropdownHover(1, true)}
              onMouseLeave={() => !isMobile && handleDropdownHover(1, false)}
            >
              <a
                className="main-nav__link"
                href="#"
                onClick={(e) => handleDropdownClick(e, 1)}
              >
                Ürünler
                <span className={`icon-angle-down ${activeDropdowns[1] ? 'rotate' : ''}`}></span>
              </a>
              <div
                className={`sub-nav ${activeDropdowns[1] ? 'show' : ''}`}
                style={getSubNavStyle(1)}
              >
                <div className="row no-gutters">
                  <div className="col-12 col-lg-4">
                    <Link href="/aracim" className="nav-box">
                      <div className="nav-box__img">
                        <Image src="/images/aracim.png" alt="Aracım" width={50} height={57} />
                      </div>
                      <h4 className="nav-box__title">Aracım</h4>
                    </Link>
                    <ul className="sub-nav__nav">
                      <li className="sub-nav__item">
                        <Link href="/kasko-sigortasi" className="sub-nav__link">Katılım Kasko Sigortası</Link>
                      </li>
                      <li className="sub-nav__item">
                        <Link href="/zorunlu-trafik-sigortasi" className="sub-nav__link">Katılım Zorunlu Trafik Sigortası</Link>
                      </li>
                      <li className="sub-nav__item">
                        <Link href="/imm" className="sub-nav__link">Katılım İMM Sigortası</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="col-12 col-lg-4">
                    <Link href="/sagligim" className="nav-box">
                      <div className="nav-box__img">
                        <Image src="/images/sagligim.png" alt="Sağlığım" width={50} height={57} />
                      </div>
                      <h4 className="nav-box__title">Sağlığım</h4>
                    </Link>
                    <ul className="sub-nav__nav">
                      <li className="sub-nav__item">
                        <Link href="/ozel-saglik-sigortasi" className="sub-nav__link">Özel Sağlık Katılım Sigortası</Link>
                      </li>
                      <li className="sub-nav__item">
                        <Link href="/seyahat-saglik-sigortasi" className="sub-nav__link">Seyahat Sağlık Katılım Sigortası</Link>
                      </li>
                      <li className="sub-nav__item">
                        <Link href="/tamamlayici-saglik-sigortasi" className="sub-nav__link">Tamamlayıcı Sağlık Katılım Sigortası</Link>
                      </li>
                      <li className="sub-nav__item">
                        <Link href="/yabanci-saglik-sigortasi" className="sub-nav__link">Yabancı Sağlık Katılım Sigortası</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="col-12 col-lg-4">
                    <Link href="/yuvam" className="nav-box">
                      <div className="nav-box__img">
                        <Image src="/images/yuvam.png" alt="Yuvam" width={50} height={57} />
                      </div>
                      <h4 className="nav-box__title">Yuvam</h4>
                    </Link>
                    <ul className="sub-nav__nav">
                      <li className="sub-nav__item">
                        <Link href="/dask" className="sub-nav__link">Katılım DASK Sigortası</Link>
                      </li>
                      <li className="sub-nav__item">
                        <Link href="/konut-sigortasi" className="sub-nav__link">Katılım Konut Sigortası</Link>
                      </li>
                      <li className="sub-nav__item">
                        <Link href="/ferdi-kaza-sigortasi" className="sub-nav__link">Katılım Ferdi Kaza Sigortası</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>

            <li className="main-nav__item">
              <Link href="/kampanyalar" className="main-nav__link">Kampanyalar</Link>
            </li>

            {/* Hakkımızda - Index 2 (was 1) */}
            <li
              className={`main-nav__item main-nav__item--dropdown ${activeDropdowns[2] ? 'active' : ''}`}
              onMouseEnter={() => !isMobile && handleDropdownHover(2, true)}
              onMouseLeave={() => !isMobile && handleDropdownHover(2, false)}
            >
              <a
                className="main-nav__link"
                href="#" // Hakkımızda ana sayfa linki yoksa # kullanılır. Varsa /hakkimizda gibi bir link eklenebilir.
                onClick={(e) => handleDropdownClick(e, 2)}
              >
                Hakkımızda
                <span className={`icon-angle-down ${activeDropdowns[2] ? 'rotate' : ''}`}></span>
              </a>
              <div
                className={`sub-nav sub-nav--sm ${activeDropdowns[2] ? 'show' : ''}`}
                style={getSubNavStyle(2)}
              >
                <ul className="sub-nav__nav">
                  <li className="sub-nav__item">
                    <Link href="/biz-kimiz" className="sub-nav__link">Biz Kimiz?</Link>
                  </li>
                  <li className="sub-nav__item">
                    <Link href="/neden-katilim-sigortaciligi" className="sub-nav__link">Neden Katılım Sigortacılığı?</Link>
                  </li>
                  <li className="sub-nav__item">
                    <Link href="/anlasmali-sigorta-sirketleri" className="sub-nav__link">Anlaşmalı Sigorta Şirketleri</Link>
                  </li>
                </ul>
              </div>
            </li>

            {/* Bilgi Merkezi - Index 3 (was 2) */}
            <li
              className={`main-nav__item main-nav__item--dropdown ${activeDropdowns[3] ? 'active' : ''}`}
              onMouseEnter={() => !isMobile && handleDropdownHover(3, true)}
              onMouseLeave={() => !isMobile && handleDropdownHover(3, false)}
            >
              <a
                className="main-nav__link"
                href="#"
                onClick={(e) => handleDropdownClick(e, 3)}
              >
                Bilgi Merkezi
                <span className={`icon-angle-down ${activeDropdowns[3] ? 'rotate' : ''}`}></span>
              </a>
              <div
                className={`sub-nav sub-nav--sm ${activeDropdowns[3] ? 'show' : ''}`}
                style={getSubNavStyle(3)}
              >
                <ul className="sub-nav__nav">
                  <li className="sub-nav__item">
                    <Link href="/blog" className="sub-nav__link">Sigorta Blog</Link>
                  </li>
                  <li className="sub-nav__item">
                    <Link href="/sozluk" className="sub-nav__link">Sigorta Sözlük</Link>
                  </li>
                  <li className="sub-nav__item">
                    <Link href="/sikca-sorulan-sorular" className="sub-nav__link">S.S.S</Link>
                  </li>
                  <li className="sub-nav__item">
                    <Link href="/kutuphane" className="sub-nav__link">Kütüphane</Link>
                  </li>
                </ul>
              </div>
            </li>
            <li className="main-nav__item">
              <Link href="/iletisim" className="main-nav__link">İletişim</Link>
            </li>
            <li className="main-nav__item">
              <Link href="/insurer" className="main-nav__link main-nav__link--btn">Üye Girişi</Link>
            </li>
          </ul>
        </div>
        <div className={`nav-icon ${isMenuOpen ? 'open' : ''}`} role="button" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
} 