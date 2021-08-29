export const NEW_TASK = 'NEW_TASK';
export const DELETE_TASK = 'DELETE_TASK';

export const setNewTask = (payload) => ({
  type: NEW_TASK,
  payload,
})

export const deleteTask = (payload) => ({
  type: DELETE_TASK,
  payload,
})
