import React, { forwardRef } from 'react';

const Download = forwardRef(({ ...rest }, ref) => {
	return (
		<svg
			ref={ref}
			role="img"
			focusable="false"
			width={24}
			height={24}
			viewBox="0 0 24 24"
			{...rest}
		>
			<path
				d="M18 17v2H6v-2H3v4a1 1 0 001 1h16a1 1 0 001-1v-4h-3z"
				fill="currentColor"
			/>
			<path
				d="M10.941 16.476a1.354 1.354 0 002.118 0l5.782-7.233a1.354 1.354 0 00-1.776-1.995L14 9.16V3.42c0-1.088-.94-1.411-1.999-1.411-1.061 0-2.001.323-2.001 1.41v5.742L6.936 7.248A1.354 1.354 0 005.16 9.244l5.781 7.232z"
				fill="currentColor"
			/>
		</svg>
	);
});

Download.displayName = 'Download';

export default Download;
