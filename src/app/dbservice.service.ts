import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DbserviceService {
  categoryArray: any[] = [];

  constructor(private http: HttpClient) {}

  login(data: any) {
    return this.http.post('https://freelanceportalbackend.onrender.com/login', data).toPromise();
  }

  districtreg(data: any) {
    return this.http
      .post('https://freelanceportalbackend.onrender.com/districtreg', data)
      .toPromise();
  }

  locationreg(data: any) {
    return this.http
      .post('https://freelanceportalbackend.onrender.com/locationreg', data)
      .toPromise();
  }

  districtview() {
    return this.http.get('https://freelanceportalbackend.onrender.com/districtview').toPromise();
  }

  getDistrictById(data: any) {
    return this.http
      .post('https://freelanceportalbackend.onrender.com/getdistrictbyid', data)
      .toPromise();
  }

  districtDelete(data: any) {
    return this.http
      .post('https://freelanceportalbackend.onrender.com/districtdelete', data)
      .toPromise();
  }

  districtEdit(data: any) {
    return this.http
      .post('https://freelanceportalbackend.onrender.com/districtedit', data)
      .toPromise();
  }

  upload(file: File): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();
    formData.append('file', file);

    const req = new HttpRequest(
      'POST',
      'https://freelanceportalbackend.onrender.com/upload',
      formData,
      {
        reportProgress: true,
        responseType: 'json',
      }
    );
    return this.http.request(req);
  }

  categoryreg(data: any) {
    return this.http
      .post('https://freelanceportalbackend.onrender.com/categoryreg', data)
      .toPromise();
  }

  // getCategory(){
  //   return this.categoryArray
  // }

  // setCategory(data: any[]){
  //   this.categoryArray=data;
  // }

  categoryView() {
    // const url = 'https://freelanceportalbackend.onrender.com/categoryview?timestamp=' + new Date().getTime();
    // return this.http.get(url).toPromise();
    return this.http.get('https://freelanceportalbackend.onrender.com/categoryview').toPromise();
  }

  subcategoryReg(data: any) {
    return this.http
      .post('https://freelanceportalbackend.onrender.com/subcategoryreg', data)
      .toPromise();
  }

  getlocation(data: any) {
    return this.http
      .post('https://freelanceportalbackend.onrender.com/getlocation', data)
      .toPromise();
  }

  locationDelete(data: any) {
    return this.http
      .post('https://freelanceportalbackend.onrender.com/locationdelete', data)
      .toPromise();
  }

  locationEdit(data: any) {
    return this.http
      .post('https://freelanceportalbackend.onrender.com/locationedit', data)
      .toPromise();
  }

  getlocationbyid(data: any) {
    return this.http
      .post<any>('https://freelanceportalbackend.onrender.com/getlocationbyid', data)
      .toPromise();
  }

  getSubcategory(data: any) {
    return this.http
      .post('https://freelanceportalbackend.onrender.com/getsubcategory', data)
      .toPromise();
  }

  subcategoryDelete(data: any) {
    return this.http
      .post('https://freelanceportalbackend.onrender.com/subcategorydelete', data)
      .toPromise();
  }

  getSubcategoryById(data: any) {
    return this.http
      .post('https://freelanceportalbackend.onrender.com/getsubcategorybyid', data)
      .toPromise();
  }

  subcategoryEdit(data: any) {
    return this.http
      .post('https://freelanceportalbackend.onrender.com/subcategoryedit', data)
      .toPromise();
  }

  // getCategory(){
  //   return this.http.get('https://freelanceportalbackend.onrender.com/getcategory').toPromise();
  // }

  categoryDelete(data: any) {
    return this.http
      .post('https://freelanceportalbackend.onrender.com/categorydelete', data)
      .toPromise();
  }

  getCategoryById(data: any) {
    return this.http
      .post('https://freelanceportalbackend.onrender.com/getcategorybyid', data)
      .toPromise();
  }

  categoryEdit(data: any) {
    return this.http
      .post('https://freelanceportalbackend.onrender.com/categoryedit', data)
      .toPromise();
  }

  companyReg(data: any) {
    return this.http.post('https://freelanceportalbackend.onrender.com/companyreg', data).toPromise();
  }

  getClientDetails(data: any) {
    return this.http
      .post('https://freelanceportalbackend.onrender.com/getclientdetails', data)
      .toPromise();
  }

  freelancerReg(data: any) {
    return this.http
      .post('https://freelanceportalbackend.onrender.com/freelancerreg', data)
      .toPromise();
  }

  workPost(data: any) {
    return this.http.post('https://freelanceportalbackend.onrender.com/workpost', data).toPromise();
  }

  getWorkDetails(data: any) {
    return this.http
      .post('https://freelanceportalbackend.onrender.com/getworkdetails', data)
      .toPromise();
  }

  getWorkById(data: any) {
    return this.http
      .post('https://freelanceportalbackend.onrender.com/workdetails', data)
      .toPromise();
  }

  getWorkByReqID(data: any) {
    return this.http
      .post('https://freelanceportalbackend.onrender.com/getworkbyrequestid', data)
      .toPromise();
  }

  workEdit(data: any) {
    return this.http.post('https://freelanceportalbackend.onrender.com/workedit', data).toPromise();
  }

  workDelete(data: any) {
    return this.http.post('https://freelanceportalbackend.onrender.com/workdelete', data).toPromise();
  }

  getJobFreelancer(data: any) {
    return this.http
      .post('https://freelanceportalbackend.onrender.com/getjobfreelancer', data)
      .toPromise();
  }

  getFreelancerById(data: any) {
    return this.http
      .post<any>('https://freelanceportalbackend.onrender.com/getfreelancerbyid', data)
      .toPromise();
  }

  getFreelancerByWorkId(data: any) {
    return this.http
      .post('https://freelanceportalbackend.onrender.com/getfreelancerbyworkid', data)
      .toPromise();
  }

  getWorkByStatus(data: any) {
    return this.http
      .post('https://freelanceportalbackend.onrender.com/getworkbystatus', data)
      .toPromise();
  }

  getFreelancerByReq(data: any) {
    return this.http
      .post('https://freelanceportalbackend.onrender.com/getfreelancerbyreq', data)
      .toPromise();
  }

  workReq(data: any) {
    return this.http.post('https://freelanceportalbackend.onrender.com/workreq', data).toPromise();
  }

  workReqDelete(data: any) {
    return this.http
      .post('https://freelanceportalbackend.onrender.com/workreqdelete', data)
      .toPromise();
  }

  getReqById(data: any) {
    return this.http
      .post('https://freelanceportalbackend.onrender.com/getrequestbyid', data)
      .toPromise();
  }

  getReqByFreelancerId(data: any) {
    return this.http
      .post('https://freelanceportalbackend.onrender.com/getrequestbyfreelancerid', data)
      .toPromise();
  }

  updateReqStatus(data: any) {
    return this.http
      .post('https://freelanceportalbackend.onrender.com/updatereqstatus', data)
      .toPromise();
  }

  updateReqReview(data: any) {
    return this.http
      .post('https://freelanceportalbackend.onrender.com/updatereqreview', data)
      .toPromise();
  }

  updateWorkProgress(data: any) {
    return this.http
      .post('https://freelanceportalbackend.onrender.com/updateworkprogress', data)
      .toPromise();
  }

  getProgressById(data: any) {
    return this.http
      .post('https://freelanceportalbackend.onrender.com/getprogressbyid', data)
      .toPromise();
  }

  remarkView(data: any) {
    return this.http.post('https://freelanceportalbackend.onrender.com/remarkview', data).toPromise();
  }

  payment(data: any) {
    return this.http.post('https://freelanceportalbackend.onrender.com/payment', data).toPromise();
  }

  clientReport(data: any) {
    return this.http
      .post('https://freelanceportalbackend.onrender.com/clientreport', data)
      .toPromise();
  }

  freelancerReport(data: any) {
    return this.http
      .post('https://freelanceportalbackend.onrender.com/freelancerreport', data)
      .toPromise();
  }

  freelancerCategoryWise(data: any) {
    return this.http
      .post('https://freelanceportalbackend.onrender.com/categorywisefreelancer', data)
      .toPromise();
  }

  getClient(data: any) {
    return this.http.post('https://freelanceportalbackend.onrender.com/getclient', data).toPromise();
  }

  updateClientStatus(data: any) {
    return this.http
      .post('https://freelanceportalbackend.onrender.com/updateclientstatus', data)
      .toPromise();
  }

  categoryReport() {
    return this.http.get('https://freelanceportalbackend.onrender.com/piechartcategory').toPromise();
  }

  clientProfileEdit(data: any) {
    return this.http
      .post('https://freelanceportalbackend.onrender.com/clientprofileedit', data)
      .toPromise();
  }

  freelancerProfileEdit(data: any) {
    return this.http
      .post('https://freelanceportalbackend.onrender.com/freelancerprofileedit', data)
      .toPromise();
  }

  changePassword(data: any) {
    return this.http.post('https://freelanceportalbackend.onrender.com/changepwd', data).toPromise();
  }

  forgotPWD(data: any) {
    return this.http.post('https://freelanceportalbackend.onrender.com/forgotpwd', data).toPromise();
  }

  paymentDetails(){
    return this.http.get('https://freelanceportalbackend.onrender.com/paymentdetails').toPromise();
  }
}
