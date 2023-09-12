import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop()
  name: string;

  @Prop()
  department: string;

  @Prop()
  company: string;

  @Prop()
  lend: boolean;

  @Prop()
  staff: boolean;

  @Prop()
  rfid: string;

  @Prop()
  barcode: string;

  @Prop()
  can_log_in: boolean;

  @Prop()
  email: string;

  @Prop()
  password_hash: string;

  @Prop()
  is_admin: boolean;
}

export const UserSchema = SchemaFactory.createForClass(User);
