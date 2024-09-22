import { Request, Response } from "express";
import { BadRequestError } from "../helpers/Api-errors";
import { SqlService } from "../services/SqlService";

export class SqlController {
  async createTable(req: Request, res: Response) {
    const { tbname } = req.body;
    if (!tbname) {
      throw new BadRequestError("name is required !!!");
    }

    let commandSql: string = "";
    switch (tbname) {
      case "tb_alunos":
        commandSql = `
              CREATE TABLE tb_alunos (
                id SERIAL PRIMARY KEY,
                name TEXT NOT NULL,
                email TEXT UNIQUE,
                "created_at" TIMESTAMP DEFAULT NOW(),
                "updated_at" TIMESTAMP DEFAULT NOW()
              );
             `;
        break;
      case "tb_cursos":
        commandSql = `
                CREATE TABLE tb_cursos (
                  id SERIAL PRIMARY KEY,
                  name TEXT NOT NULL,
                  "created_at" TIMESTAMP DEFAULT NOW(),
                  "updated_at" TIMESTAMP DEFAULT NOW()
                );
               `;
        break;
      case "tb_professores":
        commandSql = `
                  CREATE TABLE tb_professores (
                    id SERIAL PRIMARY KEY,
                    name TEXT NOT NULL,
                    "created_at" TIMESTAMP DEFAULT NOW(),
                    "updated_at" TIMESTAMP DEFAULT NOW()
                  );
                 `;
        break;
      case "tb_aluno_curso_professor":
        commandSql = `
          CREATE TABLE tb_aluno_curso_professor(
          fk_aluno INT,
          fk_curso INT,
          fk_professor INT,
          FOREIGN KEY (fk_aluno) REFERENCES tb_alunos(id),
          FOREIGN KEY (fk_curso) REFERENCES tb_cursos(id),
          FOREIGN KEY (fk_professor) REFERENCES tb_professores(id),
          "created_at" TIMESTAMP DEFAULT NOW(),
          "updated_at" TIMESTAMP DEFAULT NOW()
          );
         `;
        break;
      default:
        break;
    }
    // Exemplo de uma query SQL nativa
    const result = await SqlService.createTable(commandSql);

    console.log(result);

    return res.status(201).json(result);
  }

  /*--------------------
       DROP a table
  ----------------------*/
  async dropTable(req: Request, res: Response) {
    const { tbname } = req.body;

    if (!tbname) {
      throw new BadRequestError("tbname is required !!!");
    }

    const sqlDropTable = `
          DROP TABLE ${tbname}
          `;
    const commandSql = sqlDropTable;

    await SqlService.dropTable(commandSql);

    return res.status(200).json(`${tbname} deleted`);
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
  /*

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

*/
}
