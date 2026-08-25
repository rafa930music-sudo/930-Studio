export interface PresetImage {
  id: string;
  category: 'tech' | 'product' | 'workspace' | 'architecture' | 'luxury' | 'people';
  title: string;
  url: string;
}

export const PRESET_IMAGES: PresetImage[] = [
  {
    id: 'tech_1',
    category: 'tech',
    title: 'Cyber Circuit & Silicon',
    url: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80'
  },
  {
    id: 'tech_2',
    category: 'tech',
    title: 'Dark Data Server Hologram',
    url: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1600&q=80'
  },
  {
    id: 'tech_3',
    category: 'tech',
    title: 'Minimal Digital Geometry',
    url: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1600&q=80'
  },
  {
    id: 'product_1',
    category: 'product',
    title: 'Minimalist Black Headphones',
    url: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1600&q=80'
  },
  {
    id: 'product_2',
    category: 'product',
    title: 'Titanium Smart Watch',
    url: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1600&q=80'
  },
  {
    id: 'product_3',
    category: 'product',
    title: 'Sleek Spatial Audio Gear',
    url: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=1600&q=80'
  },
  {
    id: 'workspace_1',
    category: 'workspace',
    title: 'Clean Minimalist Desk',
    url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80'
  },
  {
    id: 'workspace_2',
    category: 'workspace',
    title: 'Sunlit Architecture Studio',
    url: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1600&q=80'
  },
  {
    id: 'architecture_1',
    category: 'architecture',
    title: 'Modern Concrete & Glass Pavilion',
    url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80'
  },
  {
    id: 'architecture_2',
    category: 'architecture',
    title: 'Organic White Curves',
    url: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=80'
  },
  {
    id: 'luxury_1',
    category: 'luxury',
    title: 'Golden Onyx Aesthetics',
    url: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1600&q=80'
  },
  {
    id: 'people_1',
    category: 'people',
    title: 'Executive Portrait 1',
    url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'people_2',
    category: 'people',
    title: 'Executive Portrait 2',
    url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'people_3',
    category: 'people',
    title: 'Executive Portrait 3',
    url: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80'
  }
];
