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
import { HomeJobComponent } from './pages/home-job/home-job.component';
import { CompanyHomeComponent } from './pages/company-home/company-home.component';
import { JobDetailComponent } from './pages/job-detail/job-detail.component';
import { CompanyDetailComponent } from './pages/company-detail/company-detail.component';
import { CompanyAdminComponent } from './pages/company-admin/company-admin.component';
import { JobAdminComponent } from './pages/job-admin/job-admin.component';

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
    path: 'job',
    component: HomeJobComponent,
  },
  {
    path: 'company',
    component: CompanyHomeComponent,
  },
  {
    path: 'job/:id',
    component: JobDetailComponent,
  },
  {
    path: 'company/:id',
    component: CompanyDetailComponent,
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
      },
       {
        path: 'company',
        component: CompanyAdminComponent
      },
      {
        path: 'job',
        component: JobAdminComponent
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
