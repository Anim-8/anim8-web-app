import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { submitLead } from '../../api/leadApi';
import Button from '../ui/Button';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  source: string | null;
};

const LeadModal: React.FC<Props> = ({ isOpen, onClose, source }) => {
  const [form, setForm] = useState({
    email: '',
    name: '',
    company: '',
    message: '',
    location: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const payload = {
      ...form,
      source: source ?? 'unknown',
      tags: ['modal-form'],
    };

    try {
      await submitLead(payload);
      console.log('✅ Lead submitted:', payload);
      setSubmitted(true);
      setTimeout(onClose, 4000);
    } catch (err) {
      console.error('❌ Lead submission failed:', err);
      alert('Something went wrong. Please try again later.');
    }
  };

  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const coords = `${pos.coords.latitude},${pos.coords.longitude}`;
          setForm((prev) => ({ ...prev, location: coords }));
        },
        (err) => console.warn('Geolocation error', err)
      );
    }
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="relative z-10 w-full max-w-md p-[2px] rounded-2xl bg-gradient-to-br from-cyan-500/40 to-blue-500/30"
      >
        <div className="bg-white/5 backdrop-blur-xl text-white rounded-[inherit] p-8 pt-12 border border-white/10 relative">
          <Button
            onClick={onClose}
            className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white text-black font-bold text-sm hover:bg-gray-200 transition"
            aria-label="Close modal"
          >
            &times;
          </Button>

          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                className="space-y-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <motion.h2
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-2xl font-semibold text-white"
                >
                  Let’s Connect
                </motion.h2>

                {['email', 'name', 'company', 'message'].map((field, i) => {
                  const isTextArea = field === 'message';
                  const Component = isTextArea ? 'textarea' : 'input';
                  return (
                    <motion.div
                      key={field}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.15 + i * 0.05 }}
                    >
                      <Component
                        name={field}
                        placeholder={
                          field === 'email'
                            ? 'Email*'
                            : field.charAt(0).toUpperCase() + field.slice(1)
                        }
                        value={form[field as keyof typeof form]}
                        onChange={handleChange}
                        rows={isTextArea ? 4 : undefined}
                        required={field === 'email'}
                        className={`w-full bg-transparent border border-white/20 ${
                          isTextArea ? 'rounded-xl' : 'rounded-full'
                        } px-4 py-2 text-sm placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 transition-all duration-300 resize-none`}
                      />
                    </motion.div>
                  );
                })}

                <motion.button
                  type="submit"
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-3 px-6 rounded-full transition duration-200 cursor-pointer"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  Submit
                </motion.button>
              </motion.form>
            ) : (
              <motion.div
                key="thankyou"
                className="text-center space-y-4"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl font-semibold">Thank you 🙏</h2>
                <p className="text-white/80">
                  We’ve received your message and will get back to you shortly.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};

export default LeadModal;
