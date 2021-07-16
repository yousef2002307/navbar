/*
api for tv shows
function fetching(query){
    fetch(`http://api.tvmaze.com/search/shows?q=${query}`).then(function(response){
    
    
    return response.json();
    }).then(function(data){
    
    let results = data.map(element => element.show.name);
    let urls =    data.map(element => element.show.url);
    console.log(results);
    console.log(urls);
    for(let i = 0; i < 1; i++){
        document.querySelector('p').textContent = "";
        for(let j = 0; j < results.length; j++){
            let newelement = document.createElement("a");
            let attr = document.createAttribute("href");
            attr.value = urls[j];
            newelement.setAttributeNode(attr);
            newelement.textContent = results[j] + " - ";
           // document.querySelector('p').innerHTML += newelement;
           document.querySelector('p').appendChild(newelement);
           console.log(newelement);
       // document.querySelector('p').textContent += results[j] + " - ";
        
    }
    /*
ممكن تستخدم  foreach عادي
ul.innerhtml = "" ///// عشان يفضيلك ال ul  كل مره تكتب حرف جديد كلام مهم جدا
results.forEch(result => {
li = result
ul.appendchild(li)
});

    */
   /*
    }
    });
    };
    document.querySelector("input").onkeyup = function(){
clearTimeout(0);
if(this.value.trim().length === 0){
    return; // معني كده انه هيوقف الداله وكل حاجه تحت  return  لا تنفذ
/// فايدة الدال الشرطيه اننها تتاكد لو مفيش كلام فمتعملش request  واحنا مستخدمين ال trim عشان المسافات لاتحتسب
}
        setTimeout(function(){

        
    fetching(document.querySelector("input").value);
        },250); ///////////////////////////////طول ماانت بتكتب اسرع من 250 ميللي ثانيه النتائج مش هتظهر
    };



*/






