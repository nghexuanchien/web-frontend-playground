// https://www.npmjs.com/package/cropperjs
// import Component from '@ember/component';
// import Cropper from 'cropperjs';
import imageCropper from 'ember-cli-image-cropper/components/image-cropper';

export default imageCropper.extend({
    minCropBoxWidth: 100,
    minCropBoxHeight: 100,
    cropperContainer: '.cropper-container > img',
    previewClass: 'cropper-preview',
    zoomable: false,
    zoomOnWheel: false,
    zoomOnTouch: false,
    croppedAvatar: null,
    image: null,
    onCropImage: null,
    onCancelCrop: null,

    actions: {
        cropImage: function () {
            var cropper = this.get('cropper');
            // var croppedImage = cropper.getCroppedCanvas();
            // this.set('croppedAvatar', croppedImage);
            // console.log('getCroppedAvatar ... get data: ', cropper.getData());
            var onCropImage = this.get('onCropImage');
            if (onCropImage){
                onCropImage(cropper.getData());
            }
        },
        cancelCrop: function () {
            var onCancelCrop = this.get('onCancelCrop');
            if (onCancelCrop){
                onCancelCrop();
            }
        }
    },
    //override default options of cropper
    aspectRatio: 16 / 9
});

/*
export default Component.extend({
    previewClass: '.cropper-preview',
    cropperContainer: '.cropper-container > img',
    crop: null,
    viewMode: 0,
    dragMode: 'crop',
    responsive: true,
    center: true,
    checkCrossOrigin: true,
    background: true,
    modal: true,
    guides: true,
    highlight: true,
    autoCrop: true,
    autoCropArea: 0.8,
    dragDrop: true,
    movable: true,
    resizable: true,
    zoomable: true,
    zoomOnWheel: true,
    zoomOnTouch: true,
    cropBoxMovable: true,
    cropBoxResizable: true,
    toggleDragModeOnDblclick: true,
    rotateable: true,
    minContainerWidth: 200,
    minContainerHeight: 100,
    minCropBoxWidth: 0,
    minCropBoxHeight: 0,
    build: null,
    built: null,
    dragStart: null,
    dragMove: null,
    dragEnd: null,
    zoomin: null,
    zoomout: null,
    ready: null,
    data: null,
    croppedAvatar: null,
    didInsertElement() {
        console.log(`call inside did Insert element cropping tool `);
        this._super(...arguments);
        let properties = this.getProperties(
            'cropperContainer',
            'aspectRatio',
            'crop',
            'previewClass',
            'viewMode',
            'dragMode',
            'responsive',
            'center',
            'checkCrossOrigin',
            'toggleDragModeOnDblclick',
            'background',
            'modal',
            'guides',
            'highlight',
            'autoCrop',
            'autoCropArea',
            'dragDrop',
            'movable',
            'resizable',
            'zoomable',
            'zoomOnWheel',
            'zoomOnTouch',
            'cropBoxMovable',
            'cropBoxResizable',
            'rotateable',
            'minContainerWidth',
            'minContainerHeight',
            'minCropBoxWidth',
            'minCropBoxHeight',
            'build',
            'built',
            'dragStart',
            'dragMove',
            'dragEnd',
            'zoomin',
            'zoomout',
            'ready',
            'data'
        );
        properties.preview = properties.previewClass;
        delete properties.previewClass;
        let image = document.querySelector(properties.cropperContainer);
        this.set('cropper', new Cropper(image, properties));
    },

    willDestroyElement() {
        this._super(...arguments);
        let cropper = this.get('cropper');
        if (cropper.data) {
            cropper.destroy();
        }
    },

    actions: {
        getCroppedAvatar: function () {
            var cropper = this.get('cropper');
            var croppedImage = cropper.getCroppedCanvas();
            this.set('croppedAvatar', croppedImage);
        }
    },

    aspectRatio: 16 / 9
});
*/
