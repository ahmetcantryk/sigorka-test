export const metadata = {
  title: 'DASK - Zorunlu Deprem Sigortası Teklif Al | Sigorka',
  description: 'Evinizi deprem riskine karşı koruma altına almanız geleceğiniz için olmazsa olmazınız. Zorunlu DASK poliçenizi Sigorka\'dan online ve uygun fiyatla oluşturun.',
  alternates: {
    canonical: 'https://sigorka.com/dask'
  },
  openGraph: {
    title: 'DASK - Zorunlu Deprem Sigortası Teklif Al | Sigorka',
    description: 'Evinizi deprem riskine karşı koruma altına almanız geleceğiniz için olmazsa olmazınız. Zorunlu DASK poliçenizi Sigorka\'dan online ve uygun fiyatla oluşturun.',
    url: 'https://sigorka.com/dask',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DASK - Zorunlu Deprem Sigortası Teklif Al | Sigorka',
    description: 'Evinizi deprem riskine karşı koruma altına almanız geleceğiniz için olmazsa olmazınız. Zorunlu DASK poliçenizi Sigorka\'dan online ve uygun fiyatla oluşturun.'
  }
};

export default function DaskLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 