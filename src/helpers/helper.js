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
