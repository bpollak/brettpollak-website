'use client';

import Image from 'next/image';
import { useEffect, useState, useRef } from 'react';

export default function TritonGPT() {
  const [metricsVisible, setMetricsVisible] = useState(false);
  const metricsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setMetricsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (metricsRef.current) {
      observer.observe(metricsRef.current);
    }

    return () => {
      if (metricsRef.current) {
        observer.unobserve(metricsRef.current);
      }
    };
  }, []);

  const AnimatedNumber = ({ end, suffix = '' }: { end: number; suffix?: string }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!metricsVisible) return;

      const duration = 2000;
      const steps = 60;
      const increment = end / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }, [metricsVisible, end]);

    return <>{count}{suffix}</>;
  };

  return (
    <div className="min-h-screen bg-gray-50" id="main-content">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-cyan-600 via-blue-700 to-pink-600 text-white overflow-hidden animate-gradient-shift">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

        {/* Animated floating orbs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-400 rounded-full blur-3xl opacity-20 animate-float-slow"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-400 rounded-full blur-3xl opacity-20 animate-float-slow" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-400 rounded-full blur-3xl opacity-15 animate-pulse-glow"></div>

        <div className="relative max-w-7xl mx-auto px-6 py-24">
          <div className="animate-slide-in-left inline-block px-4 py-1.5 bg-blue-500/20 text-blue-300 text-sm font-semibold rounded-full mb-6 backdrop-blur-sm border border-blue-400/30">
            CASE STUDY
          </div>
          <h1 className="animate-slide-up text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            Sovereignty in Intelligence
          </h1>
          <p className="animate-slide-up delay-100 text-2xl md:text-3xl text-blue-100 mb-8 max-w-4xl leading-relaxed font-light">
            The Strategic Architecture and Impact of TritonGPT at UC San Diego
          </p>
          <div className="animate-fade-in delay-200 flex flex-wrap gap-4 text-sm text-blue-200">
            <div className="flex items-center gap-2 backdrop-blur-sm bg-white/10 px-3 py-2 rounded-lg hover:bg-white/20 transition-all">
              <svg className="w-5 h-5 animate-bounce-subtle" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
              </svg>
              January 13, 2026
            </div>
            <div className="flex items-center gap-2 backdrop-blur-sm bg-white/10 px-3 py-2 rounded-lg hover:bg-white/20 transition-all">
              <svg className="w-5 h-5 animate-bounce-subtle" style={{ animationDelay: '0.2s' }} fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
              </svg>
              University of California, San Diego
            </div>
          </div>
        </div>
      </section>

      {/* Executive Summary */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="card-3d bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-10 border-l-4 border-blue-600 shadow-lg relative overflow-hidden group">
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shimmer"></div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Executive Summary</h2>
          <p className="text-xl text-gray-700 leading-relaxed relative z-10">
            UC San Diego developed <span className="font-bold text-blue-600">TritonGPT</span>, a locally-hosted "Vertical AI" platform powered by the TritonAI secure infrastructure. Leveraging San Diego Supercomputer Center (SDSC) computing resources and student-led development, the university created an institutional intelligence system serving <span className="font-bold">80,000+ users</span>.
          </p>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="bg-white py-20" ref={metricsRef}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Impact Metrics</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="card-3d text-center p-8 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/0 to-indigo-400/0 group-hover:from-blue-400/10 group-hover:to-indigo-400/10 transition-all duration-500"></div>
              <div className="relative z-10">
                <div className="text-5xl font-bold text-blue-600 mb-2 transition-all duration-300 group-hover:scale-110">
                  <AnimatedNumber end={91} />%
                </div>
                <div className="text-gray-700 font-medium">Time Saved on Contract Review</div>
                <div className="text-sm text-gray-500 mt-2">120 min → 11 min</div>
              </div>
            </div>
            <div className="card-3d text-center p-8 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 group relative overflow-hidden delay-100">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400/0 to-pink-400/0 group-hover:from-purple-400/10 group-hover:to-pink-400/10 transition-all duration-500"></div>
              <div className="relative z-10">
                <div className="text-5xl font-bold text-purple-600 mb-2 transition-all duration-300 group-hover:scale-110">
                  <AnimatedNumber end={60} />%
                </div>
                <div className="text-gray-700 font-medium">Faster Job Description Drafting</div>
                <div className="text-sm text-gray-500 mt-2">30 min → 5 min</div>
              </div>
            </div>
            <div className="card-3d text-center p-8 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 group relative overflow-hidden delay-200">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/0 to-blue-400/0 group-hover:from-cyan-400/10 group-hover:to-blue-400/10 transition-all duration-500"></div>
              <div className="relative z-10">
                <div className="text-5xl font-bold text-cyan-600 mb-2 transition-all duration-300 group-hover:scale-110">
                  <AnimatedNumber end={80} suffix="K+" />
                </div>
                <div className="text-gray-700 font-medium">Total Users Served</div>
                <div className="text-sm text-gray-500 mt-2">38k Staff + 40k Students</div>
              </div>
            </div>
            <div className="card-3d text-center p-8 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 group relative overflow-hidden delay-300">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/0 to-teal-400/0 group-hover:from-emerald-400/10 group-hover:to-teal-400/10 transition-all duration-500"></div>
              <div className="relative z-10">
                <div className="text-5xl font-bold text-emerald-600 mb-2 transition-all duration-300 group-hover:scale-110">
                  <AnimatedNumber end={80} />%
                </div>
                <div className="text-gray-700 font-medium">Improved Policy Search Accuracy</div>
                <div className="text-sm text-gray-500 mt-2">Across all departments</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Vision */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-gray-900 mb-12">The Strategic Shift: From Data-Rich to Information-Fluent</h2>

        <div className="prose prose-lg max-w-none space-y-8">
          <div className="card-3d bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">The Operational Context</h3>
            <p className="text-gray-700 mb-4">UC San Diego manages a complex operational environment:</p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-3 group">
                <svg className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0 transition-transform group-hover:scale-125" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="group-hover:translate-x-1 transition-transform inline-block">40,000 students across six undergraduate colleges</span>
              </li>
              <li className="flex items-start gap-3 group">
                <svg className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0 transition-transform group-hover:scale-125" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="group-hover:translate-x-1 transition-transform inline-block">38,000 staff and faculty members</span>
              </li>
              <li className="flex items-start gap-3 group">
                <svg className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0 transition-transform group-hover:scale-125" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="group-hover:translate-x-1 transition-transform inline-block">Billions in research funding across multiple disciplines</span>
              </li>
            </ul>
            <p className="text-gray-700 mt-4">
              Despite vast data resources, the university was <span className="font-semibold text-blue-600">"data-rich but information-poor,"</span> with inefficient policy access creating operational friction.
            </p>
          </div>

          <div className="card-3d bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl p-8 shadow-lg hover:shadow-2xl text-white relative overflow-hidden group">
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute top-0 right-0 w-64 h-64 bg-purple-400 rounded-full blur-3xl opacity-20 animate-pulse-glow"></div>
            </div>
            <h3 className="text-2xl font-bold mb-4 relative z-10">The Chancellor's Mandate</h3>
            <p className="text-blue-50 text-lg leading-relaxed relative z-10">
              Chancellor Pradeep K. Khosla challenged Information Technology Services to harness generative AI to reduce administrative burden while maintaining strict FERPA compliance—leading to the build-versus-buy decision favoring on-premise SDSC hosting.
            </p>
          </div>
        </div>
      </section>

      {/* Technical Architecture */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">Technical Architecture: The TritonAI Platform</h2>

          <div className="space-y-8">
            <div className="card-3d bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 transition-all duration-300 group-hover:rotate-12">
                  <svg className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">Infrastructure: Physical Sovereignty</h3>
                  <p className="text-gray-700 leading-relaxed">
                    TritonGPT operates on dedicated GPU clusters at the San Diego Supercomputer Center. This local hosting ensures sensitive institutional data remains on campus networks. The shift from variable token-based pricing to fixed capital expenditure models improves economics at scale.
                  </p>
                </div>
              </div>
            </div>

            <div className="card-3d bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group delay-100">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-purple-600 transition-all duration-300 group-hover:rotate-12">
                  <svg className="w-6 h-6 text-purple-600 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 12v3c0 1.657 3.134 3 7 3s7-1.343 7-3v-3c0 1.657-3.134 3-7 3s-7-1.343-7-3z" />
                    <path d="M3 7v3c0 1.657 3.134 3 7 3s7-1.343 7-3V7c0 1.657-3.134 3-7 3S3 8.657 3 7z" />
                    <path d="M17 5c0 1.657-3.134 3-7 3S3 6.657 3 5s3.134-3 7-3 7 1.343 7 3z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">Model Flexibility and Cost Effectiveness</h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    TritonAI's model-agnostic design avoids vendor lock-in through a hybrid strategy:
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2 group/item">
                      <span className="text-purple-600 font-bold group-hover/item:scale-150 transition-transform inline-block">•</span>
                      <span className="group-hover/item:translate-x-1 transition-transform inline-block">Open-source models handle high-volume routine tasks</span>
                    </li>
                    <li className="flex items-start gap-2 group/item">
                      <span className="text-purple-600 font-bold group-hover/item:scale-150 transition-transform inline-block">•</span>
                      <span className="group-hover/item:translate-x-1 transition-transform inline-block">Commercial models accessed via secure API gateways</span>
                    </li>
                    <li className="flex items-start gap-2 group/item">
                      <span className="text-purple-600 font-bold group-hover/item:scale-150 transition-transform inline-block">•</span>
                      <span className="group-hover/item:translate-x-1 transition-transform inline-block">Avoids escalating token costs for high-volume usage</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="card-3d bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group delay-200">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-indigo-600 transition-all duration-300 group-hover:rotate-12">
                  <svg className="w-6 h-6 text-indigo-600 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">Precision Grounding: RAG & EDA</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Retrieval-Augmented Generation (RAG) separates AI reasoning from static knowledge bases. The Enterprise Data Agent (EDA) translates natural language into secure SQL queries within SAP HANA environments, enabling staff to access complex institutional data without technical expertise.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Assistant Ecosystem Image */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">The Assistant Ecosystem</h2>
          <p className="text-xl text-gray-600">Specialized assistants target specific campus roles and data domains</p>
        </div>
        <div className="card-3d rounded-2xl overflow-hidden shadow-2xl border-4 border-gray-200 hover:border-blue-400 transition-all duration-500 group">
          <div className="relative">
            <Image
              src="/tritongpt-uc-san-diego-assistant.png"
              alt="TritonGPT UC San Diego Assistant Interface"
              width={1200}
              height={800}
              className="w-full transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">Implementation Use Cases</h2>

          <div className="space-y-6">
            {/* Universal Concierge */}
            <div className="card-3d bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border-l-4 border-blue-600 hover:border-blue-700 shadow-lg hover:shadow-2xl transition-all duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Universal Concierge: UC San Diego Assistant</h3>
              <p className="text-gray-700 mb-3">Draws from 70+ curated department websites, hundreds of ServiceNow knowledge base articles, and UC San Diego policies to serve as a cross-functional knowledge bridge.</p>
            </div>

            {/* Administrative Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="card-3d bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-blue-500 hover:shadow-lg transition-all group">
                <div className="flex items-start gap-3 mb-2">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500 transition-all">
                    <span className="text-blue-600 group-hover:text-white font-bold transition-colors">1</span>
                  </div>
                  <h4 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">Job Description Helper</h4>
                </div>
                <p className="text-sm text-gray-600 mb-2 ml-11">60% reduction in drafting time</p>
                <div className="text-xs text-gray-500 ml-11">30 min → 5 min average</div>
              </div>

              <div className="card-3d bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-purple-500 hover:shadow-lg transition-all group delay-100">
                <div className="flex items-start gap-3 mb-2">
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-purple-500 transition-all">
                    <span className="text-purple-600 group-hover:text-white font-bold transition-colors">2</span>
                  </div>
                  <h4 className="font-bold text-gray-900 group-hover:text-purple-600 transition-colors">Contract Reviewer</h4>
                </div>
                <p className="text-sm text-gray-600 mb-2 ml-11">91% time savings for NDAs/T&Cs</p>
                <div className="text-xs text-gray-500 ml-11">120 min → 11 min average</div>
              </div>

              <div className="card-3d bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-emerald-500 hover:shadow-lg transition-all group delay-200">
                <div className="flex items-start gap-3 mb-2">
                  <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-500 transition-all">
                    <span className="text-emerald-600 group-hover:text-white font-bold transition-colors">3</span>
                  </div>
                  <h4 className="font-bold text-gray-900 group-hover:text-emerald-600 transition-colors">Fund Manager Coach</h4>
                </div>
                <p className="text-sm text-gray-600 ml-11">Expert guidance on grant compliance and spending restrictions</p>
              </div>

              <div className="card-3d bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-rose-500 hover:shadow-lg transition-all group delay-300">
                <div className="flex items-start gap-3 mb-2">
                  <div className="w-8 h-8 bg-rose-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-rose-500 transition-all">
                    <span className="text-rose-600 group-hover:text-white font-bold transition-colors">4</span>
                  </div>
                  <h4 className="font-bold text-gray-900 group-hover:text-rose-600 transition-colors">Email Phishing Analyzer</h4>
                </div>
                <p className="text-sm text-gray-600 ml-11">Real-time security assessments for suspicious emails</p>
              </div>

              <div className="card-3d bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-cyan-500 hover:shadow-lg transition-all group delay-400">
                <div className="flex items-start gap-3 mb-2">
                  <div className="w-8 h-8 bg-cyan-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-cyan-500 transition-all">
                    <span className="text-cyan-600 group-hover:text-white font-bold transition-colors">5</span>
                  </div>
                  <h4 className="font-bold text-gray-900 group-hover:text-cyan-600 transition-colors">Deep Research Assistant</h4>
                </div>
                <p className="text-sm text-gray-600 ml-11">Synthesis across hundreds of documents</p>
              </div>

              <div className="card-3d bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-indigo-500 hover:shadow-lg transition-all group delay-500">
                <div className="flex items-start gap-3 mb-2">
                  <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-indigo-500 transition-all">
                    <span className="text-indigo-600 group-hover:text-white font-bold transition-colors">6</span>
                  </div>
                  <h4 className="font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">Triton Developer Assistant</h4>
                </div>
                <p className="text-sm text-gray-600 ml-11">Coding support for staff and administrators</p>
              </div>
            </div>

            {/* Academic Assistants */}
            <div className="card-3d bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border-l-4 border-purple-600 hover:border-purple-700 shadow-lg hover:shadow-2xl transition-all duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Academic and Student Assistants</h3>
              <div className="space-y-3">
                <div className="group">
                  <h4 className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">Socratic Tutor</h4>
                  <p className="text-sm text-gray-700 group-hover:translate-x-2 transition-transform">Guides students through materials without providing direct answers</p>
                </div>
                <div className="group">
                  <h4 className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">Instructor AI Assistant</h4>
                  <p className="text-sm text-gray-700 group-hover:translate-x-2 transition-transform">Generates quizzes, summaries, and study guides from lecture content</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recognition & Awards */}
      <section className="relative bg-gradient-to-br from-amber-50 to-orange-50 py-20 overflow-hidden">
        <div className="absolute top-10 right-10 w-40 h-40 bg-amber-300 rounded-full blur-3xl opacity-20 animate-float"></div>
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-orange-300 rounded-full blur-3xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>

        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Recognition & Awards</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card-3d bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl text-center group transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors">CIO 100 Award</h3>
              <p className="text-gray-600">2025 - Recognized as top global IT innovation</p>
            </div>

            <div className="card-3d bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl text-center group transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">Gartner Eye on Innovation</h3>
              <p className="text-gray-600">Finalist for transformational impact in education</p>
            </div>
          </div>
        </div>
      </section>

      {/* Future Roadmap */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-gray-900 mb-12">Future Roadmap: 2026 and Beyond</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "Agentic AI",
              desc: "Transition from chat to action using Model Context Protocol (MCP)",
              color: "blue",
              icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" /></svg>
            },
            {
              title: "Build Your Own Assistant",
              desc: "No-code self-service department bot creation",
              color: "purple",
              icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" /></svg>
            },
            {
              title: "Voice-Activated Agents",
              desc: "Natural voice command interaction",
              color: "pink",
              icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clipRule="evenodd" /></svg>
            },
            {
              title: "Enrollment Management Automation",
              desc: "Automated transcript verification",
              color: "cyan",
              icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" /><path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
            },
            {
              title: "Risk-Based Research Review",
              desc: "Algorithm-driven proposal assessment",
              color: "emerald",
              icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
            },
            {
              title: "Advising Support Agents",
              desc: "Specialized tier-one academic advising",
              color: "indigo",
              icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" /></svg>
            },
            {
              title: "Multimodal Integration",
              desc: "Video and audio institutional data processing",
              color: "rose",
              icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" /></svg>
            },
          ].map((item, index) => (
            <div
              key={index}
              className="card-3d bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-blue-500 hover:shadow-lg transition-all group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-3">
                <div className={`w-10 h-10 bg-${item.color}-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-${item.color}-500 transition-all text-${item.color}-600 group-hover:text-white`}>
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Conclusion */}
      <section className="relative bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 text-white py-20 overflow-hidden animate-gradient-shift">
        <div className="absolute top-0 right-0 w-96 h-96 bg-pink-400 rounded-full blur-3xl opacity-20 animate-pulse-glow"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-400 rounded-full blur-3xl opacity-20 animate-pulse-glow" style={{ animationDelay: '1.5s' }}></div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl font-bold mb-8 animate-fade-in">Conclusion</h2>
          <p className="text-2xl text-blue-100 leading-relaxed mb-8 animate-slide-up">
            TritonGPT demonstrates that AI value in higher education derives from institutional context integration. Through TritonAI, UC San Diego transformed data into a dynamic conversational asset while establishing new standards for public sector efficiency.
          </p>
          <div className="card-3d inline-block px-6 py-3 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300">
            <p className="text-blue-100 italic">Digital sovereignty through strategic AI implementation</p>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Interested in Learning More?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Available for speaking engagements, consulting, and collaboration on AI implementation in higher education.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-10 py-4 text-lg font-bold hover:bg-blue-700 transition-all shadow-xl hover:shadow-2xl rounded-lg group hover:-translate-y-1 transform"
          >
            Get in Touch
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </section>
    </div>
  );
}
