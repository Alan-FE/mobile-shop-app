export class MobileModel {
    name: string;
    imgPath: string;
    camera: string;
    color: string;
    memory: string;
    price: string;

    constructor(name: string, imgPath: string, camera: string, color: string, memory: string, price: string,) {
        this.name = name;
        this.imgPath = imgPath;
        this.memory = memory;
        this.price = price;
        this.camera = camera;
        this.color = color;
    }

}