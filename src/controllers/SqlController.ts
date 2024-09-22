import { Request, Response } from "express";
import { BadRequestError } from "../helpers/Api-errors";
import { AppDataSource } from "../data-source";

export class SqlController {
  async createTable(req: Request, res: Response) {
    const { tbname, description, code } = req.body;

    if (!tbname) {
      throw new BadRequestError("name is required !!!");
    }

    // Exemplo de uma query SQL nativa

    const sqlCreateTbstudents = `
              CREATE TABLE ${tbname} (
                id SERIAL PRIMARY KEY,
                name TEXT NOT NULL,
                email TEXT UNIQUE,
                "created_at" TIMESTAMP DEFAULT NOW(),
                "updated_at" TIMESTAMP DEFAULT NOW()
              );
             `;
    const sqlCreateTableDisciplines = `
              CREATE TABLE tbdisciplines(
              id SERIAL PRIMARY KEY,
              name TEXT NOT NULL,
              "created_at" TIMESTAMP DEFAULT NOW(),
              "updated_at" TIMESTAMP DEFAULT NOW()
              );
             `;
    const sqlCreateTableAssociative = `
              CREATE TABLE tbstudent_discipline(
              fk_student INT,
              fk_discipline INT,
              rating INT NOT NULL CHECK(rating > 0 AND rating <= 10),
              FOREIGN KEY (fk_student) REFERENCES ${tbname}(id),
              FOREIGN KEY (fk_discipline) REFERENCES tbdisciplines(id),
              "created_at" TIMESTAMP DEFAULT NOW(),
              "updated_at" TIMESTAMP DEFAULT NOW()
              );
             `;

    const sqlInsertIntoTable = `


              `;

    const sqlUpdateTable = `

              
              `;

    const commandSql = sqlCreateTableAssociative ;

    const result = await AppDataSource.query(commandSql);

    console.log(result);

    return res.status(201).json(commandSql);
  }


  /*--------------------
       DROP a table
  ----------------------*/
  async dropTable(req: Request, res: Response) {
    const { tbname } = req.body;

    if (!tbname) {
      throw new BadRequestError("name is required !!!");
    }

    const sqlDropTable = 
          `
          DROP TABLE ${tbname}
          `
    const commandSql = sqlDropTable;
    const result = await AppDataSource.query(commandSql);
    console.log(result);

    return res.status(200).json(commandSql);
  }

  async teste(req: Request, res: Response) {
    //const { name, description, code } = req.body;
    const name = "undefined";

    if (!name) {
      throw new BadRequestError("name is required !!!");
    }

    //const newRoom = await RoomService.create(name, description, code);
    const message = "This only a test";

    return res.status(201).json({ message });
  }
}
