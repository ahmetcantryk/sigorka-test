"use client";

import Banner from '../components/common/Banner';
import Breadcrumb from '../components/common/Breadcrumb';
import FaqList from '../components/common/FaqList';
import faqData from '../sikca-sorulan-sorular/faq.json';
import '../../styles/subpage.min.css';
import '../../styles/armorbroker.css';
import ProductBanner from '../components/common/ProductBanner';

// faq.json'dan Katılım Kasko Sigortası kategorisini bul
const kaskoFaqCategory = faqData.find((cat: any) => cat.title === 'Katılım Kasko Sigortası');
const kaskoFaqs = kaskoFaqCategory ? kaskoFaqCategory.questions.map((q: any) => ({ question: q.question, answer: q.answer })) : [];

export default function KaskoSigortasiPage() {
  return (
    <>
      <ProductBanner
        title1="Aracım"
        title2="Katılım Kasko Sigortası"
        buttonText="Hemen Teklif Alın"
        buttonHref="/oto/hesapli-kasko"
        size="sm"
      />
      <section className="page-content">
        <div className="container container--sm">
          <Breadcrumb
            items={[
              { name: 'Ana Sayfa', href: '/' },
              { name: 'Ürünler', href: '' },
              { name: 'Aracım', href: '/aracim' },
              { name: 'Katılım Kasko Sigortası' }
            ]}
          />
          <div className="text-content">
            <h3>Kasko sigortası aracınıza sizin ya da 3. şahısların vermesi muhtemel zararları karşılayan, poliçe şartlarına uygun olarak ek hizmetler sunabilen sigortadır.</h3>
            <h4>Araç Kasko Sigortası Nedir?</h4>
            <p>Zorunlu Trafik Sigortası ile sıkça karıştırılan araç kaskosu, araçlar için farklı teminatları kapsar. Kasko ve trafik sigortası arasındaki en önemli farklardan biri, trafik sigortasının Türkiye Cumhuriyeti kapsamında trafiğe çıkan tüm araçlar için zorunlu olmasına rağmen, araç kasko sigortalarının zorunlu olmayışıdır. Ayrıca zorunlu trafik sigortası yalnızca karşı tarafın zararlarını karşılamaya yönelik iken kasko, kendi aracınızın karşılaşabileceği pek çok tehlikeyi ve kazayı içine alan teminatlara sahip avantajlı bir sigorta poliçesidir.</p>
            <h4>Katılım Kasko Sigortası Nasıl Hesaplanır?</h4>
            <p>Bir aracın kasko değerini etkileyen pek çok unsur bulunur. Modeli, üretim yılı, araç tipi, hasarı, kilometresi, bu unsurlardan sadece bazıları. Peki, bu kadar faktöre göre araç kasko değeri tam olarak nasıl hesaplanır? Aslında bunun için kalem kalem bir hesaplama yapmak yerine güncel verilerden yardım alınır.<br />Bir sigorta şirketi, araç kasko değerini belirlerken Türkiye Sigortalar Birliği tarafından oluşturulan Kasko Değer Listesi'ni baz alır. Çünkü Kasko Değer Listesi üzerinden farklı marka, model ve üretim yılındaki araçların güncel piyasa değerlerine ulaşılabilir. Her ay güncellenen bu liste sayesinde kasko poliçesi oluşturulurken aracın kasko değeri çıkarılır.</p>
            <h4>Kasko Poliçesinde Fiyatı Etkileyen Unsurlar</h4>
            <ul className="prop-list">
              <li>Sürücünün Yaşı</li>
              <li>Aracın Yaşı</li>
              <li>Aracın Marka ve Modeli</li>
              <li>Sigortalı Mesleği</li>
              <li>Yaşadığı Şehir</li>
              <li>Hasarsızlık İndirimi</li>
            </ul>
            <p>Ayrıca Kasko poliçelerinde alınan ek teminatlar, ek teminatlardaki limitler, servis seçeneği ve teminatlardaki muafiyetli uygulamalar primi etkilemektedir.</p>
            <h4>Kasko Sigortası Teminatları Nelerdir?</h4>
            <p>Kasko sigortalarının teminat koşulları poliçe çeşitlerine göre değişiklik gösterir. Ancak yaygın olarak tüm kaskolar, sigorta sahiplerinin aracını farklı risklere karşı güvence altına alır. Güvence altına alınan başlıca riskleri şu şekilde sıralayabiliriz:</p>
            <ul className="prop-list">
              <li>Sigortalı aracın motorlu/motorsuz başka bir araç ile çarpışması</li>
              <li>Aracın üçüncü şahıslar tarafından zarar uğraması, araç içindeki aksesuarların veya aracın çalınması durumundaki maddi zararlar kasko sigortası tarafından teminat altına alınır</li>
              <li>Sigortalı aracın zarar görmesine neden olan ve kullanıcıdan bağımsız şekilde gerçekleşen yangın</li>
              <li>Sigortalı aracın 3. şahıslar tarafından çalınması veya buna teşebbüs edilmesi</li>
            </ul>
            <p>Bu teminat kapsamı, ana kasko olarak da adlandırılan poliçelerin hemen hepsinde yer alan standart maddelerdir. Ancak Kaskonuza ek teminatlar da ekleyebilir, böylece daha güvenli sürüş keyfi yaşayabilirsiniz. Kaskoda ek teminatların en çok tercih edilenleri İhtiyari mali mesuliyet, ferdi kaza, manevi tazminat, ikame araç, deprem, dolu, sel ve su baskını, kişisel eşya, anahtar kaybı ve yol yardım hizmeti olarak sıralanabilir.</p>
            <h4>Kasko Sigortası Hasarsızlık İndirimi Nedir?</h4>
            <p>Hasarsızlık indirimi olarak adlandırılan kavram, kasko sigorta poliçesi bulunan araç sahiplerinin 1 poliçe dönemini hasarsız olarak tanımlayarak elde ettikleri bir indirimdir. Bu araç sahipleri poliçelerini yeniletirken en uygun kasko fiyatları için hak kazanır. Bu sayede araçlarını çok daha uygun maliyetli olarak teminat altına alabilirler. Kısacası bir önceki poliçe sürecinde aracınızın hasar almaması, bir sonraki kaskonuzda sizin için avantajlı fiyatlar sunabilir.</p>
            <h4>Kasko Sigortası Hasarsızlık İndirim Oranları Nasıl Hesaplanır?</h4>
            <p>İlk 12 aylık sigorta süresi sonundaki yenilemede %30, İkinci 12 aylık sigorta süresi sonundaki yenilemede %40, Üçüncü 12 aylık sigorta süresi sonundaki yenilemede %50, Dördüncü 12 aylık sigorta süresi sonundaki yenilemede %60 oranlarında indirimlerden faydalanabilirsiniz.</p>
            <h4>Kasko Sigortasının Avantajları Nelerdir?</h4>
            <p>Kasko Sigortası; sahip olduğu ana teminatların yanı sıra poliçenizde yer alabilecek ek teminatlarla da başınıza gelmesini istemeyeceğiniz pek çok duruma karşı sizi ve aracınızı güvence altına alır. Yani kasko, direkt olarak araç sahibinin faydalarını gözeten bir araç sigortası türüdür.<br />Umarız bu sigortanın sunduğu teminatlardan yararlanmak durumunda kalmazsınız ama hayatın kötü sürprizlerine karşı da önlem almakta fayda var! Şimdi, Kasko Sigortası yaptırmanın avantajlarını sıralayalım.</p>
            <h5 className="font-weight-bolder">1. Kaza Sonucu Oluşabilecek Hasarları Karşılar</h5>
            <p>Sadece karşı taraftan kaynaklı kazalarda oluşabilecek olan hasarları değil; sizden kaynaklı olabilecek araç hasarlarını da kısmen ya da tamamen karşılar. Hangi hasarların karşılanabileceği ise poliçede belirtilir.</p>
            <h5 className="font-weight-bolder">2. Çekici Hizmeti Sunar</h5>
            <p>Çoğu kazada ya da arızada araç hareket edemez hale geldiği için, çekici büyük önem kazanır. Bu nedenle kaskolar belirli durumlar ve limitler dâhilinde ücretsiz çekici hizmeti de sunar.</p>
            <h5 className="font-weight-bolder">3. Yedek Araç Verir</h5>
            <p>Kaza, arıza ve benzeri durumlardan dolayı aracınız onarım sürecinde olduğu ve aracınızı kullanamadığınız için sigorta şirketi tarafından size ikame araç verilir. Böylece yaşanabilecek olan olumsuz durumlardan etkilenmeden günlük yaşantınıza devam edebilirsiniz.</p>
            <h5 className="font-weight-bolder">4. Hırsızlık Durumunda da Geçerlidir</h5>
            <p>Çoğu sigorta şirketi, genellikle ek bir bedel ödemek şartıyla hırsızlık gibi durumlarda da kısmen ya da tamamen oluşabilecek zararları telafi ederler. Araç çalınmış ya da çalınmamasına rağmen hırsızlık girişimi sonucu zarar görmüşse sigorta şirketi bu zararları sigorta poliçesinin dâhilinde karşılayabilmektedir.</p>
            <h5 className="font-weight-bolder">5. Doğal Afetlerde Oluşan Zararı Giderir</h5>
            <p>Dolu, sağanak yağmur, yangın, toprak kayması, deprem gibi birbirinden farklı doğa olayları sonucu aracınızda meydana gelebilecek zararlar da kasko tarafından karşılanabilmektedir.</p>
            <h5 className="font-weight-bolder">6. Sağlık Sorunlarında Destek Olur</h5>
            <p>Teminatlar içerisine eklenebilen sağlık hizmetleri sayesinde kaza sonucu oluşabilecek yaralanma, ölüm gibi can güvenliği ile ilgili durumlarda da sigorta şirketiniz destek olabilmektedir.</p>
            <h5 className="font-weight-bolder">7. Ek Hizmetler Alınabilir</h5>
            <p>Bu sigortaları sadece verdikleri standart hizmetlerden ibaret olarak düşünmemeli, aracınıza dair ihtiyacınız olan farklı bir hizmeti de kasko teminatları içerisine ekletebileceğinizi unutmamalısınız. Araç için çilingir hizmeti, araç anahtar kaybı, araç aksesuarlarının sigorta kapsamına alınması gibi pek çok farklı seçenek isteğe bağlı olarak güvenceler içerisine alınabilmektedir.</p>
            <h4>Kasko Sigortası Teklifi Nasıl Alınır?</h4>
            <p>Araç sahipleri kasko sigortası teklifi alabilmek için bazı bilgileri vermesi gerekir. Aracın markası ve üretim yılı gibi faktörler fiyatın hesaplanmasında etkilidir. Diğer etkili faktörler ise aracın hasarsızlık indiriminin olup olmadığı ve talep edilen ek teminatlardır. Örneğin ana teminatların yer aldığı poliçede genişletilmiş kasko sigortası talep ediliyorsa fiyatın yüksek olması muhtemeldir. Size en uygun ve fiyat avantajlı Katılım Kasko tekliflerinizi ruhsat bilgilerini girerek sigorka.com sitemizden alabilirsiniz.</p>
          </div>
          <div className="col-12 mb-4">
            <div className="offer-banner offer-banner-car-bg">
              <div className="offer-banner__content">
                <h3>Katılım Kasko Sigortasına mı ihtiyacınız var?</h3>
                <p>En uygun tekliflerle aracınızı kaskolamak için şimdi teklif alın.</p>
              </div>
              <div className="offer-banner__cta">
                <a className="btn btn-wide btn-tertiary" href="/oto/hesapli-kasko" target="_self">
                  Hemen Teklif Alın
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="page-content pt-0">
        <div className="container">
          <h4>Kasko Sigortası Hakkında Sıkça Sorulan Sorular</h4>
          <FaqList faqs={kaskoFaqs} />
        </div>
      </section>
    </>
  );
} 