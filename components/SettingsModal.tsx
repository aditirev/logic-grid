
import React, { useState } from 'react';
import { TrashIcon, QuestionIcon, EyeIcon, EyeOffIcon, VolumeUpIcon, VolumeOffIcon } from './icons';

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onClearBoard: () => void;
}

const SettingsModal: React.FC<SettingsModalProps> = ({ isOpen, onClose, onClearBoard }) => {
  const [showErrors, setShowErrors] = useState(true);
  const [isMuted, setIsMuted] = useState(false);

  if (!isOpen) return null;

  return (
    <div 
        className="fixed inset-0 bg-black/40 dark:bg-black/60 flex items-center justify-center z-50 transition-opacity"
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-labelledby="settings-title"
    >
      <div 
        className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl w-full max-w-xs m-4 p-6 flex flex-col gap-4"
        onClick={e => e.stopPropagation()}
      >
        <h2 id="settings-title" className="text-xl font-bold text-center text-slate-800 dark:text-white">Game Settings</h2>
        
        <button
          onClick={() => { onClearBoard(); onClose(); }}
          className="flex items-center justify-between w-full p-3 rounded-lg text-slate-700 dark:text-slate-200 hover:bg-gray-100 dark:hover:bg-slate-700"
        >
          <span>Clear Board</span>
          <TrashIcon />
        </button>

        <div className="flex items-center justify-between w-full p-3 rounded-lg">
            <span>Show Error Indicators</span>
            <button onClick={() => setShowErrors(!showErrors)} className="p-1">
                { showErrors ? <EyeIcon /> : <EyeOffIcon /> }
            </button>
        </div>

        <div className="flex items-center justify-between w-full p-3 rounded-lg">
            <span>Mute Sounds</span>
            <button onClick={() => setIsMuted(!isMuted)} className="p-1">
                { !isMuted ? <VolumeUpIcon /> : <VolumeOffIcon /> }
            </button>
        </div>

        <button
          className="flex items-center justify-between w-full p-3 rounded-lg text-slate-700 dark:text-slate-200 hover:bg-gray-100 dark:hover:bg-slate-700"
        >
          <span>How to Play</span>
          <QuestionIcon />
        </button>
      </div>
    </div>
  );
};

export default SettingsModal;
