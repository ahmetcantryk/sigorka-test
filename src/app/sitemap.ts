import { MetadataRoute } from 'next';
import fs from 'fs';
import path from 'path';
import { slugify } from './components/blog/slugify';

// Blog verilerini okuyan yardımcı fonksiyon
interface BlogPost {
  slug: string;
  lastModified: string;
}

interface BlogData {
  slug?: string;
  title: string;
  date: string;
}

async function getBlogPosts(): Promise<BlogPost[]> {
  const filePath = path.join(process.cwd(), 'public', 'content', 'blogs.json');
  const fileContent = await fs.promises.readFile(filePath, 'utf8');
  const blogs = JSON.parse(fileContent) as BlogData[];
  
  return blogs.map((blog: BlogData) => ({
    slug: blog.slug || slugify(blog.title),
    lastModified: blog.date
  }));
}

// Sözlük verilerini okuyan yardımcı fonksiyon
interface DictionaryTerm {
  slug: string;
}

interface DictionaryData {
  slug: string;
}

async function getDictionaryTerms(): Promise<DictionaryTerm[]> {
  const filePath = path.join(process.cwd(), 'src', 'app', 'sozluk', 'dictionary.json');
  const fileContent = await fs.promises.readFile(filePath, 'utf8');
  const terms = JSON.parse(fileContent) as DictionaryData[];
  
  return terms.map((term: DictionaryData) => ({
    slug: term.slug
  }));
}

// Kampanya verilerini okuyan yardımcı fonksiyon
interface Campaign {
  slug: string;
}

interface CampaignData {
  slug: string;
}

async function getCampaigns(): Promise<Campaign[]> {
  const filePath = path.join(process.cwd(), 'src', 'app', 'kampanyalar', 'kampanyalar.json');
  const fileContent = await fs.promises.readFile(filePath, 'utf8');
  const campaigns = JSON.parse(fileContent) as CampaignData[];
  
  return campaigns.map((campaign: CampaignData) => ({
    slug: campaign.slug
  }));
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://sigorka.com';
  const currentDate = new Date().toISOString();
  
  // Blog yazılarını al
  const blogPosts = await getBlogPosts();
  
  // Sözlük terimlerini al
  const dictionaryTerms = await getDictionaryTerms();
  
  // Kampanyaları al
  const campaigns = await getCampaigns();

  // Ana sayfalar
  const mainPages = [
    '',
    'aracim',
    'sagligim',
    'yuvam',
    'blog',
    'sikca-sorulan-sorular',
    'sozluk',
  ].map((route) => ({
    url: `${baseUrl}/${route}`,
    lastModified: currentDate,
    priority: route === '' ? 1 : 0.9,
  }));

  // Sigorta ürünleri
  const productPages = [
    'kasko-sigortasi',
    'zorunlu-trafik-sigortasi',
    'dask',
    'konut-sigortasi',
    'ozel-saglik-sigortasi',
    'tamamlayici-saglik-sigortasi',
    'yabanci-saglik-sigortasi',
    'seyahat-saglik-sigortasi',
    'ferdi-kaza-sigortasi',
    'imm',
  ].map((route) => ({
    url: `${baseUrl}/${route}`,
    lastModified: currentDate,
    priority: 0.8,
  }));

  // Kurumsal sayfalar
  const corporatePages = [
    'biz-kimiz',
    'neden-katilim-sigortaciligi',
    'anlasmali-sigorta-sirketleri',
    'iletisim',
    'kampanyalar',
  ].map((route) => ({
    url: `${baseUrl}/${route}`,
    lastModified: currentDate,
    priority: 0.7,
  }));

  // Yasal sayfalar
  const legalPages = [
    'kvkk',
    'cerez-politikasi',
    'kullanici-sozlesmesi',
    'mesafeli-satis-sozlesmesi',
    'elektronik-ileti-onayi',
    'acik-riza-metni',
    'bilgi-toplumu-hizmetleri',
  ].map((route) => ({
    url: `${baseUrl}/${route}`,
    lastModified: currentDate,
    priority: 0.5,
  }));

  // Blog detay sayfaları
  const blogDetailPages = blogPosts.map((post: BlogPost) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.lastModified || currentDate,
    priority: 0.7,
  }));

  // Sözlük detay sayfaları
  const dictionaryDetailPages = dictionaryTerms.map((term: DictionaryTerm) => ({
    url: `${baseUrl}/sozluk/${term.slug}`,
    lastModified: currentDate,
    priority: 0.6,
  }));

  // Kampanya detay sayfaları
  const campaignDetailPages = campaigns.map((campaign: Campaign) => ({
    url: `${baseUrl}/kampanyalar/${campaign.slug}`,
    lastModified: currentDate,
    priority: 0.8,
  }));

  return [
    ...mainPages,
    ...productPages,
    ...corporatePages,
    ...legalPages,
    ...blogDetailPages,
    ...dictionaryDetailPages,
    ...campaignDetailPages,
  ];
} 