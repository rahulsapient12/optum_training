import React from 'react';
import { useRouter } from 'next/router';
import LearnTopicsCard from './LearnTopicsCard';

const LearTopicsComponent = () => {
  const router = useRouter();
  const TitleName: string = router.query.learnName as string;

  const faqsList = [
    {
      q: 'What are some random questions to ask?',
      a: 'Cascading Style Sheets (CSS) is a stylesheet language used to describe the presentation of a document written in HTML or XML (including XML dialects such as SVG, MathML or XHTML). CSS describes how elements should be rendered on screen, on paper, in speech, or on other media. Cascading Style Sheets (CSS) is a stylesheet language used to describe the presentation of a document written in HTML or XML (including XML dialects such as SVG, MathML or XHTML). CSS describes how elements should be rendered on screen, on paper, in speech, or on other media.',
    },
    {
      q: 'Do you include common questions?',
      a: "This generator doesn't include most common questions. The thought is that you can come up with common questions on your own so most of the questions in this generator.",
    },
    {
      q: 'Can I use this for 21 questions?',
      a: "Yes! there are two ways that you can use this question generator depending on what you're after. You can indicate that you want 21 questions generated.",
    },
    {
      q: 'Are these questions for girls or for boys?',
      a: 'The questions in this generator are gender neutral and can be used to ask either male of females (or any other gender the person identifies with).',
    },
    {
      q: 'What do you wish you had more talent doing?',
      a: "If you've been searching for a way to get random questions, you've landed on the correct webpage. We created the Random Question Generator to ask you as many random questions as your heart desires.",
    },
  ];
  return (
    <section className="leading-relaxed mt-12 mx-auto px-4 md:px-8">
      <div className="space-y-3 text-center">
        <h1 className="text-3xl text-gray-800 font-semibold capitalize ">
          {TitleName} Frequently Asked Questions
        </h1>
        <p className="text-gray-600 max-w-lg mx-auto text-lg">
          Answered all frequently asked questions, Still confused? feel free to
          contact us.
        </p>
      </div>
      <div className="mt-14 mx-auto">
        {faqsList.map((item, idx) => (
          <LearnTopicsCard key={idx} idx={idx} faqsList={item} />
        ))}
      </div>
    </section>
  );
};

export default LearTopicsComponent;
