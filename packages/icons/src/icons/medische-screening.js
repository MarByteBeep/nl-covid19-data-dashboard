import React, { forwardRef } from 'react';

const MedischeScreening = forwardRef(({ ...rest }, ref) => {
	return (
		<svg
			ref={ref}
			role="img"
			focusable="false"
			viewBox="0 0 48 48"
			{...rest}
		>
			<rect x="-8" y="-7" width="64" height="64" fill="none" />
			<rect x="-8" y="-7" width="64" height="64" fill="none" />
			<path d="M22.45,33.94a11.39,11.39,0,0,1,22.62-1.88h0A1.88,1.88,0,0,0,47,30.18V17a1.88,1.88,0,0,0-1.88-1.88H32V2A1.88,1.88,0,0,0,30.08.09H16.92A1.88,1.88,0,0,0,15,2V15.14H1.88A1.88,1.88,0,0,0,0,17V30.18a1.88,1.88,0,0,0,1.88,1.88H15V45.22a1.88,1.88,0,0,0,1.88,1.88H30.08A1.88,1.88,0,0,0,32,45.22v-.06A11.39,11.39,0,0,1,22.45,33.94Z" />
			<path d="M47.43,43.17,42.8,38.55a8.82,8.82,0,0,1-2.57,1.86c-.59.24-.86.2-1,0a8.67,8.67,0,1,0-1.78,1.13l5.78,5.77c1.1,1.11,2.41.46,3.51-.64S48.53,44.28,47.43,43.17ZM33.84,38.73a4.8,4.8,0,1,1,4.79-4.79A4.79,4.79,0,0,1,33.84,38.73Z" />
		</svg>
	);
});

MedischeScreening.displayName = 'MedischeScreening';

export default MedischeScreening;
