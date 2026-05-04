export interface TeamMember {
  id: string;
  name: string;
  title: string;
  role: string;
  bio: string;
  education: string[];
  specializations: string[];
  image: string;
  isPrincipal: boolean;
  email: string;
  linkedin?: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: 'chief-emeka-summit',
    name: 'Chief Emeka O. Summit, SAN',
    title: 'Founding Principal & Senior Advocate of Nigeria',
    role: 'Principal Partner',
    bio: 'Chief Emeka O. Summit founded Summit Law Firm in 1990 after a distinguished career in the Federal Ministry of Justice. As a Senior Advocate of Nigeria (SAN), he has argued landmark cases before the Supreme Court and Court of Appeal, shaping Nigerian jurisprudence in constitutional law, commercial disputes, and human rights. His vision of accessible, world-class legal services in Nigeria has guided the firm\'s growth over 35 years into a multi-practice powerhouse with offices across the country.',
    education: [
      'LLB (Hons) — University of Lagos, 1982',
      'BL — Nigerian Law School, 1983',
      'LLM — London School of Economics, 1986',
      'SAN Silk — awarded 2001',
    ],
    specializations: ['Constitutional Law', 'Commercial Litigation', 'Corporate & Commercial', 'Human Rights'],
    image: '/images/team-principal.jpg',
    isPrincipal: true,
    email: 'chief.summit@summitlawfirm.com.ng',
  },
  {
    id: 'adaeze-okafor',
    name: 'Adaeze Okafor, Esq.',
    title: 'Senior Associate',
    role: 'Head of Corporate & Commercial',
    bio: 'Adaeze leads our Corporate & Commercial and Banking & Finance practice groups. With 12 years\' post-call experience, she has advised on some of Nigeria\'s largest M&A transactions and project financings, with a particular focus on the technology and telecoms sectors.',
    education: [
      'LLB (First Class) — University of Ibadan, 2009',
      'BL — Nigerian Law School, 2010',
      'LLM (Corporate Law) — University of Cambridge, 2012',
    ],
    specializations: ['Corporate & Commercial', 'Banking & Finance', 'M&A', 'Technology Law'],
    image: '/images/team-2.jpg',
    isPrincipal: false,
    email: 'a.okafor@summitlawfirm.com.ng',
  },
  {
    id: 'ibrahim-musa',
    name: 'Ibrahim Musa, Esq.',
    title: 'Senior Associate',
    role: 'Head of Real Estate & Property',
    bio: 'Ibrahim heads our Real Estate practice with 10 years of experience handling complex property transactions across Northern Nigeria. His deep relationships with state land registries and expertise in land tenure systems make him indispensable to clients in the real estate sector.',
    education: [
      'LLB — Ahmadu Bello University, Zaria, 2011',
      'BL — Nigerian Law School, 2012',
      'Diploma in Property Law — RIBA, 2015',
    ],
    specializations: ['Real Estate', 'Property Litigation', 'Customary Land Law', 'Mortgage Finance'],
    image: '/images/team-principal.jpg',
    isPrincipal: false,
    email: 'i.musa@summitlawfirm.com.ng',
  },
  {
    id: 'ngozi-eze',
    name: 'Ngozi Eze, Esq.',
    title: 'Associate',
    role: 'Employment & Labour Law',
    bio: 'Ngozi is a dynamic employment law specialist who represents both employers and employees in the National Industrial Court and State High Courts. She has a passion for workplace equality and has pioneered several internal workplace policy frameworks for Fortune 500 companies operating in Nigeria.',
    education: [
      'LLB — University of Nigeria, Nsukka, 2013',
      'BL — Nigerian Law School, 2014',
      'Cert. Labour Law — ILO Training Centre, Turin, 2018',
    ],
    specializations: ['Employment Law', 'Labour Relations', 'HR Compliance', 'Dispute Resolution'],
    image: '/images/team-2.jpg',
    isPrincipal: false,
    email: 'n.eze@summitlawfirm.com.ng',
  },
  {
    id: 'olusegun-alade',
    name: 'Olusegun Alade, Esq.',
    title: 'Associate',
    role: 'Intellectual Property & Technology Law',
    bio: 'Olusegun is Summit Law Firm\'s resident technology and IP law expert. A former software engineer turned lawyer, he brings unique cross-disciplinary expertise to IP protection, technology contracts, data protection, and digital law in the Nigerian context.',
    education: [
      'B.Sc. Computer Science — University of Lagos, 2010',
      'LLB — University of Lagos, 2014',
      'BL — Nigerian Law School, 2015',
      'Cert. IP Law — WIPO Academy, Geneva, 2017',
    ],
    specializations: ['Intellectual Property', 'Technology Law', 'Data Protection', 'Fintech Regulation'],
    image: '/images/team-principal.jpg',
    isPrincipal: false,
    email: 'o.alade@summitlawfirm.com.ng',
  },
];

export const offices = [
  {
    id: 'abuja',
    city: 'Abuja',
    label: 'Head Office',
    address: '15 Adetokunbo Ademola Crescent\nWuse II, Abuja, FCT',
    phone: '+234 809 360 5871',
    email: 'abuja@summitlawfirm.com.ng',
    mapUrl: 'https://maps.google.com',
  },
  {
    id: 'lagos',
    city: 'Lagos',
    label: 'Lagos Office',
    address: '3rd Floor, Landmark Towers\nVictoria Island, Lagos State',
    phone: '+234 803 000 1234',
    email: 'lagos@summitlawfirm.com.ng',
    mapUrl: 'https://maps.google.com',
  },
  {
    id: 'port-harcourt',
    city: 'Port Harcourt',
    label: 'Port Harcourt Office',
    address: '7 Aba Road, Old GRA\nPort Harcourt, Rivers State',
    phone: '+234 805 000 5678',
    email: 'portharcourt@summitlawfirm.com.ng',
    mapUrl: 'https://maps.google.com',
  },
  {
    id: 'kano',
    city: 'Kano',
    label: 'Kano Office',
    address: '22 Ibrahim Taiwo Road\nKano State',
    phone: '+234 806 000 9012',
    email: 'kano@summitlawfirm.com.ng',
    mapUrl: 'https://maps.google.com',
  },
];
