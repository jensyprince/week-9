function PersonalInfo() {
    const pii = {
      name: "James",
      ssn: "123456789",
    };
    this.getName = function () {
      return pii.name;
    };
  }
  const info = new PersonalInfo();
  console.log(info.getName())