import {ApiProperty} from '@nestjs/swagger'

export class LoginUserInput {
    @ApiProperty({name:'username', description:'ชื่อผู้ใช้งาน'})
    username: string;

    @ApiProperty({name:'password', description:'รหัสผู้ใช้งาน'})
    password: string;
}