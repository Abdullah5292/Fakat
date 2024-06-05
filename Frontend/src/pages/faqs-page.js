import React, { useState } from 'react';

export const Faq = ({ question, answer, active, onClick }) => (
    <div className={`faq ${active ? 'active' : ''}`} onClick={onClick}>
        <div className="question">{question}</div>
        {active && <div className="answer">{answer}</div>}
    </div>
);

export const Faqs = ({ faqsData }) => {
    const [activeIndices, setActiveIndices] = useState([]);

    const toggleQuestion = index => {
        setActiveIndices(activeIndices.includes(index)
            ? activeIndices.filter(item => item !== index)
            : [...activeIndices, index]);
    };

    return (
        <div className="faq-page">
            <div className="column">
                {faqsData.slice(0, Math.ceil(faqsData.length / 2)).map((faq, index) => (
                    <Faq
                        key={index}
                        question={faq.question}
                        answer={faq.answer}
                        active={activeIndices.includes(index)}
                        onClick={() => toggleQuestion(index)}
                    />
                ))}
            </div>
            <div className="column">
                {faqsData.slice(Math.ceil(faqsData.length / 2)).map((faq, index) => (
                    <Faq
                        key={index + Math.ceil(faqsData.length / 2)}
                        question={faq.question}
                        answer={faq.answer}
                        active={activeIndices.includes(index + Math.ceil(faqsData.length / 2))}
                        onClick={() => toggleQuestion(index + Math.ceil(faqsData.length / 2))}
                    />
                ))}
            </div>
        </div>
    );
};


