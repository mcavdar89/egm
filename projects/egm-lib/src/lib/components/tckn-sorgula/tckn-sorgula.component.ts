import { Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TcknSrogulaService } from '../../services/tckn-srogula.service';

@Component({
  selector: 'app-tckn-sorgula',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './tckn-sorgula.component.html',
  styleUrls: ['./tckn-sorgula.component.css']
})
export class TcknSorgulaComponent implements OnInit {


  tckn: number | any;
  tcknSorgulaService:TcknSrogulaService;
  @Output() sahisBilgisi:EventEmitter<string> = new EventEmitter<string>();
  constructor() { 
    this.tcknSorgulaService = inject(TcknSrogulaService);
  }

  ngOnInit() {
  }
  tcknSorgula(){
    this.tcknSorgulaService.get(this.tckn).subscribe(resp=>{
      if(!resp.isSuccess){
        alert(resp.message);
        return;
      }
      this.sahisBilgisi.emit(resp.data);

    })
  }

}
