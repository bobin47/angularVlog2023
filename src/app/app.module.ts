import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { UserComponent } from './pages/user/user.component';
import { AdminComponent } from './pages/admin/admin.component';
import { LoginComponent } from './pages/login/login.component';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSelectModule } from '@angular/material/select';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { CategoryAdminComponent } from './pages/category-admin/category-admin.component';
import { PostAdminComponent } from './pages/post-admin/post-admin.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AuthInterceptor } from './service/interceptor/Interceptor';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { DialogEditUserComponent } from './pages/user/dialog-edit-user/dialog-edit-user.component';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogDeleteUserComponent } from './pages/user/dialog-delete-user/dialog-delete-user.component';
import { DialogCreateUserComponent } from './pages/user/dialog-create-user/dialog-create-user.component';
import { EditCategoryDialogComponent } from './pages/category-admin/edit-category-dialog/edit-category-dialog.component';
import { CreateCategoryDialogComponent } from './pages/category-admin/create-category-dialog/create-category-dialog.component';
import { DeleteCategoryDialogComponent } from './pages/category-admin/delete-category-dialog/delete-category-dialog.component';
import { DeletePostDialogComponent } from './pages/post-admin/delete-post-dialog/delete-post-dialog.component';
import { CreatePostDialogComponent } from './pages/post-admin/create-post-dialog/create-post-dialog.component';
import { EditPostDialogComponent } from './pages/post-admin/edit-post-dialog/edit-post-dialog.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import {MatChipsModule} from '@angular/material/chips';
import { CardComponent } from './components/card/card.component';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { DetailpostComponent } from './pages/detailpost/detailpost.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { DialogEditPostComponent } from './components/card/dialog-edit-post/dialog-edit-post.component';
import { DialogDeletepostPostComponent } from './components/card/dialog-deletepost-post/dialog-deletepost-post.component';
import { CreatePostComponent } from './pages/profile/create-post/create-post.component';
import { EditProfileComponent } from './pages/profile/edit-profile/edit-profile.component';
import { DeleteProfileComponent } from './pages/profile/delete-profile/delete-profile.component';
import { HomeJobComponent } from './pages/home-job/home-job.component';
import { CompanyHomeComponent } from './pages/company-home/company-home.component';
import { JobDetailComponent } from './pages/job-detail/job-detail.component';
import { CompanyDetailComponent } from './pages/company-detail/company-detail.component';
import { CompanyAdminComponent } from './pages/company-admin/company-admin.component';
import { JobAdminComponent } from './pages/job-admin/job-admin.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {NgxPaginationModule} from 'ngx-pagination';
import { CreateCompanyComponent } from './pages/company-admin/create-company/create-company.component';
import { EditCompanyComponent } from './pages/company-admin/edit-company/edit-company.component';
import { DeleteCompanyComponent } from './pages/company-admin/delete-company/delete-company.component';
import { CreateJobComponent } from './pages/job-admin/create-job/create-job.component';
import { EditJobComponent } from './pages/job-admin/edit-job/edit-job.component';
import { DeleteJobComponent } from './pages/job-admin/delete-job/delete-job.component';
import { CompanyCardComponent } from './components/company-card/company-card.component';
import { JobCardComponent } from './components/job-card/job-card.component';
import { ApplyVcComponent } from './pages/home-job/apply-vc/apply-vc.component';
import { ReviewCvComponent } from './pages/job-admin/review-cv/review-cv.component';
import { DialogVcComponent } from './components/job-card/dialog-vc/dialog-vc.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    HomeComponent,
    UserComponent,
    AdminComponent,
    LoginComponent,
    PagenotfoundComponent,
    HeaderComponent,
    FooterComponent,
    CategoryAdminComponent,
    PostAdminComponent,
    DashboardComponent,
    DialogEditUserComponent,
    DialogDeleteUserComponent,
    DialogCreateUserComponent,
    EditCategoryDialogComponent,
    CreateCategoryDialogComponent,
    DeleteCategoryDialogComponent,
    DeletePostDialogComponent,
    CreatePostDialogComponent,
    EditPostDialogComponent,
    CardComponent,
    DetailpostComponent,
    ProfileComponent,
    DialogEditPostComponent,
    DialogDeletepostPostComponent,
    CreatePostComponent,
    EditProfileComponent,
    DeleteProfileComponent,
    HomeJobComponent,
    CompanyHomeComponent,
    JobDetailComponent,
    CompanyDetailComponent,
    CompanyAdminComponent,
    JobAdminComponent,
    CreateCompanyComponent,
    EditCompanyComponent,
    DeleteCompanyComponent,
    CreateJobComponent,
    EditJobComponent,
    DeleteJobComponent,
    CompanyCardComponent,
    JobCardComponent,
    ApplyVcComponent,
    ReviewCvComponent,
    DialogVcComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatButtonModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatSelectModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    CKEditorModule,
    MatChipsModule,
    MatCardModule,
    MatGridListModule,
    MatDatepickerModule,
    MatNativeDateModule,
    NgxPaginationModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
