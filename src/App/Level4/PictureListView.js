/* eslint-disable no-use-before-define */
// @flow

class PictureListView {
    list;

    constructor(list) {
        this.list = list;

        Object.freeze(this);
    }

    getLength() {
        return this.list.length;
    }

    addPicture(picture) {
        return new PictureListView([...this.list, picture]);
    }

    removePicture(picture) {
        return new PictureListView(this.list.filter((p) => p.id !== picture.id));
    }

    replacePicture(picture) {
        return new PictureListView(this.list.map((p) => (p.id === picture.id ? picture : p)));
    }
}

export default PictureListView;
