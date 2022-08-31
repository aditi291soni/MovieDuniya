import React from 'react';
import Single from '../Single';

const TvShow = ({popular,setpopular}) => {
  return (
    <div>
      <Single popular={popular} setpopular={setpopular} />
    </div>
  );
}

export default TvShow;
