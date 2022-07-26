import { Component } from '@angular/core';
import { VaultMigrator } from '@ionic-enterprise/identity-vault';
import { VaultService, VaultServiceState } from '../vault.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public state: VaultServiceState;

  constructor(private vaultService: VaultService) {
    this.state = vaultService.state;
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
    this.vaultService.unlockVault();
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
}
