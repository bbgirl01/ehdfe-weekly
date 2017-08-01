import globData from './globData.json';


globData.forEach(function (item) {
    console.log(item)
})
const navsData = [];

var icons = ['coffee','apple','android-o','chrome','github','disconnect','camera-o','laptop','hdd','code-o'];

globData.forEach(function (item) {
    var reg = /\((.+)\)\.md$/;
    var match = reg.exec(item);
    navsData.push({
        url:'/'+match[1],
        name:item,
        icon: icons[parseInt((Math.random()*10),10)],
    })
})
export default navsData;