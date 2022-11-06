import { Injectable } from '@angular/core';
import { identity } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoactionsService {
  locations = [
    {
      id: 1,
      location: 'https://maps.app.goo.gl/jeR5fFzgu5NyEyMB6',
      address:
        'Officer Family Medical Clinic, 340 Princes Hwy, Officer VIC 3809',
      workingHours: { start: '', end: '' },
      workingDays: { start: '', end: '' },
      specialWorkDay: { day: '', hours: { start: '', end: '' } },
      mobile: '0401619596',
      fax: '99236816',
      telephone: '59222013',
      email: 'info@physio-on.com.au',
      image: 'officerFamily.jpg',
    },
    {
      id: 2,
      location: 'https://maps.app.goo.gl/NCk1RthQ6fzcJkfa6',
      address: 'St Antony Medical Centre, 2-6 Princes Hwy, Pakenham VIC 3810',
      workingHours: { start: '', end: '' },
      workingDays: { start: '', end: '' },
      specialWorkDay: { day: '', hours: { start: '', end: '' } },
      mobile: '0401619596',
      telephone: '59405245',
      email: 'info@physio-on.com.au',
      image: 'stAntony.jpg',
    },
    {
      id: 3,
      location: 'https://maps.app.goo.gl/CPtEnTvsYvQ5z1tG7',
      address:
        'One Centre Square Medical Hub, Shop 103/45 Siding Ave, Officer VIC 3809',
      workingHours: { start: '', end: '' },
      workingDays: { start: '', end: '' },
      specialWorkDay: { day: '', hours: { start: '', end: '' } },
      mobile: '0401619596',
      fax: '90876052',
      telephone: '90876050',
      email: 'info@physio-on.com.au',
      image: 'about1.jpg',
    },
  ];

  constructor() {}
}
