const customerImg = document.querySelector('#img-card')
const customerName = document.querySelector('.customer-name')
const customerText = document.querySelector('#customer-text')

const btn = document.querySelectorAll('.btn')

let index = 0
const customers = []

function Customer(img, name, text) {
    this.img = img
    this.name = name
    this.text = text
}

function createCustomer(img, name, text) {
    let Img = `./img/${img}.JPG`
    let customer = new Customer(Img, name, text)

    customers.push(customer)
}


createCustomer(0, 'Aditya', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente omnis sint eos voluptatum deleniti, eligendi molestias molestiae iure iste distinctio'
)
createCustomer(1, 'Sourav', 'Lorem ipsum dolor sit amet consectetur adipisicing di molestias molestiae iure iste distinctio'
)
createCustomer(2, 'Shubham', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. m deleniti, eligendi molestias molestiae iure iste distinctio'
)
createCustomer(3, 'Aman', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente omnis sint eos voluptatum deleniti, eligendi molestias molestiae'
)
createCustomer(4, 'Ayush', 'consectetur adipisicing elit. Sapiente omnis sint eos voluptatum deleniti, eligendi molestias molestiae iure iste distinctio'
)
createCustomer(5, 'Samuel', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente omleniti, eligendi molestias molestiae iure iste distinctio'
)
createCustomer(6, 'Rohit', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente omnis sint eos voluptiae iure iste distinctio'
)
createCustomer(7, 'Suri', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente omnis s'
)


btn.forEach(function (button) {
    button.addEventListener('click', function(e) {
        if(e.target.parentElement.classList.contains('prevBtn')) {
            if(index === 0) {
                index = customers.length
            }
            index--
            customerImg.src = customers[index].img
            customerName.textContent = customers[index].name
            customerText.textContent = customers[index].text
        }
        if(e.target.parentElement.classList.contains('nextBtn')) {
            if(index === customers.length) {
                index = 0
            }
            index++
            customerImg.src = customers[index].img
            customerName.textContent = customers[index].name
            customerText.textContent = customers[index].text
        }
    })
})

()
