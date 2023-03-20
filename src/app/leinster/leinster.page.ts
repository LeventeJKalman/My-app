import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-leinster',
  templateUrl: './leinster.page.html',
  styleUrls: ['./leinster.page.scss'],
})
export class LeinsterPage implements OnInit {

  constructor(private navCtrl:NavController) { }

  openCounties(){
    this.navCtrl.navigateForward('/leinster-counties');
  }

  ngOnInit() {
  }

}
