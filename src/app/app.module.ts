import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContactComponent } from './contact/contact.component';
import { PersonalStatementComponent } from './personal-statement/personal-statement.component';
import { CarrerGoalsComponent } from './carrer-goals/carrer-goals.component';
import { SkillsComponent } from './skills/skills.component';
import { EducationComponent } from './education/education.component';
import { RecognitionsComponent } from './recognitions/recognitions.component';
import { ExperienceComponent } from './experience/experience.component';
import { ProjectsComponent } from './projects/projects.component';
import { AchievementsComponent } from './achievements/achievements.component';
import { InterestsComponent } from './interests/interests.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    PersonalStatementComponent,
    CarrerGoalsComponent,
    SkillsComponent,
    EducationComponent,
    RecognitionsComponent,
    ExperienceComponent,
    ProjectsComponent,
    AchievementsComponent,
    InterestsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
