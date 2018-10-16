import { Injectable, EventEmitter } from '@angular/core';
@Injectable({
    providedIn: 'root'
})

export class CommunicationService {
    receivedFilter: EventEmitter<Number>;
    constructor(){
       this.receivedFilter = new EventEmitter<Number>();
    }
    raiseEvent(catId){
        this.receivedFilter.emit(catId);
    }
}