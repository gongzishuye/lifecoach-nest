import { Body, Controller, Get, Post } from '@nestjs/common';
import { LoginDto, RegisteDto, EditCoachDto, EditActivityDto, EditCoacheeDto } from './base.dto';
import { BaseService } from './base.service';

@Controller('base')
export class BaseController {

  constructor(private readonly baseService: BaseService) {}

  @Post()
  getHello(@Body() loginDto: LoginDto) {
    const code = this.baseService.login(loginDto.email, loginDto.password);
    return {
      data: {
        code
      },
      code: 200,
      msg: 'success'
    };
  }

  @Post('registe')
  registe(@Body() registeDto: RegisteDto) {
    const code = this.baseService.registe(registeDto.email, registeDto.password, registeDto.username);
    return {
      data: {
        code
      },
      code: 200,
      msg: 'success'
    };
  }

  @Post('ecoach')
  ecoach(@Body() editCoachDto: EditCoachDto) {
    const code = this.baseService.insertCoach(editCoachDto);
    return {
      data: {
        code
      },
      code: 200,
      msg: 'success'
    };
  }

  @Get('coachs')
  coachs() {
    const data = this.baseService.getCoachs();
    return {
      data,
      code: 200,
      msg: 'success'
    };
  }

  @Post('eactivity')
  eactivity(@Body() editActivityDto: EditActivityDto) {
    const code = this.baseService.insertActivity(editActivityDto);
    return {
      data: {
        code
      },
      code: 200,
      msg: 'success'
    };
  }

  @Get('activities')
  activities() {
    const data = this.baseService.getActivities();
    return {
      data,
      code: 200,
      msg: 'success'
    };
  }

  @Post('ecoachee')
  ecoachee(@Body() editCoacheeDto: EditCoacheeDto) {
    const code = this.baseService.insertCoachee(editCoacheeDto);
    return {
      data: {
        code
      },
      code: 200,
      msg: 'success'
    };
  }

  @Get('coachees')
  coachees() {
    const data = this.baseService.getCoachees();
    return {
      data,
      code: 200,
      msg: 'success'
    };
  }
  

  @Get('test')
  test(): string {
    return 'test';
  }
}
