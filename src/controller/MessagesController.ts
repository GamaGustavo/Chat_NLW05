import { Request, Response } from "express";
import { MessageService } from "../services/MessagesService";


class MessagesController{
   
   async create(requeste:Request,response:Response){
      const {admin_id,text,user_id} = requeste.body;   
      
      const messageService = new MessageService();

         const message = await messageService.create({
            admin_id,
            text,
            user_id
         });
         return response.json(message);
   }

   async listByUser(requeste:Request,response:Response){
      const {id} = requeste.params;
      const messageService = new MessageService();
      const list = await messageService.listByUser(id);

      return response.json(list);

   }

}

export {MessagesController}