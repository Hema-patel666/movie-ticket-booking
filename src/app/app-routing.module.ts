import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './admin/login/login.component';
import { HomeComponent } from './admin/home/home.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { ListmovieComponent } from './admin/listmovie/listmovie.component';
import { TheaterComponent } from './admin/theater/theater.component';
import { MoviedetailsComponent } from './admin/moviedetails/moviedetails.component';
import { MovieComponent } from './admin/movie/movie.component';



const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent },
    { path: 'movie', component: MovieComponent },
    { path: 'details', component: MoviedetailsComponent },
    { path: 'list', component: ListmovieComponent },
    { path: 'theater', component: TheaterComponent },
    { path: 'dashboard', component: DashboardComponent }

]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
  
})

export class AppRoutingModule { }