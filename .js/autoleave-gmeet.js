const sisaUser = 30 //change remaining participants as you want

function leaveCall(){
	const jumlah = document.querySelector('[class="uGOf1d"]').innerText
	if(jumlah < sisaUser){
		document.querySelector('[class="VfPpkd-Bz112c-LgbsSe yHy1rc eT1oJ tWDL4c jh0Tpd Gt6sbf QQrMi ftJPW"]').click()
	}
}

setInterval(leaveCall, 100) //change interval as you want