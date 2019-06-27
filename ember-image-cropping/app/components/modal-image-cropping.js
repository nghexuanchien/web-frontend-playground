import ModalComponent from 'ghost-admin/components/modal-base';
import RSVP from 'rsvp';
import {alias} from '@ember/object/computed';

export default ModalComponent.extend({
    onCropImage: alias('model.onCropImage'),

    image: alias('model.image'),

    actions: {
    },

    // Allowed actions
    confirm: () => RSVP.resolve()
});
