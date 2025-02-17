import React, { forwardRef } from 'react';

const Experimenteel = forwardRef(({ ...rest }, ref) => {
	return (
		<svg
			ref={ref}
			role="img"
			focusable="false"
			viewBox="0 0 36 36"
			fill="none"
			{...rest}
		>
			<path fill="transparent" d="M0 0h36v36H0z" />
			<path
				d="M24.422 3.5H11.578c-.686.001-.848 1.22-.01 1.453.471.13 1.034.274 1.432.374V27.5a5 5 0 0010 0V5.327c.398-.1.96-.244 1.432-.374.838-.233.676-1.452-.01-1.453zM21 13.5h-5v14s-.02 1.063 1.041 1.752c.69.447 1.825.722 2.752.56.057.056.006.146-.084.216a2.955 2.955 0 01-1.679.521h-.06A2.97 2.97 0 0115 27.58V5.5h6v8z"
				fill="currentColor"
			/>
			<path
				d="M17 12a1 1 0 100-2 1 1 0 000 2zM19 9a1 1 0 100-2 1 1 0 000 2z"
				fill="currentColor"
			/>
		</svg>
	);
});

Experimenteel.displayName = 'Experimenteel';

export default Experimenteel;
