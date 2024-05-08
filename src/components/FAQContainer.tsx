import styles from "./FAQContainer.module.scss";
import Question from "./Question";

interface FAQProps {
  questions: {
    id: number;
    question: string;
    answer: string;
    isExpanded: boolean;
  }[];
  onToggle: (id: number | null) => void;
}

const FAQ = ({ questions, onToggle }: FAQProps) => {
  return (
    <div className={styles.faqContainer}>
      <div className={styles.faqColumn}>
        {questions.slice(0, Math.ceil(questions.length / 2)).map((question) => (
          <Question key={question.id} {...question} onToggle={onToggle} />
        ))}
      </div>
      <div className={styles.faqColumn}>
        {questions.slice(Math.ceil(questions.length / 2)).map((question) => (
          <Question key={question.id} {...question} onToggle={onToggle} />
        ))}
      </div>
    </div>
  );
};

export default FAQ;
