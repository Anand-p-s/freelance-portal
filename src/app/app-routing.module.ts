import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
import { CategoryviewComponent } from './Admin/categoryview/categoryview.component';
import { CategoryeditComponent } from './Admin/categoryedit/categoryedit.component';
import { DistrictviewComponent } from './Admin/districtview/districtview.component';
import { DistricteditComponent } from './Admin/districtedit/districtedit.component';
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
import { DatewiseclientComponent } from './Admin/datewiseclient/datewiseclient.component';
import { DatewisefreelancerComponent } from './Admin/datewisefreelancer/datewisefreelancer.component';
import { CategorywisefreelancerComponent } from './Admin/categorywisefreelancer/categorywisefreelancer.component';
import { CompanyverificationComponent } from './Admin/companyverification/companyverification.component';
import { PiechartcategoryComponent } from './Admin/piechartcategory/piechartcategory.component';
import { ClientprofileeditComponent } from './Client/clientprofileedit/clientprofileedit.component';
import { ClientchangepwdComponent } from './Client/clientchangepwd/clientchangepwd.component';
import { FreelancerprofileeditComponent } from './Freelancer/freelancerprofileedit/freelancerprofileedit.component';
import { FreelancerchangepwdComponent } from './Freelancer/freelancerchangepwd/freelancerchangepwd.component';
import { ForgotpwdComponent } from './Guest/forgotpwd/forgotpwd.component';
import { WorkeditComponent } from './Client/workedit/workedit.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'guestmaster/guesthome',
    pathMatch: 'full',
  },
  {
    path: 'adminmaster',
    component: AdminmasterComponent,
    children: [
      {
        path: 'adminhome',
        component: AdminhomeComponent,
        title: 'Admin Home',
      },
      {
        path: 'verification',
        component: CompanyverificationComponent,
        title: 'Company verification',
      },
      {
        path: 'districtreg',
        component: DistrictregComponent,
        title: 'District Registration',
      },
      {
        path: 'locationreg',
        component: LocationregComponent,
        title: 'Location Registration',
      },
      {
        path: 'categoryreg',
        component: CategoryregComponent,
        title: 'Category Registration',
      },
      {
        path: 'subcategoryreg',
        component: SubcategoryregComponent,
        title: 'Subcategory Registration',
      },
      {
        path: 'locationview',
        component: LocationviewComponent,
        title: 'location view',
      },
      {
        path: 'editlocation/:id',
        component: EditlocationComponent,
        title: 'edit location',
      },
      {
        path: 'subcategoryview',
        component: SubcategoryviewComponent,
        title: 'subcategory view',
      },
      {
        path: 'subcategoryedit/:id',
        component: SubcategoryeditComponent,
        title: 'subcategory edit',
      },
      {
        path: 'categoryview',
        component: CategoryviewComponent,
        title: 'category view',
      },
      {
        path: 'categoryedit/:id',
        component: CategoryeditComponent,
        title: 'category edit',
      },
      {
        path: 'districtview',
        component: DistrictviewComponent,
        title: 'district view',
      },
      {
        path: 'districtedit/:id',
        component: DistricteditComponent,
        title: 'district edit',
      },
      {
        path: 'clientdatewise',
        component: DatewiseclientComponent,
        title: 'Client report',
      },
      {
        path: 'freelancerdatewise',
        component: DatewisefreelancerComponent,
        title: 'Freelancer Report',
      },
      {
        path: 'categorywisefreelancer',
        component: CategorywisefreelancerComponent,
        title: 'freelancer(Category)',
      },
      {
        path: 'piechartcategory',
        component: PiechartcategoryComponent,
        title: 'Top categories',
      },
    ],
  },
  {
    path: 'guestmaster',
    component: GuestmasterComponent,
    children: [
      {
        path: 'guesthome',
        component: GuesthomeComponent,
        title: 'Guest Home',
      },
      {
        path: 'login',
        component: LoginComponent,
        title: 'Login',
      },
      {
        path: 'role',
        component: ChooseroleComponent,
        title: 'Choose Role',
      },
      {
        path: 'clientreg',
        component: ClientregComponent,
        title: 'Client Registration',
      },
      {
        path: 'freelancerreg',
        component: FreelancerregComponent,
        title: 'Freelancer Registration',
      },
      {
        path: 'forgotpwd',
        component: ForgotpwdComponent,
        title: 'forgot password'
      }
    ],
  },
  {
    path: 'clientmaster',
    component: ClientMasterComponent,
    children: [
      {
        path: 'clienthome',
        component: ClienthomeComponent,
        title: 'Client Home',
      },
      {
        path: 'workpost',
        component: WorkpostComponent,
        title: 'Post',
      },
      {
        path: 'workedit/:id',
        component: WorkeditComponent,
        title: 'edit details'
      },
      {
        path: 'clientprofile',
        component: ClientprofileComponent,
        title: 'Profile',
      },
      {
        path: 'viewworks',
        component: ClientviewworksComponent,
        title: 'Project list',
      },
      {
        path: 'workreqview',
        component: WorkreqviewComponent,
        title: 'Works',
      },
      {
        path: 'viewrequests/:id',
        component: ViewrequestsComponent,
        title: 'Requests',
      },
      {
        path: 'rejectreason/:id',
        component: RejectionReasonComponent,
        title: 'Reject Reason',
      },
      {
        path: 'clientprojects',
        component: ClientprojectsComponent,
        title: 'Projects',
      },
      {
        path: 'progressview/:workid/:reqid',
        component: ProgressviewComponent,
        title: 'progress',
      },
      {
        path: 'payment/:workid/:reqid',
        component: PaymentComponent,
        title: 'payment page',
      },
      {
        path: 'clientedit',
        component: ClientprofileeditComponent,
        title: 'profile edit',
      },
      {
        path: 'clientchangepwd',
        component: ClientchangepwdComponent,
        title: 'change password'
      }
    ],
  },
  {
    path: 'freelancermaster',
    component: FreelancermasterComponent,
    children: [
      {
        path: 'freelancerhome',
        component: FreelancerhomeComponent,
        title: 'Freelancer Home',
      },
      {
        path: 'workdetails/:id',
        component: WorkdetailsComponent,
        title: 'Work Details',
      },
      {
        path: 'workview',
        component: FreelancerworkviewComponent,
        title: 'projects',
      },
      {
        path: 'workreq/:id',
        component: WorkreqComponent,
        title: 'Request Page',
      },
      {
        path: 'myrequest',
        component: MyrequestComponent,
        title: 'My requests',
      },
      {
        path: 'rejectview/:id',
        component: RejectviewComponent,
        title: 'Remark',
      },
      {
        path: 'projects',
        component: FreelancerprojectsComponent,
        title: 'projects',
      },
      {
        path: 'ongoingprojectview/:id',
        component: OngoingprojectviewComponent,
        title: 'Project view',
      },
      {
        path: 'profile',
        component: FreelancerprofileComponent,
        title: 'My Profile',
      },
      {
        path: 'profileedit',
        component: FreelancerprofileeditComponent,
        title: 'Edit profile'
      },
      {
        path: 'freelancerchangepwd',
        component: FreelancerchangepwdComponent,
        title: 'Change password'
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
