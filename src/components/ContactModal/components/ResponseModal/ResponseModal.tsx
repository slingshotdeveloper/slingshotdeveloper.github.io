import React from 'react';
import styles from './ResponseModal.module.scss';

interface ResponseModalProps {
  isOpen: boolean;
  type: 'error' | 'success' | '';
  onClose: () => void;
}

export const ResponseModal: React.FC<ResponseModalProps> = ({
  isOpen,
  type,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modalBackdrop}>
      <div
        className={`${styles.modal} ${type === 'error' ? styles.error : styles.success}`}
      >
        <div className={styles.modalHeader}>
          <h2>{type === 'error' ? 'Message Failed' : 'Message Sent'}</h2>
        </div>
        <div className={styles.modalBody}>
          {type === 'error' ? (
            <p>Failed to send message. Please try again later.</p>
          ) : type === 'success' ? (
            <p>Message sent! A confirmation email has been sent to your inbox.</p>
          ) : (
            ''
          )}
        </div>
        <div className={styles.modalFooter}>
          {type === 'error' && <button onClick={onClose}>Close</button>}
        </div>
      </div>
    </div>
  );
};
