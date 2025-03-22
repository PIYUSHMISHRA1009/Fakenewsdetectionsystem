import { motion } from 'framer-motion';

export function About() {
  return (
    <div className="min-h-screen pt-32 px-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-6xl mx-auto"
      >
        <h1 className="text-[6rem] md:text-[8rem] font-light leading-none tracking-tighter text-black mb-12">
          OUR PASSION
          <br />
          HAS NO END
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 mt-24">
          <div>
            <p className="text-lg text-gray-600 leading-relaxed">
              For FakeNewsGuard, the moment of truth came in 2023. That year, 
              our team of AI researchers and journalists joined forces to tackle 
              misinformation at a scale and complexity that would have 
              stretched the capabilities of traditional fact-checking methods.
            </p>
          </div>
          <div>
            <p className="text-lg text-gray-600 leading-relaxed">
              Today, our team consists of a diverse group of AI engineers, 
              data scientists, journalists, and truth advocates who all hold 
              the common belief that technology holds the power to foster truth 
              and transparency in our digital information ecosystem.
            </p>
          </div>
        </div>

        <div className="mt-24">
          <img 
            src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80"
            alt="Our team at work"
            className="w-full h-[600px] object-cover"
          />
        </div>
      </motion.div>
    </div>
  );
}