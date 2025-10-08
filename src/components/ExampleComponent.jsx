import React from 'react';
import { motion } from 'framer-motion';

const ExampleComponent = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="container mt-5"
    >
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow">
            <div className="card-body text-center">
              <h1 className="card-title text-primary mb-4">
                🎉 Quartic Clone Project
              </h1>
              <p className="card-text lead">
                Your React.js project is successfully set up with:
              </p>
              <ul className="list-unstyled">
                <li className="mb-2">✅ Vite + React</li>
                <li className="mb-2">✅ React Router DOM</li>
                <li className="mb-2">✅ Framer Motion</li>
                <li className="mb-2">✅ Bootstrap</li>
                <li className="mb-2">✅ Tailwind CSS</li>
              </ul>
              <div className="mt-4">
                <button className="btn btn-primary me-2">
                  Get Started
                </button>
                <button className="btn btn-outline-secondary">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ExampleComponent;
