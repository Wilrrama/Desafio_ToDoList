import { Request, Response } from "express";
import { SessionService } from "../services/session.service";

export class SessionController {
  constructor(private sesseionService: SessionService) {}
  async createLoginController(req: Request, res: Response) {
    const { email, password } = req.body;
    const token = await this.sesseionService.createLoginService({
      email,
      password,
    });

    return res.json({ token });
  }
}
