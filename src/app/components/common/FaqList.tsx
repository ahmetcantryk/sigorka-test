'use client';

import React, { useState, useRef } from 'react';

interface Faq {
  question: string;
  answer: string;
}

interface FaqListProps {
  faqs: Faq[];
}

const FaqList: React.FC<FaqListProps> = ({ faqs }) => {
  const [activeItem, setActiveItem] = useState<number | null>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const toggleItem = (idx: number) => {
    setActiveItem(activeItem === idx ? null : idx);
  };

  const getBodyHeight = (index: number) => {
    const ref = itemRefs.current[index];
    if (ref) {
      return ref.scrollHeight;
    }
    return 0;
  };

  return (
    <div className="faq-list">
      {faqs.map((faq, idx) => (
        <div className={`faq-list__item${activeItem === idx ? ' faq-list__item--active' : ''}`} key={idx}>
          <a
            className={`faq-list__item-link${activeItem === idx ? ' active' : ''}`}
            onClick={() => toggleItem(idx)}
            style={{ cursor: 'pointer' }}
          >
            <h4 className="faq-list__item-title">{faq.question}</h4>
          </a>
          <div
            ref={el => { itemRefs.current[idx] = el; }}
            className={`faq-list__item-body${activeItem === idx ? ' faq-list__item-body--open' : ''}`}
            style={{
              height: activeItem === idx ? getBodyHeight(idx) : 0,
              opacity: activeItem === idx ? 1 : 0,
              overflow: 'hidden',
              transition: 'height 0.4s cubic-bezier(0.4,0,0.2,1), opacity 0.3s'
            }}
          >
            <p>{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FaqList; 