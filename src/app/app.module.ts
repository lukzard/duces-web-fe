import { TabsModule } from 'ngx-tabset';
import { NgModule } from '@angular/core';
import { AccordionModule } from "ngx-accordion";
import { StickyNavModule } from 'ng2-sticky-nav';
import { NgxScrollTopModule } from 'ngx-scrolltop';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgxSmartModalModule } from 'ngx-smart-modal';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';  
import { HttpClientModule } from '@angular/common/http';

import { ContactService } from './services/contact.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PartnerComponent } from './common/partner/partner.component';
import { CtaComponent } from './common/cta/cta.component';
import { WorkProcessComponent } from './common/work-process/work-process.component';
import { NotFoundComponent } from './common/not-found/not-found.component';
import { FunfactsComponent } from './common/funfacts/funfacts.component';
import { InstagramComponent } from './common/instagram/instagram.component';
import { SubscribeComponent } from './common/subscribe/subscribe.component';
import { ProjectsDetailsComponent } from './pages/projects-details/projects-details.component';
import { ServicesDetailsComponent } from './pages/services-details/services-details.component';
import { BlogDetailsComponent } from './pages/blog-details/blog-details.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { TermsConditionsComponent } from './pages/terms-conditions/terms-conditions.component';
import { DucesAiComponent } from './pages/duces-ai/duces-ai.component';
import { AiBannerComponent } from './pages/duces-ai/ai-banner/ai-banner.component';
import { AiServicesComponent } from './pages/duces-ai/ai-services/ai-services.component';
import { AiTechComponent } from './pages/duces-ai/ai-tech/ai-tech.component';
import { AiAboutComponent } from './pages/duces-ai/ai-about/ai-about.component';
import { AiFunfactsComponent } from './pages/duces-ai/ai-funfacts/ai-funfacts.component';
import { AiContactComponent } from './pages/duces-ai/ai-contact/ai-contact.component';
import { AiHowWeWorkComponent } from './pages/duces-ai/ai-how-we-work/ai-how-we-work.component';


@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        FooterComponent,
        PartnerComponent,
        CtaComponent,
        WorkProcessComponent,
        NotFoundComponent,
        FunfactsComponent,
        InstagramComponent,
        SubscribeComponent,
        ProjectsDetailsComponent,
        ServicesDetailsComponent,
        BlogDetailsComponent,
        PrivacyPolicyComponent,
        TermsConditionsComponent,
        DucesAiComponent,
        AiBannerComponent,
        AiServicesComponent,
        AiTechComponent,
        AiAboutComponent,
        AiFunfactsComponent,
        AiContactComponent,
        AiHowWeWorkComponent,
    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        AppRoutingModule,
        CarouselModule,
        BrowserAnimationsModule,
        StickyNavModule,
        NgxSmartModalModule.forRoot(),
        NgxScrollTopModule,
        TabsModule.forRoot(),
        AccordionModule
    ],
    providers: [ContactService],
    bootstrap: [AppComponent]
})
export class AppModule { }