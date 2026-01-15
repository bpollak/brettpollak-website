export interface MediaItem {
  publication: string;
  title: string;
  url: string;
  date: string;
  category: 'article' | 'interview' | 'whitepaper' | 'speaking';
}

export const mediaItems: MediaItem[] = [
  {
    publication: 'Ithaka S+R',
    title: 'Human Values and AI Adoption in the Research Enterprise',
    url: 'https://sr.ithaka.org/blog/human-values-and-ai-adoption-in-the-research-enterprise/',
    date: '2026-01-15',
    category: 'article'
  },
  {
    publication: 'UC San Diego Magazine',
    title: 'TritonGPT is Here and Ready to Help',
    url: 'https://today.ucsd.edu/story/tritongpt-is-here-and-ready-to-help',
    date: '2025-11-21',
    category: 'article'
  },
  {
    publication: 'The UCSD Guardian',
    title: 'REVISITED: ChatGPT goes to college',
    url: 'https://ucsdguardian.org/2025/11/03/revisited-chatgpt-goes-to-college/',
    date: '2025-11-03',
    category: 'article'
  },
  {
    publication: 'Forbes',
    title: 'Why Faculty Hold The Keys To Higher Ed\'s AI Digital Transformation',
    url: 'https://www.forbes.com/sites/avivalegatt/2025/08/10/why-faculty-hold-the-keys-to-higher-eds-ai-digital-transformation/',
    date: '2025-08-10',
    category: 'article'
  },
  {
    publication: 'CIO.com',
    title: 'Unpacking UC San Diego\'s use of LLMs to boost access to knowledge',
    url: 'https://www.cio.com/article/4032770/unpacking-uc-san-diegos-use-of-llms-to-boost-access-to-knowledge.html',
    date: '2025-08-08',
    category: 'interview'
  },
  {
    publication: 'EdTech Magazine',
    title: 'UC San Diego Launches TritonGPT Generative AI Tool',
    url: 'https://edtechmagazine.com/higher/article/2025/05/uc-san-diego-launches-tritongpt-generative-ai-tool',
    date: '2025-05-22',
    category: 'article'
  },
  {
    publication: 'GovTech Industry Insider',
    title: 'San Diego Area Colleges Band Together on AI',
    url: 'https://www.govtech.com/education/higher-ed/asu-gsv-2025-san-diego-area-colleges-band-together-on-ai',
    date: '2025-04-22',
    category: 'article'
  },
  {
    publication: 'Internet2 Community Blog',
    title: 'Unlocking Institutional Insights: Discover UC San Diego\'s TritonGPT Journey',
    url: 'https://internet2.edu/discover-uc-san-diegos-tritongpt-journey/',
    date: '2025-04-03',
    category: 'article'
  },
  {
    publication: 'Verizon / Chronicle',
    title: 'Protecting Your Campus in the AI Era (White Paper)',
    url: 'https://www.verizon.com/business/resources/whitepapers/protecting-your-campus-ai-era.pdf',
    date: '2025-02-10',
    category: 'whitepaper'
  },
  {
    publication: 'EDUCAUSE Review',
    title: 'Ushering in a New Era of AI-Driven Data Insights at UC San Diego',
    url: 'https://er.educause.edu/articles/2025/2/ushering-in-a-new-era-of-ai-driven-data-insights-at-uc-san-diego',
    date: '2025-02-20',
    category: 'article'
  },
  {
    publication: 'Little Hoover Commission',
    title: 'Artificial Intelligence and California State Government (Report #284)',
    url: 'https://lhc.ca.gov/report/artificial-intelligence-and-state-government/',
    date: '2025-01-05',
    category: 'whitepaper'
  },
  {
    publication: 'SDSU News',
    title: 'SDSU, UC San Diego and SD Community College District\'s Equitable AI Alliance',
    url: 'https://aaai.sdsu.edu/initiatives/equitable-ai-alliance',
    date: '2024-11-25',
    category: 'article'
  },
  {
    publication: 'UC Tech News',
    title: 'TritonGPT webinar recap: democratizing AI for UC San Diego and the broader higher education community',
    url: 'https://uctechnews.ucop.edu/tritongpt-webinar-recap-democratizing-ai-for-uc-san-diego-and-the-broader-higher-education-community/',
    date: '2024-09-27',
    category: 'article'
  },
  {
    publication: 'UC Tech News',
    title: 'TritonGPT: Shaping the Future at UC San Diego Through Student Innovation',
    url: 'https://uctechnews.ucop.edu/tritongpt-shaping-the-future-at-uc-san-diego-through-student-innovation/',
    date: '2024-05-30',
    category: 'article'
  },
  {
    publication: 'Internet2',
    title: 'TritonGPT: The Future of AI-Powered Support at UC San Diego',
    url: 'https://internet2.edu/news/page/9/',
    date: '2024-06-20',
    category: 'article'
  },
  {
    publication: 'UC San Diego',
    title: 'TritonGPT Webinar: Democratizing GPT for Higher Education',
    url: 'https://uctechnews.ucop.edu/tritongpt-webinar-recap-democratizing-ai-for-uc-san-diego-and-the-broader-higher-education-community/',
    date: '2024-06-13',
    category: 'speaking'
  },
  {
    publication: 'IdeaScale Blog',
    title: 'All About UC San Diego\'s In-House AI Assistant, Triton GPT',
    url: 'https://ideascale.com/blog/triton-gpt/',
    date: '2024-06-04',
    category: 'article'
  },
  {
    publication: 'GovTech',
    title: 'Meet TritonGPT: AI That Loves Tedious University Tasks',
    url: 'https://www.govtech.com/education/higher-ed/meet-tritongpt-ai-that-loves-tedious-university-tasks',
    date: '2024-05-24',
    category: 'article'
  },
  {
    publication: 'BestColleges',
    title: 'Campus-GPT: How 2 University of California Campuses Are Designing Their Own Specialized AI Tools',
    url: 'https://www.bestcolleges.com/news/uc-san-diego-irvine-design-specialized-ai-tools/',
    date: '2024-04-24',
    category: 'article'
  },
  {
    publication: 'San Diego Reader',
    title: 'Artificial intelligence has come to the University of California San Diego',
    url: 'https://www.sandiegoreader.com/news/2024/mar/27/radar-adelas-big-fat-raises/',
    date: '2024-03-27',
    category: 'article'
  },
  {
    publication: 'GovTech',
    title: 'UC Irvine, UC San Diego Launch Campuswide AI Programs',
    url: 'https://insider.govtech.com/california/news/uc-irvine-uc-san-diego-launch-campuswide-ai-programs',
    date: '2025-03-20',
    category: 'article'
  },
  {
    publication: 'ScienceSprings',
    title: 'From The University of California-San Diego: Say Hello to TritonGPT',
    url: 'https://sciencesprings.wordpress.com/2024/03/19/from-the-university-of-california-san-diego-say-hello-to-tritongpt/',
    date: '2024-03-19',
    category: 'article'
  },
  {
    publication: 'UCSD Today',
    title: 'Say Hello to TritonGPT',
    url: 'https://today.ucsd.edu/story/say-hello-to-tritongpt',
    date: '2024-03-19',
    category: 'article'
  },
  {
    publication: 'DigitalKoans',
    title: 'How Can Universities Create AI Tools for their Communities? An Interview with the Creators of UC San Diego\'s TritonGPT',
    url: 'https://sr.ithaka.org/blog/how-can-universities-create-ai-tools-for-their-communities/',
    date: '2023-12-08',
    category: 'interview'
  },
  {
    publication: 'Ithaka S+R',
    title: 'How Can Universities Create AI Tools for Their Communities?',
    url: 'https://sr.ithaka.org/blog/how-can-universities-create-ai-tools-for-their-communities/',
    date: '2023-12-07',
    category: 'interview'
  },
  {
    publication: 'Scientific Route',
    title: 'Empowering University Communities: TritonGPT at UC San Diego',
    url: 'https://sr.ithaka.org/blog/how-can-universities-create-ai-tools-for-their-communities/',
    date: '2023-12-06',
    category: 'article'
  },
  {
    publication: 'EDUCAUSE Webinar',
    title: 'Business-Centric AI: From Problem Definition to Adoption',
    url: 'https://events.educause.edu/webinar/2025/business-centric-ai-from-problem-definition-to-adoption',
    date: '2025-09-10',
    category: 'speaking'
  },
  {
    publication: 'ASU GSV Summit',
    title: 'Featured Speaker',
    url: 'https://www.asugsvsummit.com/speakers/brett-pollak',
    date: '2024-04-15',
    category: 'speaking'
  },
  {
    publication: 'Academic Impressions',
    title: 'Instructor Profile',
    url: 'https://www.academicimpressions.com/instructor/brett-pollak/',
    date: '2024-01-01',
    category: 'speaking'
  },
  {
    publication: 'LinkedIn',
    title: 'Workplace Technology & Infrastructure Services Updates',
    url: 'https://www.linkedin.com/pulse/workplace-technology-infrastructure-services-updates-brett-pollak-arejc',
    date: '2025-06-06',
    category: 'article'
  },
  {
    publication: 'LinkedIn',
    title: 'Musings about UC San Diego\'s Return to Learn program; COVID testing pilot for students',
    url: 'https://www.linkedin.com/pulse/musings-uc-san-diegos-return-learn-program-covid-testing-brett-pollak',
    date: '2020-06-24',
    category: 'article'
  },
  {
    publication: 'LinkedIn',
    title: 'UC San Diego Mobile App updated with real time parking availability and notification center',
    url: 'https://www.linkedin.com/pulse/uc-san-diego-mobile-app-updated-real-time-parking-center-brett-pollak',
    date: '2018-11-10',
    category: 'article'
  },
  {
    publication: 'LinkedIn',
    title: 'Good things ahead for UC San Diego with Student Activity Hub',
    url: 'https://www.linkedin.com/pulse/good-things-ahead-uc-san-diego-student-activity-hub-brett-pollak',
    date: '2018-09-30',
    category: 'article'
  },
  {
    publication: 'The EvoLLLution',
    title: 'Shifting to Responsive Web Design',
    url: 'https://evolllution.com/opinions/shifting-to-responsive-web-design',
    date: '2015-01-01',
    category: 'article'
  }
];
