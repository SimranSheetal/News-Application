import React from "react";

const World = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-blue-700 mb-4">World News</h1>
      <p className="text-gray-700 mb-6">
        Stay updated with the latest global news, headlines, and insights from around the world.
      </p>

      <div className="space-y-6">
        {/* Example articles - you can replace these with dynamic content */}
        <article className="border-b pb-4">
          <h2 className="text-xl font-semibold text-gray-800">Global Leaders Meet for Climate Summit</h2>
          <p className="text-gray-600">
            Leaders from over 100 countries have gathered to discuss actionable climate goals.
          </p>
        </article>

        <article className="border-b pb-4">
          <h2 className="text-xl font-semibold text-gray-800">Economic Shifts Across Europe</h2>
          <p className="text-gray-600">
            Inflation and energy prices continue to impact economic growth in the Eurozone.
          </p>
        </article>

        <article>
          <h2 className="text-xl font-semibold text-gray-800">New Technology Bridges Language Gaps</h2>
          <p className="text-gray-600">
            AI-driven tools are transforming global communication, enabling real-time translation across dozens of languages.
          </p>
        </article>
      </div>
    </div>
  );
};

export default World;
