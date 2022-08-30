class Product {
  constructor() {
    this.id = 1;
    this.productArray = [];
  }

  save() {
    let product = this.getData();

    if (this.validation(product)) {
      this.add(product);
    }

    this.createTable();
    this.clearFields();
  }

  createTable() {
    let tbody = document.getElementById("tbody");
    tbody.innerText = "";

    for (let i = 0; i < this.productArray.length; i++) {
      let tRow = tbody.insertRow();

      let tData_id = tRow.insertCell();
      let tData_name = tRow.insertCell();
      let tData_price = tRow.insertCell();
      let tData_actions = tRow.insertCell();

      tData_id.innerText = this.productArray[i].id;
      tData_name.innerText = this.productArray[i].name;
      tData_price.innerText = this.productArray[i].price;

      tData_id.classList.add("center");
      tData_actions.classList.add("center");

      let editIcon = document.createElement("img");
      editIcon.src = "assets/edit-button.png";

      let deleteIcon = document.createElement("img");
      deleteIcon.src = "assets/delete-button.png";
      deleteIcon.setAttribute(
        "onclick",
        `product.delete(${this.productArray[i].id})`
      );

      tData_actions.appendChild(editIcon);
      tData_actions.appendChild(deleteIcon);
    }
  }

  add(product) {
    this.productArray.push(product);
    this.id++;
  }

  getData() {
    let product = {};

    product.id = this.id;
    product.name = document.getElementById("product").value;
    product.price = document.getElementById("price").value;

    return product;
  }

  validation(product) {
    let message = "";

    if (product.name == "") {
      message += "- Informe o nome do produto\n";
    }

    if (product.price == "") {
      message += "- Informe o preço do produto\n";
    }

    if (message != "") {
      alert(message);
      return false;
    }

    return true;
  }

  cancel() {
    this.clearFields();
  }

  clearFields() {
    document.getElementById("product").value = "";
    document.getElementById("price").value = "";
  }

  delete(id) {
    let tbody = document.getElementById("tbody");

    for (let i = 0; i < this.productArray.length; i++) {
      if (this.productArray[i].id == id) {
        this.productArray.splice(i, 1);
        tbody.deleteRow(i);
      }
    }
  }
}

const product = new Product();
