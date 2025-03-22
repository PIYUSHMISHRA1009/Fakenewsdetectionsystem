import React, { useState } from 'react';
import { Search, Loader2 } from 'lucide-react';

export function SearchBar() {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [url, setUrl] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsAnalyzing(true);
    // Simulate analysis
    setTimeout(() => setIsAnalyzing(false), 2000);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-3xl">
      <div className="relative">
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Enter news article URL or paste content..."
          className="w-full px-4 py-3 pl-12 pr-20 text-gray-700 bg-white border-2 border-black rounded-none focus:outline-none focus:border-gray-600 transition-colors"
        />
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        <button
          type="submit"
          disabled={isAnalyzing}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 px-4 py-1.5 bg-black text-white hover:bg-gray-900 transition-colors disabled:bg-gray-400"
        >
          {isAnalyzing ? (
            <Loader2 className="animate-spin" size={20} />
          ) : (
            'Analyze'
          )}
        </button>
      </div>
    </form>
  );
}