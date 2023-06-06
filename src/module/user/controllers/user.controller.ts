import { Controller, Get, Param } from '@nestjs/common';
import { UserService } from '../services/user.service';
import { ApiParam, ApiTags } from '@nestjs/swagger';

@Controller('user')
export class UserController {
    constructor(private userService: UserService) { }

    @Get('/:userId')
    @ApiTags('user')
    @ApiParam({name: 'userId'})
    async getUser(@Param('userId') userId:number) {
        const user = await this.userService.getUserById(userId)
        return user
    }

    @Get('orderHistory/:userId')
    @ApiTags('user')
    @ApiParam({name: 'userId'})
    async getOrderHistory(@Param('userId') userId:number) {
        const user = await this.userService.getOrderHistory(userId)
        return user
    }
}
