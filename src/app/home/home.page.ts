import { Component } from '@angular/core';
import { VaultMigrator } from '@ionic-enterprise/identity-vault';
import { VaultService, VaultServiceState } from '../vault.service';
import { ScreenOrientation } from '@ionic-enterprise/screen-orientation/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public state: VaultServiceState;

  constructor(private vaultService: VaultService, private screenOrientation: ScreenOrientation) {
    this.state = vaultService.state;
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT_PRIMARY);
  }

  async setSession(data: string) {
    await this.vaultService.setSession(data);
  }

  async restoreSession() {
    await this.vaultService.restoreSession();
  }

  lockVault() {
    this.vaultService.lockVault();
  }

  unlockVault() {
    this.vaultService.unlockVault().then(res => {
      console.log(res);
    }).catch(err => {
      console.log(err);
    }).finally(() => {
      console.log('Unlock completed');
    });
  }

  setLockType() {
    this.vaultService.setLockType();
  }

  setPrivacyScreen() {
    this.vaultService.setPrivacyScreen(this.state.privacyScreen);
  }

  clearVault() {
    this.vaultService.clearVault();
  }

  async migrateVault() {
    this.vaultService.migrateVault();
  }

  checkEmpty() {
    this.vaultService.checkEmpty();
  }

  toggleorientation() {
    this.screenOrientation.unlock();
    if (this.screenOrientation.type === this.screenOrientation.ORIENTATIONS.PORTRAIT_PRIMARY) {
      this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE_PRIMARY);
    }else {
      this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT_PRIMARY);
    }
  }
}
