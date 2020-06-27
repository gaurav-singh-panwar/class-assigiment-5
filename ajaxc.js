$(window).on("load", function()
{
    console.log("helllooo");
    
        console.log("hiii");
        
      
        
        $.ajax({
            type: "GET",
            contentType: "application/json",
             headers: {
                "x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
                "x-rapidapi-key": "07f15fe3f0msh7f4d116f9a48040p145928jsne4d8ed5bae69",
                "x-bingapis-sdk": "true"
            },
            url: "https://bing-news-search1.p.rapidapi.com/news?safeSearch=Off&textFormat=Raw",
            success: function (result) {
                console.log("result",result);
                var arr= result.value;
                console.log("array",arr);
              
               arr.map(x=>{ 
                $('#articlesList').append(`<div class="news"> 
                <h2>${x.name}</h2>
                <img src=${x.image.thumbnail.contentUrl} style="height:${x.image.thumbnail.height}px;width:${x.image.thumbnail.width}px">
                 <span>
                 ${x.datePublished}
                 </span>  
                <div class="article-body" style="font-size: 1.25rem;"> ${x.description} <a href=${x.ampUrl}></t>${"Read more.."}</a> </div>
                    </div>`);
      
               })
              
            }
            });
       
    });