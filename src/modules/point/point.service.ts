import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';


@Injectable()
export class PointService {
  constructor(private readonly userService: UserService) {}

  getUserPointInfo(): object {
    const name = this.userService.getUserName();
    const points = this.userService.getUserPoints();
    return {
      userName: name,
      userPoints: points,
      message: `${name}님의 포인트는 ${points}점 입니다.`,
    }
  }
}
