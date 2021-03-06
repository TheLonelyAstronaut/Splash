import { SagaIterator } from 'redux-saga';
import { call, put, takeLatest } from 'redux-saga/effects';

import { client } from '../../graphql/api';
import { firebase } from '../utils/firebase';
import { SHOW_FLASHBAR } from '../utils/flashbar/actions';
import { FlashbarEnum } from '../utils/flashbar/flashbar.types';
import I18n from '../utils/i18n';
import { Logger } from '../utils/logger';

import { LOAD_HOME_DATA, CHANGE_PASSWORD } from './actions';

export function* changePasswordSaga(action: ReturnType<typeof CHANGE_PASSWORD.TRIGGER>): SagaIterator {
    if (
        action.payload.newPass === action.payload.repeatNewPass &&
        action.payload.currentPass !== '' &&
        action.payload.newPass !== ''
    ) {
        try {
            yield call(client.changePassword, action.payload.currentPass, action.payload.newPass);
            firebase.passwordChanged();
        } catch (error) {
            yield call(Logger.error, error);
            yield put(
                SHOW_FLASHBAR({
                    description: I18n.t('flashbar.somethingWentWrong'),
                    type: FlashbarEnum.Danger,
                    message: I18n.t('flashbar.tryAgain'),
                })
            );
        }
    }
}

export function* loadHomePageSaga(): SagaIterator {
    try {
        yield put(LOAD_HOME_DATA.STARTED());
        const result = yield call(client.getHomepageData);
        yield put(LOAD_HOME_DATA.COMPLETED(result));
    } catch (error) {
        yield call(Logger.error, error);
        yield put(LOAD_HOME_DATA.COMPLETED.failed(error));
    }
}

export function* listenForLoadHomepage(): SagaIterator {
    yield takeLatest(LOAD_HOME_DATA.TRIGGER, loadHomePageSaga);
}

export function* listenForChangePasswordSaga(): SagaIterator {
    yield takeLatest(CHANGE_PASSWORD.TRIGGER, changePasswordSaga);
}
