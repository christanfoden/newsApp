export function hello(){
  return 'hello';
}

export function ContentSnippet(content){
     return content.split(/\s+/).slice(0, 40).join(" ")+"...";
}

export function GetImage(content){
    var myRegexp = new RegExp(/<img.*?src="(.*?)"/);
    var match = myRegexp.exec(content);
        if (match){
            return match[1];
         }
}

export function GetVideo(content){
    var myRegexp = new RegExp(/<iframe.*?src="(.*?)"/);
    var match = myRegexp.exec(content);
        if (match){
            return match[1];
         }
}

export function GetMedia() {
  return fetch(`http://www.energylivenews.com/wp-json/wp/v2/media/${articleData.featured_media}`)
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({ mediaID: responseJson });
    })
    .catch((error) => {
      console.error(error);
    });
}
