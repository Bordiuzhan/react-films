import styles from "./FAQ.module.scss";
import Question from "../../components/Question";
import { useState } from "react";
import FAQContainer from "../../components/FAQContainer";

const questionsData = [
  {
    id: 1,
    question: "What is StreamVibe?",
    answer:
      "StreamVibe is a streaming service that allows you to watch movies and shows on demand.",
    isExpanded: false,
  },
  {
    id: 2,
    question: "How much does StreamVibe cost?",
    answer:
      "StreamVibe is a streaming service that allows you to watch movies and shows on demand.",
    isExpanded: false,
  },
  {
    id: 3,
    question: "What content is available on StreamVibe?",
    answer:
      "StreamVibe is a streaming service that allows you to watch movies and shows on demand.",
    isExpanded: false,
  },
  {
    id: 4,
    question: "How can I watch StreamVibe?",
    answer:
      "StreamVibe is a streaming service that allows you to watch movies and shows on demand.",
    isExpanded: false,
  },
  {
    id: 5,
    question: "How do I sign up for StreamVibe?",
    answer:
      "StreamVibe is a streaming service that allows you to watch movies and shows on demand.",
    isExpanded: false,
  },
  {
    id: 6,
    question: "What is the StreamVibe free trial?",
    answer:
      "StreamVibe is a streaming service that allows you to watch movies and shows on demand.",
    isExpanded: false,
  },
  {
    id: 7,
    question: "How do I contact StreamVibe customer support?",
    answer:
      "StreamVibe is a streaming service that allows you to watch movies and shows on demand.",
    isExpanded: false,
  },
  {
    id: 8,
    question: "What are the StreamVibe payment methods?",
    answer:
      "StreamVibe is a streaming service that allows you to watch movies and shows on demand.",
    isExpanded: false,
  },
];

interface Question {
  id: number;
  question: string;
  answer: string;
  isExpanded: boolean;
}

const FAQ = () => {
  const [questions, setQuestions] = useState<Question[]>(questionsData);

  const handleToggle = (id: number | null) => {
    setQuestions(
      questions.map((q) =>
        q.id === id
          ? { ...q, isExpanded: !q.isExpanded }
          : { ...q, isExpanded: false },
      ),
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.wrapper}>
          <div className={styles.wrapperText}>
            <h3 className={styles.title}>Frequently Asked Questions</h3>
            <p className={styles.paragraph}>
              Got questions? We've got answers! Check out our FAQ section to
              find answers to the most common questions about StreamVibe.
            </p>
          </div>
          <button className={styles.button}>Ask a Question</button>
        </div>
        <div className={styles.questions}>
          <FAQContainer questions={questions} onToggle={handleToggle} />
        </div>
      </div>
    </div>
  );
};

export default FAQ;
