import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostCreateComponent } from '../post-create/post-create.component';
import { PostListComponent } from '../post-list/post-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { VelovComponent } from '../velov/velov.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [PostCreateComponent, PostListComponent, VelovComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    RouterModule,
    FlexLayoutModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCDtQpWIaVdnBubt8zkdedrXEwhytjDMz0'
    })
  ]
})
export class PostsModule {}
