import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ConverterComponent } from './converter/converter.component';
import { DummyComponent } from './dummy/dummy.component';

const routes: Routes = [
  { path: '', component: ConverterComponent },
  { path: 'about', component: AboutComponent },
  { path: 'dummy', component: DummyComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
