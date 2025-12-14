import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbtack, faPlus } from '@fortawesome/free-solid-svg-icons';

const ThumbtackIcon = ({ fixed }) => (
  <FontAwesomeIcon icon={fixed ? faThumbtack : faPlus} />
);

export default ThumbtackIcon;
