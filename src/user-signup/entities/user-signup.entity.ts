import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class UserSignup {
@Prop()
username:string;

@Prop()
password:string;

@Prop()
mobile:string

@Prop()
email:string
}

export const UserSignupSchema = SchemaFactory.createForClass(UserSignup);
