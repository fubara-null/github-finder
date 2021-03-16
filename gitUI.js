class UI {
  constructor(){
    this.uiWrapper = document.querySelector('.git-wrapper');

  }

  showProfile(user){
     this.uiWrapper.innerHTML = `
     <div class     = 'card card-body'>
       <div class   = "row">
         <div class = "col-md-3">
           <img src = "${user.avatar_url}" class = "img-fluid mb-2">
           <a href  = "${user.html_url}" target="_blank" class ="btn btn-primary btn-block">View Profile</a>
           </div>
            <div class = "col-md-9">
              <span class="badge badge-primary">Public Repos:   ${user.public_repos}</span>
              <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
              <span class="badge badge-info">Followers:         ${user.followers}</span>
              <span class="badge badge-success">Following:      ${user.following}</span>
              <br><br>

              <ul class ="list-group">
              <li class ="list-group-item">Company:  ${user.company}</li>
              <li class ="list-group-item">Website:  ${user.blog}</li>
              <li class ="list-group-item">Location: ${user.location}</li>
              <li class ="list-group-item">Joined:   ${user.created_at}</li>
              </ul>

         </div>
       </div>
     </div>
     `;
  }

  showRepo(reposData){
    let output;
    reposData.forEach((repo) => {
      output += `
      <div class="card card-body">
         <div class= "row">
           <div class="col-md-6">
              <a href = "${repo.html_url}" target="_blank">${repo.name}</a>
           </div>

           <div class = "col-md-6">
              <span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>
              <span class="badge badge-primary">Watchers: ${repo.watchers_count}</span>
              <span class="badge badge-primary">Forks: ${repo.forms_count}</span>
           </div>
         
         </div>
      </div>
      `;
    });

    document.querySelector('repos-wrapper').innerHTML = output;
  }

  clearProfile(){
    this.uiWrapper.innerHTML = '';
  }

  showError(message, classname){
     this.clearAlert();
     const div = document.createElement('div');
     div.className = classname;
     div.appendChild(document.createTextNode(message));

     //Get parent
     const container = document.querySelector('.container');

     //Get search box
     const search = document.querySelector('search');
     container.insertBefore(div, search);
  }

  //clear error div
  clearAlert(){
    const errorDiV = document.querySelector('alert');

    while(errorDiV){

      setTimeout(function(){
        errorDiV.remove();
      },2000);
    }
  }
}