// components/leads/useLeadModal.ts
import { useState } from 'react';

export const useLeadModal = () => {
  const [open, setOpen] = useState(false);
  const [source, setSource] = useState<string | null>(null);

  const triggerModal = (sourceId: string) => {
    setSource(sourceId);
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
    setSource(null);
  };

  return { open, source, triggerModal, closeModal };
};
