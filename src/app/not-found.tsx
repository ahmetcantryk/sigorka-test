import type { Metadata } from 'next';
import '../styles/subpage.min.css';
export const metadata: Metadata = {
  title: '404 | Sigorka',
  description: 'Aradığınız sayfa bulunamadı',
};

export default function NotFound() {
  return (
    <section className="cover cover--error-page">
      <div className="container cover__container">
        <img
          src="/images/404.svg"
          className="img-fluid cover__img"
          alt="404"
          width={400}
          height={400}
        />
        <h2 className="cover__title-2">Bir şeyler ters gitti :(</h2>
        <p>Gitmek istediğiniz sayfa şu an bulunamıyor gibi gözüküyor.</p>
        <p>
          Adresi kontrol edebilir ya da ana sayfamıza giderek istediğiniz işlemi
          tekrar gerçekleştirebilirsiniz.
        </p>
        <a href="/" className="btn btn-wide btn-tertiary">Ana Sayfaya Git</a>
      </div>
    </section>
  );
} 