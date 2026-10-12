
// const command=process.argv[2];
const username=process.argv[2];
const url = `https://api.github.com/users/${username}/events`;
async function githubactivity(){
    try{
    const response=await fetch(url);
    if(!response.ok){
        console.log("error:github user not found in github")
        return;
    }
    if(!username){
        console.log("error:you must provide the username")
        return;
    }
    const data=await response.json();
    for (const event of data) {
    if (event.type === "PushEvent") {
        console.log(`Pushed commits to ${event.repo.name}`);
    }
    else if(event.type === "WatchEvent"){
        console.log(`started eventare ${event.repo.name}`);
    }
    else if(event.type==="IssuesEvent"){
        console.log(`Isuess in event ${event.repo.name}`)
    }
}
    }catch(error){
        console.log("Error fetching GitHub activity:", error.message);
    }
}
githubactivity();

