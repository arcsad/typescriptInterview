import { merge } from './mergeArrays';
import 'jest';
describe('mergeArrays', () => {
    it('should merge two sorted arrays', () => {
        const result = merge([1, 3, 5], [2, 4, 6]);
        expect(result).toEqual([1, 2, 3, 4, 5, 6]);
    });

    it('should handle empty arrays', () => {
        const result = merge([], [2, 4, 6]);
        expect(result).toEqual([2, 4, 6]);
    });


});
