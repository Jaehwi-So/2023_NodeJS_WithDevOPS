import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    //주입받은 JWT Module의 서비스 이용
    private readonly jwtService: JwtService,
  ) {}

  //리프레쉬 토큰을 쿠키에 설정
  setRefreshToken({ user, res }) {
    const refreshToken = this.jwtService.sign(
      {
        email: user.email,
        sub: user.id,
      },
      {
        secret: process.env.REFRESH_TOKEN_SECRET_KEY,
        expiresIn: '2w',
      },
    );
    //배포환경에서는 쿠키 보안옵션과 CORS 추가해주어야함
    res.setHeader('Set-Cookie', `refreshToken=${refreshToken}`);
    return;
  }

  //Access Token 발급
  getAccessToken({ user }): String {
    return this.jwtService.sign(
      {
        email: user.email,
        sub: user.id,
      },
      {
        secret: process.env.ACCESS_TOKEN_SECRET_KEY,
        expiresIn: '5m',
      },
    );
  }
}
