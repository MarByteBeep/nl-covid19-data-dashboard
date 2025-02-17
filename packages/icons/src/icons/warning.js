import React, { forwardRef } from 'react';

const Warning = forwardRef(({ ...rest }, ref) => {
	return (
		<svg
			ref={ref}
			role="img"
			focusable="false"
			width={25}
			height={25}
			fill="#8C8C8C"
			{...rest}
		>
			<path d="M22.884 19.717L13.428 3.7a1.171 1.171 0 00-1.009-.576h-.005c-.416.002-.8.224-1.009.584L2.111 19.724a1.173 1.173 0 001.014 1.76h18.75a1.172 1.172 0 001.009-1.767zM5.16 19.14l7.268-12.524 7.394 12.524H5.16z" />
			<path d="M12.493 16.023c-.592 0-.9.427-.9.972 0 .616.332.948.912.948.593 0 .901-.415.901-.948 0-.628-.332-.972-.913-.972zM11.77 15.625l1.446-.038V13.68l.137-3.801-1.582.137v5.609z" />
		</svg>
	);
});

Warning.displayName = 'Warning';

export default Warning;
