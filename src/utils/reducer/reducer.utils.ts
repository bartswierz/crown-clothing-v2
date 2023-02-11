import { AnyAction } from "redux";

export type ActionWithPayload<T, P> = {
  type: T;
  payload: P;
};

//Without Payload
export type Action<T> = {
  type: T;
};

/* When overloading, functions MUST HAVE THE SAME NUMBER OF PARAMETERS*/
export function createAction<T extends string, P>(type: T, payload: P): ActionWithPayload<T, P>;

export function createAction<T extends string>(type: T, payload: void): Action<T>;

//This will get a type and a payload. This is the same as the below
export function createAction<T extends string, P>(type: T, payload: P) {
  return { type, payload };
}

// export const createAction = (type, payload) => ({ type, payload });
