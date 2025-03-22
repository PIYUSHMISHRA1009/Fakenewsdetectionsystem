import { motion } from 'framer-motion';
import { SearchBar } from './SearchBar';

export function Hero() {
  return (
    <div className="min-h-screen pt-32 px-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="max-w-6xl mx-auto"
      >
        <h1 className="text-[8rem] md:text-[12rem] font-light leading-none tracking-tighter text-black">
          MORE LIKE A
        </h1>
        <h1 className="text-[8rem] md:text-[12rem] font-light leading-none tracking-tighter text-black">
          GUARDIAN
        </h1>
        
        <div className="mt-12 max-w-2xl">
          <p className="text-lg text-gray-600 leading-relaxed">
            The approach centered on enhancing truth and credibility with 
            sentimental significance and modern societal relevance, encapsulated in 
            the notion 'Enriching Quality with Intelligence'.
          </p>
        </div>

        <div className="mt-12">
          <SearchBar />
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-12"
        >
          <div>
            <h3 className="text-4xl font-light mb-4">99.8%</h3>
            <p className="text-sm text-gray-600">Accuracy in fact verification</p>
          </div>
          <div>
            <h3 className="text-4xl font-light mb-4">2M+</h3>
            <p className="text-sm text-gray-600">Articles analyzed daily</p>
          </div>
          <div>
            <h3 className="text-4xl font-light mb-4">24/7</h3>
            <p className="text-sm text-gray-600">Real-time monitoring</p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}