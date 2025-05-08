"use client";

import Breadcrumb from '../components/common/Breadcrumb';
import FaqList from '../components/common/FaqList';
import ProductBanner from '../components/common/ProductBanner';
import '../../styles/subpage.min.css';
import '../../styles/armorbroker.css';

const faqs = [
  {
    question: 'Tamamlayıcı Sağlık Sigortasından Kimler Faydalanabilir ?',
    answer: 'SGK\'sı aktif olan 0-64 yaş arası her kişi faydalanabilir. Ayrıca 64 yaşını aşmış kişiler için de sigorta şirketlerinin özellikli ürünlerinden faydalanabilirler. Ülkemizde ikamet eden ve SGK sı aktif olan yabancı uyruklu kişiler de bu sigortadan faydalanabilirler.'
  },
  {
    question: 'Doğum Sigortası Nedir?',
    answer: 'Doğum sigortası, bireysel sağlık sigortası ve tamamlayıcı sağlık sigortasına eklenebilen bir ek teminattır. Teminat paketi içerik olarak sigorta şirketlerine göre farklılık gösterse de genel olarak hamilelik dönemini ve doğumu kapsamaktadır.'
  },
  {
    question: 'Tamamlayıcı Sağlık Sigortasını Nasıl İptal Edebilirim?',
    answer: 'Tamamlayıcı sağlık sigorta poliçesini iptal ettirmek isteyen sigortalı, sigorta şirketine dilekçe yazmak zorundadır. Dilekçe gönderim tarihinden itibaren genel olarak 2 ya da 3 gün içerisinde iptal işlemi tamamlanır.'
  },
  {
    question: 'Tamamlayıcı Sağlık Sigortasında Fiyatlar Nasıl Belirleniyor?',
    answer: 'Bu hizmeti veren sigorta firmaları fiyat hesaplarken benzer kriterler üzerinden hesaplama yaparlar. Sigorta firmalarına göre değişim gösteren durum, kriterleri oluşturmaya sebebiyet veren risk faktörleridir. Bu sebeple sigorta firmalarının sundukları tekliflerde fiyat farklılıkları gözlemlenebilir. Tamamlayıcı Sağlık Sigortası hesaplamasını oluşturan faktörler, firmaların belirlemiş olduğu risk durumları çerçevesinde ilerler. Firmalar, verecekleri hizmet ile sağladıkları güvence için ölçeklerde katsayılar kullanarak teklif verirler.'
  },
  {
    question: 'Tamamlayıcı Sağlık Sigortası Yaptırırsam Tüp Bebek Tedavisinden Faydalanabilir miyim?',
    answer: 'Belirtecek olduğunuz rapor sigorta firması tarafından uygun görülürse Tamamlayıcı Sağlık Sigortanıza ek prim ödeme seçeneği ile tüp bebek teminatı alabilirsiniz.'
  },
  {
    question: 'Tamamlayıcı Sağlık Sigortası Burun Ameliyatını Karşılar mı?',
    answer: 'Burun ameliyatlarında her türlü oluşan yapısal bozukluk, cerrahi girişimler (nazal valv operasyonları, septum deviasyonu, SMR, septoplasti, her tür konka cerrahisi) ile girişim ve ameliyatlar, horlama nedeni ile yapılacak olan tüm girişim ve ameliyatlar teminat dışıdır.'
  },
  {
    question: "Yabancı Ülke Vatandaşıyım, Türkiye'de SGK'lı Olarak Çalışıyorum Tamamlayıcı Sağlık Sigortası Satın Alabilir Miyim?",
    answer: "Evet, SGK'nız aktif olduğu sürece bu poliçeyi satın alabilirsiniz."
  },
  {
    question: 'Tamamlayıcı Sağlık Sigortam ile Hastaneye Gittiğimde Ücret Ödeyecek miyim?',
    answer: '15 TL SGK katılım ücreti dışında ücret ödenmemektedir.'
  },
  {
    question: 'Tamamlayıcı Sağlık Sigortasında Doğum Teminatı Var mı?',
    answer: 'Evet, poliçenize ek teminat olarak ekletebilirsiniz.'
  },
  {
    question: 'Tamamlayıcı Sağlık Sigortası Poliçesinde Bekleme Süresi Var mı?',
    answer: 'SGK tarafından uygulanan bekleme süreleri dışında bekleme süresi yoktur. Bu durum sigorta şirketlerine göre farklılık gösterebilir.'
  },
  {
    question: 'Tamamlayıcı Sağlık Sigortasında Poliçe Süresi Nedir? Poliçem Hemen Başlar mı?',
    answer: "Poliçe süresi poliçe başlangıç tarihi itibariyle 1 yıldır. Poliçeler öğlen 12.00'de başlar ve öğlen 12.00'de sona erer."
  },
  {
    question: 'Tamamlayıcı Sağlık Sigortasında Yenileme Garantisi Var mı?',
    answer: 'Evet , Tamamlayıcı Sağlık Sigortasında yenileme garantisi vardır.'
  },
  {
    question: 'Tamamlayıcı Sağlık Sigortasında Aile İndirimi Var mı?',
    answer: 'Evet, ailenizle birlikte aynı poliçedeyseniz aile indirimi alabilirsiniz.'
  },
  {
    question: "SGK'da Benim Primimle Tüm Ailem Sağlık Hizmeti Alıyor. Tamamlayıcı Sağlık Sigortası Poliçemde de Ben Prim Ödediğimde Tüm Ailem Faydalanabilecek mi?",
    answer: "Hayır, her birey için ayrı prim ödemesi yapılmaktadır."
  }
];

export default function TamamlayiciSaglikSigortasiPage() {
  return (
    <>
      <ProductBanner
        title1="Sağlığım"
        title2="Katılım Tamamlayıcı Sağlık Sigortası"
        buttonText="Hemen Teklif Alın"
        buttonHref="/saglik/tamamlayici-saglik-sigortasi-satin-al"
        size="sm"
      />
      <section className="page-content">
        <div className="container container--sm">
          <Breadcrumb
            items={[
              { name: 'Ana Sayfa', href: '/' },
              { name: 'Ürünler', href: '' },
              { name: 'Sağlığım', href: '/sagligim' },
              { name: 'Katılım Tamamlayıcı Sağlık Sigortası' }
            ]}
          />
          <div className="text-content">
            <h3>Tamamlayıcı Katılım Sağlık Sigortası, SGK ile anlaşmalı özel sağlık kurumlarında, Genel Sağlık Sigortası kapsamında alınan sağlık hizmetleri için sigortalılardan alınacak ilave ücretleri karşılayan sağlık sigortasıdır. Tamamlayıcı Sağlık Sigortası, SGK ile anlaşmalı özel sağlık kurumlarında alınan ek ücretleri teminat altına alır. Tamamlayıcı nitelikte olan bu sigorta, SGK kapsamındaki genel sağlık sigortalıları ve bakmakla yükümlü olduğu kişilerin sağlık kurumlarından hizmet almalarının ardından karşılaşacakları ilave ücretleri teminat altına almaktadır.</h3>
            <h4>Tamamlayıcı Sağlık Sigortası Nedir?</h4>
            <p>Eğer 69 yaş ve altındaysanız ve SGK güvenceniz varsa Tamamlayıcı Katılım Sağlık Sigortası ile anlaşmalı özel hastanelerden fark ücreti ödemeden hizmet alırsınız. Yatarak tedavilerinizde sınırsız, ayakta tedavilerinizde ise poliçenizde belirtilen hak kadar sigortanızdan yararlanabilirsiniz.</p>
            <h4>Tamamlayıcı Sağlık Sigortası Kapsamı Nedir?</h4>
            <p>Tamamlayıcı Sağlık Sigorta kapsamında satın aldığınız plana göre ayakta tedavi giderleri poliçede belirtilen hakla sınırlı olarak %100 karşılanır. Yatarak tedavi giderleri limitsiz ve %100 karşılanır.</p>
            <h4>Tamamlayıcı Sağlık Sigortası Teminatları Nelerdir?</h4>
            <ul className="prop-list">
              <li>Ayakta Tedavi İçeriği</li>
              <li>Doktor Muayene</li>
              <li>Laboratuvar & Görüntüleme</li>
              <li>Modern Teşhis</li>
              <li>Fizik Tedavi ve Rehabilitasyon</li>
              <li>Yatarak Tedavi İçeriği</li>
              <li>Cerrahi Yatış</li>
              <li>Dahili Yatış</li>
              <li>Operatör ve Doktor Masrafı</li>
              <li>Oda/Yemek/Refakatçi</li>
              <li>Yoğun Bakım</li>
              <li>Kemoterapi</li>
              <li>Radyoterapi</li>
              <li>Diyaliz</li>
              <li>Koroner Anjiyografi</li>
              <li>Küçük Müdahale</li>
              <li>Evde Bakım (56 Gün)</li>
              <li>Ameliyat Malzemesi Teminatı</li>
              <li>Suni Uzuv</li>
            </ul>
            <p>Tamamlayıcı Sağlık Sigortanıza ek teminatlar ile doğum teminatı, rutin doğum kontrolleri ve 40 yaş üstü Mamografi ve PSA da ekleyebilirsiniz.</p>
            <p>Tamamlayıcı Sağlık Sigortası ayakta tedavi teminatınızda yıllık kullanım hakkını ihtiyacınıza göre belirtilen limitler dahilinde belirleyebilirsiniz. Doktor Muayenesi, Laboratuvar & Görüntüleme ve Modern Teşhis teminatlarının üçü için toplam yıllık kullanım hakkı poliçede belirtilen kadardır.</p>
            <h4>Tamamlayıcı Sağlık Sigortası Şartları Nelerdir?</h4>
            <p>Tamamlayıcı sağlık sigortası şartlarından en önemlisi SGK&apos;lı olmandır. SGK&apos;lıysan, Bağ-Kur&apos;luysan ya da devlet memuruysan tamamlayıcı sağlık sigortası yaptırabilirsin. Ayrıca tamamlayıcı sağlık sigortasını, ailendeki 0-65 yaş aralığındaki diğer bireyler adına da yaptırabilirsin, fakat sigorta yaptırdığın aile bireyleri için ayrı ayrı prim ödemen gerekir.<br />SGK&apos;lı olmak gibi özel sağlık kuruluşlarından yararlanmak da belirli şartlara bağlıdır. Tamamlayıcı sağlık sigortası sadece SGK anlaşması olan özel sağlık kurumlarında geçerlidir. Bu açıdan TSS poliçenle sağlık hizmeti almak için SGK anlaşması olan özel hastaneleri tercih etmeniz gerekir.</p>
            <h4>Tamamlayıcı Sağlık Sigortasından Kimler Yararlanabilir?</h4>
            <ul className="prop-list">
              <li>SGK tarafından kapsama alınan, Türkiye&apos;de ikamet eden,</li>
              <li>15 günlük – 64 (dahil) yaş arası 1. risk grubu hastalıkları geçirmemiş kişiler,</li>
              <li>15 günlük ve 5 yaş (dahil) arası çocuklar en az 1 ebeveyn ile,</li>
              <li>6 – 17 yaş arası çocuklar sigorta ettirenin 18 yaş ve üzerinde olması kaydıyla tek başlarına sigortaya kabul edilirler.</li>
            </ul>
            <h4>Tamamlayıcı Sağlık Sigortası Teklifi Nasıl Alınır?</h4>
            <p>Sigorka.com web sitesinden TC kimlik numaranızı veya 99 ile başlayan kimlik numaranızı ve doğum tarihinizi girerek, anlaşmalı olduğumuz katılım sigorta şirketlerinden size en uygun gelen Tamamlayıcı Sağlık Sigortalarını 2 dakikada görüntüleyebilir, kıyaslayabilir ve satın alabilirsiniz. Dilerseniz çağrı merkezini arayarak müşteri danışmanlarımızdan poliçe teklifi alabilirsiniz.</p>
            <h4>Özel Sağlık Sigortası ve Tamamlayıcı Sağlık Sigortası Arasındaki Fark Nedir?</h4>
            <p>Tamamlayıcı sağlık sigortası SGK ile anlaşmalı sağlık kuruluşlarından hizmet almaya olanak tanırken özel sağlık sigortasının böyle bir şartı yoktur. Yani özel sağlık sigortası kapsamında SGK ile anlaşması olmayan sağlık kuruluşlarından da hizmet alabilirsiniz. TSS SGK desteği ile tamamlandığı için ödenen katkı payı (prim) açısından daha uygun koşullara sahiptir.</p>
            <h4>Tamamlayıcı Sağlık Sigortası Hangi Hastanelerde Geçerlidir?</h4>
            <p>Tamamlayıcı Sağlık Sigortasına hizmet veren hastanelerin öncelikle SGK ile anlaşmalı olması gereklidir. Tamamlayıcı Sağlık Sigortasının geçerli olduğu hastaneler sahibi olduğunuz poliçeyi düzenleyen sigorta şirketinin anlaşmalı olduğu hastanelerdir. Daha çok hastane ile anlaşma sağlayan sigorta şirketlerinden hizmet almak sizi avantajlı kılabilir. Gitmek istediğiniz sağlık kuruluşunu sigorta şirketinin anlaşmalı hastaneler bölümünden sorgulayabilirsiniz.</p>
            <h4>Tamamlayıcı Sağlık Sigortası ile İlgili Bilinmesi Gerekenler Nelerdir?</h4>
            <p>Tamamlayıcı Sağlık Sigortası satın alırken, teknik olarak dikkat etmeniz gereken noktalar vardır. <a href="tel:08504040404">Çağrı Merkezimizi</a> arayarak alanında uzman bir sigorta danışmanı ile görüşürseniz teknik konuları anlamanız daha kolay olacaktır. Uzman danışmanımız SGK veya GSS aktifliği, yaş aralığınıza göre en uygun sigortanın seçimi, ömür boyu yenileme garantisi ile ilgili detay bilgiler, ihtiyacınız olabilecek ek teminat olanakları ve aklınıza takılan her türlü konuda yardımcı olacaktır. Çağrı Merkezi uzman danışmanlarımızdan hangi poliçenin size daha uygun olduğu hakkında bilgi alabilirsiniz.</p>
          </div>
          <div className="col-12 my-5">
            <div className="offer-banner offer-banner-health-bg">
              <div className="offer-banner__content">
                <h3>Katılım Tamamlayıcı Sağlık Sigortasına mı ihtiyacınız var?</h3>
                <p>En uygun tekliflerle sağlığınızı güvence altına almak için hemen teklif alın.</p>
              </div>
              <div className="offer-banner__cta">
                <a className="btn btn-wide btn-tertiary" href="/saglik/tamamlayici-saglik-sigortasi-satin-al" target="_self">
                  Hemen Teklif Alın
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="page-content pt-0">
        <div className="container">
          <h4>Tamamlayıcı Sağlık Sigortası ile İlgili Sıkça Sorulan Sorular</h4>
          <FaqList faqs={faqs} />
        </div>
      </section>
    </>
  );
} 