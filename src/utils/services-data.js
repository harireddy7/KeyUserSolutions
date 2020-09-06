import hybrisImg from '../assets/services/hybris.jpeg';
import c4cImg from '../assets/services/c4c.jpg';

import topItImg from '../assets/services/top-it.png';
import jarvisImg from '../assets/services/jarvis.png';
import zietaImg from '../assets/services/zieta.png';
import sidusImg from '../assets/services/sidus.png';

const productsList = [
  {
    id: 0,
    title: 'Hybris',
    media: hybrisImg,
    content: `In Today's competitive market, it is important to meet customer requirements and align your sales, marketing and service business lines to provide higher customer satisfaction. It is also important to design a cheap, integral solution that helps an organization to achieve its objectives and meet customer needs in a flexible environment.
	KUS can transform how you seamlessly engage your market across the full lifecycle of the customer relationship. IBM experts, coupled with our range of assets and innovations, accelerate your journey of transformation.`
  },
  {
    id: 1,
    title: 'Hybris Cloud for customer',
    media: c4cImg,
    content: `SAP Cloud for Customer (SAP C4C) is a software as a service (SaaS) platform for sales and service. SAP Cloud for Customer is designed with a mobile-first approach to meet the requirements of Today's sales and service professionals who need information about customers any time in any location.
		Specific features include account management functions; integration with SAP ERP, SAP JAM, Social Media, Microsoft Outlook, Gmail, and Lotus Notes; real-time analytics; support for mobile devices like iPhone, iPad, Android and BlackBerry.`
  }
];

export const clientsList = [
  { title: 'Top IT iteam', media: topItImg },
  { title: 'Jarvis', media: jarvisImg },
  { title: 'Zieta', media: zietaImg },
  { title: 'Sidus', media: sidusImg }
];

export default productsList;

export const servicesList = [
  { title: 'Product Management', icon: 'laptop-house' },
  { title: 'Consulting', icon: 'users-cog' },
  { title: 'Solution Architecture', icon: 'layer-group' },
  { title: 'UX Design', icon: 'laptop-code' },
  { title: 'Deployment', icon: 'rocket' },
  { title: 'Customization', icon: 'sliders-h' },
  { title: 'Integration', icon: 'cogs' },
  { title: 'Support Services', icon: 'headset' }
];
//  - layer-group/sitemap
