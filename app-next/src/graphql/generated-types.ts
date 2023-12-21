import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | undefined;
export type InputMaybe<T> = T | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: any; output: any; }
};

export type CreateMyuserInput = {
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createMyuser: Myuser;
  removeMyuser?: Maybe<Myuser>;
  updateMyuser: Myuser;
};


export type MutationCreateMyuserArgs = {
  createMyuserInput: CreateMyuserInput;
};


export type MutationRemoveMyuserArgs = {
  id: Scalars['ID']['input'];
};


export type MutationUpdateMyuserArgs = {
  updateMyuserInput: UpdateMyuserInput;
};

export type Myuser = {
  __typename?: 'Myuser';
  created_at: Scalars['Date']['output'];
  id: Scalars['ID']['output'];
  password: Scalars['String']['output'];
  updated_at: Scalars['Date']['output'];
  username: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  myuser?: Maybe<Myuser>;
  myusers: Array<Maybe<Myuser>>;
  todos: Array<Todo>;
};


export type QueryMyuserArgs = {
  id: Scalars['ID']['input'];
};

export type Todo = {
  __typename?: 'Todo';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  title: Scalars['String']['output'];
};

export type UpdateMyuserInput = {
  created_at: Scalars['Date']['input'];
  id: Scalars['ID']['input'];
};

export type MyusersAndTodsQueryVariables = Exact<{ [key: string]: never; }>;


export type MyusersAndTodsQuery = { __typename?: 'Query', myusers: Array<{ __typename?: 'Myuser', id: string, username: string, password: string, created_at: any, updated_at: any } | undefined>, todos: Array<{ __typename?: 'Todo', id: string, title: string, description?: string | undefined }> };

export type TodosQueryVariables = Exact<{ [key: string]: never; }>;


export type TodosQuery = { __typename?: 'Query', todos: Array<{ __typename?: 'Todo', id: string, title: string, description?: string | undefined }> };


export const MyusersAndTodsDocument = gql`
    query MyusersAndTods {
  myusers {
    id
    username
    password
    created_at
    updated_at
  }
  todos {
    id
    title
    description
  }
}
    `;
export function useMyusersAndTodsQuery(baseOptions?: Apollo.QueryHookOptions<MyusersAndTodsQuery, MyusersAndTodsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MyusersAndTodsQuery, MyusersAndTodsQueryVariables>(MyusersAndTodsDocument, options);
      }
export function useMyusersAndTodsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MyusersAndTodsQuery, MyusersAndTodsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MyusersAndTodsQuery, MyusersAndTodsQueryVariables>(MyusersAndTodsDocument, options);
        }
export type MyusersAndTodsQueryHookResult = ReturnType<typeof useMyusersAndTodsQuery>;
export type MyusersAndTodsLazyQueryHookResult = ReturnType<typeof useMyusersAndTodsLazyQuery>;
export type MyusersAndTodsQueryResult = Apollo.QueryResult<MyusersAndTodsQuery, MyusersAndTodsQueryVariables>;
export const TodosDocument = gql`
    query Todos {
  todos {
    id
    title
    description
  }
}
    `;
export function useTodosQuery(baseOptions?: Apollo.QueryHookOptions<TodosQuery, TodosQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TodosQuery, TodosQueryVariables>(TodosDocument, options);
      }
export function useTodosLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TodosQuery, TodosQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TodosQuery, TodosQueryVariables>(TodosDocument, options);
        }
export type TodosQueryHookResult = ReturnType<typeof useTodosQuery>;
export type TodosLazyQueryHookResult = ReturnType<typeof useTodosLazyQuery>;
export type TodosQueryResult = Apollo.QueryResult<TodosQuery, TodosQueryVariables>;
export const namedOperations = {
  Query: {
    MyusersAndTods: 'MyusersAndTods',
    Todos: 'Todos'
  }
}