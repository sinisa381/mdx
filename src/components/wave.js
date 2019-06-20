import React, { useState } from 'react'
import { css } from '@emotion/core'

const Wave = () => {
	const [ waves, setWaves ] = useState(0)
	const label = `👋 ${waves} ${waves > 1 ? 'waves' : 'wave'}`
	return (
		<button
			css={css`
				border: none;
				background-color: rebeccapurple;
				color: white;
				font-size: 1.2rem;
			`}
			onClick={() => setWaves(waves + 1)}
		>
			{label}
		</button>
	)
}

export default Wave
