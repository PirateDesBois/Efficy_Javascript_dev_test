const oppoStatus = [
        {
                "K_OPPO_STATUS": 1,
                "STATUS": "1. Initial Contact",
                "SUCCESS": 0
        },
        {
                "K_OPPO_STATUS": 2,
                "STATUS": "2. Demonstration",
                "SUCCESS": 25
        },
        {
                "K_OPPO_STATUS": 3,
                "STATUS": "3. Proposal",
                "SUCCESS": 50
        },
        {
                "K_OPPO_STATUS": 4,
                "STATUS": "4. Negotiation",
                "SUCCESS": 75
        },
        {
                "K_OPPO_STATUS": 5,
                "STATUS": "5. Order",
                "SUCCESS": 100
        }
];
let select = document.querySelector('select');
                console.log(select);
                
const FormComponent = class {
        constructor() {
        }
        start() {
                oppoStatus.forEach(e => {
                        let option = new Option
                        option.innerHTML = e.STATUS
                        option.id = e.K_OPPO_STATUS
                        select.appendChild(option)
                });

                // You are allowed to add extra methods, properties or change the constructor of this class
        }
}

const fc = new FormComponent();
fc.start();