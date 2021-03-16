const github = new Github;
const ui = new UI;

const searchGit = document.querySelector('.search-form');
searchGit.addEventListener('keyup', (e) => {
  const userText = e.target.value;
  if(userText !== ''){
     github.getGitUser(userText)
     .then(data => {
       if(data.profile.message === "Not Found" ){
         ui.showError('User not found', 'alert alert-danger');
       }else{
         //Show Profile
         ui.showProfile(data.profile);
         ui.showRepos(data.repos);
       }
     })
  }else{
    //clear input
   ui.clearProfile();
  }
})