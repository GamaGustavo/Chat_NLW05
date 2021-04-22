import {Entity,CreateDateColumn,UpdateDateColumn,PrimaryColumn,Column} from 'typeorm';
import { v4 as uudi } from "uuid";

@Entity("settings")
class Setting{
   
   @PrimaryColumn()
   id : string;

   @Column()
   username: string;

   @Column()
   chat: boolean;

   @UpdateDateColumn()
   updated_at: Date;

   @CreateDateColumn()
   created_at: Date;
   
   constructor(){
      if(!this.id){
         this.id = uudi();
      }
   }
}
export {Setting}