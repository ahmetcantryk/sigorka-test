"use client";

import Breadcrumb from '../components/common/Breadcrumb';
import FaqList from '../components/common/FaqList';
import ProductBanner from '../components/common/ProductBanner';
import '../../styles/subpage.min.css';
import '../../styles/armorbroker.css';
import Link from 'next/link';



const faqs = [
  {
    question: 'Trafik Sigortası Neleri Kapsar?',
    answer: 'Zorunlu trafik sigortası, sigortalanan aracın kaza sonucunda diğer araç ya da üçüncü şahıslara verebileceği hasarları, mecburi masraflar doğrultusunda karşılayan zorunlu bir sigortadır. Zorunlu Trafik Sigortanız maddi zararınızı, sağlık giderlerinizi, sürekli sakatlık veya ölüm durumlarında verilecek teminatlarınızı kapsar.'
  },
  {
    question: 'Kasko ve Trafik Sigortası Arasındaki Fark Nedir?',
    answer: 'İMM Sigortası, Trafik Sigortası ile kaza sonucunda diğer araç ya da üçüncü şahıslara verebileceği hasarlar belli bir limite kadar karşılanır. Limiti aşan tutarlar ise varsa Kasko poliçesinde belirtilen İMM limitlerinden karşılanır. Eğer bu limitleri de aşarsa kusurlu olan kişiye rücu edilir. İMM sigortası bu aşan limit kadar olan hasar tutarlarını karşılar.\nTrafik sigortası ve kasko arasındaki en temel farklar şu şekilde:\n• Trafik sigortası, karşı tarafından zararını karşılarken kasko poliçe sahibinin aracında meydana gelen hasarları teminat altına alır.\n• Trafik sigortası teminat ve limitleri her yıl Hazine Müsteşarlığı tarafından belirlendiği için trafik sigortası limitleri sabit tutulur, kasko poliçelerinin üst limitleri sigortalı tarafından belirlendiği için kasko bu anlamda daha esnektir, dilerseniz poliçenin kapsamını daraltabilir, genişletebilir veya poliçenizi iptal edebilirsiniz. Ancak zorunlu trafik sigortasında bu durum geçerli değildir. Çünkü zorunlu trafik sigortanızı ancak aracınızı sattığınızda iptal edebilirsiniz.\n• Trafik sigortasında teminat limitlerinin oranı belirli iken kasko sigortasında ise kasko fiyatları, poliçe kapsamına alınan teminat ve limitlere göre değişir.\n• Trafik sigortası, devletin zorunlu tuttuğu bir sigorta türü olduğu için motorlu taşıt sahibi olan sürücülerin mutlaka trafik sigortası yaptırması gerekir aksi takdirde aracınızla trafiğe çıkamaz; trafiğe çıkmanız durumunda cezai yaptırımlarla karşılaşabilirsiniz. Oysa kasko, isteğe bağlı bir sigorta türü olduğu için kasko yaptırmak tamamen taşıt sahibinin inisiyatifindedir. Kasko yaptırmak mantıklı mı konusunda karar vermek için içeriğimize göz atabilirsiniz.\n• Sigorta süresi bittiğinde aracını yeniden sigorta yaptırmanız gerekir oysa kaskoda böyle bir zorunluluk yoktur.\n• Zorunlu trafik sigortası aracınız ile bir kazaya karıştığınızda karşı tarafın (üçüncü kişilerin) maddi ve bedensel zararlarını karşılarken kasko kaza durumunda sizin mağduriyetinizi önlemeye odaklanır.\n• Kasko teminatları hem sizi hem de aracınızın güvenliğini koruma altına alırken trafik sigortası yalnızca kaza meydana gelirse devreye girer. Dolayısıyla aracınızla bir kazaya karıştığınız takdirde trafik sigortasını kasko yerine kullanamazsınız.'
  },
  {
    question: 'Trafik Sigortası Sorgulama Nasıl Yapılır?',
    answer: 'E-Devlet uygulamasına giriş yaptıktan sonra, turkiye.gov.tr/sbm-trafik-police-sorgulama adresinden aracınızın plaka bilgilerini girerek zorunlu trafik sigortası poliçe bilgilerinize ulaşabilirsiniz.'
  },
  {
    question: 'Trafik Sigortası Yaptırmayan Sürücüler İçin Yaptırım Var mı?',
    answer: 'Trafik Sigortası yaptırmamanın cezası Maliye Bakanlığına ait ceza kanununda belirtilmiştir. Zorunlu Trafik Sigortası olmayan araçlara verilecek para cezası 2024 yılı için 690 TL olarak belirlenmiştir. Ceza alan kişi, cezayı 15 gün içinde peşin ödemesi durumunda ceza tutarında %25 indirim uygulanır. Böylece bu tutar 517,5 TL\'ye düşer. Trafik Sigortasını hiç yaptırmama ve yenilememe durumunda ise her ay %5 gecikme zammı uygulanmaktadır.'
  }
];

export default function ZorunluTrafikSigortasiPage() {
  return (
    <>
  
      <ProductBanner
        title1="Aracım"
        title2="Katılım Zorunlu Trafik Sigortası"
        buttonText="Hemen Teklif Alın"
        buttonHref="/oto/standart-trafik"
        size="sm"
      />
      <section className="page-content" >
        <div className="container container--sm">
          <Breadcrumb
            items={[
              { name: 'Ana Sayfa', href: '/' },
              { name: 'Ürünler', href: '' },
              { name: 'Aracım', href: '/aracim' },
              { name: 'Katılım Zorunlu Trafik Sigortası' }
            ]}
          />
          <div className="text-content">
            <h3>Trafiğe çıkan tüm araçların yaptırmak zorunda olduğu, olası bir kaza durumunda iki tarafın da haklarını güvence altına alan ve oluşan hasarların karşılanmasını sağlayan sigortadır. Aracınızın kaza ve hasar geçmişine göre ödenecek prim tutarı ve aracın bulunduğu hasarsızlık kademesi değişecektir. Kaza ve hasar durumuna göre kademelendirilen prim ödemeleri, sürücüleri kazalara karşı daha tedbirli olmaya ve trafik kurallarına uymaya teşvik eder. Zorunlu trafik sigortası ile karayollarında oluşabilecek maddi ve bedensel kayıpların minimuma indirilmesi hedeflenir.</h3>
            <h4>Zorunlu Trafik Sigortası Nedir?</h4>
            <p>Zorunlu trafik sigortası, sigortalanan aracın kaza sonucunda diğer araç ya da üçüncü şahıslara verebileceği hasarları, mecburi masraflar doğrultusunda karşılayan zorunlu bir sigortadır. Sigorta kapsamında poliçenizde tanımlanan motorlu aracın işletilmesi sırasında, bir kimsenin ölümüne, yaralanmasına veya bir şeyin zarara uğramasına sebep olunması durumunda karşılaşılan miktarı zorunlu sigorta limitlerine kadar temin etmekteyiz. Her bir motorlu kara taşıtı için ayrı poliçe düzenlenmektedir. Poliçe kanunen zorunlu olduğu için katkı payını (primi) peşin ödenmek zorundadır.</p>
            <h4>Trafik Sigortasının Sağlamış Olduğu Avantajlar Nelerdir?</h4>
            <p>Olası bir kaza durumunda iki tarafın da haklarını güvence altına alarak, oluşan hasarların karşılanmasını sağlar. Her aracın kendine ait zorunlu bir trafik sigortası olup, aracın kaza ve hasar geçmişine göre ödenecek katkı payı (prim) tutarı ve aracın bulunduğu hasarsızlık kademesi değişiklik gösterir. Kaza ve hasar durumuna göre kademelendirilen prim ödemeleri, sürücüleri kazalara karşı daha tedbirli olmaya ve trafik kurallarına uymaya teşvik eder. Zorunlu trafik sigortası ile karayollarında oluşabilecek maddi ve bedensel kayıpların minimuma indirilmesi hedeflenir.</p>
            <h4>Zorunlu Trafik Sigortası Teminatları Nelerdir?</h4>
            <ul className="prop-list">
              <li>Maddi Zararlar Teminatı</li>
              <li>Sağlık Giderleri Teminatı</li>
              <li>Sürekli Sakatlık Teminatı</li>
              <li>Vefat Teminatı</li>
            </ul>
            <h4>Zorunlu Trafik Sigortası Limitleri Nelerdir?</h4>
            <div className="table-responsive">
              <table className="table table-bordered text-center">
                <thead>
                  <tr>
                    <th rowSpan={2}>Araç Türü</th>
                    <th colSpan={2}>Sağlık Gideri</th>
                    <th colSpan={2}>Sakatlanma ve Ölüm</th>
                    <th colSpan={2}>Maddi Zararlar</th>
                  </tr>
                  <tr>
                    <th>Kişi Başı</th>
                    <th>Kaza Başı</th>
                    <th>Kişi Başı</th>
                    <th>Kaza Başı</th>
                    <th>Araç Başı</th>
                    <th>Kaza Başı</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Otomobil/Taksi</td>
                    <td>1.800.000 TL</td>
                    <td>9.000.000 TL</td>
                    <td>1.800.000 TL</td>
                    <td>9.000.000 TL</td>
                    <td>200.000 TL</td>
                    <td>400.000 TL</td>
                  </tr>
                  <tr>
                    <td>Kamyonet, Kamyon, Minibüs veya Çekici</td>
                    <td>1.800.000 TL</td>
                    <td>18.000.000 TL</td>
                    <td>1.800.000 TL</td>
                    <td>18.000.000 TL</td>
                    <td>200.000 TL</td>
                    <td>400.000 TL</td>
                  </tr>
                  <tr>
                    <td>Tarım Araçları ile Özel Amaçlı Araçlar</td>
                    <td>1.800.000 TL</td>
                    <td>9.000.000 TL</td>
                    <td>1.800.000 TL</td>
                    <td>9.000.000 TL</td>
                    <td>200.000 TL</td>
                    <td>400.000 TL</td>
                  </tr>
                  <tr>
                    <td>Motosiklet ve Yük Motorsikleti</td>
                    <td>1.800.000 TL</td>
                    <td>5.400.000 TL</td>
                    <td>1.800.000 TL</td>
                    <td>5.400.000 TL</td>
                    <td>200.000 TL</td>
                    <td>400.000 TL</td>
                  </tr>
                  <tr>
                    <td>Minibüs (sürücü dahil 10-17 koltuk)</td>
                    <td>1.800.000 TL</td>
                    <td>4.050.000 TL</td>
                    <td>1.800.000 TL</td>
                    <td>4.050.000 TL</td>
                    <td>200.000 TL</td>
                    <td>400.000 TL</td>
                  </tr>
                  <tr>
                    <td>Otobüs (sürücü dahil 18-30 koltuk)</td>
                    <td>1.800.000 TL</td>
                    <td>10.530.000 TL</td>
                    <td>1.800.000 TL</td>
                    <td>10.530.000 TL</td>
                    <td>200.000 TL</td>
                    <td>400.000 TL</td>
                  </tr>
                  <tr>
                    <td>Otobüs (sürücü dahil 31+üstü koltuk)</td>
                    <td>1.800.000 TL</td>
                    <td>21.060.000 TL</td>
                    <td>1.800.000 TL</td>
                    <td>21.060.000 TL</td>
                    <td>200.000 TL</td>
                    <td>400.000 TL</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <h4>Trafik Sigortası Teklifi Nasıl Alınır?</h4>
            <p>Zorunlu trafik sigortası teklif alma aşamasında aracın ruhsatında ve sürücünün kimliğinde yazılı olan bazı bilgilere ihtiyaç duyulur. Araç bilgilerine ilişkin olarak öncelikle poliçe durumuna göre değerlendirme yapılır. Sıfır km araç için ilk poliçe, ikinci el araç için ilk poliçe veya poliçe yenileme seçeneklerinden birisi seçilir. Poliçe yenileme işleminde mevcut plaka üstünden işlem yapılacağı için aracın plakası, sürücünün kimlik numarası ve doğum tarihi gibi bilgiler trafik sigortası teklif alma aşamasında yeterli olur. İkinci el veya sıfır araçlar için hazırlanacak olan ilk poliçede ise aracın plakasının olup olmadığını belirtmeniz gerekir. Bu bilgiler ile hızlı bir şekilde farklı zorunlu trafik sigortası paketlerine ilişkin tarafınıza verilen fiyat tekliflerini görüntüleyip, bu teklifleri birbiriyle karşılaştırarak en kapsamlı ve en ucuz trafik sigortası alternatifleri arasından seçiminizi yapabilirsiniz.</p>
            <div className="col-12 my-5">
              <div className="offer-banner offer-banner-car-bg">
                <div className="offer-banner__content">
                  <h3>Katılım Zorunlu Trafik Sigortasına mı ihtiyacınız var?</h3>
                  <p>En uygun tekliflerle aracınızı kaskolamak için şimdi teklif alın.</p>
                </div>
                <div className="offer-banner__cta">
                  <Link className="btn btn-wide btn-tertiary" href="/oto/standart-trafik" target="_self">
                    Hemen Teklif Alın
                  </Link>
                </div>
              </div>
            </div>
            <h4>Zorunlu Trafik Sigortasında <span>Hasarsızlık İndirimi</span> Nedir?</h4>
            <p>Aracın hasarsızlık durumuna göre sigorta indirim basamakları ve sürprim oranları değişkenlik gösterir. Toplam 7 basamaktan oluşur.</p>
            <h4>Zorunlu Trafik Sigortası <span>Hasarsızlık İndirim Oranları</span> Nelerdir?</h4>
            <div className="table-responsive">
              <table className="table table-bordered text-center">
                <thead>
                  <tr>
                    <th>Basamak No</th>
                    <th>0</th>
                    <th>1</th>
                    <th>2</th>
                    <th>3</th>
                    <th>4</th>
                    <th>5</th>
                    <th>6</th>
                    <th>7</th>
                    <th>8</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>İndirim</th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>%5</td>
                    <td>%20</td>
                    <td>%40</td>
                    <td>%50</td>
                  </tr>
                  <tr>
                    <th>Artırım</th>
                    <td>%200</td>
                    <td>%135</td>
                    <td>%90</td>
                    <td>%45</td>
                    <td>%10</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
      <section className="page-content pt-0">
        <div className="container">
          <h4>Zorunlu Trafik Sigortası Sıkça Sorulan Sorular</h4>
          <FaqList faqs={faqs} />
        </div>
      </section>
    </>
  );
} 