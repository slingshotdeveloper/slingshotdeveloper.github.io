import React, { useState } from 'react';
import styles from './PieSegmentModal.module.scss';

interface PieSegmentModalProps {
  name: string;
  info: string;
  skillLevel: number;
}

const PieSegmentModal: React.FC<PieSegmentModalProps> = ({
  name,
  info,
  skillLevel,
}) => {
  return (
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
  );
};

export default PieSegmentModal;
