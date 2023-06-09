import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list'; 

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CadastroBadgeProfessorComponent } from './component/dashboard/cadastro-badge-professor/cadastro-badge-professor.component';
import { NivelBadgeComponent } from './component/dashboard/cadastro-badge-professor/nivel-badge/nivel-badge.component';
import { TipoBadgeComponent } from './component/dashboard/cadastro-badge-professor/tipo-badge/tipo-badge.component';
import { BotaoCadastrarComponent } from './component/dashboard/cadastro-badge-professor/botao-cadastrar/botao-cadastrar.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastroBadgeProfessorComponent,
    NivelBadgeComponent,
    TipoBadgeComponent,
    BotaoCadastrarComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
