import { Injectable } from '@angular/core';
declare let alertify: any;

@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

constructor() { }

// tslint:disable-next-line: typedef
confirm(message: string, okCallback: () => any){
  alertify.confirm(message, function(e){
    if (e){
      okCallback();
    } else{}
  });
}

error(message: string) {
  alertify.console.error();
  (message);
}

warning(message: string) {
  alertify.warning(message);
}

message(message: string) {
  alertify.message(message);
}

success(message: string) {
  alertify.success(message);
}
 
}
