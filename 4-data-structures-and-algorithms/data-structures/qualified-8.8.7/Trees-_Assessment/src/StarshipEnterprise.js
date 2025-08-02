const Queue = require("./Queue");

class StarshipEnterprise {
  constructor(officerId = null, officerName = null, reportTo = null) {
    this.officerId = officerId;
    this.officerName = officerName;
    this.reportTo = reportTo; // the officer that the new officer reports to
    this.leftReport = null;
    this.rightReport = null;
  }

  assignOfficer(officerId, officerName) {
    // 1) empty tree → this becomes the captain
    if (this.officerId === null) {
      this.officerId   = officerId;
      this.officerName = officerName;
      return;
    }

    // 2) less experienced ID → go left
    if (officerId < this.officerId) {
      if (this.leftReport === null) {
        this.leftReport = new StarshipEnterprise(officerId, officerName, this);
      } else {
        this.leftReport.assignOfficer(officerId, officerName);
      }
    }
    // 3) equal or more experienced → go right
    else {
      if (this.rightReport === null) {
        this.rightReport = new StarshipEnterprise(officerId, officerName, this);
      } else {
        this.rightReport.assignOfficer(officerId, officerName);
      }
    }
  }


  findOfficersWithNoDirectReports(values = []) {
    // your solution here
    if (
      this.officerId !== null && 
      this.leftReport  === null && 
      this.rightReport === null
    ) {
      values.push(this.officerName);
    }

    // recurse down both branches
    if (this.leftReport) {
      this.leftReport.findOfficersWithNoDirectReports(values);
    }
    if (this.rightReport) {
      this.rightReport.findOfficersWithNoDirectReports(values);
    }
    return values;
  }

  listOfficersByExperience(officerNames = []) {
    // your solution here
    if (this.rightReport) {
      this.rightReport.listOfficersByExperience(officerNames);
    }
    
    if (this.officerId !== null) {
      officerNames.push(this.officerName);
    }
    
    if (this.leftReport) {
      this.leftReport.listOfficersByExperience(officerNames);
    }
    
    return officerNames;
  }

  listOfficersByRank(tree, rankedOfficers = {}) {
   if (!tree || tree.officerId === null) return rankedOfficers;

    const queue = new Queue();
    // seed with the root at rank 1
    queue.enqueue({ node: tree, rank: 1 });

    let entry = queue.dequeue();
    while (entry) {
      const { node, rank } = entry;

      // ensure array for this rank
      if (!rankedOfficers[rank]) {
        rankedOfficers[rank] = [];
      }
      // collect the name
      rankedOfficers[rank].push(node.officerName);

      // enqueue direct reports at rank+1
      if (node.leftReport)  queue.enqueue({ node: node.leftReport,  rank: rank + 1 });
      if (node.rightReport) queue.enqueue({ node: node.rightReport, rank: rank + 1 });

      entry = queue.dequeue();
    }

    return rankedOfficers;
  }
}



module.exports = StarshipEnterprise;
