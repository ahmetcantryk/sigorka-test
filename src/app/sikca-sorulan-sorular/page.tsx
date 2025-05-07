'use client';

import React, { useState, useRef } from 'react';
import Banner from '../components/common/Banner';
import Breadcrumb from '../components/common/Breadcrumb';
import faqData from './faq.json';
import '../../styles/subpage.min.css';

// SSS veri tipi
interface FaqQuestion {
  id: number;
  question: string;
  answer: string;
}
interface FaqCategory {
  id: number;
  title: string;
  questions: FaqQuestion[];
}

export default function SikcaSorulanSorularPage() {
  const categories: FaqCategory[] = faqData;
  const [activeCategory, setActiveCategory] = useState(categories[0]?.id ?? 1);
  const [activeQuestion, setActiveQuestion] = useState<number | null>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const selectedCategory = categories.find((cat) => cat.id === activeCategory) ?? categories[0];

  const handleCategoryClick = (id: number) => {
    setActiveCategory(id);
    setActiveQuestion(null); // kategori değişince açık soru kapanır
    if (window.innerWidth < 768) {
      const nav = document.querySelector('.side-nav__nav');
      if (nav) nav.classList.toggle('side-nav__nav--open');
    }
  };

  const handleQuestionClick = (id: number) => {
    setActiveQuestion(activeQuestion === id ? null : id);
  };

  const getBodyHeight = (index: number) => {
    const ref = itemRefs.current[index];
    if (ref) {
      return ref.scrollHeight;
    }
    return 0;
  };

  return (
    <>
      <Banner title1="Bilgi Merkezi" title2="Sıkça Sorulan Sorular" size="sm" />
      <section className="page-content">
        <div className="container container--sm">
          <Breadcrumb items={[
            { name: 'Ana Sayfa', href: '/' },
            { name: 'Bilgi Merkezi', href: '#' },
            { name: 'Sıkça Sorulan Sorular' }
          ]} />
          <div className="row pt-lg-4">
            <div className="col-lg-4 col-md-3">
              <nav className="side-nav">
                <ul className="side-nav__nav">
                  {categories.map((cat) => (
                    <li
                      key={cat.id}
                      className={`side-nav__item${activeCategory === cat.id ? ' side-nav__item--active' : ''}`}
                      data-id={cat.id}
                    >
                      <a href="#" className="side-nav__link" onClick={e => { e.preventDefault(); handleCategoryClick(cat.id); }}>{cat.title}</a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
            <div className="col-lg-8 col-md-9">
              <div className="faq-list">
                {selectedCategory.questions.map((q, idx) => (
                  <div
                    className={`faq-list__item${activeQuestion === q.id ? ' faq-list__item--active' : ''}`}
                    key={q.id}
                  >
                    <a
                      className={`faq-list__item-link${activeQuestion === q.id ? ' active' : ''}`}
                      onClick={e => { e.preventDefault(); handleQuestionClick(q.id); }}
                      href="#"
                    >
                      <h4 className="faq-list__item-title">{q.question}</h4>
                    </a>
                    <div
                      ref={el => { itemRefs.current[idx] = el; }}
                      className={`faq-list__item-body${activeQuestion === q.id ? ' faq-list__item-body--open' : ''}`}
                      style={{
                        height: activeQuestion === q.id ? getBodyHeight(idx) : 0,
                        opacity: activeQuestion === q.id ? 1 : 0,
                        overflow: 'hidden',
                        transition: 'height 0.4s cubic-bezier(0.4,0,0.2,1), opacity 0.3s'
                      }}
                    >
                      <p dangerouslySetInnerHTML={{ __html: q.answer }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 