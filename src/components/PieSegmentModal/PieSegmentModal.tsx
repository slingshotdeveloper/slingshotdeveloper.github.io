import React, { useState } from 'react';
import styles from './PieSegmentModal.module.scss';
import { useMediaQuery } from '../../utils/useMediaQuery';

interface PieSegmentModalProps {
  name: string;
  info: string;
  skillLevel: number;
  closeModal?: () => void;
}

const PieSegmentModal: React.FC<PieSegmentModalProps> = ({
  name,
  info,
  skillLevel,
  closeModal
}) => {
  const isMobile = useMediaQuery({ 'max-width': 840 });

  return (
    <>
      {!isMobile ? (
        <div className={styles.segment_modal_container}>
          <h4 className={styles.segment_title}>{name}</h4>
          <div className={styles.skill_level}>
            <div className={styles.skill_level_container}>
              <div
                style={{
                  width: `${skillLevel * 10}%`,
                  height: '15px',
                  backgroundColor: 'rgba(2, 254, 255, 0.35)',
                }}
              />
            </div>
            <h5 className={styles.skill_level_title}>Skill Level</h5>
          </div>

          <div className={styles.separator} />
          <p className={styles.segment_info}>{info}</p>
        </div>
      ) : (
        <div className={styles.segment_modal_container}>
          <h4 className={styles.segment_title}>{name}</h4>
          <div className={styles.close_button} onClick={() => closeModal()}>
            <div className={styles.close_button_line1} />
            <div className={styles.close_button_line2} />
          </div>
          <div className={styles.skill_level}>
            <div className={styles.skill_level_container}>
              <div
                style={{
                  width: `${skillLevel * 10}%`,
                  height: '15px',
                  backgroundColor: 'rgba(2, 254, 255, 0.35)',
                }}
              />
            </div>
            <h5 className={styles.skill_level_title}>Skill Level</h5>
          </div>

          <div className={styles.separator} />
          <p className={styles.segment_info}>{info}</p>
        </div>
      )}
    </>
  );
};

export default PieSegmentModal;
