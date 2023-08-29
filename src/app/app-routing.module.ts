import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { UserComponent } from './pages/user/user.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { AdminComponent } from './pages/admin/admin.component';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';
import { AuthGuard } from './guards/auth.guard';
import { AdminGuard } from './guards/admin.guard';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PostAdminComponent } from './pages/post-admin/post-admin.component';
import { CategoryAdminComponent } from './pages/category-admin/category-admin.component';
import { CreatePostDialogComponent } from './pages/post-admin/create-post-dialog/create-post-dialog.component';
import { DetailpostComponent } from './pages/detailpost/detailpost.component';
import { ProfileComponent } from './pages/profile/profile.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path:'detail/:id',
    component:DetailpostComponent
  },
  {
    path:'profile',
    component:ProfileComponent
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate:[AdminGuard],
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'user',
        component: UserComponent
      },
      {
        path: 'post',
        component: PostAdminComponent,
      },
      {
        path: 'category',
        component: CategoryAdminComponent
      }
    ]
  },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
