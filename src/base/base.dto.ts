export class LoginDto {
  email: string;
  password: string;
}

export class RegisteDto {
  email: string;
  password: string;
  username: string;
}

export class EditCoachDto {
  name: string;
  signature: string;
  content: string;
  contact: string;
  gender: string;
}

export class EditActivityDto {
  name: string;
  intro: string;
  content: string;
  contact: string;
  charge: string;
  gender: string;
}

export class EditCoacheeDto {
  name: string;
  desc: string;
  intro: string;
  contact: string;
}