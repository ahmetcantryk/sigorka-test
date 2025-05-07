'use client';
 
import React from 'react';
import { usePathname } from 'next/navigation';

const navItems = [
  { href: '/acik-riza-metni', label: 'Açık Rıza Metni' },
  { href: '/cerez-politikasi', label: 'Çerez Politikası' },
  { href: '/elektronik-ileti-onayi', label: 'Elektronik İleti Onayı' },
  { href: '/kvkk', label: 'Kişisel Verilerin Korunması Hakkında Aydınlatma Metni' },
  { href: '/kullanici-sozlesmesi', label: 'Kullanıcı Sözleşmesi' },
  { href: '/mesafeli-satis-sozlesmesi', label: 'Mesafeli Satış Sözleşmesi' },
  
];

const LegalSideNav: React.FC = () => {
  const pathname = usePathname();

  return (
    <nav className="side-nav">
      <ul className="side-nav__nav">
        {navItems.map((item) => {
          // Aktiflik kontrolü: pathname tam eşleşme veya /xxx ile eşleşme
          const isActive = pathname === item.href ; 
          return (
            <li
              key={item.href}
              className={`side-nav__item${isActive ? ' side-nav__item--active' : ''}`}
            >
              <a href={item.href} target="_self" className="side-nav__link">
                {item.label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default LegalSideNav;

