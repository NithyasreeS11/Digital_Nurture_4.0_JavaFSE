import React, { useState } from 'react';
import BookDetails from './components/BookDetails';
import BlogDetails from './components/BlogDetails';
import CourseDetails from './components/CourseDetails';
import './App.css';

function App() {
  const [view, setView] = useState('book'); // Initial view is BookDetails

  // Using Ternary Operator
  const renderComponentTernary = () => {
    return view === 'book' ? <BookDetails /> :
           view === 'blog' ? <BlogDetails /> :
           <CourseDetails />;
  };

  // Using Switch-Case (Separate function)
  const renderComponentSwitch = () => {
    switch (view) {
      case 'book':
        return <BookDetails />;
      case 'blog':
        return <BlogDetails />;
      case 'course':
        return <CourseDetails />;
      default:
        return <p>No Component Selected</p>;
    }
  };

  // Using Short-circuit && operator
  const renderComponentShortCircuit = () => (
    <div>
      {view === 'book' && <BookDetails />}
      {view === 'blog' && <BlogDetails />}
      {view === 'course' && <CourseDetails />}
    </div>
  );

  return (
    <div className="App">
      <h1>🧠 BloggerApp: Conditional Rendering Demo</h1>

      <div className="buttons">
        <button onClick={() => setView('book')}>Book</button>
        <button onClick={() => setView('blog')}>Blog</button>
        <button onClick={() => setView('course')}>Course</button>
      </div>

      <hr />
      <h3>🔁 Ternary Operator Rendering</h3>
      {renderComponentTernary()}

      <hr />
      <h3>🔁 Switch-Case Rendering</h3>
      {renderComponentSwitch()}

      <hr />
      <h3>🔁 Short-Circuit Rendering</h3>
      {renderComponentShortCircuit()}
    </div>
  );
}

export default App;
