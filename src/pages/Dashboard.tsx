import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, AlertCircle, CheckCircle, Loader2 } from 'lucide-react';

export function Dashboard() {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<{
    prediction: 'REAL' | 'FAKE' | null;
    confidence: number;
    relatedArticles: Array<{ title: string; url: string; source: string }>;
  } | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsAnalyzing(true);
    
    // Simulate API call
    setTimeout(() => {
      setResult({
        prediction: Math.random() > 0.5 ? 'REAL' : 'FAKE',
        confidence: Math.random() * 100,
        relatedArticles: [
          {
            title: "Similar news article 1",
            url: "#",
            source: "News Source 1"
          },
          {
            title: "Similar news article 2",
            url: "#",
            source: "News Source 2"
          }
        ]
      });
      setIsAnalyzing(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen pt-32 px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-6xl mx-auto"
      >
        <h1 className="text-[4rem] md:text-[6rem] font-light leading-none tracking-tighter text-black mb-8">
          CHECK THE
          <br />
          TRUTH
        </h1>

        <div className="mt-12 max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <textarea
                placeholder="Enter news article or headline..."
                className="w-full p-6 bg-white border-2 border-black rounded-none min-h-[200px] focus:outline-none focus:border-gray-600 transition-colors"
                required
              />
            </div>
            <button
              type="submit"
              disabled={isAnalyzing}
              className="w-full p-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {isAnalyzing ? (
                <Loader2 className="animate-spin mx-auto" size={24} />
              ) : (
                'Check Authenticity'
              )}
            </button>
          </form>

          {result && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-12 space-y-8"
            >
              <div className="bg-white p-8 border-2 border-black">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    {result.prediction === 'REAL' ? (
                      <CheckCircle className="text-green-500" size={32} />
                    ) : (
                      <AlertCircle className="text-red-500" size={32} />
                    )}
                    <h2 className="text-3xl font-light">
                      This news appears to be{' '}
                      <span className={result.prediction === 'REAL' ? 'text-green-500' : 'text-red-500'}>
                        {result.prediction.toLowerCase()}
                      </span>
                    </h2>
                  </div>
                  <div className="text-right">
                    <div className="text-4xl font-light">
                      {result.confidence.toFixed(1)}%
                    </div>
                    <div className="text-sm text-gray-500">confidence</div>
                  </div>
                </div>

                <div className="border-t-2 border-black pt-6">
                  <h3 className="text-xl font-light mb-4">Related Articles</h3>
                  <div className="space-y-4">
                    {result.relatedArticles.map((article, index) => (
                      <a
                        key={index}
                        href={article.url}
                        className="block p-4 bg-gray-50 hover:bg-gray-100 transition-colors"
                      >
                        <div className="font-medium">{article.title}</div>
                        <div className="text-sm text-gray-500">{article.source}</div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>

        <div className="mt-24">
          <h2 className="text-4xl font-light mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Input",
                description: "Enter any news article or headline you want to verify",
                icon: <Search size={32} />
              },
              {
                title: "Analysis",
                description: "Our AI model analyzes the content using advanced NLP techniques",
                icon: <Loader2 size={32} />
              },
              {
                title: "Results",
                description: "Get instant results with confidence scores and related articles",
                icon: <CheckCircle size={32} />
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="p-8 bg-white border-2 border-black hover:bg-gray-50 transition-colors"
              >
                <div className="mb-4">{step.icon}</div>
                <h3 className="text-xl font-medium mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}