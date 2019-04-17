import { PolicyHolder } from './PolicyHolder';

export class Policy {
  policyNumber?: string;
  policyHolder?: PolicyHolder;
  constructor() {
    this.policyHolder = new PolicyHolder();
  }
}
