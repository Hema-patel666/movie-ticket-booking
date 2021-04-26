export class Users {
    public Id: number;
    public name: string;
    public address:string;
    public img:string;
    public date:Date;
    public comments:string;
    
    constructor(Id:number,name: string,address:string,img:string,date:Date,comments:string) {
    this.Id = Id;
    this.name = name;
    this.address =address;
    this.img =img;
    this.date =date;
    this.comments =comments;

    }
    }