import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { ServersComponent } from './servers/servers.component';
import { ServerComponent } from './servers/server/server.component';
import { NavComponent } from './Page/nav/nav.component';
import { ShowcaseComponent } from './Page/showcase/showcase.component';
import { FooterComponent } from './Page/footer/footer.component';
import { TodosComponent } from './todos/todos.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoService } from './todo.service';
import { HeaderComponent } from './header/header.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { AppRoutingModule } from './app-routing.module';
import { AboutComponent } from './About/About.component';
import { ContactComponent } from './contact/contact.component';
import { BasicHighLightDirective } from './basic-highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    ServersComponent,
    ServerComponent,
    NavComponent,
    ShowcaseComponent,
    FooterComponent,
    TodosComponent,
    TodoItemComponent,
    HeaderComponent,
    AddTodoComponent,
      AboutComponent,
      ContactComponent,
      BasicHighLightDirective
   ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
