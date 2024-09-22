import { Request, Response } from "express";
import { BadRequestError } from "../helpers/Api-errors";
import { AppDataSource } from "../data-source";

export class SqlService {
 
  static async createTable(cmdSql: string) {
   
    if (!cmdSql) {
      throw new BadRequestError("sqlCommand is required !!!");
    }
    const commandSql = cmdSql ;
    const result = await AppDataSource.query(commandSql);
    console.log(result);
  
    return {message: cmdSql};
  }

  /*--------------------
       DROP a table
  ----------------------*/
  static async dropTable(cmdSql: string) {
    if (!cmdSql) {
      throw new BadRequestError("name is required !!!");
    }
    const commandSql = cmdSql;
    const result = await AppDataSource.query(commandSql);

    return (commandSql);
  }
}
