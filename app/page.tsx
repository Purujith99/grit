"use client";

import ScrollWrapper from "@/components/ScrollWrapper";
import Section from "@/components/Section";
import BoardingPass from "@/components/BoardingPass";
import Leaderboard from "@/components/Leaderboard";
import FlightPath from "@/components/FlightPath";
import FAQSection from "@/components/FAQSection";
import { Airplane } from "@/components/Airplane";
import { motion } from "framer-motion";
import { ArrowRight, Trophy, BarChart3, Globe, CheckCircle, TrendingUp } from "lucide-react";

export default function Home() {
  return (
    <main className="relative min-h-screen text-[var(--foreground)] font-sans selection:bg-[var(--accent)] selection:text-white overflow-hidden">

      {/* Background Flight Path */}
      <FlightPath />
      <Airplane />

      {/* Floating UI Elements (Fixed) */}
      <header className="fixed top-0 left-0 w-full p-6 flex justify-between items-center z-40 bg-gradient-to-b from-[var(--background)]/80 to-transparent pointer-events-none">
        <div className="text-xl font-bold tracking-tighter text-[var(--foreground)] pointer-events-auto">
          G.R.I.T
        </div>
      </header>

      {/* Standard Vertical Layout */}
      <div className="flex flex-col w-full">

        {/* Section 1: Hero */}
        <Section>
          <div className="max-w-4xl space-y-8 z-10 pl-10 md:pl-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-8xl font-bold tracking-tight leading-tight text-[var(--foreground)]">
                Your Skills. <br />
                Your Growth. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent)] to-[var(--accent-secondary)] drop-shadow-sm">
                  Your Global Stage.
                </span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-xl text-[var(--foreground)]/70 max-w-2xl leading-relaxed"
            >
              The G.R.I.T recognizes high-potential students who demonstrate consistent growth, strong fundamentals, and career readiness.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex gap-4 pt-4"
            >

            </motion.div>
          </div>

          {/* Scrolling Banner */}
          <div className="absolute bottom-10 left-0 w-full overflow-hidden border-y border-[var(--card-border)] bg-[var(--background)]/50 backdrop-blur-sm py-4 z-20">
            <motion.div
              animate={{ x: [0, -2500] }}
              transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
              className="flex whitespace-nowrap gap-12"
            >
              {(() => {
                const words = [
                  "Relentless", "Unstoppable", "Ascend", "Evolve", "Momentum", "Persevere", "Rise", "Progress", "Thrive", "Endure",
                  "Discipline", "Elevate", "Advance", "Driven", "Consistent", "Committed", "Resilient", "Upward", "Limitless", "Earned"
                ];
                return [...words, ...words].map((word, i) => (
                  <div key={i} className="flex items-center gap-12">
                    <span className="text-sm font-black uppercase tracking-[0.3em] text-[var(--foreground)]/40 hover:text-[var(--accent)] transition-colors cursor-default">
                      {word}
                    </span>
                    <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]/30" />
                  </div>
                ));
              })()}
            </motion.div>
          </div>
        </Section>

        {/* Section 2: What is This? */}
        <Section>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center z-10 w-full max-w-6xl mx-auto">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-[var(--foreground)]">What is the <br />G.R.I.T?</h2>
              <p className="text-lg text-[var(--foreground)]/70 leading-relaxed">
                The G.R.I.T is a high-impact student development initiative designed to encourage consistent skill-building, career readiness, and global exposure.
              </p>
              <p className="text-lg text-[var(--foreground)]/70 leading-relaxed">
                Through a structured growth journey, students demonstrate their capabilities across core professional areas and position themselves for exciting international experiences.
              </p>
            </div>
            <div className="relative h-64 md:h-96 w-full bg-[var(--card-bg)]/50 rounded-2xl border border-[var(--card-border)] backdrop-blur-sm flex items-center justify-center overflow-hidden shadow-sm">
              <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5" />
              <Globe className="w-32 h-32 md:w-48 md:h-48 text-[var(--accent)] opacity-20 animate-pulse relative z-10" />
              <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-48 h-48 md:w-64 md:h-64 bg-[var(--accent)]/10 rounded-full blur-[100px]" />
            </div>
          </div>
        </Section>

        {/* Section 3: Why Students Love It */}
        <Section>
          <div className="w-full h-full flex flex-col justify-center z-10">
            <h2 className="text-4xl font-bold mb-12 md:pl-20 text-[var(--foreground)]">Why Students Love It</h2>
            <div className="flex flex-wrap justify-center gap-6">
              {[
                { title: "Recognition", desc: "Recognizes consistent performers" },
                { title: "Global Exposure", desc: "Opens doors to global exposure" },
                { title: "Career Readiness", desc: "Encourages real career readiness" },
                { title: "Skill Growth", desc: "Rewards skill-based growth" },
                { title: "Competition", desc: "Builds healthy competitive spirit" },
              ].map((card, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -5, boxShadow: "0 10px 30px -10px rgba(0, 122, 255, 0.2)" }}
                  className="w-full sm:w-72 h-44 bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl p-8 flex flex-col justify-center shadow-md hover:border-[var(--accent)]/50 transition-all sm:flex-shrink-0"
                >
                  <h3 className="text-xl font-bold mb-2 text-[var(--foreground)]">{card.title}</h3>
                  <p className="text-[var(--foreground)]/60 text-sm leading-relaxed">{card.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </Section>

        {/* Section 4: Journey */}
        <Section>
          <div className="w-full h-full flex flex-col justify-center items-center z-10 relative py-20">
            <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5 pointer-events-none" />
            <h2 className="text-3xl md:text-5xl font-bold mb-20 text-center text-[var(--foreground)]">Your Journey to Global Readiness</h2>

            <div className="flex flex-col md:flex-row items-center gap-16 md:gap-4 w-full justify-center">
              {/* Visual Flow Steps */}
              {[
                "Build Skills",
                "Show Consistency",
                "Climb Leaderboard",
                "Unlock Global Opportunities"
              ].map((step, i) => (
                <div key={i} className="flex flex-col md:flex-row items-center gap-8 group">
                  <div className="flex flex-col items-center gap-6 relative">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-[var(--card-bg)] border-2 border-[var(--accent)] flex items-center justify-center text-2xl md:text-3xl font-bold shadow-sm hover:shadow-md transition-all z-10 text-[var(--foreground)]"
                    >
                      {i + 1}
                    </motion.div>
                    <span className="text-xs md:text-sm font-medium uppercase tracking-widest text-[var(--foreground)]/80 group-hover:text-[var(--accent)] transition-colors absolute -bottom-10 w-40 text-center">{step}</span>
                  </div>
                  {i < 3 && <div className="hidden md:block w-20 lg:w-32 h-1 bg-[var(--foreground)]/10 relative overflow-hidden">
                    <motion.div
                      animate={{ x: ["-100%", "100%"] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent opacity-50"
                    />
                  </div>}
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* Section 5: Eligibility (Integrated) */}
        <Section>
          <div className="w-full flex flex-col lg:flex-row gap-12 lg:gap-20 items-center justify-center z-10">
            <div className="space-y-6 max-w-lg text-center lg:text-left">
              <h2 className="text-4xl md:text-5xl font-bold text-[var(--foreground)]">Eligibility Criteria</h2>
              <p className="text-lg md:text-xl text-[var(--foreground)]/70">
                Join the ranks of elite students. Eligibility is open to select batches who demonstrate commitment.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6">
              <BoardingPass
                title="Eligible Batches"
                value="Batch 2023, 2024 & 2025"
                className="rotate-0 md:rotate-[-2deg] hover:rotate-0 transition-transform duration-500"
              />
              <BoardingPass
                title="Attendance"
                value="Min 75% Required"
                className="rotate-0 md:rotate-[2deg] hover:rotate-0 transition-transform duration-500 md:translate-y-8"
              />
            </div>
          </div>
        </Section>

        {/* Section 6: Who Moves Ahead & Section 7: Track (Combined Flow) */}
        <Section>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-20 items-center z-10">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold text-[var(--foreground)]">Who Moves Ahead?</h2>
              <div className="space-y-4">
                {[
                  "Consistent performance in assessments",
                  "Skill readiness in core domains",
                  "Active participation in development sessions",
                  "Positive overall growth trajectory"
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-3 text-base md:text-lg text-[var(--foreground)]/80 p-4 bg-[var(--card-bg)] rounded-lg border border-[var(--card-border)] hover:border-[var(--accent)]/30 hover:bg-[var(--accent)]/5 transition-all shadow-sm"
                  >
                    <CheckCircle className="w-5 h-5 text-[var(--accent)] flex-shrink-0" />
                    {item}
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="relative flex justify-center">
              <div className="absolute -top-10 -left-10 text-[var(--accent)]/10 font-bold text-7xl md:text-9xl z-0 pointer-events-none">TOP</div>
              <div className="relative z-10 w-full flex justify-center scale-90 sm:scale-100 md:scale-125 md:origin-top-left">
                <Leaderboard />
              </div>
            </div>
          </div>
        </Section>

        {/* Section 8: Emotional Close */}
        <Section className="border-b-0">
          <div className="flex flex-col items-center justify-center w-full h-full text-center z-10 space-y-12">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-6xl font-bold text-[var(--foreground)]">This Isn’t Just Another Program.</h2>
              <p className="text-lg md:text-2xl text-[var(--foreground)]/70 max-w-3xl mx-auto leading-relaxed px-4">
                It’s a long-term investment in your career readiness, global exposure, and professional confidence.
              </p>
              <p className="text-xl md:text-3xl font-medium text-[var(--accent)]">
                The students who stay consistent... <br />
                are the ones who go global.
              </p>
            </div>

            {/* Finish Line */}
            <div className="relative w-full max-w-4xl h-px bg-[var(--accent)] shadow-[0_0_20px_rgba(0,122,255,0.4)] mt-10 mx-6">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 bg-[var(--background)] border border-[var(--accent)] text-[var(--accent)] rounded-full text-xs md:text-sm uppercase tracking-widest font-bold shadow-sm whitespace-nowrap">
                Global Stage
              </div>
            </div>

            <div className="flex gap-6 pt-10">
              <button className="px-8 md:px-10 py-4 md:py-5 bg-[var(--foreground)] text-[var(--background)] font-bold rounded-full hover:shadow-xl hover:scale-105 transition-all text-base md:text-lg">
                Start Your Journey
              </button>
            </div>
          </div>
        </Section>

        {/* Section 9: FAQs */}
        <Section>
          <div className="w-full flex flex-col items-center justify-center z-10 py-20 px-4 md:px-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-[var(--foreground)] text-center">Frequently Asked Questions</h2>
            <FAQSection />
          </div>
        </Section>

      </div>

      {/* Footer / Copyright overlay */}
      <div className="fixed bottom-4 right-6 z-40 text-xs text-[var(--foreground)]/30 pointer-events-none">
        © 2026 Global Immersion Program. All rights reserved.
      </div>

    </main>
  );
}
