import { Request, Response } from "express";
import { BadRequestError } from "../helpers/Api-errors";
import { AppDataSource } from "../data-source";

export class SqlController {

    async createTable(req: Request, res: Response) {
        const { command, tbname, description, code } = req.body;
    
        if (!command) {
          throw new BadRequestError("name is required !!!");
        }
    
         // Exemplo de uma query SQL nativa
        const result = await AppDataSource.query(command);

        //const newRoom = await RoomService.create(name, description, code);
        const newTable = result
        
    
        return res.status(201).json( newTable );
      }


 
  async teste(req: Request, res: Response) {
    //const { name, description, code } = req.body;
    const name = "undefined";

    if (!name) {
      throw new BadRequestError("name is required !!!");
    }

    //const newRoom = await RoomService.create(name, description, code);
    const message = 'This only a test'

    return res.status(201).json({ message });
  }

}