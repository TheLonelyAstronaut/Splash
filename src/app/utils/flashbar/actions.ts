import { createAction } from 'typesafe-redux-helpers';

import { FlashbarEnum } from './flashbar.types';

export interface FlashBarProps {
    type: FlashbarEnum;
    description?: string;
    message: string;
}

export const SHOW_FLASHBAR = createAction('[Show flashbar]', (payload: FlashBarProps) => payload);
