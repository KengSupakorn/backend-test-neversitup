import {ApiProperty} from '@nestjs/swagger'

export class UserModal {
    @ApiProperty({name:'id', description:'id'})
    id: number;

    @ApiProperty({name:'username', description:'ชื่อผู้ใช้งาน'})
    username: string;

    @ApiProperty({name:'password', description:'รหัสผู้ใช้งาน'})
    password: string;

    @ApiProperty({name:'firstName', description:'ชื่อจริง'})
    firstName: string;

    @ApiProperty({name:'lastName', description:'นามสกุล'})
    lastName: string;
}