import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";

@Entity("tasks")
class Task {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column({ default: false })
  status: boolean;

  @ManyToOne(() => User, { nullable: false })
  user: User;
}

export { Task };
