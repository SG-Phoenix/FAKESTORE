import { FormGroup, FormsModule } from '@angular/forms';
import { Category } from './../category';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, EventEmitter, Query } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';

class QueryParams
{
    minPrice?:number=0;
    maxPrice?:number=Infinity;
    category?:string;
}

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {

  private paramsChange: EventEmitter<any> = new EventEmitter();

  constructor(
    private productService:ProductService,
    private activatedRoute:ActivatedRoute,
    private router: Router
    ) { }

  products?:Product[];

  queryParams:QueryParams = {

  };


  categoryList?:any[];

  ngOnInit(): void {
    this.getCategories();
    this.updateQueryParams();
  }


  getProducts(params:Object)
  {
    this.productService.getFilteredProducts(params).subscribe(
      products => {this.products = products;console.log("prodotti caricati");console.log(products)}
    );
  }

  updateQueryParams()
  {
    this.activatedRoute.queryParams.subscribe( params =>
      {
          this.queryParams=Object.assign({}, params);
          this.getProducts(this.queryParams);
          console.log(this.queryParams)
      })
  }

  reloadResults()
  {

      let categories = "";
      this.categoryList?.forEach(category => {if (category.checked) categories+=category.name+","})
      categories = categories.slice(0, -1);
      if(categories)
        this.queryParams.category=categories;
      else
        delete this.queryParams.category;
      console.log(this.queryParams);
      this.router.navigate([], {
      relativeTo: this.activatedRoute,
      queryParams: this.queryParams
    });
  }

  getCategories()
  {
      this.productService.getCategories().subscribe(categories => this.categoryList=categories);
  }

}
