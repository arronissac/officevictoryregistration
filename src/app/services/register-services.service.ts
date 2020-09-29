import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import {register} from '../register/register';
import { seats } from '../status/seats';

@Injectable({
  providedIn: 'root'
})
export class RegisterServicesService {

  private dbPath = '/register-list';
  private dbpath2 = '/seats';
  private dbpath3 = '/register-list2';
  private dbpath4 = '/register-list3';
  registerRef: AngularFireList<register> = null;
  register2Ref: AngularFireList<register> = null;
  register3Ref: AngularFireList<register> = null;
  SeatRef: AngularFireList<seats> = null;
  count:number;
  tutorial: AngularFireObject<any>;

  constructor(private db: AngularFireDatabase) {
    this.registerRef = db.list(this.dbPath);
    this.SeatRef = db.list(this.dbpath2);
    this.register2Ref = db.list(this.dbpath3);
    this.register3Ref = db.list(this.dbpath4);

  }

// 1st
  createregister(register: register): void {
    this.registerRef.push(register);
  }

  updateregister(key: string, value: any): Promise<void> {
    return this.registerRef.update(key, value);
  }

  deleteregister(key: string): Promise<void> {
    return this.registerRef.remove(key);
  }

  getregisterList(): AngularFireList<register> {
    return this.registerRef;
  }

  //2nd

  createregister2(register: register): void {
    this.register2Ref.push(register);
  }

  updateregister2(key: string, value: any): Promise<void> {
    return this.register2Ref.update(key, value);
  }

  deleteregister2(key: string): Promise<void> {
    return this.register2Ref.remove(key);
  }

  getregisterList2(): AngularFireList<register> {
    return this.register2Ref;
  }

  //3rd

  createregister3(register: register): void {
    this.register3Ref.push(register);
  }

  updateregister3(key: string, value: any): Promise<void> {
    return this.register3Ref.update(key, value);
  }

  deleteregister3(key: string): Promise<void> {
    return this.register3Ref.remove(key);
  }

  getregisterList3(): AngularFireList<register> {
    return this.register3Ref;
  }


  getSeatList(): AngularFireList<seats> {
    return this.SeatRef;
  }

  updateseatList(key: string, value: any): Promise<void> {
    return this.SeatRef.update(key, value);
  }
  

  

  deleteAll(): Promise<void> {
    return this.registerRef.remove();
  }
}
