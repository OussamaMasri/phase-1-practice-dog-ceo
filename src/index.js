console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'




document.addEventListener('DOMContentLoaded',function(){
    function animalImages(){
        return fetch(imgUrl)
        .then(response => response.json())
        .then(data => {
            const dogs=data.message;
            const div=document.querySelector('#dog-image-container')
    
            for (const dog of dogs) {
                const li=document.createElement(`li`)
                const img=document.createElement('img')
                const dogg=dog.toString()
                img.src=dogg
                div.appendChild(li)
                li.appendChild(img)
                console.log(dog);
                
            }
        }).catch(err => {console.log(`error: ${err}`);});
    }
    function animalBreed(){
        return fetch(breedUrl).then(respose=>respose.json().then(data=>{
            
            breeds=data.message
            const ul=document.querySelector('#dog-breeds')
            const array=[]
            for(breed in breeds){
                
                const li=document.createElement(`li`)
                const bredd=breed.toString()
                array.push(bredd)
                ul.appendChild(li) 
                
            }
            //filtered from major list of breed
            const selected=document.getElementById('breed-dropdown')
            const value=selected.value
            selected.onchange=dropDown(value)
            function dropDown(e){
                console.log(e);
                const filtered=array.filter(item => item.charAt(0)==e)
                for (const item of filtered) {
                    console.log(item);
                    const li=document.createElement(`li`)
                    li.innerText=item
                    ul.appendChild(li)
    
                }
                
            }
            

        }))
    }
    animalBreed()
    animalImages()

})