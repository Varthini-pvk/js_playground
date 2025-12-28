let user_name :string = "Varthini";
let age: number = 30;
let graduate: boolean =  true;
let score_a: number[] = [1,2,3,34,45];  
let score_b: Array<number> = [2,5,6,8,9];
let id_number : [idname:string,id_number: number] = ["Adhar", 2323325325325];
type id = string|number
let pan_number: id = "BYSPPo728";
let voter_id: id = 32532523;


let address: unknown = "wadwqrwq,sdfewfew,sdwqd";
if (typeof address == "string")
{
 let address_length = (address as string).length;
}


const user : {name:string; age: number; city?: string} =
{
   name: "varthini",
   age: 30
};

user.city = "Madurai"


const employee : {id: number; address: {city: string; pincode: number;}}=
{
    id: 242412,
    address: {
        city: "Madurai",
        pincode: 625706
    }
}

const friend : {name: string, greet(): void} = {
    name: "varthini",
    greet() {
        console.log ("hello")}
}

type User  = {
    name:string,
    age: number
}


const User = {
    name: "varthini",
    age: 33
}

type status = "success" | "error" | "loading";

(response: status): void => {
    if (response === "success")
        console.log("status is success");
    else if (response === "error")
        console.log("status is error");
    else if (response === "loading")
        console.log("status is loading");
}


type CanLog ={log(text: string): void;}


type CanSave = {save(text: string): void;}


type canLogandSave = CanLog & CanSave



type details = {readonly id: number ;
                email?: string}


let data: unknown = "dfedgerg" ;
console.log((data as string).toUpperCase())


let ele = document.getElementById("username");
console.log((ele as HTMLInputElement).value);

enum DIRECTION 
{
    UP,
    DOWN,
    LEFT,
    RIGHT
}

console.log(DIRECTION.DOWN);
console.log(DIRECTION[3]);

enum ROLE
{
    ADMIN,
    USER,
    GUEST
    
}

function print_role(role: ROLE)
{
   console.log(role)
}
print_role(ROLE.ADMIN)


type Role = "ADMIN" | "USER" | "GUEST";
