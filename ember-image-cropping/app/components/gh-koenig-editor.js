import Component from '@ember/component';
import ghostPaths from 'ghost-admin/utils/ghost-paths';
import {inject as service} from '@ember/service';

export default Component.extend({
    ajax: service(),

    post: null,
    openCropping: false,

    actions: {
        openCroppingTool() {
            this.set('openCropping', true);
        },
        closeCroppingTool() {
            this.set('openCropping', false);
        },
        onCropFeatureImage(cropData){
            let ajax = this.ajax;
            let url = `${ghostPaths().apiRoot}/images/crop`;

            ajax.post(url, {
                dataType: 'json',
                data: {
                    imgUrl: this.get('post.featureImageOrg'),
                    cropData: cropData
                }
            }).then((response) => {
                if (response && response.images && response.images.length){
                    let cropped = response.images[0];
                    if (cropped.url){
                        this.set('post.featureImage', cropped.url);
                        this.set('openCropping', false);
                    }
                }
            }).catch((error) => {
                console.log(`failed to crop the image `, error);
            }).finally(() => {
                console.log(`call finally when cropping image`);
            });
        },
    },

    /* public methods ------------------------------------------------------- */

    /* internal methods ----------------------------------------------------- */
});
