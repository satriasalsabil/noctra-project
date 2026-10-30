import type { Category, Product } from '@/types/product'
import type { IconName } from '@/types/icon'

export interface NavLink {
  label: string
  href: string
}

export interface RouteLink {
  label: string
  to: string
}

export interface HeroSlide {
  id: string
  title: string
  description: string
  image: string
  imageAlt: string
  ctaLabel: string
  ctaHref: string
}

export interface FooterColumn {
  title: string
  links: NavLink[]
}

export interface SocialLink {
  label: string
  href: string
  icon: IconName
}

/*
 * Placeholder destinations: the catalog, product, and account pages do not
 * exist yet. Swap these hrefs for router links once those views are built.
 */
export const announcement = 'Free shipping on orders over Rp 1.500.000 | 30 days easy returns'

export const primaryNav: RouteLink[] = [
  { label: 'New In', to: '/shop' },
  { label: 'Clothing', to: '/category/clothing' },
  { label: 'Bags', to: '/category/bags' },
  { label: 'Footwear', to: '/category/footwear' },
  { label: 'Accessories', to: '/category/accessories' },
  { label: 'The Journal', to: '/journal' },
]

export const heroSlides: HeroSlide[] = [
  {
    id: 'timeless-journey',
    title: 'Timeless Style for Every Journey',
    description: 'Heritage-inspired essentials for modern life.',
    image: '/images/hero-journey.jpg',
    imageAlt: 'Traveler wearing a forest green field jacket in the outdoors',
    ctaLabel: 'Shop New Arrivals',
    ctaHref: '#featured',
  },
  {
    id: 'crafted-leather',
    title: 'Crafted to Age Beautifully',
    description: 'Full-grain leather goods, made for the long run.',
    image: '/images/product-leather-tote.jpg',
    imageAlt: 'Handcrafted leather tote bag',
    ctaLabel: 'Explore Bags',
    ctaHref: '#categories',
  },
  {
    id: 'noctra-journal',
    title: 'Stories Worth Wearing',
    description: 'A closer look at the people and places that inspire us.',
    image: '/images/journal-banner.jpg',
    imageAlt: 'Mountain landscape at dusk',
    ctaLabel: 'Read the Journal',
    ctaHref: '#journal',
  },
]

export const categories: Category[] = [
  {
    id: 'clothing',
    name: 'Clothing',
    image: '/images/category-clothing.jpg',
    imageAlt: 'Clothing collection',
    href: '#',
  },
  {
    id: 'bags',
    name: 'Bags',
    image: '/images/category-bags.jpg',
    imageAlt: 'Leather bags',
    href: '#',
  },
  {
    id: 'footwear',
    name: 'Footwear',
    image: '/images/category-footwear.jpg',
    imageAlt: 'Leather footwear',
    href: '#',
  },
  {
    id: 'accessories',
    name: 'Accessories',
    image: '/images/category-accessories.jpg',
    imageAlt: 'Curated accessories',
    href: '#',
  },
]

export const featuredProducts: Product[] = [
  {
    id: 'field-jacket',
    name: 'Field Jacket',
    price: 3_250_000,
    image: '/images/product-field-jacket.jpg',
    imageAlt: 'Field Jacket',
    href: '#',
  },
  {
    id: 'wool-knit-sweater',
    name: 'Wool Knit Sweater',
    price: 1_850_000,
    image: '/images/product-wool-sweater.jpg',
    imageAlt: 'Wool Knit Sweater',
    href: '#',
  },
  {
    id: 'leather-tote-bag',
    name: 'Leather Tote Bag',
    price: 2_750_000,
    image: '/images/product-leather-tote.jpg',
    imageAlt: 'Leather Tote Bag',
    href: '#',
  },
  {
    id: 'leather-boots',
    name: 'Leather Boots',
    price: 2_850_000,
    image: '/images/product-leather-boots.jpg',
    imageAlt: 'Leather Boots',
    href: '#',
  },
]

export const footerColumns: FooterColumn[] = [
  {
    title: 'Shop',
    links: [
      { label: 'Clothing', href: '#' },
      { label: 'Bags', href: '#' },
      { label: 'Footwear', href: '#' },
      { label: 'Accessories', href: '#' },
    ],
  },
  {
    title: 'Customer Care',
    links: [
      { label: 'Shipping', href: '#' },
      { label: 'Returns', href: '#' },
      { label: 'Size Guide', href: '#' },
      { label: 'Contact', href: '#' },
    ],
  },
  {
    title: 'About',
    links: [
      { label: 'Our Story', href: '#' },
      { label: 'Journal', href: '#journal' },
      { label: 'Sustainability', href: '#' },
    ],
  },
]

export const socialLinks: SocialLink[] = [
  { label: 'Facebook', href: '#', icon: 'facebook' },
  { label: 'X', href: '#', icon: 'x' },
  { label: 'Instagram', href: '#', icon: 'instagram' },
  { label: 'Pinterest', href: '#', icon: 'pinterest' },
]
