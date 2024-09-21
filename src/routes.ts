import { Router } from "express";
import { SqlController } from "./controllers/SqlController";
// import { SubjectController } from "./controllers/SubjectController";
// import { RoomController } from "./controllers/RoomController";
// import { VideoController } from "./controllers/VideoController";

const routes = Router();

routes.get("/sql",    new SqlController().teste);     // teste
routes.post("/sql", new SqlController().createTable); // create a table


// routes.delete("/rooms/:id", new RoomController().delete); // turmas


// routes.post("/room/:rid/subject/:sid", new RoomController().createRoomSubject); // room - subject
// routes.delete("/room/:rid/subject/:sid", new RoomController().deleteRoomSubject); // room - subject

export default routes;
