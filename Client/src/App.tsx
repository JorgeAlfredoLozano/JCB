import React from 'react';
import './App.css';
import Menu from './components/Menu/Menu';
import Toolbar from './components/Toolbar/Toolbar';
import CodeEditor from './components/CodeEditor/CodeEditor';

const App: React.FC = () => {
  return (
    <div className="app">
      <Menu />
      <Toolbar />
      <CodeEditor /> 
    </div>
  );
};

export default App;

