import React from 'react';
export default function About() {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 text-gray-800 px-6 py-12">
        <h1 className="mt-16 text-5xl font-bold mb-10 text-blue-600 animate-bounce">About This Project</h1>
        <div className="max-w-3xl bg-white shadow-xl rounded-lg p-8 space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-2">Introduction</h2>
            <p className="text-lg leading-relaxed">
              This application is a responsive and interactive note-taking platform built to help users stay organized and productive.
              It provides a minimalist, distraction-free interface while offering robust capabilities like note editing, UI state management, and the potential for cloud storage.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">Features</h2>
            <ul className="list-disc list-inside text-lg space-y-1">
              <li>Create and manage unlimited notes</li>
              <li>Real-time editing and responsive layout</li>
              <li>Keyboard shortcuts and interactive animations</li>
              <li>Expandable architecture for future integrations like Firebase or Google Cloud</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">Technologies Used</h2>
            <p className="text-lg leading-relaxed">
              Built using <strong>React</strong> for component-based UI architecture and <strong>Tailwind CSS</strong> for rapid and responsive styling.
              The project is fully modular, making it easy to scale and maintain.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">Purpose</h2>
            <p className="text-lg leading-relaxed">
              The goal of this project is to demonstrate proficiency in front-end development using modern tools,
              while also creating something useful that could evolve into a personal productivity tool or even a public web app.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">About the Developer</h2>
            <p className="text-lg leading-relaxed text-gray-700">
              Created by <strong>Abhinay Siraparapu</strong>, a passionate developer currently studying AI and always eager to explore new technologies and build meaningful tools.
            </p>
          </section>
        </div>
      </div>
    );
}