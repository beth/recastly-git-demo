var searchYouTube = ({key, query = 'dogs', max = 6}, setResults) => {
  $.get('https://www.googleapis.com/youtube/v3/search', {
    part: 'snippet',
    key: key,
    q: query,
    maxResults: max,
    type: 'video',
    videoEmbeddable: 'true'
  })
  .done(({items}) => {
    if (setResults) {
      setResults(items);
    }
  }).fail(({responseJSON}) => {
    responseJSON.error.errors.forEach((err) =>
      console.error(err)
    );
  });
};


window.searchYouTube = searchYouTube;
