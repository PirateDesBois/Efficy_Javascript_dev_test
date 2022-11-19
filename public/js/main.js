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

const select = document.querySelector('select');
console.log(select);
const success = document.querySelector('input');
console.log(success);
const submit = document.querySelector('button');
console.log(submit);
const output = document.getElementsByClassName('output')[0];
console.log(output);
const body = document.querySelector('body');
console.log(body);
const img = document.createElement('img');
img.src = "./public/img/sub.png";
img.className = 'submarine';
body.appendChild(img);
const form = document.querySelector('form');
const divSub = document.createElement('div');
const divOut = document.createElement('div');
form.appendChild(divSub);
form.appendChild(divOut);
//insert button inside the first div
divSub.append((submit));
//insert output inside the second div
divOut.append((output));

const FormComponent = class {
        constructor() {
        }
        start() {
                // Creating an option for each element of the array
                oppoStatus.forEach(e => {
                        let option = new Option;
                        option.innerHTML = e.STATUS;
                        option.id = e.K_OPPO_STATUS;
                        option.value = e.SUCCESS;
                        select.appendChild(option);
                });

                // Display value inside of the input
                const display = () => {
                        success.value = select.value;
                        img.classList.remove('subActive');
                        body.classList.remove('anim');
                        output.innerHTML = `Waiting for form submit...`;
                };
                const show = (e) => {
                        img.classList.add('subActive');
                        body.classList.add('anim');
                        setTimeout(() => {
                                output.innerHTML = `{"status":${select.selectedIndex + 1},"success":${select.value}}`;
                        }, 3000);
                        //prevent page reaload
                        e.preventDefault();
                        clearTimeout();
                };
                select.addEventListener("change", display);
                submit.addEventListener("click", show);
                // You are allowed to add extra methods, properties or change the constructor of this class
        };
};

const fc = new FormComponent();
fc.start();