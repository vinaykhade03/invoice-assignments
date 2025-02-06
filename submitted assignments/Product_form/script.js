class PurchaseComponent extends HTMLElement {
    static get observedAttributes() {
        return ["config", "data"];
    }
     config=[
     
      {
        formLabel: "form-label",
        formClass: "form-control"
      }
     
     ]
    data = [
        { label: "Product Code", type: "text", required: true, dataModel: "workflows", className: "col-3 col-md-2 rounded-pill  ms-3", placeholder: "Enter Product Code", },
        { label: "Product/Service Name", type: "text", required: true, className: "col-3 col-md-2 rounded-pill ms-3", value: "0", placeholder: "Enter Product/Service Name" },
        { label: "Short Name", type: "text", required: true, className: "col-3 col-md-2 rounded-pill ms-3", value: "0", placeholder: "Enter Short Name" },
        { label: "Group", type: "autocomplete", required: true, dataModel: "workflows", className: "col-3 col-md-2 rounded-pill ms-3", value: "0", placeholder: "Enter Group" },
        { label: "Category", type: "autocomplete", required: true, dataModel: "workflows", className: "col-3 col-md-2 rounded-pill ms-3", value: "0", placeholder: "Enter Category" },
        { label: "Sub Category", type: "text", required: false, dataModel: "workflows", className: "col-3 col-md-2 rounded-pill ms-3", value: "0", placeholder: "Enter Sub Category" },
        { label: "Product Company", type: "autocomplete", required: false, className: "col-3 col-md-2 rounded-pill ms-3", value: "0", placeholder: "Enter Product Company" },
        { label: "GST", type: "autocomplete", required: true, dataModel: "workflows", className: "col-3 col-md-2 rounded-pill ms-3", value: "0", placeholder: "Enter GST" },
        { label: "Unit", type: "autocomplete", required: true, options: ["Select Unit", "kg", "ltr", "box"], dataModel: "workflows", className: "col-6 col-md-2 rounded-pill", value: "0", placeholder: "Select Unit" },
        { label: "InBox Qty", type: "number", required: false, className: "col-3 col-md-2 rounded-pill ms-3", value: "0", placeholder: "Enter InBox Quantity" },
        { label: "InBox Name", type: "text", required: false, className: "col-3 col-md-2 rounded-pill ms-3", value: "0", placeholder: "Enter InBox Name" },
        { label: "Box Qty", type: "number", required: false, className: "col-3 col-md-2 rounded-pill ms-3", value: "0", placeholder: "Enter Box Quantity" },
        { label: "Box Name", type: "text", required: false, className: "col-3 col-md-2 rounded-pill ms-3", value: "0", placeholder: "Enter Box Name" },
        { label: "Weight", type: "number", required: false, className: "col-3 col-md-2 rounded-pill ms-3"  },
        { label: "Wholesale Margin Type", type: "select", required: true, options: ["Percentage", "Amount"], className: "col-3 col-md-2 rounded-pill ms-3", value: "0", placeholder: "Select Wholesale Margin Type" },
        { label: "Retail Margin Type", type: "select", required: true, options: ["Percentage", "Amount"], className: "col-3 col-md-2 rounded-pill ms-3", value: "0", placeholder: "Select Retail Margin Type" },
        { label: "Product Type", type: "autocomplete", required: true, options: ["Select Product", "Electronics", "Clothing", "Groceries"], className: "col-3 col-md-2 rounded-pill ms-3", value: "0", placeholder: "Enter Product Type" },
        { label: "Minimum Stock", type: "number", required: false, className: "col-3 col-md-2 rounded-pill ms-3", value: "0", placeholder: "Enter Minimum Stock" },
        { label: "Re-Order Level", type: "number", required: false, className: "col-3 col-md-2 rounded-pill ms-3", value: "0", placeholder: "Enter Re-Order Level" },
        { label: "HSN", type: "autocomplete", required: false, className: "col-3 col-md-2 rounded-pill ms-3", value: "0", placeholder: "Enter HSN" },
        { label: "Cess Percentage", type: "number", required: false, className: "col-3 col-md-2 rounded-pill ms-3", value: "0", placeholder: "Enter Cess Percentage" },
        { label: "Cess Amount", type: "number", required: false, className: "col-3 col-md-2 rounded-pill ms-3", placeholder: "Enter Cess Amount",defaultValue: "0" },
        { label: "Fraction Quantity", type: "number", required: false, className: "col-3 col-md-2 rounded-pill ms-3", value: "0", placeholder: "Enter Fraction Quantity" },
        { label: "Warranty", type: "text", required: false, className: "col-3 col-md-2 rounded-pill ms-3", value: "0", placeholder: "Enter Warranty" },
    
        { label: "MRP", type: "number", placeholder: "Enter MRP", required: true, className: "col-3 ms-3 col-md-2 rounded ms-3", value: "0" },
        { label: "Purchase Rate", type: "number", placeholder: "Enter Purchase Rate", required: true, className: "col-3 col-md-2 rounded ms-3", value: "0" },
        { label: "Wholesale Margin Type", type: "select", options: ["Percentage", "Amount"], required: true, className: "col-3 col-md-2 rounded ms-3", value: "0", placeholder: "Select Wholesale Margin Type" },
        { label: "Wholesale Margin Value", type: "number", placeholder: "Enter Margin Value", required: true, className: "col-3 col-md-2 rounded ms-3", value: "0" },
        { label: "Wholesale Rate", type: "number", placeholder: "Calculated Wholesale Rate", required: false, className: "col-3 col-md-2 rounded ms-3", id: "wholesale_rate", value: "0" },
        { label: "button", type : "submit", value: "Submit", className: "col-3 col-md-2 rounded-pill ms-3", id: "submit_button", onclick: "submitForm()" }
    ];

    
        constructor() {
            super();
            this.attachShadow({ mode: "open" });
            this.formValues = {}; // Store form input values
        }
    
        connectedCallback() {
            console.log('connectedCallback is called');  // Debugging
            this.renderComponent();  // Ensure renderComponent is called on connection
        }
    
        attributeChangedCallback(name, oldValue, newValue) {
            console.log(`attributeChangedCallback for ${name}`); // Debugging
            if (name === "config" && newValue) {
                this.config = JSON.parse(newValue); // Parse config attribute
            }
            if (name === "data" && newValue) {
                this.data = JSON.parse(newValue); // Parse data attribute
            }
            this.renderComponent();
        }
    
        renderComponent() {
            console.log('renderComponent is called'); // Debugging
            this.shadowRoot.innerHTML = "";
    
            const bootstrapLink = document.createElement("link");
            bootstrapLink.setAttribute("rel", "stylesheet");
            bootstrapLink.setAttribute("href", "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css");
            this.shadowRoot.appendChild(bootstrapLink);
    
            const form = document.createElement("form");
            form.className = "row g-3 mt-5 rounded";
    
            this.data.forEach((field) => {
                const formGroup = document.createElement("div");
                formGroup.className = `${field.className || "col-12"} mb-3`;
    
                const label = document.createElement("label");
                label.className = this.config.formLabel || "form-label";
                label.textContent = field.label;
    
                let input;
                if (field.type === "select") {
                    input = document.createElement("select");
                    input.className = `${this.config.formClass || "form-select"} rounded-pill`;
                    input.required = field.required || false;
    
                    field.options.forEach((option) => {
                        const optionElement = document.createElement("option");
                        optionElement.value = option.toLowerCase();
                        optionElement.textContent = option;
                        input.appendChild(optionElement);
                    });
                } else {
                    input = document.createElement("input");
                    input.type = field.type;
                    input.placeholder = field.placeholder || "";
                    input.className = `${this.config.formClass || "form-control"} rounded-pill`;
                    input.required = field.required || false;
                    input.id = field.label.toLowerCase().replace(/\s+/g, "_");
    
                    if (field.label === "Wholesale Rate") {
                        input.disabled = true;
                    }
                }
    
                formGroup.appendChild(label);
                formGroup.appendChild(input);
                form.appendChild(formGroup);
    
                input.addEventListener("input", () => this.updateFormData());  // Fix: call updateFormData on input event
            });
    
            this.shadowRoot.appendChild(form);
            this.updateFormData();  // Ensure it's called after rendering
        }
    
        updateFormData() {
            const formData = {};
            this.shadowRoot.querySelectorAll("input, select").forEach((inputElement) => {
                formData[inputElement.previousElementSibling.textContent] = inputElement.value;
            });
            console.log('Form data:', formData);  // Debugging
    
            this.calculateWholesaleRate(formData);
        }
    
        calculateWholesaleRate(formData) {
            const purchaseRate = parseFloat(formData["Purchase Rate"]) || 0;
            const wholesaleMarginType = formData["Wholesale Margin Type"];
            const wholesaleMarginValue = parseFloat(formData["Wholesale Margin Value"]) || 0;
    
            let wholesaleRate = purchaseRate;
    
            if (wholesaleMarginType === "percentage") {
                wholesaleRate += (purchaseRate * wholesaleMarginValue) / 100;
            } else if (wholesaleMarginType === "amount") {
                wholesaleRate += wholesaleMarginValue;
            }
    
            const wholesaleRateInput = this.shadowRoot.querySelector("#wholesale_rate");
            if (wholesaleRateInput) {
                wholesaleRateInput.value = wholesaleRate.toFixed(2);
            }
        }
    }
    
    customElements.define("purchase-component", PurchaseComponent);
    