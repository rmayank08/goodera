import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { data } from './data';
import { Job } from './jobs.model';

@Injectable({
  providedIn: 'root'
})
export class JobsService {

  getAllJobs(): Observable<Job[]> {
    return of([...data]);
  }

  getJob(id): Observable<Job> {
    const job = data.find((j: Job) => j.id === id);
    if (job) {
      return of(job);
    }
    return of(null);
  }

  searchJobs(text: string): Observable<Job[]> {
    text = text.toLocaleLowerCase();
    if (!text.trim()) {
      return of([...data]);
    }
    const filteredJobs = data.filter(j =>
      j.title.toLocaleLowerCase().includes(text)
    );
    return of([...filteredJobs]);
  }
}
