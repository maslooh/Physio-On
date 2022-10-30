import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class OurServicesService {
  services = [
    {
      id: 1,
      title: 'Physiotherapy',
      content: {
        intro: `Using best & current evidence-based methods to identify the problems,
          reduce pain, restore function and promote health in individuals of all ages,
          from all walks of life and with many different physical needs.`,
        ListTitle: `We are capable of treating a wide range of conditions, including`,
        list: [
          `Musculoskeletal impairments.`,
          `Sports injuries.`,
          `Work-related injuries (WorkCover).`,
          `Motor vehicle accidents (TAC)`,
          `Post-surgical rehab.`,
          `Women-related health conditions.`,
        ],
      },
      image: 'Physiotherapy.jpg',
    },
    {
      id: 2,
      title: 'Clinical Pilates',
      content: {
        intro: `Pilates is a unique holistic exercise method developed by joseph pilates in the 1900s that integrates the body with mind exercises inspired by yoga, martial arts and ancient greek roman exercises.`,
        ListTitle: `It incorporates movement principles that include physical and cognitive elements of the whole body with benefits of`,
        list: [
          `Better postural stability and movement control.`,
          `More efficient activation and integration of trunk core stability muscles.`,
          `Improved coordination and standard movement patterns.`,
          `Improved flexibility and body mechanics.`,
          `Flatten stomach, buttocks and thighs tone.`,
          `Protect against sudden loads with discogenic conditions.`,
        ],
      },
      image: 'ClinicalPilates.jpg',
    },
    {
      id: 3,
      title: 'Home Physio',
      content: {
        intro: `Our mobile team can travel to your place of residence to provide the help and support you need.`,
        ListTitle: `We provide physiotherapy services for`,
        list: [
          `NDIS.`,
          `Home Care packages.`,
          `Nursing Homes.`,
          `Aged Cares.`,
          `Neurological Disorders.`,
        ],
      },
      image: 'HomePhysio.jpg',
    },
    {
      id: 4,
      title: 'Pain Management',
      content: {
        intro: `Our skilled therapists use a multidisciplinary BioPsychoSocial approach to assess and treat individuals' physical, Psychological and social impacts on pain and functions by combining modern pain neuroscience education with cognition-targeted exercise programs to alleviate symptoms, optimise recovery and improve the overall quality of life.`,
        ListTitle: `Conditions we treat`,
        list: [
          `Persistent chronic low back pain.`,
          `Persistent chronic neck pain.`,
          `Fibromyalgia widespread pain.`,
          `Complex regional syndrome (CRPS)`,
          `Headache % orofacial pain.`,
          `Functional neurologic disorders (FND).`,
        ],
      },
      image: 'painManagement.png',
    },
  ];

  constructor() {}
}
