var objectExample = {
  name: "Sushant",
  college: "LNCT",
  year: 3,
  address: "Bhopal",
  CGPA: 9.3,
  hostler: false,

  getDetails: function () {
    return `
        ${this.name} is a student of ${this.college}, ${this.address}.
        He is in ${this.year} year with a CGPA of ${this.CGPA}.
        He is not a hostler.
        `;
  },
};

console.log(objectExample.getDetails());
console.log("Prettified form of the object is  : ");
console.table(objectExample);
