import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    description: 'The name of the user.',
    required: true,
  })
  name: string;

  @ApiProperty({
    description: 'The department of the user.',
  })
  department: string;

  @ApiProperty({
    description: 'The company the user belongs to.',
  })
  company: string;

  @ApiProperty({
    description: 'Whether or not something.',
    default: true,
  })
  lend: boolean;

  @ApiProperty({
    description: 'Is the user staff.',
    default: false,
  })
  staff: boolean;

  @ApiProperty()
  rfid: string;

  @ApiProperty()
  barcode: string;

  @ApiProperty({
    description: 'Can the user log in.',
    default: true,
  })
  can_log_in: boolean;

  @ApiProperty()
  email: string;

  @ApiProperty()
  password_hash: string;

  @ApiProperty({
    description: 'Is the user admin.',
    default: false,
  })
  is_admin: boolean;
}
