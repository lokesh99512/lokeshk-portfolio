import assert from 'node:assert/strict';
import { getExperienceLabel, getYearsOfExperience } from '../src/lib/experience';

assert.equal(getExperienceLabel(new Date(2026, 0, 1)), '5+');
assert.equal(getYearsOfExperience(new Date(2025, 11, 31)), 4);
assert.equal(getYearsOfExperience(new Date(2027, 0, 1)), 6);
assert.equal(getYearsOfExperience(new Date(2020, 11, 31)), 0);

console.log('Experience date checks passed.');