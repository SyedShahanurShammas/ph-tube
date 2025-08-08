// load function
const loadCategories = async () => {
  try {
    const res = await fetch(
      "https://openapi.programming-hero.com/api/phero-tube/categories"
    );
    const data = await res.json();
    displayCategories(data.categories);
  } catch (err) {
    console.log(err);
  }
};

const loadVideos = async () => {
  try {
    const res = await fetch(
      "https://openapi.programming-hero.com/api/phero-tube/videos"
    );
    const data = await res.json();
    displayVideos(data.videos);
  } catch (err) {
    console.log(err);
  }
};
// display categories
const displayCategories = (categories) => {
  const btnContainer = document.getElementById("buttons-category");
  categories.forEach((item) => {
    const button = document.createElement("button");
    button.classList = "btn ml-2";
    button.innerText = item.category;
    btnContainer.appendChild(button);
  });
};

// {
//     "category_id": "1001",
//     "video_id": "aaaa",
//     "thumbnail": "https://i.ibb.co/L1b6xSq/shape.jpg",
//     "title": "Shape of You",
//     "authors": [
//         {
//             "profile_picture": "https://i.ibb.co/D9wWRM6/olivia.jpg",
//             "profile_name": "Olivia Mitchell",
//             "verified": ""
//         }
//     ],
//     "others": {
//         "views": "100K",
//         "posted_date": "16278"
//     },
//     "description": "Dive into the rhythm of 'Shape of You,' a captivating track that blends pop sensibilities with vibrant beats. Created by Olivia Mitchell, this song has already gained 100K views since its release. With its infectious melody and heartfelt lyrics, 'Shape of You' is perfect for fans looking for an uplifting musical experience. Let the music take over as Olivia's vocal prowess and unique style create a memorable listening journey."
// }

// display cards
const displayVideos = (items) => {
  const videosContainer = document.getElementById("videos_container");
  items.forEach((item) => {
    console.log(item);
    const card = document.createElement("div");
    card.classList = "card bg-base-100 ";
    card.innerHTML = `
     <figure ">
    <img  class="h-[200px] w-[100%] object-cover"
      src="${item.thumbnail}"
      alt="Shoes" />
  </figure>
  <div class="px-0 py-3 flex items-start gap-3 ">
     <figure>
        <img class="h-10 w-10 rounded-full object-cover" src="${
          item.authors[0].profile_picture
        }" alt="">
      </figure>
      <div>
        <h1 class="font-bold text-xl mb-2.5 ">${item.title}</h1>
         <div class="flex gap-2 items-center">
          <p class="mb-2.5 text-gray-400">${item.authors[0].profile_name}  
          </p>
         <span>
          ${
            item.authors[0].verified === true
              ? `
              <img class="w-5" src="https://img.icons8.com/?size=96&id=SRJUuaAShjVD&format=png" />`
              : " "
          }
         </span>
       </div>

        <p></p>
      </div>
  </div>
    `;
    videosContainer.appendChild(card);
  });
};

loadCategories();
loadVideos();
