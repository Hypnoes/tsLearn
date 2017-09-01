var t : number = 1;

class Character {
     fullname: string;

     constructor(firstname: string, lastname: string) {
         this.fullname = firstname + " " + lastname;
     }

     greet (name?: string): string {
         if (name) {
             return "Hi! " + name + "! my name is " + this.fullname;
         } else {
             return "Hi! my name is " + this.fullname;
         }
     }
 }

var spark : Character = new Character("Jacob", "Keyes");
var msg : string = spark.greet();
alert(msg);
var msg1 : string = spark.greet("Dr. Halsey");
alert(msg1);

interface ILoggerInterface {
    log (arg: any): void;
}

class Logger implements ILoggerInterface {
    log (arg: any): void {
        if (typeof console.log === "function") {
            console.log(arg);
        } else {
            alert(arg);
        }
    }
}

interface IUser {
    name : string;
    password : string;
}

var user : IUser = {
    name : "hypnoes",
    password : "123456"
};

