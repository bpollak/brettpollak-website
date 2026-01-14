import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About Brett Pollak | AI & Digital Transformation Leader",
  description: "Learn about Brett Pollak's leadership in AI and digital transformation at UC San Diego. Over two decades of technology innovation in higher education, including leading the TritonGPT initiative.",
  alternates: {
    canonical: "https://brettcpollak.com/about",
  },
  openGraph: {
    title: "About Brett Pollak | AI & Digital Transformation Leader",
    description: "Over two decades of technology leadership driving AI implementation and digital transformation in higher education.",
    url: "https://brettcpollak.com/about",
  },
};

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50" id="main-content">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="mb-12">
          <div className="inline-block px-4 py-1.5 bg-indigo-50 text-indigo-700 text-sm font-semibold rounded-full mb-6">
            PROFILE
          </div>
          <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6 tracking-tight">About</h1>
          <div className="w-20 h-1.5 bg-gradient-to-r from-indigo-600 to-purple-600"></div>
        </div>

        {/* Main Bio Section */}
        <div className="grid md:grid-cols-5 gap-16 mb-20">
          <div className="md:col-span-2 relative">
            <div className="hidden md:block absolute -inset-6 bg-gradient-to-br from-indigo-300 via-purple-300 to-pink-300 rounded-2xl transform -rotate-3 opacity-20 blur-2xl animate-pulse"></div>
            <div className="hidden md:block absolute -inset-5 bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-200 rounded-2xl transform -rotate-2 opacity-40 blur-xl"></div>
            <div className="hidden md:block absolute -inset-4 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl transform rotate-1 shadow-2xl"></div>
            <div className="hidden md:block absolute -inset-3 bg-gradient-to-tl from-purple-100 to-blue-50 rounded-2xl transform -rotate-1 opacity-70"></div>
            <div className="relative">
              <Image
                src="/brettpollak-headshot-lean.png"
                alt="Brett Pollak"
                width={300}
                height={400}
                className="w-full rounded-xl shadow-2xl ring-4 ring-white/50"
              />
            </div>
          </div>
          <div className="md:col-span-3 space-y-6">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Transforming Organizations Through Strategic AI Leadership</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-indigo-600 to-purple-600"></div>
            <p className="text-xl text-gray-600 leading-relaxed">
              I partner with organizations to unlock transformative value through AI and digital innovation. My approach combines
              rapid prototyping with enterprise-scale deployment, turning ambitious visions into measurable outcomes. By building
              robust governance frameworks and fostering stakeholder engagement, I enable institutions to confidently adopt emerging
              technologies while managing risk and ensuring ethical implementation.
            </p>
            <p className="text-xl text-gray-600 leading-relaxed">
              As a proven innovator in AI implementation, I've demonstrated that breakthrough solutions can move from concept to
              production in weeks, not years—scaling to serve 100,000+ users while achieving 60-90% efficiency gains. I bring a
              track record of creating institutional knowledge platforms that democratize access to information, accelerate decision-making,
              and inspire sector-wide adoption. Organizations seeking to lead in the AI era benefit from my expertise in balancing innovation
              velocity with sustainable, scalable architecture.
            </p>
          </div>
        </div>

        {/* Key Achievements */}
        <div className="mb-20 bg-white rounded-2xl p-12 shadow-lg">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-12">Key Achievements</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-cyan-600 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-3">TritonGPT Impact</h3>
              <p className="text-lg text-gray-600 leading-relaxed">Reduced contract review time by 60% and democratized access to institutional knowledge for 100,000+ users</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-purple-600 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Technology Leadership</h3>
              <p className="text-lg text-gray-600 leading-relaxed">Manage 80+ technology professionals and oversee multi-million-dollar budgets</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-amber-600 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Innovation Awards</h3>
              <p className="text-lg text-gray-600 leading-relaxed">Larry L. Sautter Gold and Silver Awards for Innovation in Information Technology</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-rose-600 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Multi-Institutional Impact</h3>
              <p className="text-lg text-gray-600 leading-relaxed">TritonGPT technology licensed by multiple leading universities nationwide</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-emerald-600 shadow-sm hover:shadow-md transition-shadow md:col-span-2">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Infrastructure Scale</h3>
              <p className="text-lg text-gray-600 leading-relaxed">Support hybrid-cloud infrastructure serving 100,000+ users across campus</p>
            </div>
          </div>
        </div>

        {/* Areas of Expertise */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Areas of Expertise</h2>
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-10">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">AI & Machine Learning</h3>
              <p className="text-lg text-gray-600">Implementation, governance, and ethical frameworks for AI in higher education</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Data Governance</h3>
              <p className="text-lg text-gray-600">Enterprise data warehousing, security, privacy, and analytics</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Cloud Infrastructure</h3>
              <p className="text-lg text-gray-600">Hybrid-cloud architecture and enterprise-scale deployments</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Digital Transformation</h3>
              <p className="text-lg text-gray-600">Change management, stakeholder engagement, and innovation at scale</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Web Technologies</h3>
              <p className="text-lg text-gray-600">Mobile strategy, responsive design, accessibility, and UX</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Predictive Analytics</h3>
              <p className="text-lg text-gray-600">Data-driven insights and decision-making frameworks</p>
            </div>
          </div>
        </div>

        {/* Professional Background */}
        <div className="mb-20 bg-white rounded-2xl p-12 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Professional Background</h2>
          <div className="space-y-6 max-w-4xl">
            <p className="text-lg text-gray-600 leading-relaxed">
              With over two decades of experience in technology leadership, I have consistently driven innovation at the
              intersection of education and technology. Before joining UC San Diego, I served as Corporate Web Team Manager
              at SAIC for nearly seven years, where I developed expertise in large-scale technology implementations and team leadership.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              At UC San Diego, I oversee critical technology groups including Data Warehouse, Analytics, Predictive Technologies,
              Email, Service Desk, Field Support, and Web Technologies. My work focuses on operational efficiency, technology
              integration, and cross-functional collaboration to support both the university's business and academic missions.
            </p>
          </div>
        </div>

        {/* Thought Leadership */}
        <div className="border-t border-gray-200 pt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Thought Leadership</h2>
          <div className="space-y-6 max-w-4xl">
            <p className="text-lg text-gray-600 leading-relaxed">
              I am a frequent speaker and contributor on topics related to AI in higher education, having presented at major
              conferences including EDUCAUSE, ASU GSV Summit, and AXIES. My work has been featured in leading publications
              such as Forbes, CIO.com, EdTech Magazine, and the EDUCAUSE Review.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Through my writing and speaking engagements, I focus on sharing practical insights from real-world implementations,
              emphasizing the importance of faculty engagement, robust data governance, and measured approaches to AI adoption
              in educational settings.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
