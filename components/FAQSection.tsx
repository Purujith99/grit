"use client";

import React, { useState, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface FAQItemProps {
    question: string;
    answer: string | ReactNode;
    isOpen: boolean;
    onClick: () => void;
}

function FAQItem({ question, answer, isOpen, onClick }: FAQItemProps) {
    return (
        <div className="border border-[var(--card-border)] bg-[var(--card-bg)] rounded-xl overflow-hidden transition-all hover:border-[var(--accent)]/30">
            <button
                onClick={onClick}
                className="flex justify-between items-center w-full p-6 text-left focus:outline-none"
            >
                <span className="font-bold text-lg text-[var(--foreground)] pr-8">{question}</span>
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <ChevronDown className={`w-5 h-5 text-[var(--accent)]`} />
                </motion.div>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                    >
                        <div className="p-6 pt-0 text-[var(--foreground)]/70 whitespace-pre-line leading-relaxed">
                            {answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const faqs = [
        {
            question: "1. What is G.R.I.T?",
            answer: `G.R.I.T is a sponsored international tech immersion opportunity for NIAT students. Selected participants will gain first-hand exposure to global innovation ecosystems through curated industry visits, expert workshops, leadership interactions, and cultural immersion across leading international destinations.
      
Selection is competitive and based on sustained performance, consistency, and active participation across programme activities. Further details will be announced in phases.

The programme is subject to institutional policies, applicable regulations, travel conditions, and operational feasibility. NIAT reserves the right to determine final participation.`
        },
        {
            question: "2. Is the G.R.I.T programme fully sponsored?",
            answer: (
                <>
                    <span className="font-bold">NxtWave will sponsor the following components for selected NIAT students:</span>
                    <ul className="list-disc pl-5 mt-2 mb-4 space-y-1">
                        <li>International travel (to-and-fro economy airfare)</li>
                        <li>Accommodation, food, and local transportation during the official programme schedule</li>
                    </ul>
                    <span className="font-bold">Students are responsible for:</span>
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                        <li>Passport costs</li>
                        <li>VISA-related fees</li>
                        <li>Any personal expenses outside the official itinerary</li>
                    </ul>
                </>
            )
        },
        {
            question: "3. Do students need to have a passport?",
            answer: "Yes. Students must hold a valid passport with a minimum validity of one year at the time of travel. Students are strongly advised to apply for or renew their passport well in advance."
        },
        {
            question: "4. Will NIAT help with VISA and documentation?",
            answer: (
                <>
                    <span className="font-bold">NIAT will provide:</span>
                    <ul className="list-disc pl-5 mt-2 mb-4 space-y-1">
                        <li>Official invitation/support letters</li>
                        <li>Required institutional documentation</li>
                        <li>Guidance for the VISA application process</li>
                    </ul>
                    <span className="font-bold">However, students must:</span>
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                        <li>Attend required VISA interviews</li>
                        <li>Complete all embassy/consulate procedures</li>
                    </ul>
                    <p className="mt-4">VISA approval is solely at the discretion of the respective embassy or consulate.</p>
                </>
            )
        },
        {
            question: "5. Is selection confirmed once a student is shortlisted?",
            answer: `Final participation is confirmed only after successful VISA approval and completion of all programme requirements.
      
If a VISA is not granted, the opportunity may be deferred or reassigned as per programme policy.

Any violation of NIAT’s code of conduct or programme guidelines may lead to disqualification at any stage. NIAT reserves the right to determine final participation.`
        },
        {
            question: "6. How many international destinations will each student be eligible for?",
            answer: "Each selected student will be eligible to participate in one international immersion experience, subject to programme guidelines and final selection."
        },
        {
            question: "7. Will participation affect academic requirements?",
            answer: `Students must continue to comply with all academic requirements prescribed by their universities. Any academic adjustments, if applicable, will be communicated separately.
      
Participation does not automatically exempt students from academic obligations unless explicitly stated.`
        },
        {
            question: "8. What conduct is expected from students?",
            answer: (
                <>
                    <span className="font-bold">Students must strictly adhere to:</span>
                    <ul className="list-disc pl-5 mt-2 mb-4 space-y-1">
                        <li>NIAT’s code of conduct</li>
                        <li>Contest and assessment guidelines</li>
                        <li>Programme-specific instructions</li>
                    </ul>
                    <p>Any fraudulent activity, misrepresentation, or misconduct may result in immediate disqualification or revocation.</p>
                </>
            )
        },
        {
            question: "9. Can NIAT modify or cancel the programme?",
            answer: `Yes. NIAT reserves the right to modify, postpone, suspend, or cancel the programme or any component due to regulatory changes, travel restrictions, force majeure events, or safety and operational considerations.
      
Such decisions shall be final and binding.`
        }
    ];

    return (
        <div className="w-full max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
                <FAQItem
                    key={index}
                    question={faq.question}
                    answer={faq.answer}
                    isOpen={openIndex === index}
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                />
            ))}
        </div>
    );
}
