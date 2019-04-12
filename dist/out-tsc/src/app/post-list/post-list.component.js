import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { PostService } from '../post.service';
import { Subject } from 'rxjs';
import { UserService } from '../user.service';
var PostListComponent = /** @class */ (function () {
    function PostListComponent(postService, userService) {
        this.postService = postService;
        this.userService = userService;
        //  posts = [{ name: 'Birame', post: 'je suis bien là' }, { name: 'Mouhamed', post: 'je suis bien là avec mon ü' }];
        this.posts = [];
        this.isLoading = false;
        this.totalPosts = 0;
        this.sizePage = 2;
        this.currentPage = 1;
        this.sizePageOption = [2, 4, 8, 10];
        this.isAuth = false;
        this.postUpdated = new Subject();
    }
    PostListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoading = true;
        this.postService.getPosts(this.currentPage, this.sizePage);
        this.postSub = this.postService.getUpdatedListener().subscribe(function (post) {
            _this.posts = post.posts;
            _this.totalPosts = post.postsCount;
            _this.isLoading = false;
        });
        this.userId = this.userService.getIdUser();
        this.isAuth = this.userService.getIsAuth();
        this.isAuthSubs = this.userService.getUserAuthenticateListener().subscribe(function (authValue) {
            _this.isAuth = authValue;
            _this.userId = _this.userService.getIdUser();
        });
    };
    PostListComponent.prototype.onDelete = function (postId) {
        var _this = this;
        this.isLoading = true;
        this.postService.deletePost(postId).subscribe(function () {
            _this.postService.getPosts(_this.currentPage, _this.sizePage);
        });
    };
    PostListComponent.prototype.onImageChange = function (page) {
        this.isLoading = true;
        this.currentPage = page.pageIndex + 1;
        this.sizePage = page.pageSize;
        this.postService.getPosts(this.currentPage, this.sizePage);
    };
    PostListComponent.prototype.ngOnDestroy = function () {
        this.postSub.unsubscribe();
        this.isAuthSubs.unsubscribe();
    };
    PostListComponent = tslib_1.__decorate([
        Component({
            selector: 'app-post-list',
            templateUrl: './post-list.component.html',
            styleUrls: ['./post-list.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [PostService, UserService])
    ], PostListComponent);
    return PostListComponent;
}());
export { PostListComponent };
//# sourceMappingURL=post-list.component.js.map