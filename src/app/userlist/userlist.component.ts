import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { HttpClient } from '@angular/common/http';
import { ExcelServicesService } from '../excel-services.service'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  

ngOnInit(){  
  }  
   excel=[];  
    constructor(private excelService:ExcelServicesService,private http: HttpClient,private ApiService:ApiService){  
      this.getJSON();
    }  
      
    exportAsXLSX():void {  
       this.excelService.exportAsExcelFile(this.excel, 'sample');  
    }  
    
    public getJSON(): Observable<any> {  
      return this.ApiService.userlist.forEach(row => {  
          this.excel.push(row);  
        });;  
    }  
}  