import "./LaughingImgs.css";

import {
  funny_1,
  funny_2,
  funny_3,
  funny_4,
  funny_5,
  funny_6,
  funny_7,
  funny_8,
  funny_9,
  funny_10,
  funny_11,
  funny_12,
  funny_13,
} from "./../utils/utils";

const LAUGHING_IMGS = [
  funny_1,
  funny_2,
  funny_3,
  funny_4,
  funny_5,
  funny_6,
  funny_7,
  funny_8,
  funny_9,
  funny_10,
  funny_11,
  funny_12,
  funny_13,
];

const LaughingImgs = ({ imgNumber }) => {
  return (
    <div>
      <img
        src={LAUGHING_IMGS[imgNumber]}
        alt="Funny"
        className="img-container"
      />
    </div>
  );
};

export default LaughingImgs;
