import { Request, Response } from "express";
import { SessionService } from "../services/session.service";

class SessionController {
  constructor(private sessionService: SessionService) {}
  async createLogin(req: Request, res: Response) {
    const { email, password } = req.body;

    const { token, user } = await this.sessionService.createLoginService({
      email,
      password,
    });

    // return res.json({ token });
    return res.json({
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
    });
  }
}

export { SessionController };
