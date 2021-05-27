import { FaCreditCard, FaBook, FaBriefcase } from 'react-icons/fa';
import { FcEnteringHeavenAlive, FcCollect, FcFlowChart, FcMindMap, FcWorkflow } from 'react-icons/fc';

const sublinks = [
  {
    id: 1,
    page: 'Hosting',
    links: [
      { label: 'Shared hosting', icon: <FcEnteringHeavenAlive />, url: '/products' },
      { label: 'Dedicated hosting', icon: <FcCollect />, url: '/products' },
      { label: 'VPS hosting', icon: <FcFlowChart />, url: '/products' },
      { label: 'Cloud hosting', icon: <FcMindMap />, url: '/products' },
      { label: 'Dedicated server', icon: <FcWorkflow />, url: '/products' },
    ],
  },
  {
    id: 2,
    page: 'Solutions',
    links: [
      { label: 'Website bundle', icon: <FaBook />, url: '/products' },
      { label: 'Custom web design', icon: <FaBook />, url: '/products' },
      { label: 'Help', icon: <FaBook />, url: '/products' },
      { label: 'Billing', icon: <FaBook />, url: '/products' },
    ],
  },
  {
    id: 3,
    page: 'Company',
    links: [
      { label: 'About Host-IN', icon: <FaBriefcase />, url: '/products' },
      { label: 'Customers', icon: <FaBriefcase />, url: '/products' },
      { label: 'Jobs', icon: <FaBriefcase />, url: '/products' },
      { label: 'Partners', icon: <FaBriefcase />, url: '/products' },
    ],
  },
];

export default sublinks;
