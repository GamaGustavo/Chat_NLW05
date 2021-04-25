import { getCustomRepository, Repository } from "typeorm"
import { Message } from "../entities/Message";
import { MessagesRepository } from "../repositorys/MessagesRepository"

interface IMessageService{
   admin_id ?: string;
   text: string;
   user_id: string;
}

class MessageService{
   private messagesRepository : Repository<Message>;

   constructor(){
      this.messagesRepository = getCustomRepository(MessagesRepository);
   }

   async create({admin_id,text,user_id}:IMessageService){
      const message = await this.messagesRepository.create({
         admin_id,
         text,
         user_id
      });

      await this.messagesRepository.save(message);

      return message;
   }
   
   async listByUser(user_id:string){
      const list = this.messagesRepository.find({where:{user_id},relations:["user"]});

      return list;
   }

}

export {MessageService}