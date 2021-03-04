import styled from 'styled-components/native';

import { RegularText } from '../../../ui/styled/text.styled';

export const InputWrapper = styled.View`
    margin-top: ${(props) => props.theme.spacer};
`;
export const InputText = styled(RegularText)`
    color: ${(props) => props.theme.colors.secondary};
    margin-left: ${(props) => props.theme.spacer * 7.5};
    margin-top: ${(props) => props.theme.spacer * 4};
    margin-bottom: -10px;
`;

export const BackButtonContainer = styled.TouchableOpacity`
    margin-left: ${(props) => props.theme.spacer * 2};
    margin-top: ${(props) => props.theme.spacer * 2};
`;
