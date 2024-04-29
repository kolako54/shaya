import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Wine } from './wine.entity';

@Entity()
export class Flavour {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany(() => Wine, (wine) => wine.flavours)
  wines: Wine[];
}
