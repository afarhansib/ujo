const btnVoucher = document.getElementById('btn-voucher')
const btnMember = document.getElementById('btn-member')
const formTitle = document.querySelector('.form .card .title')
const laUsername = document.getElementById('label-username')
const inUsername = document.getElementById('username')
const laPassword = document.getElementById('label-password')
const inPassword = document.getElementById('password')
let formType = 'voucher'

btnVoucher.addEventListener('click', function() {
	this.classList.remove('inactive')
	this.setAttribute('disabled', true)
	btnMember.classList.add('inactive')
	btnMember.removeAttribute('disabled')
	formTitle.innerText = 'Masuk dengan voucher'
	laUsername.innerText = 'Kode voucher'
	laPassword.classList.add('hidden')
	inPassword.classList.add('hidden')
	formType = 'voucher'
})

btnMember.addEventListener('click', function() {
	this.classList.remove('inactive')
	this.setAttribute('disabled', true)
	btnVoucher.classList.add('inactive')
	btnVoucher.removeAttribute('disabled')
	formTitle.innerText = 'Masuk sebagai member'
	laUsername.innerText = 'Username'
	laPassword.classList.remove('hidden')
	inPassword.classList.remove('hidden')
	formType = 'member'
})

inUsername.addEventListener('change', function() {
	if (formType === 'voucher') {
		inPassword.value = this.value
	}
})