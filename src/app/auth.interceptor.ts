import {Injectable} from "@angular/core";
import {HttpEvent, HttpHandler, HttpRequest, HttpClient, HttpResponse} from "@angular/common/http";
import {HttpInterceptor} from "@angular/common/http";
import { Observable,throwError,of } from 'rxjs';
import { ApiService } from './api.service';

import { catchError,mergeMap,flatMap, tap,switchMap } from 'rxjs/operators';

import { Router } from '@angular/router';


@Injectable()
export class AuthInterceptor implements HttpInterceptor
{

token:string='';


    constructor(public http: HttpClient,private authService : ApiService,private router :Router) { }


    intercept(req: HttpRequest<any>, next: HttpHandler):Observable<HttpEvent<any>>
    {
      if(this.authService.token){
        this.token=this.authService.token;
}

       if(this.token!==null){
       req= this.addToken(req,this.token);
       }
     console.log('i m first req',req);
       return  next.handle(req)
    }

 addToken(req:HttpRequest<any>,token:string){
      console.log(token);
    req=req.clone({
        setHeaders:{
            'Authorization':'Bearer ' + token
        }
    });
    return req;
}

}

