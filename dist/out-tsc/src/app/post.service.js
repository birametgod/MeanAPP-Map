import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
var BACKEND_URL = environment.apiUrl + '/posts/';
var PostService = /** @class */ (function () {
    function PostService(http, route) {
        this.http = http;
        this.route = route;
        this.posts = [];
        this.postUpdated = new Subject();
    }
    PostService.prototype.getPosts = function (currentPage, pageSize) {
        var _this = this;
        var queryParams = "?page=" + currentPage + "&size=" + pageSize;
        this.http
            .get(BACKEND_URL + queryParams)
            .pipe(map(function (responseData) {
            return {
                postGet: responseData.post.map(function (postData) {
                    return {
                        creator: postData.creator,
                        imagePath: postData.imagePath,
                        name: postData.name,
                        post: postData.post,
                        id: postData._id
                    };
                }),
                maxPost: responseData.maxPost
            };
        }))
            .subscribe(function (transformedData) {
            _this.posts = transformedData.postGet;
            _this.postUpdated.next({ posts: _this.posts.slice(), postsCount: transformedData.maxPost });
        });
    };
    PostService.prototype.getUpdatedListener = function () {
        return this.postUpdated.asObservable();
    };
    PostService.prototype.updatePost = function (id, name, post, image) {
        var _this = this;
        var postEdit;
        if (typeof image === 'object') {
            postEdit = new FormData();
            postEdit.append('id', id);
            postEdit.append('name', name);
            postEdit.append('post', post);
            postEdit.append('image', image, name);
        }
        else {
            postEdit = {
                id: id,
                name: name,
                post: post,
                imagePath: image,
                creator: null
            };
        }
        this.http.put(BACKEND_URL + id, postEdit).subscribe(function (result) {
            _this.route.navigate(['/']);
        });
    };
    PostService.prototype.getPostId = function (id) {
        return this.http.get(BACKEND_URL + id);
    };
    PostService.prototype.addPost = function (name, content, image) {
        var _this = this;
        var postData = new FormData();
        postData.append('name', name);
        postData.append('post', content);
        postData.append('image', image, name);
        this.http.post(BACKEND_URL, postData).subscribe(function (res) {
            _this.route.navigate(['/']);
        });
    };
    PostService.prototype.deletePost = function (postId) {
        return this.http.delete(BACKEND_URL + postId);
    };
    PostService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient, Router])
    ], PostService);
    return PostService;
}());
export { PostService };
//# sourceMappingURL=post.service.js.map