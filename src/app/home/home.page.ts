import { Component } from '@angular/core';
import { EncryptDecryptService } from '../services/encrypt.decrypt.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private EncrDecr: EncryptDecryptService) {   }

  public encrypted;
  public decrypted;

  ngOnInit() {
    var key = "123456$#@$^@1ERF"
    var message = "Dit bericht is geheim !@#$%^&*() 0123456789 -=[];',./_+{}:|<>?"
    this.encrypted = this.EncrDecr.encrypt(key, message);
    this.decrypted = this.EncrDecr.decrypt(key, this.encrypted);
    }
}
