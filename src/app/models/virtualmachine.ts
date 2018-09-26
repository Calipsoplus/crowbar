export class Virtualmachine {

  constructor(ip: string, hostname: string, owner: string) {
    this.ip = ip;
    this.hostname = hostname;
    this.owner = owner;
  }

  ip: string;
  hostname: string;
  owner: string;
}

export interface IVirtualmachine {
  ip: string;
  hostname: string;
  owner: string;
}
