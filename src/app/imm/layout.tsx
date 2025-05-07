export const metadata = {
  title: 'IMM Sigortası - İşsizlik ve Maaş Güvencesi | Sigorka',
  description: 'Beklenmedik iş kayıplarına karşı mali güvence sağlayan IMM sigortası ile geleceğinizi koruyun. Daha fazlası için sitemizi ziyaret ederek hemen bilgi alın.',
  alternates: {
    canonical: 'https://sigorka.com/imm'
  },
  openGraph: {
    title: 'IMM Sigortası - İşsizlik ve Maaş Güvencesi | Sigorka',
    description: 'Beklenmedik iş kayıplarına karşı mali güvence sağlayan IMM sigortası ile geleceğinizi koruyun. Daha fazlası için sitemizi ziyaret ederek hemen bilgi alın.',
    url: 'https://sigorka.com/imm',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IMM Sigortası - İşsizlik ve Maaş Güvencesi | Sigorka',
    description: 'Beklenmedik iş kayıplarına karşı mali güvence sağlayan IMM sigortası ile geleceğinizi koruyun. Daha fazlası için sitemizi ziyaret ederek hemen bilgi alın.'
  }
};

export default function IMMLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 