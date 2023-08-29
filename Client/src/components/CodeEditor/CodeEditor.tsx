import React, { useState } from 'react';
import styles from './CodeEditor.module.css'; // Asegúrate de tener los estilos CSS adecuados
import { keywords } from './keywords';

const CodeEditor: React.FC = () => {
  const [code, setCode] = useState<string>('');
  let lines: string[] = [];
  let linesOk: string[] = [];

  const handleCodeChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    lines = event.target.value.split('\n');
    linesOk = lines.map((line) => {
      let updatedLine = line;
      keywords.forEach(keyword => {
        const regex = new RegExp(`\\b${keyword}\\b`, 'gi'); // \b para limitar a palabras completas y g para búsqueda global
        updatedLine = updatedLine.replace(regex, keyword.toUpperCase());
      });
      return updatedLine;
    });
    setCode(linesOk.join('\n'));
  };

  const lineCount = code.split('\n').length;
  const lineNumbers = Array.from({ length: lineCount }, (_, index) => index + 1).join('\n');

  return (
    <div className={styles.codeEditorContainer}>
      {/* Numero de linea */}
      <textarea
        className={styles.lineNumbers}
        readOnly
        value={lineNumbers}
      />
      {/* Editor de codigo */}
      <textarea
        className={styles.codeTextarea}
        value={code}
        onChange={handleCodeChange}
      />
    </div>
  );
};

export default CodeEditor;
