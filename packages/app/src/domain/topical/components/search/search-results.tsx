import css from '@styled-system/css';
import styled from 'styled-components';
import { asResponsiveArray } from '~/style/utils';
import { useHotkey } from '~/utils/hotkey/use-hotkey';
import { useBreakpoints } from '~/utils/use-breakpoints';
import { useSearchContext } from './context';
import { HitList } from './hit-list';
import { paddedStyle } from './search-input';

export function SearchResults() {
	const { id, hits, setHasHitFocus } = useSearchContext();
	const breakpoints = useBreakpoints();

	useHotkey('esc', () => setHasHitFocus(false), { preventDefault: false });

	/**
	 * On narrow devices we'll render the category with the best result on top
	 */
	const vrHasBestResult =
		[...hits].sort((a, b) => b.score - a.score)[0]?.data.type === 'vr';

	const col1Scope = breakpoints.sm ? 'gm' : vrHasBestResult ? 'vr' : 'gm';
	const col2Scope = breakpoints.sm ? 'vr' : vrHasBestResult ? 'gm' : 'vr';

	return (
		<StyledSearchResults
			id={id}
			role="listbox"
			onPointerDown={() => setHasHitFocus(true)}
		>
			<HitList key={col1Scope} scope={col1Scope} />
			<HitList key={col2Scope} scope={col2Scope} />
		</StyledSearchResults>
	);
}

const StyledSearchResults = styled.div(
	paddedStyle,
	css({
		position: 'relative',
		/** negative margin necessary for text alignment */
		mx: -2,
		display: 'flex',
		flexDirection: asResponsiveArray({ _: 'column', sm: 'row' }),
		'& > *:not(:last-child)': {
			marginRight: asResponsiveArray({ sm: 4 }),
			marginBottom: asResponsiveArray({ _: 4, sm: 0 }),
		},
	})
);
