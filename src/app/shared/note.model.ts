
export class Note {
    public id: number;
    public title: string;
    public body: string;

    constructor() {
        this.id = 0;
        this.title = '';
        this.body = '';
    }
    setter(id: number, t: string, b: string) {
        this.id = id;
        this.title = t;
        this.body = b;
    }
}
