
import { NgModule } from '@angular/core';
import { RouterModule, PreloadAllModules, Router } from '@angular/router';
import { RepoUserComponent } from './components/repo-user/repo-user.component';
import { ToolsComponent } from './components/tools/tools.component';
import { MarketComponent } from './components/market/market.component';
import { NewsComponent } from './components/news/news.component';
import { ProductsComponent } from './components/products/products.component';
import { FormComponent } from './components/form/form.component';

@NgModule({
    imports: [
        RouterModule.forRoot([            
            {path: 'news',component: NewsComponent},
            {path: 'market',component: MarketComponent},
            {path: 'tools',component: ToolsComponent},
            {path: 'repoUser',component: RepoUserComponent},
            {path: 'products',component: ProductsComponent},
            {path: 'forms',component: FormComponent},
            {path: '',component: RepoUserComponent},
            { 
                path: '**', 
                redirectTo: '', 
                pathMatch: 'full'
                // wild card match should be  at last only
                // pathMatch : full - strictly matches for the whole url 
            }
        ])
    ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }