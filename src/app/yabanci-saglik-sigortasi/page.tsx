"use client";

import Breadcrumb from '../components/common/Breadcrumb';
import FaqList from '../components/common/FaqList';
import ProductBanner from '../components/common/ProductBanner';
import '../../styles/subpage.min.css';
import '../../styles/armorbroker.css';

const faqs = [
  {
    question: "Misafirim Güvende Sağlık Sigortası Nedir?",
    answer: "Misafirim Güvende Sağlık Katılım Sigortası, 16.06.2021 tarihli ve 2021/8 sayılı Vize ve İkamet Taleplerinde Yaptırılacak Sağlık Sigortalarına İlişkin Genelge'de belirlenen asgari şartlar gereğince ikamet izni talebinde bulunan yabancı uyruklu (T.C. vatandaşı olmayan) kişilere sunulur. Yabancı uyruklu misafirlerimizin Türkiye'deki ikametleri boyunca yararlanabilecekleri ayakta ve yatarak tedavilere ilişkin sağlık giderleri güvencemiz altına alınır."
  },
  {
    question: "Yabancı Sağlık Sigortası Kapsamı Nedir?",
    answer: "Yabancı sağlık sigortası kapsamı Hazine Müsteşarlığı'nın belirlediği limit ve teminat dahilinde yatarak tedavi teminatı limitsiz %100, ayakta tedavi teminatı 5000 TL limitli %20 katılım paylıdır. Yatarak tedaviler de 9 ay, ayakta tedavilerde 6 ay bekleme süresi vardır."
  },
  {
    question: 'Yabancı Sağlık Sigortası Zorunlu mu?',
    answer: 'Evet, 18-65 yaş yabancı uyruklu kişilerin ikamet izni başvurularında göç idaresine teslim edilmesi gereken bir sigortadır.'
  },
  {
    question: 'Yabancı Sağlık Sigortası Poliçem Var. Çocuklarım da Faydalanabilir mi?',
    answer: 'Hayır, her aile bireyi için poliçe düzenlenmesi gerekmektedir.'
  },
  {
    question: 'Yabancı Sağlık Sigortasının Süresi Nedir?',
    answer: 'Yabancı Sağlık Sigortaları 1 ve 2 yıl olarak düzenlenmektedir.'
  },
  {
    question: 'Yabancı Sağlık Poliçesi İptal Edilir mi?',
    answer: 'Evet, ancak ilgili kanun genelgesine uygun şartların yerine getirilmesi koşuluyla iptal edilebilir.'
  },
  {
    question: 'Yabancı Sağlık Sigortası Devlet Hastanesinde Geçer mi?',
    answer: 'Hayır, ancak anlaşmasız kurum olarak fatura ödemesi sigorta şirketi tarafından değerlendirmeye alınabilir.'
  },
  {
    question: 'Yabancı Sağlık Sigortası Hangi Hastanelerde Kullanılır?',
    answer: 'Sigorta şirketlerinin Yabancı Sağlık Sigortası ürünü ile anlaşmalı olduğu özel hastanelerde geçerlidir.'
  },
  {
    question: "Yabancı Sağlık Sigortası'nı Kimler Satın Alabilir?",
    answer: "0-70 yaş arası Türkiye'de bulunan yabancı uyruklu vatandaşlar satın alabilir."
  }
];

export default function YabanciSaglikSigortasiPage() {
  return (
    <>
      <ProductBanner
        title1="Sağlığım"
        title2="Yabancı Sağlık Katılım Sigortası"
        buttonText="Hemen Teklif Alın"
        buttonHref="/saglik/yabanci-saglik"
        size="sm"
      />
      <section className="page-content">
        <div className="container container--sm">
          <Breadcrumb
            items={[
              { name: 'Ana Sayfa', href: '/' },
              { name: 'Ürünler', href: '' },
              { name: 'Sağlığım', href: '/sagligim' },
              { name: 'Yabancı Sağlık Katılım Sigortası' }
            ]}
          />
          <div className="text-content">
            <h3>Yabancı uyruklu kişilerin Türkiye&apos;de ikamet ettikleri süre boyunca yararlanabilecekleri ayakta ve yatarak tedavilere ilişkin sağlık giderlerinin karşılandığı sigorta türüdür. Bu sigortaya sahip olan yabancı uyruklu kişilerin sağlık ihtiyaçları anlaşmalı sağlık kurumlarında poliçede yazılı limit ve oranlar dâhilinde karşılanır.</h3>
            <h4>Yabancı Sağlık Sigortası Nedir?</h4>
            <p>Türkiye&apos;de 1 yıl üzeri kalacak olan yabancı uyruklu kişiler, yabancı sağlık sigortası yaptırarak oturma izni alabilir. Türk vatandaşlığı olmayan yabancılar için sağlık sigortası zorunlu bir sigorta türüdür. Hem ikamet izni alabilmek hem de Türkiye&apos;de bulundukları süre boyunca sağlıklarını güvence altına almak için yabancıların bu sigortayı yaptırması gerekir.</p>
            <h4>Yabancı Sağlık Katılım Sigortasının Avantajları Nelerdir?</h4>
            <p>Yabancılara özel sağlık sigortası pek çok avantaja sahiptir. Bunları şu şekilde sıralamak mümkündür:</p>
            <ul className="prop-list">
              <li>Türkiye&apos;de ikamet etme başvurusunda bulunan yabancıların; yabancı sağlık sigortasına sahip olması zorunludur. Bu sigorta sayesinde Türkiye&apos;de kaldıkları süre boyunca poliçe kapsamında sağlık hizmetlerinden yararlanabilirler.</li>
              <li>1 ya da 2 yıllık poliçe düzenlenebilir.</li>
              <li>Kaza ve hastalık gibi acil durumlarda hastaneye ulaşım ve tedavi giderleri karşılanır.</li>
              <li>Pek çok ciddi hastalığın tedavisi güvence altına alınır.</li>
              <li>Bu sigorta sayesinde yabancılar, Türkiye&apos;nin herhangi bir şehrinde sağlık hizmeti alabilir.</li>
              <li>Sigorta şirketleri, kredi kartları ile ödeme kolaylığı sağlar.</li>
              <li>Kemoterapi, radyoterapi, ilaç ve diyaliz giderleri de yabancı uyruklu sağlık sigortası tarafından belirli bir bekleme süresinden sonra karşılanır.</li>
            </ul>
            <h4>Yabancılar için Sağlık Sigortası Fiyatları Ne Kadar?</h4>
            <p>Yabancı sağlık sigortası fiyatları, yabancıların ikametgah almaları için zorunlu bir sigorta ve teminatları açısından daha sınırlı olduğu için uygun fiyatlıdır. Sigorta şirketlerine göre Yabancı Sağlık Sigortası fiyatları değişkenlik gösterir. Bu nedenle yabancı sağlık fiyat teklifi alarak güncel bilgilere ulaşabilirsiniz.</p>
            <h4>Yabancıların Sağlık Sigortası Hangi Koşullarda iptal Edilir?</h4>
            <p>Yurt dışından gelen misafirlere sigorta yapılması zorunlu olduğundan iptali de bazı şartlara bağlıdır.</p>
            <ul className="prop-list">
              <li>Mükerrer poliçesinin bulunması (diğer poliçe örneği)</li>
              <li>Oturma izninin iptal olması (göç idaresinden oturma izninin iptal olduğuna dair belge)</li>
              <li>Sigortalının SGK kaydı altına alınması (işe giriş veya SGK&apos;lı bir vatandaş ile evlenme halinde SGK kaydı)</li>
            </ul>
            <h4>Türkiye&apos;de Yeni Doğan veya Çocuk Yabancıların Sağlık Sigortası Nasıl Alınır?</h4>
            <p>Sigortadan 60 yaş ve altı yabancı uyruklu vatandaşlar yararlanır. Poliçe, 65 yaşına kadar yenilenir ve 0-65 yaşındaki kişileri teminat altına alır. 6-17 yaş aralığındaki çocuklar, sigorta ettirenin 18 yaşından büyük olması şartı ile tek başına sigortalanabilir. 15 gün-5 yaş aralığındaki çocuklar ise tek başına sigortalanmamakla birlikte en az bir ebeveyn ile sigortalanabilir. Sigorta ettiren yeni doğan çocuğu, annenin de bu Sigorta Sözleşmesi kapsamında bulunması ve yeni doğan çocuk için doğum tarihinden itibaren 30 gün içerisinde başvuru formu ile başvurması halinde sigortacı teminat kapsamına dâhil edilmesini teklif edebilir. Ancak bu 30 günlük süre aşıldığı takdirde sigorta ettiren, yeni doğan çocuğu bu sigorta sözleşmesinin yineleme tarihinde teminat altına alabilir.</p>
            <h4>Yabancılar için En Uygun Sağlık Sigortası Nereden Yapılır?</h4>
            <p>Yabancılar İçin Sağlık Sigortası yaptırmanın en pratik ve güvenli yolu Sigorka.com üzerinden uzman sigorta danışmanları ile iletişime geçmektir. Böylelikle kendinize veya çocuğunuza en uygun Yabancılar Sağlık Katılım Sigortası ürününüzü seçebilirsiniz. Böylelikle bütçenize ve özel sağlık ihtiyaçlarınıza göre sigorta ürününüzü belirleyebilirsiniz. Türkiye&apos;de bulunan yabancılarda oturma izinleri varsa Özel Sağlık Katılım Sigortası da yaptırabilir. Bunun için Özel Sağlık Katılım Sigortası avantajlarımıza bakmayı unutmayın.</p>
          </div>
          <div className="col-12 my-5">
            <div className="offer-banner offer-banner-health-bg">
              <div className="offer-banner__content">
                <h3>Yabancı Sağlık Katılım Sigortasına mı ihtiyacınız var?</h3>
                <p>En uygun tekliflerle sağlığınızı güvence altına almak için hemen teklif alın.</p>
              </div>
              <div className="offer-banner__cta">
                <a className="btn btn-wide btn-tertiary" href="/saglik/yabanci-saglik" target="_self">
                  Hemen Teklif Alın
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="page-content pt-0">
        <div className="container">
          <h4>Yabancı Sağlık Sigortası ile İlgili Sıkça Sorulan Sorular</h4>
          <FaqList faqs={faqs} />
        </div>
      </section>
    </>
  );
} 