
import { MatListModule, MatListOption, MatSelectionListChange } from '@angular/material/list';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, EventEmitter, Query } from '@angular/core';
import { ProductService } from '../../../service/product.service';
import { Product } from '../../../model/product';
import { PageEvent } from '@angular/material/paginator';

interface QueryParams {
  pageSize:number;
  page:number;
  minPrice?:number;
  maxPrice?:number;
  category?:string;
}
interface CategoryParams {
  category: string;
  checked: boolean;
}

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {

  private paramsChange: EventEmitter<any> = new EventEmitter();

  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
      this.page=0;
      this.pageSize=5;
      this.productsNumber=0;
      this.pagesNumber=0;
      this.searchString="";
      this.productService.getCategories().subscribe(
        categories => {
          categories.forEach(category => {
            this.categoryList.push({ category: category.name, checked: this.selectedCategories.indexOf(category.name) !== -1 });
        });
      }
    );

    this.activatedRoute.queryParamMap.subscribe(
      params => {
        this.selectedCategories = params.getAll("category");
        this.categoryList.forEach(categoryParam =>
          {
              var foundCategory = this.selectedCategories.find(selectedCategory => categoryParam.category===selectedCategory);
              if(foundCategory)
                categoryParam.checked=true;
              else
                categoryParam.checked=false;
          }
          );
        if(params.get("minPrice"))
          this.minPrice = parseInt(params.get("minPrice") || "");
        if(params.get("maxPrice"))
          this.maxPrice = parseInt(params.get("maxPrice") || "");

        this.searchString = params.get("name") || "";

        if(params.get("page"))
          this.page = parseInt(params.get("page") || "0");
        if(params.get("page"))
          this.pageSize = parseInt(params.get("pageSize") || "5");

        this.getProducts();
        //this.reloadResults();
      }
    )

  }

  products?: Product[];

  categoryList: CategoryParams[] = [];
  selectedCategories: string[] = [];
  page:number;
  pageSize:number;
  productsNumber:number;
  pagesNumber:number;
  minPrice?: number;
  maxPrice?: number;
  searchString:string;


  ngOnInit(): void {

  }

  changeCategories(list: MatListOption[]) {
    var selected = list.map(o => o.value);
    console.log(selected);
    this.selectedCategories = selected;
    this.changeResults();
  }

  changePrice() {
    this.changeResults()
  }

  changePage(event:PageEvent)
  {
    this.page=event.pageIndex;
    this.pageSize=event.pageSize;
    this.changePageResults();
  }

  private changeResults() {
    var options =
    {
      name: this.searchString,
      category: this.selectedCategories,
      minPrice: this.minPrice,
      maxPrice: this.maxPrice,
      page: 0,
      pageSize: this.pageSize
    }
    this.router.navigate([],
      {
        queryParams: options,
        queryParamsHandling: "merge"
      }
    );
  }

  private changePageResults() {
    var options =
    {
      name: this.searchString,
      category: this.selectedCategories,
      minPrice: this.minPrice,
      maxPrice: this.maxPrice,
      page: this.page,
      pageSize: this.pageSize
    }
    this.router.navigate([],
      {
        queryParams: options,
        queryParamsHandling: "merge"
      }
    );
  }

  getProducts()
  {
    var options =
    {
      name: this.searchString,
      category: this.selectedCategories,
      minPrice: this.minPrice,
      maxPrice: this.maxPrice,
      page:this.page,
      pageSize:this.pageSize
    }

    if(!this.minPrice)
      delete options.minPrice;

    if(!this.maxPrice)
      delete options.maxPrice;

    this.productService.getFilteredProducts(options)
    .subscribe(
      productPage =>
      {
        this.products = productPage.content;
        this.productsNumber = productPage.totalElements;
        this.pagesNumber = productPage.totalPages;
      });

  }


}
