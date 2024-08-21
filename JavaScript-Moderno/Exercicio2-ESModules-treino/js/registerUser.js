import { wordUserProfile } from "./userProfile.js"
import { showUserName } from "./showUserName.js"

export function regUser(){
  const inputUserName = document.getElementById('userNameInput')
  sessionStorage.setItem('userName', inputUserName.value)
  inputUserName.value = ''

  document.getElementById('userNameContainer').style.display = 'none'
  wordUserProfile()  
  showUserName()
}