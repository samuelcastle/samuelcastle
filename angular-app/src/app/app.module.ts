import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

import { MatButtonModule, MatCardModule, MatIconModule } from '@angular/material'
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppComponent } from './app.component'

import { HomeComponent } from './home/home.component'
import { OverviewComponent } from './overview/overview.component'
import { TopicsListComponent} from './topics/topics-list.component'

import { TopicThumbnailComponent } from './topics/topic-thumbnail.component'
import { ErrorPageComponent } from './error/error-page.component'


@NgModule({
  
  declarations: [
    AppComponent, 

    HomeComponent,
    OverviewComponent,
    TopicsListComponent, 
    TopicThumbnailComponent,

    ErrorPageComponent

  ],
  
  imports: [
    MatButtonModule, BrowserModule, BrowserAnimationsModule, MatCardModule, MatIconModule, MatToolbarModule, MatMenuModule,
    
    RouterModule.forRoot([

      { path: 'home', component: HomeComponent },
      { path: 'overview', component: OverviewComponent },
      { path: 'topics', component: TopicsListComponent },
      
      { path: '', redirectTo: 'home', pathMatch: 'full'},
      { path: 'error', component: ErrorPageComponent },

      /* { path: 'tasks', component: TaskListComponent},
      { path: 'tasks/:id', component: TaskDetailComponent }, */

      { path: '**', redirectTo: 'error', pathMatch: 'full' }

    ])
  ],
  
  providers: [

  ],
  
  bootstrap: [
  	AppComponent
  ]

})

export class AppModule { }
