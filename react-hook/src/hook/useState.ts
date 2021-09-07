import React from 'react'

type BasicStateAction<S> = ( S => S) | S;
type MaybeCallback<S> = void | null | (S => mixed);
type Dispatch<S, A> = (A, MaybeCallback<S>) => void;

type Update<S, A> = {
  action: A,
  next: Update<S, A> | null,
};

type UpdateQueue<S, A> = {
  last: Update<S, A> | null,
  dispatch: any,
};

type Hook = {
  memoizedState: any,
  queue: UpdateQueue<any, any> | null,
  next: Hook | null,
};

const useState = <S>(initialState:(()=> S) | S) : [S, Dispatch<S, BasicStateAction<S>>]) =>  {
  return useReducer(basicStateReducer, (initialState: any))
}

const useReducer = <S, A>(reducer: (S, A) => S, initialState: S,initialAction: A | void | null) => {
  currentlyRenderingComponent = resolveCurrentlyRenderingComponent();
  workInProgressHook = createWorkInProgressHook();

  if(isReRender){
    const queue<S, A> = (workInProgressHook.queue: any);
    const dispatch: Dispatch<S, A> = (queue.dispatch: any);

    if(renderPhaseUpdates !== null){
      const firstRenderPhaseUpdate = renderPhaseUpdates.get(queue);
      if (firstRenderPhaseUpdate !== undefined) {
        renderPhaseUpdates.delete(queue);
        let newState = workInProgressHook.memoizedState;
        let update = firstRenderPhaseUpdate;
        do {
          const action = update.action;
          newState = reducer(newState, action);
          update = update.next;
        } while (update !== null);

        workInProgressHook.memoizedState = newState;

        return [newState, dispatch];
      }
    }
    return [workInProgressHook.memoizedState, dispatch];
  }else{
    if (reducer === basicStateReducer) {
      if (typeof initialState === 'function') {
        initialState = initialState();
      } else if (initialAction !== undefined && initialAction !== null) {
        initialState = reducer(initialState, initialAction);
      }
      workInProgressHook.memoizedState = initialState;

      const queue: UpdateQueue<S, A> = (workInProgressHook.queue = {
        last: null,
        dispatch: null,
      });
      const dispatch: Dispatch<S, A> = (queue.dispatch = (dispatchAction.bind(
        null,
        currentlyRenderingComponent,
        queue,
      ): any));

      return [workInProgressHook.memoizedState, dispatch];
  }
}
export default useState
