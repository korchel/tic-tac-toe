import clsx from "clsx";

import CloseIcon from './close.svg';
import { createPortal } from "react-dom";

export const ModalComponent = ({ width = 'md', className, children, isOpen = false, onClose}) => {
  if (!isOpen) {
    return null;
  }

  const handleBackDropClick = (event) => {
    if (event.target.closest('[data-id=modal]')) return;
    onClose();
  };

  const modal = (
    <div
      onClick={handleBackDropClick}
      className={clsx(
      "fixed inset-0 bg-slate-900/60 backdrop-blur pt-10 pb-10 overflow-y-auto",
      className
    )}>
      <div
        data-id="modal"
        className={clsx("bg-white rounded-lg min-h-[320px] mx-auto relative flex flex-col",
        {
          md: "max-w-[640px] w-full",
          full: "mx-5"
        }[width]
      )}>
        {children}
        <button
          onClick={onClose}
          className="
            w-8 h-8 rounded flex items-center justify-center
          bg-white/10 hover:bg-white/40 transition-colors
            absolute top-0 left-[calc(100%+12px)]
          "
        >
          <CloseIcon className="w-4 h-4 text-white" />
        </button>
      </div>
    </div>
  );
  return createPortal(modal, document.getElementById('modals'));
};

ModalComponent.Header = ({ children, className }) => {
  console.log('!!!');
  return (
    <div className={clsx(className, 'px-6 pt-6 pb-4 text-2xl')}>
      {children}
    </div>
  );
};

ModalComponent.Body = function ModalBody({ children, className }) {
  return (
    <div className={clsx(className, 'px-6')}>
      {children}
    </div>
  );
};

ModalComponent.Footer = function ModalFooter({ children, className }) {
  return (
    <div className={clsx(className, 'mt-auto p-6 flex gap-4 justify-end')}>
      {children}
    </div>
  );
};