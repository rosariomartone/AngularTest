import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { PoliciesService } from './policies.service';
import { Policy } from './policy';

@Component({
  selector: 'app-policies',
  templateUrl: './policies.component.html',
  styleUrls: ['./policies.component.css']
})
export class PoliciesComponent implements OnInit {

  constructor(public policiesService: PoliciesService) { }

  ngOnInit() {
    this.refresh();
  }

  displayedColumns: string[] = ['policyNumber', 'name', 'age', 'gender', 'edit', 'delete'];
  dataSource = new MatTableDataSource<any>();

  selectedPolicy: Policy = new Policy();
  loading = false;

  async refresh() {
    this.loading = true;
    const data = await this.policiesService.getPolicies();
    this.dataSource.data = data;
    this.loading = false;
  }

  async updatePolicy() {
    if (this.selectedPolicy.policyNumber !== undefined)
    {
      await this.policiesService.updatePolicy(this.selectedPolicy);
    }
    else
    {
      await this.policiesService.createPolicy(this.selectedPolicy);
    }

    this.selectedPolicy = new Policy();

    await this.refresh();
  }

  editPolicy(policy: Policy) {
    this.selectedPolicy = policy;
  }

  clearPolicy() {
    this.selectedPolicy = new Policy();
  }

  async deletePolicy(policy: Policy) {
    this.loading = true;

    if (confirm(`Are you sure you want to delete the policy ${policy.policyNumber}. This cannot be undone.`)) {
      this.policiesService.deletePolicy(Number(policy.policyNumber));
    }

    await this.refresh();
  }
}
