import React, { forwardRef } from 'react';

const Chevron = forwardRef(({ ...rest }, ref) => {
	return (
		<svg
			ref={ref}
			role="img"
			focusable="false"
			width={11}
			height={18}
			viewBox="0 0 11 18"
			fill="none"
			{...rest}
		>
			<path
				d="M1 17L9 9L1 1"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
			/>
		</svg>
	);
});

Chevron.displayName = 'Chevron';

export default Chevron;
