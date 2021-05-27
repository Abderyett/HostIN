import { FaCreditCard, FaBook, FaBriefcase } from 'react-icons/fa';

const sublinks = [
  {
    id: 1,
    page: 'Hosting',
    links: [
      { label: 'Shared hosting', icon: <FaCreditCard />, url: '/products' },
      { label: 'Dedicated hosting', icon: <FaCreditCard />, url: '/products' },
      { label: 'VPS hosting', icon: <FaCreditCard />, url: '/products' },
      { label: 'Cloud hosting', icon: <FaCreditCard />, url: '/products' },
      { label: 'Dedicated server hsoting', icon: <FaCreditCard />, url: '/products' },
    ],
  },
  {
    id: 2,
    page: 'Solutions',
    links: [
      { label: 'Website bundle', icon: <FaBook />, url: '/products' },
      { label: 'Custom web design', icon: <FaBook />, url: '/products' },
      { label: 'help', icon: <FaBook />, url: '/products' },
      { label: 'billing', icon: <FaBook />, url: '/products' },
    ],
  },
  {
    id: 3,
    page: 'Company',
    links: [
      { label: 'About Host-IN', icon: <FaBriefcase />, url: '/products' },
      { label: 'customers', icon: <FaBriefcase />, url: '/products' },
      { label: 'Jobs', icon: <FaBriefcase />, url: '/products' },
      { label: 'Partners', icon: <FaBriefcase />, url: '/products' },
    ],
  },
];

export default sublinks;
