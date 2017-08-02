import globData from './globData.json';

const navsData = [];

var icons = ['coffee','apple','android-o','chrome','github','disconnect','camera-o','laptop','hdd','code-o'];

globData.forEach(function (item) {
    var reg = /\((.+)\)\.md$/;
    var match = reg.exec(item);
    navsData.push({
        url: '/article/' + match[1],
        name: item,
        icon: icons[parseInt((Math.random() * 10), 10)],
    })
})
export default navsData;