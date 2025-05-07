"use client";

import Breadcrumb from '../components/common/Breadcrumb';
import FaqList from '../components/common/FaqList';
import ProductBanner from '../components/common/ProductBanner';
import '../../styles/subpage.min.css';
import '../../styles/armorbroker.css';

const faqs = [
  {
    question: 'DASK Neleri Kapsar?',
    answer: `<ul><li>Tapuya kayıtlı ve özel mülkiyete tâbi taşınmazlar üzerinde mesken olarak inşa edilmiş binalar</li><li>634 sayılı Kat Mülkiyeti Kanunu kapsamındaki bağımsız bölümler</li><li>Bu binaların içinde yer alan ve ticarethane, büro ve benzeri amaçlarla kullanılan bağımsız bölümler</li><li>Doğal afetler nedeniyle devlet tarafından yaptırılan veya verilen kredi ile yapılan meskenler</li></ul><p>Zorunlu Deprem Sigortası ayrıca yukarıdaki koşullara uyan;</p><ul><li>Kat irtifakı tesis edilmiş binalar <br />Tapuda henüz cins tashihi yapılmamış ve tapu kütüğünde vasfı arsa vs. binalar <br />Tapu tahsisi henüz yapılmamış kooperatif evleri için de geçerlidir.</li></ul>`
  },
  {
    question: 'DASK Teminatları Nelerdir?',
    answer: `<p>Aşağıda belirtilen bina bölümleri, bir arada ya da ayrı olarak teminat kapsamındadır:</p><ul><li>Temeller</li><li>Ana duvarlar</li><li>Bahçe duvarları</li><li>İstinat duvarları</li><li>Tavan ve tabanlar</li><li>Merdivenler</li><li>Asansörler</li><li>Sahanlıklar</li><li>Koridorlar Çatılar</li><li>Bacalar</li><li>Bağımsız bölümleri ayıran ortak duvarlar</li><li>Yapının listedekine benzer nitelikteki tamamlayıcı bölümleri</li></ul>`
  },
  {
    question: 'DASK Tüm Sigorta Şirketlerinde Aynı Fiyat mıdır?',
    answer: 'Evet, DASK poliçeleri tüm sigorta poliçelerinde aynı bilgiler ile hesaplandığında aynı primdir.'
  },
  {
    question: 'DASK UAVT Nedir?',
    answer: 'Nüfus ve Vatandaşlık Hizmetleri tarafından 1 Mart 2013 tarihinde hayata geçirilen bir proje olan adres kodu; nüfusa dayalı adres sistemine kayıtlı ve Türkiye sınırları içerisinde yer alan tüm konutlara verilen 10 haneli özel bir koddur. Aynı zamanda UAVT kodu olarak da adlandırılmaktadır.'
  },
  {
    question: 'DASK Hasar Görmüş Konutlar İçin Yapılır Mı ?',
    answer: 'Çevre ve Şehircilik Bakanlığı binaları hasar durumlarına göre ağır, orta ve hafif hasarlı olmak üzere 3’e ayırıyor. Ağır hasarlı binalara herhangi bir sigortalanma yapılamıyor ve bu binaların yıkılması gerekiyor. Orta hasarlı bina onarılmışsa ya da güçlendirilmişse Sigortalanmasında Bayındırlık ve İskan Bakanlığı tarafından verilen “oturulabilir” durumda olduğunu gösteren uygunluk belgesi yeterli oluyor. Daha önceki bir depremde hafif hasar almış bir binanın sigortalanmasında, sigortalının beyanı esas alınıyor ve sigorta poliçesi bu beyana göre yapılıyor.'
  }
];

export default function DaskSigortasiPage() {
  return (
    <>
      <ProductBanner
        title1="Yuvam"
        title2="Katılım DASK Sigortası"
        buttonText="Hemen Teklif Alın"
        buttonHref="/dask/dask-sigortasi-al"
        size="sm"
      />
      <section className="page-content">
        <div className="container container--sm">
          <Breadcrumb
            items={[
              { name: 'Ana Sayfa', href: '/' },
              { name: 'Ürünler', href: '' },
              { name: 'Yuvam', href: '/yuvam' },
              { name: 'Katılım DASK Sigortası' }
            ]}
          />
          <div className="text-content">
            <h3>Depremin ve deprem sonucu meydana gelen yangın, infilak, tsunami ve yer kaymasının doğrudan neden olacağı maddi zararları karşılayan sigortadır.</h3>
            <h4>DASK Nedir?</h4>
            <p>Dask zorunlu bir poliçe türüdür. Binanız tamamen ya da kısmi olarak zarar görmüş olsa da teminat altındadır. Deprem sonucu oluşacak maddi zararlar poliçenizde belirtilmiş limitler dahilinde nakit olarak karşılanır.</p>
            <h4>DASK Kapsamında Binamın Sigorta Bedelinin Tespiti Nasıl Yapılır?</h4>
            <p>7 Mart 2025 Tarihli Tebliğe göre;</p>
            <div className="table-responsive">
              <table className="table table-bordered text-center">
                <tbody>
                  <tr>
                    <th>Betonarme Birim (TL)</th>
                    <td className="rounded-top-right">8.039</td>
                  </tr>
                  <tr>
                    <th>Diğer Birim (TL)</th>
                    <td className="rounded-bottom-right">5.359</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <h4>Aşağıdaki tabloda, risk bölgelerine ve yapı tiplerine göre oluşturulan örnek prim hesaplamasını inceleyebilirsiniz.</h4>
            <p>İllerin Risk Bölgelerine ve Yapı Tiplerine Göre Katkı Payı(prim) Miktarları</p>
            <div className="table-responsive">
              <table className="table table-bordered text-center">
                <thead>
                  <tr>
                    <th colSpan={9}>Tüm iller için 100 m²lik Konut Katkı Payı Miktarı (TL)</th>
                  </tr>
                  <tr>
                    <th colSpan={9}>Risk Bölgeleri Primi (TL)</th>
                  </tr>
                </thead>
                <thead>
                  <tr>
                    <th>Yapı Tipi</th>
                    <th>Teminat (100m²)</th>
                    <th>I</th>
                    <th>II</th>
                    <th>III</th>
                    <th>IV</th>
                    <th>V</th>
                    <th>VI</th>
                    <th>VII</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Betonarme</td>
                    <td><span title="100 m² x 8.209 TL">820.900 TL</span></td>
                    <td>2.104</td>
                    <td>1.869</td>
                    <td>1.589</td>
                    <td>1.490</td>
                    <td>1.120</td>
                    <td>795</td>
                    <td>542</td>
                  </tr>
                  <tr>
                    <td className="rounded-bottom-left">Diğer</td>
                    <td><span title="100 m² x 5.473 TL">547.300 TL</span></td>
                    <td>2.468</td>
                    <td>2.113</td>
                    <td>1.854</td>
                    <td>1.734</td>
                    <td>1.391</td>
                    <td>927</td>
                    <td className="rounded-bottom-right">542</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <h4>DASK Zorunlu mudur?</h4>
            <p>Deprem sigortası zorunlu sigorta çeşitleri arasında yer alır. Yani DASK yaptırmak yasal olarak zorunludur ve deprem sigortası yaptırmamanın belirli yaptırımları vardır.</p>
            <h4>DASK Sigortasının Amacı Nelerdir?</h4>
            <ul className="prop-list">
              <li>Bütün konutları depreme karşı güvence altına almak</li>
              <li>Mali hasarların yükünü reasüre ederek (yeniden sigortalayarak) paylaşmak</li>
              <li>Devletin deprem kaynaklı giderlerini azaltmak ve gelecekte oluşabilecek hasarlar için fon oluşturmak</li>
              <li>Ülkemizde sağlıklı yapılaşmaya katkı sağlamak</li>
              <li>Toplum genelinde sigorta bilincinin gelişmesine destek olmak</li>
            </ul>
            <h4>DASK Prim Hesaplama Nasıl Yapılır?</h4>
            <p>Dask hesaplaması Zorunlu Deprem Sigortası Tarife ve Talimatı’na göre belirlenir. DASK katkı payları (primleri) hesaplanırken ikamet ettiğiniz binanın yapı tarzı, inşa yılı, toplam kat sayısı ve daire yüz ölçümü gibi bilgiler belirleyici olur. Her konutun özelliğine göre farklı bir DASK ücreti belirlense de kendi konutunuz için ödemeniz gereken DASK fiyatı sigorta şirketine göre değişmez.</p>
            <h4>DASK Poliçe Sorgulama Nasıl Yapılır?</h4>
            <p>İnternet üzerinden DASK poliçe sorgulama işlemi 2 farklı şekilde yapılabilir. Bu yollar;</p>
            <ul className="prop-list">
              <li>E-devlet ile DASK poliçe sorgulama</li>
              <li>DASK web sitesinden poliçe sorgulama</li>
            </ul>
            <h4>DASK Teklifi Nasıl Alınır?</h4>
            <p>Sigorka.com web sitemiz üzerinden TC kimlik numaranız, adresi kodunuz (uavt kodu) ve konut bilgileriniz ile hızlı bir şekilde DASK teklifi alabilirsiniz. UAVT Kodunuza bu <a href="https://adres.nvi.gov.tr/VatandasIslemleri/AdresSorgu" target="_blank" rel="noreferrer">linke tıklayarak</a> ulaşabilirsiniz.</p>
            <h4>DASK Hasar İhbarında İstenen Belgeler Nelerdir?</h4>
            <p>DASK’ın Zorunlu Deprem Sigortası’ndan faydalanabilmeniz için binanızın tamamen ya da kısmı olarak zarar görmüş olması fark etmez; küçük ya da büyük maddi zararlar için de tazminat talep edilebilir. Depremin ve deprem sonucu meydana gelen yangın, infilak, tsunami ve yer kaymasının doğrudan neden olduğu maddi zararlarınızın, poliçenizde belirtilmiş limitler dahilinde tazmini için gereken bilgi ve belgeler şöyledir:</p>
            <ul className="prop-list">
              <li>Hasar Bildirimi (TC kimlik veya poliçe numarası ile)</li>
              <li>Güncel Tapu Bilgisi</li>
              <li>Hasar Yeri Açık Adresi (Eksper gönderimi ve değerlendirmesinin kolaylığı için)</li>
              <li>Sigortalı Telefonu (Sabit veya cep)</li>
            </ul>
            <h4>Deprem Sonrasında Hasar Meydana Geldiği Taktirde Neler Yapılmalıdır?</h4>
            <p>Deprem sonrasında poliçe ve hasara neden olan depremin bilgileri ile ALO DASK 125 aranmalıdır.</p>
            <h4>DASK Tazminat Ödemeleri Ne Kadar Sürede Yapılır?</h4>
            <p>Tazminat tutarının kesinleşmesi ve evrakların tamamlanmasını takiben, tazminat ödemeleri en geç 1 ay içerisinde yapılır.</p>
          </div>
          <div className="col-12 mb-4">
            <div className="offer-banner offer-banner-home-bg">
              <div className="offer-banner__content">
                <h3>Katılım DASK Sigortasına mı ihtiyacınız var?</h3>
                <p>En uygun Katılım DASK teklifleri için tıklayınız.</p>
              </div>
              <div className="offer-banner__cta">
                <a className="btn btn-wide btn-tertiary" href="/dask/dask-sigortasi-al" target="_self">
                  Hemen Teklif Alın
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="page-content pt-0">
        <div className="container">
          <h4>DASK Hakkında Sıkça Sorulan Sorular</h4>
          <FaqList faqs={faqs} />
        </div>
      </section>
    </>
  );
}
