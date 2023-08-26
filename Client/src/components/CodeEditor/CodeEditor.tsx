import React, { useState } from 'react';
import styles from './CodeEditor.module.css';
import { keywords } from './keywords';

const CodeEditor: React.FC = () => {
  const [code, setCode] = useState<string>('');

  const handleCodeChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newCode = event.target.value;
    setCode(newCode);
  };

  const highlightKeywords = (text: string): JSX.Element => {
    const words = text.split(/\b/);
    const highlightedText = words.map((word, index) => {
      const upperCaseWord = word.toUpperCase(); // Convertir a mayúsculas
      if (keywords.includes(upperCaseWord)) {
        return (
          <span key={index} className={styles.keyword}>
            {upperCaseWord}
          </span>
        );
      }
      return word;
    });

    return <>{highlightedText}</>;
  };

  return (
    <div className={styles.codeEditor}>
      <textarea
        className={styles.lineNumbers}
        value={code.split('\n').map((_, index) => `${index + 1}\n`).join('')}
        readOnly
      />
      <div className={styles.codeContent}>
        {highlightKeywords(code)}
        <textarea
          value={code}
          onChange={handleCodeChange}
          className={styles.hiddenTextArea}
        />
      </div>
    </div>
  );
};

export default CodeEditor;
