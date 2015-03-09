/**
 * Created by 文琪 on 2015/3/6.
 */

var sa = require('superagent');
var cheer = require('cheerio');
var absolution = require('absolution');


/**
 *
 * @param done
 * 获取图片成功后执行的回调函数：function(photoes)
 * photoes: 数组，包含4个图片的URL
 * @param fail
 * 获取图片失败后执行的回调函数：function(err)
 */
var random_photo = function(done, fail){
    sa.get('http://photo.ynu.edu.cn/').end(function(res){
        var $ = cheer.load(absolution(res.text, 'http://photo.ynu.edu.cn/'));
        var result = [];
        result.push($('.thumbimage').eq(4).attr('src'));
        result.push($('.thumbimage').eq(5).attr('src'));
        result.push($('.thumbimage').eq(6).attr('src'));
        result.push($('.thumbimage').eq(7).attr('src'));
        done(result);
    }).on('error', fail);
};


var new_photo = function(done, fail){
    sa.get('http://photo.ynu.edu.cn/').end(function(res){
        var $ = cheer.load(absolution(res.text, 'http://photo.ynu.edu.cn/'));
        var result = [];
        result.push($('.thumbimage').eq(0).attr('src'));
        result.push($('.thumbimage').eq(1).attr('src'));
        result.push($('.thumbimage').eq(2).attr('src'));
        result.push($('.thumbimage').eq(3).attr('src'));
        done(result);
    }).on('error', fail);
};

var popular_photo = function(done, fail){
    sa.get('http://photo.ynu.edu.cn/').end(function(res){
        var $ = cheer.load(absolution(res.text, 'http://photo.ynu.edu.cn/'));
        var result = [];
        result.push($('.thumbimage').eq(8).attr('src'));
        result.push($('.thumbimage').eq(9).attr('src'));
        result.push($('.thumbimage').eq(10).attr('src'));
        result.push($('.thumbimage').eq(11).attr('src'));
        done(result);
    }).on('error', fail);
};

module.exports = {
    random: random_photo,
    newest: new_photo,
    popular: popular_photo
};