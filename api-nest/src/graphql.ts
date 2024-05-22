
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface CreateMyuserInput {
    username: string;
    password: string;
}

export interface UpdateMyuserInput {
    id: string;
    created_at: Date;
}

export interface Myuser {
    id: string;
    username: string;
    password: string;
    created_at: Date;
    updated_at: Date;
}

export interface IQuery {
    myusers(): Nullable<Myuser>[] | Promise<Nullable<Myuser>[]>;
    myuser(id: string): Nullable<Myuser> | Promise<Nullable<Myuser>>;
    todos(): Todo[] | Promise<Todo[]>;
}

export interface IMutation {
    createMyuser(createMyuserInput: CreateMyuserInput): Myuser | Promise<Myuser>;
    updateMyuser(updateMyuserInput: UpdateMyuserInput): Myuser | Promise<Myuser>;
    removeMyuser(id: string): Nullable<Myuser> | Promise<Nullable<Myuser>>;
}

export interface Todo {
    id: string;
    title: string;
    description?: Nullable<string>;
}

type Nullable<T> = T | null;
