import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export type AuthParamList = {
    Login: undefined;
    Register: undefined;
    Player: undefined;
};

export type AuthNavigationProps<T extends keyof AuthParamList> = {
    navigation: StackNavigationProp<AuthParamList, T>;
    route: RouteProp<AuthParamList, T>;
};
