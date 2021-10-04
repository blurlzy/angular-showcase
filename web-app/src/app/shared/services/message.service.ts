import { Injectable } from '@angular/core';


@Injectable({
    providedIn: 'root'
})
export class MessageService {
    //MESSAGE_CN = (messageCN as any).default;

    // public methods
    // extract message from http response
    retreiveError(response: any): string {
        console.error(response);
        if (response === null || response === undefined) {
            return 'System Error.';
        }

        // return response error 
        if (response.error === null || response.error === undefined) {
            return 'System Error.';
        }

        const message = response.error?.error;
        if (message == null || message == undefined) {
            return response.message;
        }

        return message;
    }

}
