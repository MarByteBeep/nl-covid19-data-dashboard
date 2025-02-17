import React, { forwardRef } from 'react';

const ChevronDown = forwardRef(({ ...rest }, ref) => {
	return (
		<svg
			ref={ref}
			role="img"
			width={18}
			height={11}
			viewBox="0 0 18 11"
			fill="none"
			{...rest}
		>
			<path
				transform="rotate(90, 9, 9)"
				d="M1 17L9 9L1 1"
				stroke="#01689B"
				strokeWidth="2"
				strokeLinecap="round"
			/>
		</svg>
	);
});

ChevronDown.displayName = 'ChevronDown';

export default ChevronDown;
