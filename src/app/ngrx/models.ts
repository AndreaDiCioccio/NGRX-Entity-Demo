import { EntityState } from '@ngrx/entity';

export interface User{
    id:number
    name:string
    age:number
}


export function compareUsers(u1:User, u2:User){

    const compare = u1.age - u2.age;

    if (compare > 0) {
        return 1;
    }else if ( compare < 0) {
        return -1;
    }else return 0;

}

export interface StoreState{
    users:any
}

export interface UsersState extends EntityState<User>{}