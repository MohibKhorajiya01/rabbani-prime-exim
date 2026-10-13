/**
 * Central configuration file for Rabbani Prime Exim.
 * Update all business information, contact details, and credentials from here.
 */

export interface BusinessCredential {
  code: string;
  name: string;
  role: string;
  description: string;
  iconName: string;
}

export const COMPANY_CONFIG = {
  name: 'Rabbani Prime Exim',
  legalName: 'Rabbani Prime Exim',
  shortName: 'RPE',
  tagline: 'Connecting Markets. Delivering Quality. Creating Opportunities.',
  subTagline: 'Reliable Export Solutions for Fresh Produce, Spices, Tissue Products & Kitchenware.',
  description:
    'Rabbani Prime Exim is a global import-export company focused on quality products, reliable supply and long-term business relationships across international markets.',
  
  // Leadership & Certification
  founder: {
    name: 'Tehsinraza Gadhavara',
    title: 'Founder & Export Director',
    credentials: [
      {
        institution: 'OnlineExim — International Export Import Training Center',
        program: 'EAEI (Everything About Export Import)',
        mentor: 'Paresh Solanki',
        referenceId: 'OES7757',
        scope: 'Export-Import Procedures, Documentation, International Marketing, Banking & Logistics',
      },
      {
        institution: 'MJ International Import Export Academy',
        program: 'Master Import-Export Course',
        scope: 'Global Trade Compliance, Ocean Freight, Sourcing & International B2B Trade',
      },
    ],
  },

  // Contact Information (Configurable - single source of truth)
  contact: {
    email: 'info@rabbaniprimeexim.com',
    exportInquiryEmail: 'export@rabbaniprimeexim.com',
    phone: '+91 98765 43210',
    phoneDisplay: '+91 98765 43210',
    whatsapp: '919876543210',
    whatsappDisplay: '+91 98765 43210',
    address: 'Gujarat, India (Major Port Sourcing Hub: Kandla & Mundra Corridor)',
    country: 'India',
    businessHours: 'Monday - Saturday: 09:00 AM - 07:00 PM IST',
  },

  // Registered Business Credentials
  credentials: [
    {
      code: 'APEDA',
      name: 'Agricultural & Processed Food Products Export Development Authority',
      role: 'Export / Agricultural Trade Registration',
      description: 'Authorized registration for export of fresh vegetables, fruits, and processed agro-commodities.',
      status: 'Registered & Export Ready',
    },
    {
      code: 'FSSAI',
      name: 'Food Safety and Standards Authority of India',
      role: 'Food Safety Registration',
      description: 'Compliance with food safety parameters, hygiene standards, and agricultural quality handling.',
      status: 'Compliant & Verified',
    },
    {
      code: 'MSME',
      name: 'Ministry of Micro, Small & Medium Enterprises',
      role: 'Registered Enterprise',
      description: 'Government of India recognized enterprise driving export commerce and indigenous sourcing.',
      status: 'Govt. Recognized',
    },
    {
      code: 'GST',
      name: 'Goods and Services Tax',
      role: 'GST Registered Business',
      description: 'Official tax compliance facilitating seamless formal international invoicing and LUT exports.',
      status: 'Active Taxpayer',
    },
    {
      code: 'IEC',
      name: 'Import Export Code (DGFT)',
      role: 'Import Export Code',
      description: 'Directorate General of Foreign Trade (DGFT) primary license for global customs clearance.',
      status: 'Valid for Global Trade',
    },
  ],

  // Social Links (Editable - non-empty items will display)
  socials: {
    linkedin: '',
    whatsapp: 'https://wa.me/919876543210?text=Hello%20Rabbani%20Prime%20Exim,%20I%20would%20like%20to%20inquire%20about%20your%20export%20products.',
    email: 'mailto:export@rabbaniprimeexim.com',
  },

  // Brand Palette
  colors: {
    navy: '#0B1F3A',
    navyDark: '#071426',
    gold: '#F9B718',
    goldLight: '#FFF3C7',
    offWhite: '#FFFDF7',
    white: '#FFFFFF',
    greyLight: '#F5F7FA',
    textDark: '#182235',
    textSecondary: '#5E6878',
  },
};
