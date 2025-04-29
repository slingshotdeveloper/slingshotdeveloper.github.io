import React, { ChangeEvent, FormEvent, useEffect, useRef, useState } from 'react';
import axiosInstance from '../../utils/axiosInstance';
import styles from './ContactModal.module.scss';
import { ResponseModal } from './components/ResponseModal/ResponseModal';
import DOMPurify from 'dompurify';

interface ContactModalProps {
  isOpen: boolean;
  toggleContactModal: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  toggleContactModal,
}) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState<'error' | 'success' | ''>('');
  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    const sanitizedValue = DOMPurify.sanitize(value, {
      ALLOWED_TAGS: [], // Disallow all HTML tags
      ALLOWED_ATTR: [], // Disallow all attributes
    });

    switch (name) {
      case 'firstName': {
        const nameRegex = /^[a-zA-Z\s]*$/;
        if (!nameRegex.test(sanitizedValue)) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            firstName: 'Only letters and spaces allowed',
          }));
          return;
        }
        setFirstName(sanitizedValue);
        if (sanitizedValue.trim() !== '')
          setErrors((prevErrors) => ({ ...prevErrors, firstName: '' }));
        break;
      }
      case 'lastName': {
        const nameRegex = /^[a-zA-Z\s]*$/;
        if (!nameRegex.test(sanitizedValue)) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            lastName: 'Only letters and spaces allowed',
          }));
          return;
        }
        setLastName(sanitizedValue);
        if (sanitizedValue.trim() !== '')
          setErrors((prevErrors) => ({ ...prevErrors, lastName: '' }));
        break;
      }
      case 'email': {
        setEmail(sanitizedValue);
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailRegex.test(sanitizedValue))
          setErrors((prevErrors) => ({ ...prevErrors, email: '' }));
        break;
      }
      case 'subject': {
        setSubject(sanitizedValue);
        if (sanitizedValue.trim() !== '')
          setErrors((prevErrors) => ({ ...prevErrors, subject: '' }));
        break;
      }
      case 'message': {
        setMessage(sanitizedValue);
        if (sanitizedValue.trim() !== '')
          setErrors((prevErrors) => ({ ...prevErrors, message: '' }));
        break;
      }
    }
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const newErrors = {
      firstName: firstName.trim() === '' ? 'First Name is required' : '',
      lastName: lastName.trim() === '' ? 'Last Name is required' : '',
      email: email.trim() === '' ? 'Email is required' : '',
      subject: subject.trim() === '' ? 'Subject is required' : '',
      message: message.trim() === '' ? 'Message is required' : '',
    };

    if (!newErrors.email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) newErrors.email = 'Valid Email is required';
    }

    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some((error) => error);

    if (!hasErrors) {
      setLoading(true);

      try {
        const response = await axiosInstance.post('/contact/send', {
          firstName,
          lastName,
          email,
          subject,
          message,
        });

        if (response.status === 200) {
          setResponseMessage('success');
          setLoading(false);
          setTimeout(() => {
            clearValues();
            toggleContactModal();
            setResponseMessage('');
          }, 3500);
        }
      } catch (error) {
        console.error('Error sending email:', error);
        setLoading(false);
        setResponseMessage('error');
      }
    }
  };

  const handleClose = () => {
    toggleContactModal();
    clearValues();
    clearErrors();
  };

  const clearValues = () => {
    setFirstName('');
    setLastName('');
    setEmail('');
    setSubject('');
    setMessage('');
  };

  const clearErrors = () => {
    setErrors({
      firstName: '',
      lastName: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  const handleCloseResponseModal = () => {
    setResponseMessage('');
  };

  return (
    <div
      className={`${styles.contact_container} ${isOpen && styles.contact_container_open}`}
    >
      <div className={styles.close_button} onClick={handleClose}>
        <div className={styles.close_button_line1} />
        <div className={styles.close_button_line2} />
      </div>
      <h2>CONTACT ME</h2>
      <form className={styles.contact_form} onSubmit={handleSubmit}>
        <div className={styles.name_fields}>
          <label className={errors.firstName && styles.error}>
            First Name:
            <input
              type="text"
              name="firstName"
              value={firstName}
              maxLength={40}
              onChange={handleChange}
            />
            {errors.firstName && (
              <span className={styles.error_message}>{errors.firstName}</span>
            )}
          </label>
          <label className={errors.lastName && styles.error}>
            Last Name:
            <input
              type="text"
              name="lastName"
              value={lastName}
              maxLength={40}
              onChange={handleChange}
            />
            {errors.lastName && (
              <span className={styles.error_message}>{errors.lastName}</span>
            )}
          </label>
        </div>
        <div className={styles.name_fields}>
          <label className={errors.email && styles.error}>
            Email:
            <input
              type="text"
              name="email"
              value={email}
              maxLength={254}
              onChange={handleChange}
            />
            {errors.email && (
              <span className={styles.error_message}>{errors.email}</span>
            )}
          </label>
          <label className={errors.subject && styles.error}>
            Subject:
            <input
              type="text"
              name="subject"
              value={subject}
              maxLength={78}
              onChange={handleChange}
            />
            {errors.subject && (
              <span className={styles.error_message}>{errors.subject}</span>
            )}
          </label>
        </div>
        <div className={styles.message_field}>
          <label className={errors.message && styles.error}>
            Message:
            <textarea
              name="message"
              value={message}
              maxLength={750}
              onChange={handleChange}
            />
            {errors.message && (
              <span className={styles.error_message}>{errors.message}</span>
            )}
          </label>
        </div>
        <button
          disabled={loading || responseMessage === 'success'}
        >
          {loading ? 'Sending...' : responseMessage === 'success' ? 'Sent ✔' : 'Submit'}
        </button>
      </form>
      <ResponseModal
        isOpen={responseMessage !== ''}
        type={responseMessage}
        onClose={handleCloseResponseModal}
      />
    </div>
  );
};