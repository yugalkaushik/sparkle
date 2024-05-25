import {
  facebook,
  instagram,
  shieldTick,
  support,
  truckFast,
  twitter,
} from "../icons";

import { Slide1, Slide2, Slide3, Slide4, Slide5, Slide6 } from "../images";
import { dslide1, dslide2, dslide3, dslide4, dslide5} from "../images";
import { cslide1, cslide2, cslide3, cslide4, cslide5} from "../images";

export const navLinks = [
  { href: "#home", label: "New &  Featured" },
  { href: "#men", label: "Men" },
  { href: "#women", label: "Women" },
  { href: "#kids", label: "Kids" },
  { href: "#sale", label: "Sale" },
  { href: "#sneakers", label: "Sneakers" },
];

export const slidesText = [
  { Heading: "New Styles on Sale. Flat 40% Off." },
  { Heading: "Check out our new Summer Collection." },
  { Heading: "Exciting Deals on Sneakers." }
];

export const mainImageText = {
  heading: "Sparkle",
  description: "There Is No Substitute"
};
export const trendText = {
  heading: "Nike x Travis Scott",
  description: "Limited Edition"
};

export const exclusiveText = {
  heading: "Luxuriate in Exclusivity",
  description: "Step into the realm of luxury with our handpicked collection of exclusive garments, designed to make every moment a fashion statement."
};

export const slides = [
  {
    image: Slide1,
    title: 'Slide 1',
    caption: 'ZARA',
  },
  {
    image: Slide2,
    title: 'Slide 2',
    caption: 'H&M',
  },
  {
    image: Slide3,
    title: 'Slide 3',
    caption: 'Calvin Klien',
  },
  {
    image: Slide4,
    title: 'Slide 4',
    caption: 'Uniqlo',
  },
  {
    image: Slide5,
    title: 'Slide 5',
    caption: 'Jack & Johns',
  },
  {
    image: Slide6,
    title: 'Slide 6',
    caption: 'Ralph Lauren',
  },
];

export const discoverslides = [
  {
    image: dslide1,
    title: 'Slide 1',
    caption: 'Summer Bash Collection',
  },
  {
    image: dslide2,
    title: 'Slide 2',
    caption: 'Peak Performance',
  },
  {
    image: dslide3,
    title: 'Slide 3',
    caption: 'Score In Style',
  },
  {
    image: dslide4,
    title: 'Slide 4',
    caption: 'Chic Western Vibes',
  },
  {
    image: dslide5,
    title: 'Slide 5',
    caption: 'Urban Street Style',
  }
];

export const classicslides = [
  {
    image: cslide1,
    title: 'Slide 1',
    caption: 'Air Force 1',
  },
  {
    image: cslide2,
    title: 'Slide 2',
    caption: 'Blazer 77 Jumbo',
  },
  {
    image: cslide3,
    title: 'Slide 3',
    caption: 'Air Max',
  },
  {
    image: cslide4,
    title: 'Slide 4',
    caption: 'New Balance',
  },
  {
    image: cslide5,
    title: 'Slide 5',
    caption: 'Yet to Release',
  },
];


export const statistics = [
  { value: "1k+", label: "Brands" },
  { value: "500+", label: "Shops" },
  { value: "250k+", label: "Customers" },
];


export const services = [
  {
    imgURL: truckFast,
    label: "Free shipping",
    subtext: "Enjoy seamless shopping with our complimentary shipping service.",
  },
  {
    imgURL: shieldTick,
    label: "Secure Payment",
    subtext:
      "Experience worry-free transactions with our secure payment options.",
  },
  {
    imgURL: support,
    label: "Love to help you",
    subtext: "Our dedicated team is here to assist you every step of the way.",
  },
];


export const footerLinks = [
  {
    title: "Products",
    links: [
      { name: "Chuck Taylor All Star", link: "/" },
      { name: "Run Star Hike Platform", link: "/" },
      { name: "Chuck 70 Tri-Color", link: "/" },
      { name: "Star Player 76", link: "/" },
      { name: "Chuck Taylor All Star Lift Platform", link: "/" },
      { name: "Run Star Legacy Chelsea CX", link: "/" },
    ],
  },
  {
    title: "Help",
    links: [
      { name: "About us", link: "/" },
      { name: "FAQs", link: "/" },
      { name: "How it works", link: "/" },
      { name: "Privacy policy", link: "/" },
      { name: "Payment policy", link: "/" },
    ],
  },
  {
    title: "Get in touch",
    links: [
      { name: "customer@converse.com", link: "mailto:customer@converse.com" },
      { name: "+92554862354", link: "tel:+92554862354" },
    ],
  },
];

export const socialMedia = [
  { src: facebook, alt: "facebook logo" },
  { src: twitter, alt: "twitter logo" },
  { src: instagram, alt: "instagram logo" },
];

export const newFeaturedOptions = [
  { label: 'New Option 1', href: '#new1' },
  { label: 'New Option 2', href: '#new2' },
  { label: 'New Option 3', href: '#new3' },
];

export const menOptions = [
  {
    section: 'Jordan',
    items: [
      { label: 'All Jordan', href: '#all-jordan', className: 'text-red-500' },
      { label: 'New Jordan', href: '#new-jordan', className: 'text-blue-500' },
      { label: 'Jordan Shoes', href: '#jordan-shoes', className: 'text-green-500' },
      { label: 'Jordan Clothing', href: '#jordan-clothing', className: 'text-yellow-500' },
      { label: 'Jordan Basketball', href: '#jordan-basketball', className: 'text-purple-500' },
      { label: 'Jordan Lifestyle', href: '#jordan-lifestyle', className: 'text-orange-500' },
    ],
  },
  {
    section: 'Lifestyle Running',
    items: [
      { label: 'Men Lifestyle Running Shoes', href: '#men-lifestyle-running-shoes', className: 'text-red-500' },
      { label: 'Lifestyle Running Clothing', href: '#lifestyle-running-clothing', className: 'text-blue-500' },
      { label: 'Accessories', href: '#accessories', className: 'text-green-500' },
    ],
  },
  {
    section: 'Customise with Nike By You',
    items: [
      { label: 'Customise Shoes', href: '#customize-shoes', className: 'text-yellow-500' },
      { label: 'Customise Clothing', href: '#customize-clothing', className: 'text-orange-500' },
    ],
  },
  {
    section: 'Sale',
    items: [
      { label: 'Sale Shoes', href: '#sale-shoes', className: 'text-red-500' },
      { label: 'Sale Clothing', href: '#sale-clothing', className: 'text-blue-500' },
    ],
  },
  {
    section: 'Running Shoe Finder',
    items: [
      { label: 'Find Your Perfect Running Shoes', href: '#find-running-shoes', className: 'text-blue-500' },
      { label: 'Running Shoe Accessories', href: '#running-shoe-accessories', className: 'text-green-500' },
    ],
  },
  {
    section: 'Sustainable Materials',
    items: [
      { label: 'Eco-Friendly Shoes', href: '#eco-friendly-shoes', className: 'text-green-500' },
      { label: 'Sustainable Clothing', href: '#sustainable-clothing', className: 'text-blue-500' },
    ],
  },
  {
    section: 'Top Picks Under ₹ 8 000.00',
    items: [
      { label: 'Best Shoes Under ₹ 8K', href: '#best-shoes-under-8k', className: 'text-purple-500' },
      { label: 'Trendy Clothing Under ₹ 8K', href: '#trendy-clothing-under-8k', className: 'text-red-500' },
    ],
  },
];

export const womenOptions = [
  { label: 'Women Option 1', href: '#women1' },
  { label: 'Women Option 2', href: '#women2' },
  { label: 'Women Option 3', href: '#women3' },
];
export const kidsOptions = [
  { label: 'Kids Option 1', href: '#kids1' },
  { label: 'Kids Option 2', href: '#kids2' },
  { label: 'Kids Option 3', href: '#kids3' },
];
export const saleOptions = [
  { label: 'Sale Option 1', href: '#sale1' },
  { label: 'Sale Option 2', href: '#sale2' },
  { label: 'Sale Option 3', href: '#sale3' },
];
export const sneakersOptions = [
  { label: 'Sneakers Option 1', href: '#sneakers1' },
  { label: 'Sneakers Option 2', href: '#sneakers2' },
  { label: 'Sneakers Option 3', href: '#sneakers3' },
];

