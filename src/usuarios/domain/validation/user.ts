import { IsString, Length, IsBoolean, IsNotEmpty, ValidateIf, IsIn, IsOptional,IsEmail} from 'class-validator';


export class ValidatorRegisterUser {

    @IsNotEmpty()
    @IsString()
    public name: string;

    @IsNotEmpty()
    @IsEmail()
    public email: string;

    @IsNotEmpty()
    public height: number;

    @IsNotEmpty()
    public weight: number;

    @IsNotEmpty()
    public gender: string;

    @IsNotEmpty()
    @IsString()
    public password: string;

   

    constructor(
        name: string,
        email: string,
        height: number,
        weight: number,
        gender: string,
        password: string,
    ) {
        this.name = name;
        this.email = email;
        this.height = height;
        this.weight = weight;
        this.gender = gender;
        this.password = password;
    }


}
export class ValidateLogin {
    @IsNotEmpty()
    @IsEmail()
    public email: string;

    @IsNotEmpty()
    @IsString()
    public password: string;

    constructor(
        email:string,
        password:string,
    ){
        this.email = email,
        this.password = password
    }
}

export class ValidatorupdatePassword {

    @IsNotEmpty()
    
    public id: number;

    @IsNotEmpty()
    @IsString()
    public password: string;

    constructor(
        id: number,
        password: string
    ) {
        this.id = id;
        this.password = password;
    }
}


export class ValidatorId {
    @IsNotEmpty()
    public id: number;
    constructor(id:number) {
        this.id = id
    }
}


