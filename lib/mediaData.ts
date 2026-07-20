export interface MediaItem {
  publication: string;
  title: string;
  url: string;
  date: string; // ISO 'YYYY-MM-DD' — used for sorting AND the year-by-year chart
  category: 'article' | 'interview' | 'whitepaper' | 'speaking' | 'award';
}

// This array is the single source of truth for the /media page. To update the
// page, add or edit entries here — nothing else needs to change. The hero stats
// (indexed items, talks, coverage span) and the "record by format / activity by
// year" graphic (MediaArchiveChart in app/media/page.tsx) are all computed from
// this data at build time, so they stay accurate automatically on the next
// deploy. Keep `date` as a real ISO date and `category` to one of the five
// allowed values, or the chart math will be off.
export const mediaItems: MediaItem[] = [
  {
    publication: 'TechTalk Summits',
    title: 'From AI Pilots to Enterprise Platforms: Building Secure, Governed AI at Scale',
    url: 'https://techtalksummits.com/',
    date: '2026-06-04',
    category: 'speaking'
  },
  {
    publication: 'UC AI Council Webinar Series',
    title: 'Mitigating Risk through Awareness: A Framework for AI Literacy',
    url: 'https://ucop.zoom.us/webinar/register/WN_DxGMOcL1RdG-bcyOmfOC1Q',
    date: '2026-06-03',
    category: 'speaking'
  },
  {
    publication: 'UC AI Council Webinar Series',
    title: 'The AI Roadmap — Driving from Idea to Innovation',
    url: 'https://ucop.zoom.us/webinar/register/WN_8LWHt6d-SayHX66A3WHwNA',
    date: '2026-05-21',
    category: 'speaking'
  },

  {
    publication: 'NACUBO 2026 Annual Meeting',
    title: 'The AI Investment Decision: Building, Buy, or Shared Services?',
    url: 'https://www.nacubo.org/Events/2026/NACUBO-2026-Annual-Meeting',
    date: '2026-07-20',
    category: 'speaking'
  },
  {
    publication: 'Constellation Research',
    title: 'Business Transformation 150™ 2026–2027',
    url: 'https://www.constellationr.com/communities/business-transformation-150/2026-2027',
    date: '2026-05-12',
    category: 'award'
  },
  {
    publication: 'CIO.com',
    title: 'How poor data foundations can undermine AI success',
    url: 'https://www.cio.com/article/4158048/how-poor-data-foundations-can-undermine-ai-success.html',
    date: '2026-04-17',
    category: 'article'
  },
  {
    publication: 'ASU+GSV Summit',
    title: 'Shared AI at Scale: Developed by Universities for Universities',
    url: 'https://www.asugsvsummit.com/schedule/shared-ai-at-scale-developed-by-universities-for-universities',
    date: '2026-04-14',
    category: 'speaking'
  },
  {
    publication: 'Ithaka S+R',
    title: 'AI Adoption in Research Administration at Emerging Research Institutions',
    url: 'https://sr.ithaka.org/publications/ai-adoption-in-research-administration-at-emerging-research-institutions',
    date: '2026-03-30',
    category: 'whitepaper'
  },
  {
    publication: 'CCW Emerging Tech Exchange',
    title: 'CCW Emerging Tech Exchange - San Diego',
    url: 'https://www.ccwexchangefebruary.com/agenda/session/1819201',
    date: '2026-02-04',
    category: 'speaking'
  },
  {
    publication: 'Ithaka S+R',
    title: "Human Values and AI Adoption in the Research Enterprise",
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
    title: "Why Faculty Hold The Keys To Higher Ed's AI Digital Transformation",
    url: "https://www.forbes.com/sites/avivalegatt/2025/08/10/why-faculty-hold-the-keys-to-higher-ed-s-ai-digital-transformation/",
    date: '2025-08-10',
    category: 'article'
  },
  {
    publication: "CIO.com",
    title: "Unpacking UC San Diego's use of LLMs to boost access to knowledge",
    url: "https://www.cio.com/article/4032770/unpacking-uc-san-diegos-use-of-llms-to-boost-access-to-knowledge.html",
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
    title: "Unlocking Institutional Insights: Discover UC San Diego's TritonGPT Journey",
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
    title: "SDSU, UC San Diego and SD Community College District's Equitable AI Alliance",
    url: "https://aaai.sdsu.edu/initiatives/equitable-ai-alliance",
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
    url: 'https://www.youtube.com/watch?v=ObM_S_01bX4',
    date: '2024-06-20',
    category: 'article'
  },
  {
    publication: 'UC San Diego',
    title: 'TritonGPT Webinar: Democratizing GPT for Higher Education',
    url: 'https://uctechnews.ucop.edu/event-tritongpt-uc-san-diegos-ai-powered-support-tool-register-now/',
    date: '2024-09-05',
    category: 'speaking'
  },
  {
    publication: 'IdeaScale Blog',
    title: "All About UC San Diego's In-House AI Assistant, Triton GPT",
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
    title: "From The University of California-San Diego: Say Hello to TritonGPT",
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
    publication: 'Ithaka S+R',
    title: "How Can Universities Create AI Tools for Their Communities?",
    url: "https://sr.ithaka.org/blog/how-can-universities-create-ai-tools-for-their-communities/",
    date: '2023-12-07',
    category: 'interview'
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
    title: "Musings about UC San Diego's Return to Learn program; COVID testing pilot for students",
    url: 'https://www.linkedin.com/pulse/musings-uc-san-diegos-return-learn-program-covid-testing-brett-pollak',
    date: '2020-06-24',
    category: 'article'
  },
  {
    publication: 'LinkedIn',
    title: "UC San Diego Mobile App updated with real time parking availability and notification center",
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
  },
  {
    publication: 'UC Tech Awards',
    title: 'The 2022 Student Activity Hub (Silver UC Collaboration Award)',
    url: 'https://www.ucop.edu/information-technology-services/_files/uc-tech-awards/2022/student-activity-hub.pdf',
    date: '2022-08-15',
    category: 'whitepaper'
  },
  {
    publication: 'Larry L. Sautter Awards',
    title: 'The 2020 Return to Learn Program (Golden Award)',
    url: 'https://www.ucop.edu/information-technology-services/initiatives/sautter-award-program/sautter-2020/ucsd-return-to-learn.pdf',
    date: '2020-07-15',
    category: 'whitepaper'
  },
  {
    publication: 'Larry L. Sautter Awards',
    title: 'The 2012 Responsive Design Framework (Golden Award)',
    url: 'https://today.ucsd.edu/story/usa_today_names_uc_san_diego_among_5_colleges_with_great_mobile_apps',
    date: '2012-07-15',
    category: 'article'
  },
  {
    publication: 'Larry L. Sautter Awards',
    title: 'The 2011 Campus Web Toolbox',
    url: 'https://ucop.edu/information-technology-services/initiatives/sautter-award-program/award-winners-and-applications/ucsd_webtoolbox.docx',
    date: '2011-07-15',
    category: 'article'
  },

  // --- 2025 additions (from Brett) ---
  {
    publication: 'EdTech Magazine',
    title: 'Effective AI Requires Effective Data Governance',
    url: 'https://edtechmagazine.com/higher/article/2025/05/effective-ai-requires-effective-data-governance',
    date: '2025-05-20',
    category: 'article'
  },
  {
    publication: 'Everyday I AI (YouTube)',
    title: 'Everyday I AI, Ep. 36: Hiring Flow Pt. 2 — Job Posting, Advertising & Interview Questions',
    url: 'https://www.youtube.com/watch?v=QcS-TfZ_5n0',
    date: '2025-05-06',
    category: 'interview'
  },
  {
    publication: 'Everyday I AI (YouTube)',
    title: 'Everyday I AI, Ep. 35: Hiring Flow Pt. 1 — Job Descriptions',
    url: 'https://www.youtube.com/watch?v=tHsWa4vBkU0',
    date: '2025-04-30',
    category: 'interview'
  },

  // --- 2024 additions ---
  {
    publication: 'EDUCAUSE Annual Conference 2024',
    title: 'EDUCAUSE Annual Conference 2024 (Common Solutions Collaborative workshops)',
    url: 'https://members.educause.edu/brett-pollak',
    date: '2024-10-22',
    category: 'speaking'
  },
  {
    publication: 'UC Berkeley CTO',
    title: 'TritonGPT Presentation & Demo, UC Berkeley AI Community',
    url: 'https://cto.berkeley.edu/ai/videos/uc-san-diego-tritongpt-demo',
    date: '2024-03-21',
    category: 'speaking'
  },

  // --- 2015 additions ---
  {
    publication: 'EDUCAUSE / ECAR',
    title: 'Mobile Apps in Higher Education: Developing an Institutional Governance Strategy',
    url: 'https://library.educause.edu/resources/2015/12/mobile-apps-in-higher-education-developing-an-institutional-governance-strategy',
    date: '2015-12-18',
    category: 'whitepaper'
  },
  {
    publication: 'EDUCAUSE Review',
    title: 'Responsive Web Design in Higher Ed',
    url: 'https://er.educause.edu/articles/2015/11/responsive-web-design-in-higher-ed',
    date: '2015-11-01',
    category: 'article'
  },

  // --- 2014 addition ---
  {
    publication: 'EDUCAUSE / ECAR',
    title: 'Understanding Responsive Web Design in Higher Education (ECAR-MSAD Working Group)',
    url: 'https://library.educause.edu/resources/2014/9/understanding-responsive-web-design-in-higher-education',
    date: '2014-09-09',
    category: 'whitepaper'
  },

  // --- 2013 addition ---
  {
    publication: 'EDUCAUSE',
    title: 'EDUCAUSE Annual Conference 2013',
    url: 'https://members.educause.edu/brett-pollak',
    date: '2013-10-15',
    category: 'speaking'
  },

  // --- Media audit additions (July 19, 2026) ---
  {
    publication: 'Higher Ed AI Playbook',
    title: 'Adoption Without Authority: What 50,000 Students and Faculty Just Revealed',
    url: 'https://higheredaiplaybook.substack.com/p/adoption-without-authority-what-50000',
    date: '2026-07-13',
    category: 'article'
  },
  {
    publication: 'The Daily Californian',
    title: 'UC Berkeley chatbot BearGPT violated worker rights, GSI union alleges',
    url: 'https://www.dailycal.org/news/campus/uc-berkeley-chatbot-beargpt-violated-worker-rights-gsi-union-alleges/article_67f64b7b-a584-4b44-82e9-15b92e0f3f43.html',
    date: '2025-01-20',
    category: 'article'
  },
  {
    publication: 'The Daily Californian',
    title: 'UAW members ratify contracts with UC, bringing end to threat of large-scale strike',
    url: 'https://www.dailycal.org/news/uc/uaw-members-ratify-contracts-with-uc-bringing-end-to-threat-of-large-scale-strike/article_59908f03-331f-4bf2-b177-b2b8e686dabe.html',
    date: '2026-03-01',
    category: 'article'
  },
  {
    publication: 'UC Berkeley AI Hub',
    title: 'BearGPT Enterprise Assistants (Official Deployment Page)',
    url: 'https://ai.berkeley.edu/beargpt',
    date: '2025-06-01',
    category: 'article'
  },
  {
    publication: 'EAB',
    title: 'How to craft an AI acceptable use policy to protect your campus today',
    url: 'https://eab.com/resources/blog/strategy-blog/craft-ai-acceptable-use-policy-protect-campus/',
    date: '2024-05-01',
    category: 'article'
  },
  {
    publication: 'UAW Local 4811',
    title: '2025 Unfair Labor Practice Charges (BearGPT)',
    url: 'https://www.uaw4811.org/2025-ulps',
    date: '2025-01-15',
    category: 'article'
  }
];
