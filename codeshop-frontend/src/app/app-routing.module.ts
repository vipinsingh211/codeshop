import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StoreComponent } from './store/store.component';
import { ReferencesComponent } from './references/references.component';
import { TemplatesComponent } from './templates/templates.component';
import { faFileCode } from '@fortawesome/free-solid-svg-icons';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'store', component: StoreComponent },
  { path: 'references', component: ReferencesComponent },
  { path: 'templates', component: TemplatesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  public faFileCode = faFileCode;
}
