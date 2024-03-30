import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm">
          <img src="data:image/png;base64,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" alt="Python Objects" className="mb-4" />
          <h2 className="text-xl font-bold mb-2">Python Objects 101: How to</h2>
          <p className="text-gray-600">Learn the fundamentals of Python objects.</p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm">
          <img src="data:image/jpeg;base64,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" alt="Machine Learning" className="mb-4" />
          <h2 className="text-xl font-bold mb-2">Machine Learning Must-Know</h2>
          <p className="text-gray-600">Explore essential machine learning concepts.</p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm">
          <img src="data:image/jpeg;base64,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" alt="NLP" className="mb-4" />
          <h2 className="text-xl font-bold mb-2">Unlocking the Power of NLP</h2>
          <p className="text-gray-600">Discover the world of natural language processing.</p>
        </div>
      </div>
    </div>
  );
};

const FullStackDevelopment = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-8">Full Stack Development</h1>
      <p className="text-gray-600 mb-4">This is the Full Stack Development route.</p>
    </div>
  );
};

const DataScience = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-8">Data Science</h1>
      <p className="text-gray-600 mb-4">This is the Data Science route.</p>
    </div>
  );
};

const CyberSecurity = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-8">Cyber Security</h1>
      <p className="text-gray-600 mb-4">This is the Cyber Security route.</p>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <div className="bg-gray-100 min-h-screen">
        <nav className="bg-green-500 py-4">
          <div className="container mx-auto flex justify-between items-center px-4">
            <div className="text-white font-bold">AI+</div>
            <ul className="flex space-x-4">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? 'text-white underline underline-offset-4'
                      : 'text-white hover:underline'
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/full-stack-development"
                  className={({ isActive }) =>
                    isActive
                      ? 'text-white underline underline-offset-4'
                      : 'text-white hover:underline'
                  }
                >
                  Full Stack Development
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/data-science"
                  className={({ isActive }) =>
                    isActive
                      ? 'text-white underline underline-offset-4'
                      : 'text-white hover:underline'
                  }
                >
                  Data Science
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/cyber-security"
                  className={({ isActive }) =>
                    isActive
                      ? 'text-white underline underline-offset-4'
                      : 'text-white hover:underline'
                  }
                >
                  Cyber Security
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/full-stack-development" element={<FullStackDevelopment />} />
          <Route path="/data-science" element={<DataScience />} />
          <Route path="/cyber-security" element={<CyberSecurity />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;