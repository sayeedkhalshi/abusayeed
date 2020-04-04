window.onload = function(){
    let filterBox = document.getElementById("search");

    filterBox.addEventListener('keyup', filterFunction);

    function filterFunction(){
        let filterValue = filterBox.value.toLowerCase();
        //get tags
        let portfolioTags = document.querySelectorAll('.portfolio p.tags');
        //loop through the tags
        for(let i=0; i<portfolioTags.length; i++) {
            //get tag text
            let tagText = portfolioTags[i].innerHTML.toLowerCase();
            //if matches
            if(tagText.indexOf(filterValue) > -1){
                portfolioTags[i].parentElement.style.display = '';
            }else{
                portfolioTags[i].parentElement.style.display = 'none';
            }
        }
        
       
    }
}