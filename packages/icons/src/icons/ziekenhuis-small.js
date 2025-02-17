import React, { forwardRef } from 'react';

const ZiekenhuisSmall = forwardRef(({ ...rest }, ref) => {
	return (
		<svg
			ref={ref}
			role="img"
			focusable="false"
			width={11}
			height={18}
			fill="none"
			{...rest}
		>
			<path
				d="M3.312 3.194h1.106v1.162c0 .16.124.29.276.29H5.8c.152 0 .276-.13.276-.29V3.194h1.106c.152 0 .276-.13.276-.29V1.742c0-.16-.124-.29-.276-.29H6.076V.29C6.076.13 5.952 0 5.8 0H4.694a.284.284 0 0 0-.276.29v1.162H3.312a.284.284 0 0 0-.276.29v1.162c0 .16.124.29.276.29zM10.226 5.223H.277a.284.284 0 0 0-.276.29V18h2.764v-2.323l1.105-.29V18h2.764v-2.323l1.106-.29V18h2.764V5.513c0-.16-.124-.29-.277-.29zM4.422 7.255h1.659v1.743H4.422V7.255zm0 2.904h1.659v1.743H4.422V10.16zM1.658 7.255h1.659v1.743H1.658V7.255zm0 2.904h1.659v1.743H1.658V10.16zm6.634 4.647h-6.08v-1.162h6.08v1.162zm.553-2.904H7.186V10.16h1.659v1.742zm0-2.904H7.186V7.255h1.659v1.743z"
				fill="currentColor"
			/>
		</svg>
	);
});

ZiekenhuisSmall.displayName = 'ZiekenhuisSmall';

export default ZiekenhuisSmall;
