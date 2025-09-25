import express from "express";
import { 
  createTaskController,
  deleteTaskController,
  getAdminTasks,
  getAllTaskController,
  getTaskByUserController,
  modifyTaskController,
  updateTaskController,
  userRequestReviewController,
  adminApproveTaskController,
  adminRejectTaskController,
  downloadDocumentController
} from "../../controller/taskController.js";

import { isAuthenticated, isAdmin } from "../../middleware/authValidation.js"; 
import upload from "../../config/multerConfig.js";
import { userRepository } from "../../repository/userRepository.js";

const taskRouter = express.Router();

taskRouter.post(
  '/create/:userId',
  isAuthenticated,
  isAdmin,
  createTaskController
);

taskRouter.get(
  '/:taskId/documents/:docIndex',
  isAuthenticated,
  downloadDocumentController
);


taskRouter.put('/status/:taskId', isAuthenticated, isAdmin, updateTaskController);
taskRouter.put('/user-status/:taskId', isAuthenticated, updateTaskController);
taskRouter.delete('/delete/:taskId', isAuthenticated, isAdmin, deleteTaskController);
taskRouter.get('/', isAuthenticated, isAdmin, getAllTaskController);
taskRouter.get('/:userId', isAuthenticated, getTaskByUserController);
taskRouter.put('/:taskId', isAuthenticated, isAdmin, modifyTaskController);
taskRouter.put('/request-review/:taskId', isAuthenticated, userRequestReviewController);
taskRouter.put('/approve/:taskId', isAuthenticated, isAdmin, adminApproveTaskController);
taskRouter.put('/reject/:taskId', isAuthenticated, isAdmin, adminRejectTaskController);
taskRouter.get("/admin-tasks", isAuthenticated, isAdmin, getAdminTasks);

taskRouter.get('/users', isAuthenticated, isAdmin, async (req, res) => {
  try {
    const users = await userRepository.getAllUsers();
    if (!users?.length) {
      return res.status(404).json({ 
        success: false, 
        message: "No users found" 
      });
    }
    res.status(200).json({
      success: true,
      message: "Users fetched successfully",
      data: users
    });
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ 
      success: false, 
      message: "Internal Server Error",
      error: error.message 
    });
  }
});

export default taskRouter;
