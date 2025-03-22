import { motion } from 'framer-motion';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // For now, just log the form data
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
    alert('Message sent successfully!');
  };

  return (
    <div className="min-h-screen pt-32 px-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-6xl mx-auto"
      >
        <h1 className="text-[6rem] md:text-[8rem] font-light leading-none tracking-tighter text-black mb-12">
          GET IN TOUCH
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
          <div>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full p-4 bg-gray-100 border-none"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full p-4 bg-gray-100 border-none"
                  required
                />
              </div>
              <div>
                <textarea
                  placeholder="Message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full p-4 bg-gray-100 border-none h-32"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full p-4 bg-black text-white hover:bg-gray-900 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-light mb-2">Email</h3>
              <p className="text-gray-600">contact@fakenewsguard.com</p>
            </div>
            <div>
              <h3 className="text-xl font-light mb-2">Address</h3>
              <p className="text-gray-600">
                442 AI Avenue,<br />
                Digital District,<br />
                Truth City, TC 10101
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}