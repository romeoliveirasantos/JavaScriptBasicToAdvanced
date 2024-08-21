export function wordUserProfile(){
  const userProfilePhoto = document.getElementById('profileUser')
  const userName = sessionStorage.getItem('userName')
  if(userName){
    const firstWordUserName = userName.substring(0,1)
    userProfilePhoto.innerText = firstWordUserName
    userProfilePhoto.style.color = 'white'
  }
  
  
}
