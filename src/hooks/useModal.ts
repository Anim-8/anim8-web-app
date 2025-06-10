import { useState } from 'react';

const useModal = () => {
    const [open, setOpen] = useState(false);
    const [source, setSource] = useState<string | null>(null);

    const openModal = (sourceId: string) => {
        setSource(sourceId);
        setOpen(true);
    };

    const closeModal = () => {
        setOpen(false);
        setSource(null);
    };

    return { open, source, openModal, closeModal };
}

export default useModal