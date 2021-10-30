import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Job } from '../service/jobs.model';
import { JobsService } from '../service/jobs.service';

@Component({
  selector: 'app-jobs-list',
  templateUrl: './jobs-list.component.html',
  styleUrls: ['./jobs-list.component.scss']
})
export class JobsListComponent implements OnInit {
  @ViewChild('search') searchInput: ElementRef;
  searchText: string;
  locationText: string;
  allJobs: Job[];

  constructor(private jobService: JobsService) { }

  getAllJobs() {
    this.jobService.getAllJobs().subscribe(
      res => {
        this.allJobs = res;
      }
    )
  }

  searchJobs() {
    this.jobService.searchJobs(this.searchText).subscribe(
      res => {
        this.allJobs = res;
      }
    )
  }

  ngOnInit(): void {
    this.getAllJobs();
  }
}
