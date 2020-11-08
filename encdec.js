const encryptMsg = document.getElementById("encrypt-input")
const decryptMsg = document.getElementById("decrypt-input")
const encryptPk = document.getElementById("encrypt-pk")
const decryptPk = document.getElementById("decrypt-pk")
const encryptBtn = document.getElementById("encryptButton")
const decryptBtn = document.getElementById("decryptButton")
const encryptResult = document.getElementById("encryptResult")
const decryptResult = document.getElementById("decryptResult")




alphabetsObj = {'A': 1, 'B': 2, 'C': 3, 'D': 4, 'E': 5, 'F': 6, 'G': 7, 'H': 8, 'I': 9, 'J': 10, 'K': 11, 'L': 12, 'M': 13, 'N': 14, 'O': 15, 'P': 16, 'Q': 17, 'R': 18, 'S': 19, 'T': 20, 'U': 21, 'V': 22, 'W': 23, 'X': 24, 'Y': 25, 'Z': 26}
alphabets = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

function encrypt(str, key) {
	var result = ""
	var resultArr = []
	var myArr = []
	for(let i = 0; i < str.length; i++) {
		if(alphabetsObj.hasOwnProperty(str[i].toUpperCase())){
			myArr.push(alphabetsObj[str[i].toUpperCase()])
		} else {
			myArr.push(str[i])
		}
	}
	
	for(let i = 0; i < myArr.length; i++) {
		item = myArr[i]
		if(alphabets.indexOf(alphabets[item-1]) == -1){
			resultArr.push(item);
			continue
		}
		if(item + key > 26){
			diff = 26 - item
			resultArr.push(key - diff)
		} else {
			resultArr.push(item + key)
		}
	}
	for(let i = 0; i < resultArr.length; i++) {
		abc = alphabets[resultArr[i] - 1]
		if(abc) result += abc
		else result += resultArr[i]
	}
	return result
}

function decrypt(str, key) {
	var result = ""
	var resultArr = []
	var myArr = []

	for(let i = 0; i < str.length; i++) {
		if(alphabetsObj.hasOwnProperty(str[i].toUpperCase())){
			myArr.push(alphabetsObj[str[i].toUpperCase()])
		} else {
			myArr.push(str[i])
		}
	}

	for(let i = 0; i < myArr.length; i++) {
		item = myArr[i]
		if(alphabets.indexOf(alphabets[item-1]) == -1){
			resultArr.push(item);
			continue
		}
		item = myArr[i]
		if(myArr.indexOf(item) == -1) continue
		if(item - key <= 0){
			something = key - item
			resultArr.push(26 - something)
		} else {
			resultArr.push(item - key)
		}
	}
	for(let i = 0; i < resultArr.length; i++) {
		abc = alphabets[resultArr[i] - 1]
		if(abc) result += abc
		else result += resultArr[i]
	}
	return result
}


function Encrypt() {
	encryptResult.innerText = encrypt(encryptMsg.value, parseInt(encryptPk.value))
	encryptResult.style.display = "block"
}

function Decrypt() {
	decryptResult.innerText = decrypt(decryptMsg.value, parseInt(decryptPk.value))
	decryptResult.style.display = "block"
}



// Event Listeners

encryptBtn.addEventListener('click', Encrypt)
decryptBtn.addEventListener('click', Decrypt)