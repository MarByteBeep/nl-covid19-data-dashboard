import React, { forwardRef } from 'react';

const Vliegen = forwardRef(({ ...rest }, ref) => {
	return (
		<svg ref={ref} width={37} height={36} fill="none" {...rest}>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="m15.994 5.762.687-.295c1.835-.787 2.945-.186 3.021.31.084.534-.642 1.263-1.82 1.768l-1.802.771-1.09.467-3.316 4.987a.363.363 0 0 1-.157.13l-.767.33a.119.119 0 0 1-.162-.143l1.13-3.97c-1.535.478-3.985.992-5.22.806-.204-.03-.255-.28-.105-.421.1-.098.262-.23.482-.39L5.03 8.038a.119.119 0 0 1 .041-.189l.352-.15a.355.355 0 0 1 .302.01l2.76 1.406a28.324 28.324 0 0 1 2.613-1.255l.07-.03-2.344-2.45a.119.119 0 0 1 .04-.192l.369-.157a.347.347 0 0 1 .262-.008l4.45 1.617 2.048-.877Zm7.579 11.736h5.307l.373-3.725H23.2l.372 3.725Zm5.913-6.051h1.605c.138 0 .244.119.23.255l-.884 8.847a.23.23 0 0 1-.23.209H25.23c-.01.029-.033.132.127.183l3.198.773V31H23.9V20.758h-1.652c-.12 0-.22-.09-.231-.21l-.885-8.845a.233.233 0 0 1 .232-.256h7.192V9.312c0-.256.208-.38.465-.38s.466.124.466.38v2.135Z"
				fill="#000"
			/>
		</svg>
	);
});

Vliegen.displayName = 'Vliegen';

export default Vliegen;
