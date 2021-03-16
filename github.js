class Github {
  constructor(){
    this.client_id     = "a9730ed143a394b0ed15";
    this.client_secret = "ad51d53536351de3d2fc01b69f15b0b3c17c0a3a";
    this.repos_count   = 5;
    this.repos_sort    = 'created: asc';
  }
   async getGitUser(user) {
     const proRes = await fetch(`https://api.github.com/users/${user}?
     client_id=${this.client_id}&client_secret=${this.client_secret}`);

     const userRepos = await 
     fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}
     client_id=${this.client_id}&client_secret=${this.client_secret}`);

     const profile = await proRes.json();
     const repos   = await userRepos.json();

     return {
       profile,
       repos
     }
   }
}