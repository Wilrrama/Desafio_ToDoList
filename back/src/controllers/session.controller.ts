import { Request, Response } from "express";
import { SessionService } from "../services/session.service";

class SessionController {
  constructor(private sesseionService: SessionService) {}
  async createLogin(req: Request, res: Response) {
    const { email, password } = req.body;
    const token = await this.sesseionService.createLoginService({
      email,
      password,
    });

    return res.json({ token });
  }
}

export { SessionController };
