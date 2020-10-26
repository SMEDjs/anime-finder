async function buttonClickGET() {
  var name = document.getElementById("name").value
  if (!name) return document.getElementById("err").innerHTML = "Enter name";
          
  const list = await fetch("https://api.jikan.moe/v3/search/anime?q=" + name).then(res => res.json());
        
  if(!list) return document.getElementById("err").innerHTML = "Error, retry later";
  if(!list.results[0]) return document.getElementById("err").innerHTML = "No results found ";
  document.getElementById("demo").innerHTML = "<b>Results for: "+ name +"</b>"; 
  document.getElementById("list").innerHTML = "<div class='cards'>" + list.results.map(e => `<div class="card" style="width: 18rem;">` + `<img class="card-img-top" src="`+ e.image_url + `"></img><div class="card-body"><h5 class="card-title">`+ e.title +`</h5>` + `<p class="card-text">`+ e.synopsis+ `</p>`+ `<a href="`+ e.url +`" class="btn-primary">More</a>` +"<br></div></div><br>").join(' ') + "</div>";  
}