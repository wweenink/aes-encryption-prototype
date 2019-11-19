import { Component } from '@angular/core';
import { EncryptDecryptService } from '../services/encrypt.decrypt.service';
import * as CryptoJS from 'crypto-js';

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
    var key = CryptoJS.lib.WordArray.random(128/8);
    var iv = CryptoJS.lib.WordArray.random(128/8);  
  
    var message = "Dit is geheim !@#$%^&*() 0123456789"
    this.encrypted = this.EncrDecr.encrypt(key, iv, message);
    this.decrypted = this.EncrDecr.decrypt(key, iv, this.encrypted);
    }
}
