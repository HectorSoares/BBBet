import {Action} from 'redux';

export interface User {
    name: string;
    id: string;
}

export interface CurrentPage {
    name: string;
}

export type ApplicationAction = User | CurrentPage;