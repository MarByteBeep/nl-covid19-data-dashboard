import css from '@styled-system/css';
import styled from 'styled-components';
import { Box } from '~/components/base';

export const MaxWidth = styled(Box)(
	css({
		maxWidth: 'maxWidth',
		margin: '0 auto',
	})
);
