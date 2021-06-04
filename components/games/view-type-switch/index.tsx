import React from 'react';

import * as Styled from './styles';

export type GameViewType = 'base' | 'suggestion' | 'myMarks';

type Props = {
	viewType: GameViewType;
	onChange: (type: GameViewType) => void;
};

const ViewTypeSwitch: React.FC<Props> = ({ viewType, onChange }) => {
	const handleChange = (event: React.MouseEvent<HTMLSpanElement>) => {
		const { type } = event.currentTarget.dataset;
		onChange(type as GameViewType);
	};

	return (
		<Styled.Wrapper>
			Widok:
			<Styled.ViewTypeSwitch
				data-type="base"
				onClick={handleChange}
				isActive={viewType === 'base'}
			>
				Wszystkie gry
			</Styled.ViewTypeSwitch>
			<Styled.ViewTypeSwitch
				data-type="suggestion"
				onClick={handleChange}
				isActive={viewType === 'suggestion'}
			>
				Propozycje gier
			</Styled.ViewTypeSwitch>
			<Styled.ViewTypeSwitch
				data-type="myMarks"
				onClick={handleChange}
				isActive={viewType === 'myMarks'}
			>
				Moje oceny
			</Styled.ViewTypeSwitch>
		</Styled.Wrapper>
	);
};

export default ViewTypeSwitch;
