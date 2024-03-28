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
    return this.http.post('http://localhost:3000/login', data).toPromise();
  }

  districtreg(data: any) {
    return this.http
      .post('http://localhost:3000/districtreg', data)
      .toPromise();
  }

  locationreg(data: any) {
    return this.http
      .post('http://localhost:3000/locationreg', data)
      .toPromise();
  }

  districtview() {
    return this.http.get('http://localhost:3000/districtview').toPromise();
  }

  getDistrictById(data: any) {
    return this.http
      .post('http://localhost:3000/getdistrictbyid', data)
      .toPromise();
  }

  districtDelete(data: any) {
    return this.http
      .post('http://localhost:3000/districtdelete', data)
      .toPromise();
  }

  districtEdit(data: any) {
    return this.http
      .post('http://localhost:3000/districtedit', data)
      .toPromise();
  }

  upload(file: File): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();
    formData.append('file', file);

    const req = new HttpRequest(
      'POST',
      'http://localhost:3000/upload',
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
      .post('http://localhost:3000/categoryreg', data)
      .toPromise();
  }

  // getCategory(){
  //   return this.categoryArray
  // }

  // setCategory(data: any[]){
  //   this.categoryArray=data;
  // }

  categoryView() {
    // const url = 'http://localhost:3000/categoryview?timestamp=' + new Date().getTime();
    // return this.http.get(url).toPromise();
    return this.http.get('http://localhost:3000/categoryview').toPromise();
  }

  subcategoryReg(data: any) {
    return this.http
      .post('http://localhost:3000/subcategoryreg', data)
      .toPromise();
  }

  getlocation(data: any) {
    return this.http
      .post('http://localhost:3000/getlocation', data)
      .toPromise();
  }

  locationDelete(data: any) {
    return this.http
      .post('http://localhost:3000/locationdelete', data)
      .toPromise();
  }

  locationEdit(data: any) {
    return this.http
      .post('http://localhost:3000/locationedit', data)
      .toPromise();
  }

  getlocationbyid(data: any) {
    return this.http
      .post<any>('http://localhost:3000/getlocationbyid', data)
      .toPromise();
  }

  getSubcategory(data: any) {
    return this.http
      .post('http://localhost:3000/getsubcategory', data)
      .toPromise();
  }

  subcategoryDelete(data: any) {
    return this.http
      .post('http://localhost:3000/subcategorydelete', data)
      .toPromise();
  }

  getSubcategoryById(data: any) {
    return this.http
      .post('http://localhost:3000/getsubcategorybyid', data)
      .toPromise();
  }

  subcategoryEdit(data: any) {
    return this.http
      .post('http://localhost:3000/subcategoryedit', data)
      .toPromise();
  }

  // getCategory(){
  //   return this.http.get('http://localhost:3000/getcategory').toPromise();
  // }

  categoryDelete(data: any) {
    return this.http
      .post('http://localhost:3000/categorydelete', data)
      .toPromise();
  }

  getCategoryById(data: any) {
    return this.http
      .post('http://localhost:3000/getcategorybyid', data)
      .toPromise();
  }

  categoryEdit(data: any) {
    return this.http
      .post('http://localhost:3000/categoryedit', data)
      .toPromise();
  }

  companyReg(data: any) {
    return this.http.post('http://localhost:3000/companyreg', data).toPromise();
  }

  getClientDetails(data: any) {
    return this.http
      .post('http://localhost:3000/getclientdetails', data)
      .toPromise();
  }

  freelancerReg(data: any) {
    return this.http
      .post('http://localhost:3000/freelancerreg', data)
      .toPromise();
  }

  workPost(data: any) {
    return this.http.post('http://localhost:3000/workpost', data).toPromise();
  }

  getWorkDetails(data: any) {
    return this.http
      .post('http://localhost:3000/getworkdetails', data)
      .toPromise();
  }

  getWorkById(data: any) {
    return this.http
      .post('http://localhost:3000/workdetails', data)
      .toPromise();
  }

  getWorkByReqID(data: any) {
    return this.http
      .post('http://localhost:3000/getworkbyrequestid', data)
      .toPromise();
  }

  workEdit(data: any) {
    return this.http.post('http://localhost:3000/workedit', data).toPromise();
  }

  workDelete(data: any) {
    return this.http.post('http://localhost:3000/workdelete', data).toPromise();
  }

  getJobFreelancer(data: any) {
    return this.http
      .post('http://localhost:3000/getjobfreelancer', data)
      .toPromise();
  }

  getFreelancerById(data: any) {
    return this.http
      .post<any>('http://localhost:3000/getfreelancerbyid', data)
      .toPromise();
  }

  getFreelancerByWorkId(data: any) {
    return this.http
      .post('http://localhost:3000/getfreelancerbyworkid', data)
      .toPromise();
  }

  getWorkByStatus(data: any) {
    return this.http
      .post('http://localhost:3000/getworkbystatus', data)
      .toPromise();
  }

  getFreelancerByReq(data: any) {
    return this.http
      .post('http://localhost:3000/getfreelancerbyreq', data)
      .toPromise();
  }

  workReq(data: any) {
    return this.http.post('http://localhost:3000/workreq', data).toPromise();
  }

  workReqDelete(data: any) {
    return this.http
      .post('http://localhost:3000/workreqdelete', data)
      .toPromise();
  }

  getReqById(data: any) {
    return this.http
      .post('http://localhost:3000/getrequestbyid', data)
      .toPromise();
  }

  getReqByFreelancerId(data: any) {
    return this.http
      .post('http://localhost:3000/getrequestbyfreelancerid', data)
      .toPromise();
  }

  updateReqStatus(data: any) {
    return this.http
      .post('http://localhost:3000/updatereqstatus', data)
      .toPromise();
  }

  updateReqReview(data: any) {
    return this.http
      .post('http://localhost:3000/updatereqreview', data)
      .toPromise();
  }

  updateWorkProgress(data: any) {
    return this.http
      .post('http://localhost:3000/updateworkprogress', data)
      .toPromise();
  }

  getProgressById(data: any) {
    return this.http
      .post('http://localhost:3000/getprogressbyid', data)
      .toPromise();
  }

  remarkView(data: any) {
    return this.http.post('http://localhost:3000/remarkview', data).toPromise();
  }

  payment(data: any) {
    return this.http.post('http://localhost:3000/payment', data).toPromise();
  }

  clientReport(data: any) {
    return this.http
      .post('http://localhost:3000/clientreport', data)
      .toPromise();
  }

  freelancerReport(data: any) {
    return this.http
      .post('http://localhost:3000/freelancerreport', data)
      .toPromise();
  }

  freelancerCategoryWise(data: any) {
    return this.http
      .post('http://localhost:3000/categorywisefreelancer', data)
      .toPromise();
  }

  getClient(data: any) {
    return this.http.post('http://localhost:3000/getclient', data).toPromise();
  }

  updateClientStatus(data: any) {
    return this.http
      .post('http://localhost:3000/updateclientstatus', data)
      .toPromise();
  }

  categoryReport() {
    return this.http.get('http://localhost:3000/piechartcategory').toPromise();
  }

  clientProfileEdit(data: any) {
    return this.http
      .post('http://localhost:3000/clientprofileedit', data)
      .toPromise();
  }

  freelancerProfileEdit(data: any) {
    return this.http
      .post('http://localhost:3000/freelancerprofileedit', data)
      .toPromise();
  }

  changePassword(data: any) {
    return this.http.post('http://localhost:3000/changepwd', data).toPromise();
  }

  forgotPWD(data: any) {
    return this.http.post('http://localhost:3000/forgotpwd', data).toPromise();
  }

  paymentDetails(){
    return this.http.get('http://localhost:3000/paymentdetails').toPromise();
  }
}
