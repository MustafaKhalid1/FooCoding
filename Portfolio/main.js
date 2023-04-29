//GitHub data

const username = "mustafakhalid1";
const repoName = "FooCoding";
const apiUrl = `https://api.github.com/repos/${username}/${repoName}/contents`;

function createProjectList(myArray) {
    const projectUl = document.createElement("ul");
    projectUl.setAttribute("Id", "project");
    document.getElementById("git_projects").appendChild(projectUl);
      
    for (let i = 0; i <myArray.length ; i++) {
        const liItems = document.createElement("li");
        liItems.setAttribute("id", "name" + i);
        document.getElementById("project").appendChild(liItems);
        const liLink = document.createElement("a");
        liLink.href = "https://github.com/MustafaKhalid1/FooCoding/tree/main/" + myArray[i];
        liLink.innerText = myArray[i];
        liLink.setAttribute("target", "_blank");
        document.getElementById("name" + i).appendChild(liLink);
        //document.getElementById("name" + i).innerHTML = myArray[i];
    }

   };

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    const projects = data.filter(item => item.type === "dir").map(item => item.path);
    //const project_url = data.filter(item => item.type === "dir").map(item => item.url);
    console.log(projects);
    createProjectList(projects); 
  })
  .catch(error => {
    console.error(error);
  });

  //Admin
  if (window.location.pathname === '/index.html/admin') {
    window.location.href = 'admin.html';
  }

  //form button
  const form = document.getElementById('form')

    form.addEventListener('submit', function(event) {
    event.preventDefault();
    const yourName = document.getElementById('name').value 
    const yourEmail = document.getElementById('email').value 
    const yourSubject = document.getElementById('subject').value 
    const yourMessage = document.getElementById('message').value 

    console.log(yourName)
    console.log(yourEmail)
    console.log(yourSubject)
    console.log(yourMessage)
    })