import React from 'react';
import HistoryText from './HistoryText';
import HistoryTitle from './HistoryTitle';

const CityHistory = () => {
  return (
    <div>
      <HistoryTitle className="history__title">История города</HistoryTitle>
      <HistoryText />
    </div>
  );
};

export default CityHistory;
