import { QuicklinkModule, QuicklinkStrategy } from 'ngx-quicklink';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import {HomeModule} from './home/home.module';
import {AboutModule} from './about/about.module';
import { AdminModule } from './admin/admin.module';
import { CustomePreloadingStrategyService } from './core/custome-preloading-strategy.service';


const routes: Routes = [{
  path: '',
  pathMatch:'full',
  redirectTo: 'home'
},
{
  path: 'home',
  loadChildren: () => import('./home/home.module').then((m) => HomeModule), data: {
    shouldPreload: true
  }
},
{
  path:'about',
  loadChildren: () => import('./about/about.module').then((m) => AboutModule), 
  data: {
    shouldPreload: true
  }
},
{
  path: 'admin',
  loadChildren: () => import('./admin/admin.module').then((m)=> AdminModule)
}
];

@NgModule({
  imports: [
    QuicklinkModule,
    RouterModule.forRoot(routes, {
    // preloadingStrategy: PreloadAllModules
    // preloadingStrategy: CustomePreloadingStrategyService
    preloadingStrategy: QuicklinkStrategy

  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
