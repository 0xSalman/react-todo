export type TodoAction = {
  type: 'ADD',
  text: string,
} | {
  type: 'REMOVE',
  id: number
} | {
  type: 'COMPLETE',
  id: number
}

export const TodoActions = {

  add: (text: string): TodoAction => ({
    type: 'ADD',
    text: text
  }),

  remove: (id: number): TodoAction => ({
    type: 'REMOVE',
    id: id
  }),

  complete: (id: number): TodoAction => ({
    type: 'COMPLETE',
    id: id
  })
};

export type TodoActionsProps = {
  actions: any
}