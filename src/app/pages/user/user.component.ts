import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { UserService } from 'src/app/service/user/user.service';
import { User } from 'src/app/types/user.type';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DialogEditUserComponent } from './dialog-edit-user/dialog-edit-user.component';
import { DialogDeleteUserComponent } from './dialog-delete-user/dialog-delete-user.component';
import { DialogCreateUserComponent } from './dialog-create-user/dialog-create-user.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit, AfterViewInit {
  constructor(private userService: UserService, public dialog: MatDialog) {}
  tableUserSearch = new FormGroup({
    search: new FormControl('')
  });
  public value = '';
  public user: User[] = [];
  public total = 0;
  public limit = 10;
  public page = 1;
  public displayedColumns: string[] = [
    'email',
    'first_name',
    'id',
    'last_name',
    'role',
    'updated_at',
    'created_at',
    'action'
  ];
  public dataSource = new MatTableDataSource<User>(this.user);
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit() {
    this.getUser(this.limit, this.page);
  }

  ngAfterViewInit() {}

  getUser(limit: number, page: number, search?: string) {
    this.userService.AllUserApi(limit, page, search).subscribe(
      res => {
        console.log(res);
        const { data, total, currentPage, prevPage, nextPage } = res;
        this.dataSource = new MatTableDataSource(data);
        this.total = total;
      },
      err => {
        console.log(err);
      }
    );
  }

  handlePageEvent(event: PageEvent) {
    console.log(event);
    this.getUser(this.limit, event.pageIndex + 1);
  }

  onSubmit() {
    const searchValue = this.tableUserSearch.controls.search.value || undefined;
    this.getUser(this.limit, this.page, searchValue);
  }

  Refresh() {
    this.getUser(this.limit, this.page);
  }

  create() {
    const dialogRef = this.dialog.open(DialogCreateUserComponent, {
      width: '550px',
      height: '500px'
    });
  }

  edit(element: any) {
    const dialogRef = this.dialog.open(DialogEditUserComponent, {
      width: '550px',
      height: '500px',
      data: { element }
    });
  }

  delete(element: any) {
    const dialogRef = this.dialog.open(DialogDeleteUserComponent, {
      width: '400px',
      height: '200px',
      data: { element }
    });
  }
}
