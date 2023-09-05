import {
  AfterContentInit,
  Component,
  ContentChild,
  OnInit
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { PostService } from 'src/app/service/post/post.service';
import { CategoryService } from 'src/app/service/category/category.service';
import { CategoryType } from 'src/app/types/category.type';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(
    private categoryService: CategoryService,
    private postService: PostService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.getAllCategory();
    this.getAllPost(this.limit, this.page);
  }
  categoryList: CategoryType[] = [];
  selected = 0;
  postList = [];
  limit: number = 10;
  page: number = 1;
  total = 0;
  category = 0;

  PostSearch = new FormGroup({
    search: new FormControl('')
  });

  getAllCategory() {
    this.categoryService.CategoryApi().subscribe(res => {
      const newCategory = {
        name: 'All',
        id: 0,
        description: '',
        status: 1,
        created_at: '',
        updated_at: ''
      };
      this.categoryList = res.data;
      this.categoryList.unshift(newCategory);
    });
  }

  getAllPost(limit: number, page: number, search?: string, category?: number) {
    this.postService
      .GetAllPost(limit, page, search, category)
      .subscribe(res => {
        this.postList = res.data;
        this.total = res.total;
      });
  }

  onChipClick(category: CategoryType) {
    this.category = category.id;
    this.getAllPost(this.limit, this.page, undefined, category.id);
  }

  onSubmit() {
    const search = this.PostSearch.controls.search.value || undefined;
    this.getAllPost(this.limit, this.page, search, this.category);
  }

  pageChanged(event:any){
    this.page = event;
    this.getAllPost(this.limit, event);
  }

  naviagate(post: any) {
    const { id } = post;
    this.router.navigate([`/detail/${id}`]);
  }
}
