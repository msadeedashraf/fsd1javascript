const get_movie = (value = "girl") => {
  fetch(`https://api.tvmaze.com/singlesearch/shows?q=${value}&embed=episodes`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      //Rejected
    })
    .finally(() => {
      //settled
    });
};

get_movie("girl");
