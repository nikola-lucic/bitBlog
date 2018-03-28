class Authors {
    constructor(data) {
      this.name = data.name;
      this.id = data.id;
      this.username = data.username;
      this.email = data.email;
      this.phone= data.phone;
      this.website= data.website;
      this.company= data.company.name;
      this.catchPhrase= data.company.catchPhrase; 
      this.bs= data.company.bs; 
    }
  }
  export default Authors;