import { Entity, Column, ObjectIdColumn } from "typeorm";
import { Image } from "../interface/Image";
import { Location } from "../interface/Location";
import { StoreInfo } from "../interface/StoreInfo";

@Entity()
export class Feed {
  @ObjectIdColumn()
  id!: string;

  @Column()
  title: string;

  @Column()
  text: string;

  @Column()
  type: string;

  @Column()
  images: Image[]

  @Column()
  location: Location;

  @Column()
  isDinner: boolean;

  @Column()
  isDelivery: boolean;

  @Column()
  storeInfo: StoreInfo;

  @Column()
  categoryId: string;
}