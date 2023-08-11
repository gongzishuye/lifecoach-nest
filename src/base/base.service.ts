import { Injectable } from '@nestjs/common';
import * as fs  from 'fs';
import { EditActivityDto, EditCoachDto, EditCoacheeDto } from './base.dto';

@Injectable()
export class BaseService {

  private users: Map<string, string>;
  constructor() {
    this.users = new Map();
    const users = fs.readFileSync('database/users.csv', 'utf-8');
    const usersArr = users.split('\n');
    usersArr.forEach(user => {
      const [email, password, username] = user.split('####');
      this.users.set(email, `${password}%%%%${username}`);
    });
    console.log(this.users);
  }

  registe(email: string, password: string, username: string) {
    // read users.csv file from current directory, put email, password, nickname into it, and save it.
    const users = fs.readFileSync('database/users.csv', 'utf-8');
    const user = `${email}####${password}####${username}\n`;
    fs.writeFileSync('database/users.csv', users + user);
    this.users.set(email, `${password}%%%%${username}`);
    console.log(this.users);
    return 1;
  }

  login(email: string, password: string) {
    console.log(email, password);
    console.log(this.users);
    if (this.users.has(email)) {
      const passwordName = this.users.get(email);
      const [realPassword, username] = passwordName.split('%%%%');
      if (realPassword === password) {
        return {
          code:1,
          username
        };
      } else {
        return {
          code: 0,
          username: ''
        }
      }
    } else {
      return {
        code: -1,
        username: ''
      }
    }
  }

  insertCoach(editCoachDto: EditCoachDto) {
    console.log(editCoachDto);
    const coachs = fs.readFileSync('database/coach.csv', 'utf-8');
    const coach = `${editCoachDto.name}####${editCoachDto.signature}####${editCoachDto.content}####${editCoachDto.contact}####${editCoachDto.gender}\n`;
    fs.writeFileSync('database/coach.csv', coachs + coach);
    return 1;
  }

  getCoachs() {
    const coachs = fs.readFileSync('database/coach.csv', 'utf-8');
    const coachsArr = coachs.trim().split('\n');
    const coachsJson= coachsArr.map(coach => {
      console.log()
      const items = coach.split('####');
      return {
        title: items[0],
        description: items[1],
        content: items[2],
        contact: items[3],
        gender: items[4],
      }
    });
    return coachsJson;
  }

  insertActivity(editActivityDto: EditActivityDto) {
    console.log(editActivityDto);
    const activities = fs.readFileSync('database/activities.csv', 'utf-8');
    const activity = `${editActivityDto.name}####${editActivityDto.intro}####${editActivityDto.content}####${editActivityDto.contact}####${editActivityDto.charge}####${editActivityDto.gender}\n`;
    fs.writeFileSync('database/activities.csv', activities + activity);
    return 1;
  }

  getActivities() {
    const activities = fs.readFileSync('database/activities.csv', 'utf-8');
    const activitiesArr = activities.trim().split('\n');
    const activitiesJson= activitiesArr.map(activity => {
      console.log(activity)
      const items = activity.split('####');
      return {
        name: items[0],
        intro: items[1],
        content: items[2],
        contact: items[3],
        charge: items[4],
        gender: items[5],
      }
    });
    return activitiesJson;
  }

  insertCoachee(editCoacheeDto: EditCoacheeDto) {
    console.log(editCoacheeDto);
    const coachees = fs.readFileSync('database/coachees.csv', 'utf-8');
    const coachee = `${editCoacheeDto.name}####${editCoacheeDto.desc}####${editCoacheeDto.intro}####${editCoacheeDto.contact}\n`;
    fs.writeFileSync('database/coachees.csv', coachees + coachee);
    return 1;
  }

  getCoachees() {
    const coachees = fs.readFileSync('database/coachees.csv', 'utf-8');
    const coacheesArr = coachees.trim().split('\n');
    const coacheesJson= coacheesArr.map(coachee => {
      console.log(coachee)
      const items = coachee.split('####');
      return {
        name: items[0],
        desc: items[1],
        intro: items[2],        
        contact: items[3],
      }
    });
    return coacheesJson;
  }
}
