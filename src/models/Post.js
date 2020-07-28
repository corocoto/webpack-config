export default class Post {
    constructor(post, img) {
        this.post = post;
        this.img = img;
        this.date = new Date();
    }

    toString(){
        return JSON.stringify({
            post: this.post,
            date: this.date,
            img: this.img
        }, null, 4);
    }
}