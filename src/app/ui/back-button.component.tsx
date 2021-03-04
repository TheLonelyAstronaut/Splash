import React from 'react';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import { useTheme } from 'styled-components';

import { BackButtonContainer } from './styled/back-button.styled';

export type Props = {
    onPress: () => void;
};

export const BackButton: React.FC<Props> = (props: Props) => {
    const theme = useTheme();
    return (
        <BackButtonContainer onPress={props.onPress}>
            <Icon name={'chevron-back'} color={theme.colors.secondary} size={36} />
        </BackButtonContainer>
    );
};
