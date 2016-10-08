import i18next from 'i18next';
import {LOCA} from '../application/main';
import ownerCtrl from './ownerctrl';

export default () => {
    LOCA.routes.owner = {
        url() {
            return '/page/owner';
        },
        title: i18next.t('Landloard'),
        pageInitialized(callback) {
            ownerCtrl.pageInitialized(callback);
        },
        dataChanged(callback) {
            ownerCtrl.dataChanged(callback);
        }
    };
};