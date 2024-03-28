import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminmasterComponent } from './Admin/adminmaster/adminmaster.component';
import { AdminhomeComponent } from './Admin/adminhome/adminhome.component';
import { GuestmasterComponent } from './Guest/guest-master/guestmaster.component';
import { GuesthomeComponent } from './Guest/guesthome/guesthome.component';
import { LoginComponent } from './Guest/login/login.component';
import { DistrictregComponent } from './Admin/districtreg/districtreg.component';
import { LocationregComponent } from './Admin/locationreg/locationreg.component';
import { CategoryregComponent } from './Admin/categoryreg/categoryreg.component';
import { SubcategoryregComponent } from './Admin/subcategoryreg/subcategoryreg.component';
import { LocationviewComponent } from './Admin/locationview/locationview.component';
import { EditlocationComponent } from './Admin/editlocation/editlocation.component';
import { SubcategoryviewComponent } from './Admin/subcategoryview/subcategoryview.component';
import { SubcategoryeditComponent } from './Admin/subcategoryedit/subcategoryedit.component';
import { CategoryeditComponent } from './Admin/categoryedit/categoryedit.component';
import { CategoryviewComponent } from './Admin/categoryview/categoryview.component';
import { DistricteditComponent } from './Admin/districtedit/districtedit.component';
import { DistrictviewComponent } from './Admin/districtview/districtview.component';
import { ChooseroleComponent } from './Guest/chooserole/chooserole.component';
import { ClientregComponent } from './Guest/clientreg/clientreg.component';
import { FreelancerregComponent } from './Guest/freelancerreg/freelancerreg.component';
import { ClientMasterComponent } from './Client/client-master/client-master.component';
import { ClienthomeComponent } from './Client/clienthome/clienthome.component';
import { WorkpostComponent } from './Client/workpost/workpost.component';
import { ClientprofileComponent } from './Client/clientprofile/clientprofile.component';
import { FreelancermasterComponent } from './Freelancer/freelancermaster/freelancermaster.component';
import { FreelancerhomeComponent } from './Freelancer/freelancerhome/freelancerhome.component';
import { WorkdetailsComponent } from './Freelancer/workdetails/workdetails.component';
import { ClientviewworksComponent } from './Client/clientviewworks/clientviewworks.component';
import { FreelancerworkviewComponent } from './Freelancer/freelancerworkview/freelancerworkview.component';
import { WorkreqComponent } from './Freelancer/workreq/workreq.component';
import { WorkreqviewComponent } from './Client/workreqview/workreqview.component';
import { ViewrequestsComponent } from './Client/viewrequests/viewrequests.component';
import { MyrequestComponent } from './Freelancer/myrequest/myrequest.component';
import { RejectionReasonComponent } from './Client/rejection-reason/rejection-reason.component';
import { RejectviewComponent } from './Freelancer/rejectview/rejectview.component';
import { FreelancerprojectsComponent } from './Freelancer/freelancerprojects/freelancerprojects.component';
import { OngoingprojectviewComponent } from './Freelancer/ongoingprojectview/ongoingprojectview.component';
import { ClientprojectsComponent } from './Client/clientprojects/clientprojects.component';
import { ProgressviewComponent } from './Client/progressview/progressview.component';
import { PaymentComponent } from './Client/payment/payment.component';
import { FreelancerprofileComponent } from './Freelancer/freelancerprofile/freelancerprofile.component';
import { DatewisefreelancerComponent } from './Admin/datewisefreelancer/datewisefreelancer.component';
import { DatewiseclientComponent } from './Admin/datewiseclient/datewiseclient.component';
import { CategorywisefreelancerComponent } from './Admin/categorywisefreelancer/categorywisefreelancer.component';
import { CompanyverificationComponent } from './Admin/companyverification/companyverification.component';
import { PiechartcategoryComponent } from './Admin/piechartcategory/piechartcategory.component';
import { ClientprofileeditComponent } from './Client/clientprofileedit/clientprofileedit.component';
import { ClientchangepwdComponent } from './Client/clientchangepwd/clientchangepwd.component';
import { FreelancerprofileeditComponent } from './Freelancer/freelancerprofileedit/freelancerprofileedit.component';
import { FreelancerchangepwdComponent } from './Freelancer/freelancerchangepwd/freelancerchangepwd.component';
import { ForgotpwdComponent } from './Guest/forgotpwd/forgotpwd.component';
import { WorkeditComponent } from './Client/workedit/workedit.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminmasterComponent,
    AdminhomeComponent,
    GuestmasterComponent,
    GuesthomeComponent,
    LoginComponent,
    DistrictregComponent,
    LocationregComponent,
    CategoryregComponent,
    SubcategoryregComponent,
    LocationviewComponent,
    EditlocationComponent,
    SubcategoryviewComponent,
    SubcategoryeditComponent,
    CategoryeditComponent,
    CategoryviewComponent,
    DistricteditComponent,
    DistrictviewComponent,
    ChooseroleComponent,
    ClientregComponent,
    FreelancerregComponent,
    ClientMasterComponent,
    ClienthomeComponent,
    WorkpostComponent,
    ClientprofileComponent,
    FreelancermasterComponent,
    FreelancerhomeComponent,
    WorkdetailsComponent,
    ClientviewworksComponent,
    FreelancerworkviewComponent,
    WorkreqComponent,
    WorkreqviewComponent,
    ViewrequestsComponent,
    MyrequestComponent,
    RejectionReasonComponent,
    RejectviewComponent,
    FreelancerprojectsComponent,
    OngoingprojectviewComponent,
    ClientprojectsComponent,
    ProgressviewComponent,
    PaymentComponent,
    FreelancerprofileComponent,
    DatewisefreelancerComponent,
    DatewiseclientComponent,
    CategorywisefreelancerComponent,
    CompanyverificationComponent,
    PiechartcategoryComponent,
    ClientprofileeditComponent,
    ClientchangepwdComponent,
    FreelancerprofileeditComponent,
    FreelancerchangepwdComponent,
    ForgotpwdComponent,
    WorkeditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
