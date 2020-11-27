import styled, { css } from 'styled-components'

import { GapProps } from './types'

export const positionCenter = ({ alignCenter, justifyCenter }: GapProps) => css`
	${justifyCenter &&
	css`
		justify-content: center;
	`};
	${alignCenter &&
	css`
		align-items: center;
	`};
`

export const horizontalStyle = ({ responsive, size }: GapProps) => css`
	${responsive &&
	css`
		width: 100%;
	`};
	> *:not(:last-child) {
		margin-right: ${size};
	}
`

export const verticalStyle = ({ responsive, size }: GapProps) => css`
	flex-direction: column;
	${responsive &&
	css`
		width: 100%;
	`}
	> *:not(:last-child) {
		margin-bottom: ${size};
	}
`

const STYLE_MAPPER = {
	horizontal: horizontalStyle,
	vertical: verticalStyle,
}

const Gap = styled.div<GapProps>`
	display: flex;
	flex-wrap: ${({ wrap = 'nowrap' }) => wrap};
	${({ type = 'horizontal' }) => STYLE_MAPPER[type]};
	${positionCenter};
`

export default Gap
