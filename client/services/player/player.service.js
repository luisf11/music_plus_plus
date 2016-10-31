"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
require('rxjs/add/operator/map');
var headers = new http_1.ResponseOptions({
    headers: new http_1.Headers({
        'Content-Type': 'application/json'
    })
});
var PlayerService = (function () {
    function PlayerService(http) {
        var _this = this;
        this.http = http;
        this.maxResults = 20;
        this.isPlaying = false;
        this.apiPart = 'snippet';
        this.apiKey = 'AIzaSyDsnjiL2Wexp-DgCKMMQF7VyL2xzZLMFaY';
        this.playSound = new Observable_1.Observable(function (observable) {
            _this.playSoundObserbable = observable;
        });
        window.AudioContext = window.AudioContext || window.webkitAudioContext;
        this.audioContext = new AudioContext();
    }
    PlayerService.prototype.search = function (query) {
        return this.http.get("https://www.googleapis.com/youtube/v3/search?part=\n        " + this.apiPart + "\n        &maxResults=" + this.maxResults + "\n        &q=" + query + "&key=" + this.apiKey, headers)
            .map(function (res) { return res.json(); });
    };
    PlayerService.prototype.play = function (video) {
        var _this = this;
        var request = new XMLHttpRequest();
        request.open("GET", "/api/stream/play/" + video.id, true);
        request.responseType = "arraybuffer";
        request.onload = function () {
            _this.currentSound = _this.audioContext.createBufferSource(); // Create Sound Source
            _this.audioContext.decodeAudioData(request.response, function (buffer) {
                _this.currentSound.buffer = buffer;
                _this.currentSound.connect(_this.audioContext.destination);
                _this.currentSound.start(_this.audioContext.currentTime);
                _this.playSoundObserbable.next(video);
            });
        };
        request.send();
    };
    PlayerService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], PlayerService);
    return PlayerService;
}());
exports.PlayerService = PlayerService;
//# sourceMappingURL=player.service.js.map