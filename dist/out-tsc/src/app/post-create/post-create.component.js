import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PostService } from '../post.service';
import { ActivatedRoute, Router } from '@angular/router';
import { mimeType } from './mime-type.validator';
var PostCreateComponent = /** @class */ (function () {
    function PostCreateComponent(postService, router, route) {
        this.postService = postService;
        this.router = router;
        this.route = route;
        this.isLoading = false;
        this.mode = 'created';
    }
    PostCreateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.form = new FormGroup({
            name: new FormControl(null, { validators: [Validators.required, Validators.minLength(3)] }),
            post: new FormControl(null, { validators: [Validators.required] }),
            image: new FormControl(null, { validators: [Validators.required], asyncValidators: [mimeType] })
        });
        this.router.paramMap.subscribe(function (paramMap) {
            if (paramMap.has('postId')) {
                _this.mode = 'edit';
                _this.postId = paramMap.get('postId');
                _this.isLoading = true;
                _this.postService.getPostId(_this.postId).subscribe(function (postData) {
                    _this.isLoading = false;
                    _this.postEdit = {
                        id: postData._id,
                        name: postData.name,
                        post: postData.post,
                        imagePath: postData.imagePath,
                        creator: postData.creator
                    };
                    _this.form.setValue({ name: _this.postEdit.name, post: _this.postEdit.post, image: _this.postEdit.imagePath });
                });
            }
            else {
                _this.mode = 'created';
                _this.postId = null;
                _this.postEdit = null;
            }
        });
    };
    PostCreateComponent.prototype.onImagePicked = function (event) {
        var _this = this;
        var file = event.target.files[0];
        this.form.patchValue({ image: file });
        this.form.get('image').updateValueAndValidity();
        var reader = new FileReader();
        reader.onload = function () {
            _this.imagePreview = reader.result;
        };
        reader.readAsDataURL(file);
    };
    PostCreateComponent.prototype.onSavePost = function () {
        if (this.form.invalid) {
            return;
        }
        this.isLoading = true;
        if (this.mode === 'created') {
            this.postService.addPost(this.form.value.name, this.form.value.post, this.form.value.image);
        }
        else {
            this.postService.updatePost(this.postId, this.form.value.name, this.form.value.post, this.form.value.image);
        }
        this.form.reset();
    };
    PostCreateComponent = tslib_1.__decorate([
        Component({
            selector: 'app-post-create',
            templateUrl: './post-create.component.html',
            styleUrls: ['./post-create.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [PostService, ActivatedRoute, Router])
    ], PostCreateComponent);
    return PostCreateComponent;
}());
export { PostCreateComponent };
//# sourceMappingURL=post-create.component.js.map