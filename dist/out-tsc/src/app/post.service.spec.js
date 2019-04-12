import { TestBed } from '@angular/core/testing';
import { PostService } from './post.service';
describe('PostService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(PostService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=post.service.spec.js.map