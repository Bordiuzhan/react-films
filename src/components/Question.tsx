import styles from "./Question.module.scss";

interface QuestionProps {
  id: number;
  question: string;
  answer: string;
  isExpanded: boolean;
  onToggle: (id: number | null) => void;
}

const Question = ({
  id,
  question,
  answer,
  isExpanded,
  onToggle,
}: QuestionProps) => {
  return (
    <div className={styles.question}>
      <div className={styles.questionNumber}>{id}</div>
      <div className={styles.questionContent}>
        <div className={styles.header}>
          <div className={styles.questionTitle}>{question}</div>
          <button
            className={styles.button}
            onClick={() => onToggle(isExpanded ? null : id)}
          >
            {isExpanded ? "-" : "+"}
          </button>
        </div>
        {isExpanded && <div className={styles.answer}>{answer}</div>}
      </div>
    </div>
  );
};

export default Question;
