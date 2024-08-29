import { Router } from "express";
import { GetAllUsers } from "../../controllers/users/GetAllUsers";
import { CreateUser } from "../../controllers/users/CreateUser";
import { UpdateUser } from "../../controllers/users/UpdateUser";
import { RemoveUser } from "../../controllers/users/RemoveUser";

const router = Router();

router.get("/getAll", GetAllUsers);
router.post("/create", CreateUser);
router.put("/update", UpdateUser);
router.delete("/remove?:id", RemoveUser);

export default router;