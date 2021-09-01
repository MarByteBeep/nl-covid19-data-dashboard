import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Vaccine = forwardRef(({ ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      role="img"
      focusable="false"
      width={40}
      height={40}
      viewBox="0 0 40 40"
      fill="currentColor"
      {...rest}
    >
      <path d="M37.1526 9.04229C36.229 8.08808 32.0913 3.81315 31.1678 2.85893C30.1887 1.84744 28.7522 3.17478 29.387 4.35523C30.1258 5.72933 30.523 6.36865 30.523 6.36865L27.1508 9.85272C27.1508 9.85272 27.7243 11.0329 28.7144 13.1006C28.8109 13.3021 28.6972 13.3767 28.6616 13.3936C28.6616 13.3936 23.3544 7.91116 22.2281 6.74744C21.4711 5.9663 19.9478 7.16949 20.6148 8.38861C21.2669 9.5806 22.1925 11.1585 22.1925 11.1585L11.0505 22.6702C10.6858 23.0469 10.4372 23.5268 10.3361 24.0493L9.16673 30.3727L2.5 37.5H4.74612L10.5151 31.7746L16.6541 30.5797C17.1623 30.4761 17.6292 30.2186 17.9955 29.8402L29.135 18.3313C29.135 18.3313 30.6622 19.2876 31.816 19.9614C32.9959 20.6505 34.1605 19.0766 33.4044 18.2946C32.2741 17.1267 30.8835 15.6901 29.4247 14.1828L33.7555 9.70839C33.7555 9.70839 34.3743 10.1187 35.7043 10.8821C36.8469 11.5379 38.1316 10.0538 37.1526 9.04229ZM24.8069 18.954L22.9596 17.0456L22.0361 18.954L23.4214 20.3853L22.0361 21.8166L20.1889 19.9082L19.2653 21.8166L20.6507 23.2479L19.2653 24.6793L17.4181 22.7708L16.4945 24.6793L17.8799 26.1106L16.4945 27.542L13.262 24.2022L23.8832 13.2286L27.1158 16.5684L24.8069 18.954Z" />
    </svg>
  );
});

Vaccine.propTypes = {
  // color: PropTypes.string,
  // size: PropTypes.oneOfType([
  //   PropTypes.string,
  //   PropTypes.number
  // ]),
};

Vaccine.displayName = 'Vaccine';

export default Vaccine;
