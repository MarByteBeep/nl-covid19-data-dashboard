import styled from 'styled-components';
import { asResponsiveArray } from '~/style/utils';
import { Box } from './base';

export const TileList = styled(Box).attrs({
	spacing: 5,
	pt: asResponsiveArray({ _: 3, md: 5 }),
	px: asResponsiveArray({ _: 3, sm: 5 }),
})({});
