import {APP_BASE_HREF} from '@angular/common';
import { HttpClient } from '@angular/common/http';
import {Inject, Injectable} from '@angular/core';
import {BehaviorSubject, map} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AgencyListService {
  // private agencyList: Agency[] = [];
  private agencyList = new BehaviorSubject<Agency[]>([])
  private status: RequestStatus = RequestStatus.NotStarted

  constructor(private http: HttpClient,
              @Inject(APP_BASE_HREF)
              private baseUrl: string) {
  }

  private fetchData() {
    if (this.status != RequestStatus.NotStarted) return;
    this.http.get<RawAgency[]>(this.baseUrl + 'assets/json/agency.json').subscribe((rawAgencies: RawAgency[]) => {
      rawAgencies = [...rawAgencies].sort(({GA: aName}, {GA: bName}) => {
        if (aName > bName) return 1;
        if (aName < bName) return -1;
        return 0
      })
      const data = rawAgencies.map(({id, GA, language, email, plz}): Agency => ({id, name: GA, language, email, plz}));
      this.agencyList.next(data)
    });

  }

  // return Agencies as List for DropDown 'asnumber', filter out GA 'ASTEST'
  public getList() {
    this.fetchData()
    return this.agencyList.asObservable().pipe(
      map(items => items.filter(
        item => !item.id.startsWith('ASTEST'))
      )
    )
  }

  public getById(id: string): Agency[]{
    //return this.agencyList.getValue().find(a => a.id === id)
    return this.agencyList.getValue().filter(a => a.id === id)
  }

  public getByZip(zipCode: string): Agency[] {
    return this.agencyList.getValue().filter(a => a.plz.includes(zipCode))
  }

}

export interface Agency {
  id: string
  name: string
  language: string
  email: string
  plz: string[]
}

interface RawAgency {
  id: string
  GA: string
  language: string
  email: string
  plz: string[]
}

enum RequestStatus {
  NotStarted,
  Started,
  Completed
}
