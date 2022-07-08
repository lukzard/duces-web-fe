import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './common/not-found/not-found.component';
import { BlogDetailsComponent } from './pages/blog-details/blog-details.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { ProjectsDetailsComponent } from './pages/projects-details/projects-details.component';
import { ServicesDetailsComponent } from './pages/services-details/services-details.component';
import { TermsConditionsComponent } from './pages/terms-conditions/terms-conditions.component';
import { DucesAiComponent } from './pages/duces-ai/duces-ai.component';

const routes: Routes = [
    {path: 'duces-ai', component: DucesAiComponent},
    {path: 'privacy-policy', component: PrivacyPolicyComponent},
    {path: 'terms-conditions', component: TermsConditionsComponent},
    {path: 'services-details', component: ServicesDetailsComponent},
    {path: 'projects-details', component: ProjectsDetailsComponent},
    {path: 'blog-details', component: BlogDetailsComponent},
    // Here add new pages component
    { path: '',   redirectTo: '/duces-ai', pathMatch: 'full' },
    {path: '**', component: NotFoundComponent} // This line will remain down from the whole pages component list
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { anchorScrolling: 'enabled' })],
    exports: [RouterModule]
})
export class AppRoutingModule { }