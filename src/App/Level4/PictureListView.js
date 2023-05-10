/* eslint-disable no-use-before-define */
// @flow

type PicType = {
    id: string,
    url: string,
};

class PictureListView {
    list: Array<PicType>;

    constructor(list: Array<PicType>) {
        this.list = list;

        Object.freeze(this);
    }

    getLength(): number {
        return this.list.length;
    }

    addPicture(picture: PicType): PictureListView {
        return new PictureListView([...this.list, picture]);
    }

    removePicture(picture: PicType): PictureListView {
        return new PictureListView(this.list.filter((p) => p.id !== picture.id));
    }

    replacePicture(picture: PicType): PictureListView {
        return new PictureListView(this.list.map((p) => (p.id === picture.id ? picture : p)));
    }
}

export default PictureListView;
