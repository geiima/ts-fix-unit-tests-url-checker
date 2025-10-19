import {calculatePasswordStrength} from "../src/calculate-password-strength";

describe('calculate password strength', () => {
    // VERY WEAK

        test('empty password', () => {
            expect(calculatePasswordStrength('')).toBe('Very Weak');
        })

        test('only lowercase letters', () => {
            expect(calculatePasswordStrength('abcdef')).toBe('Very Weak');
        })

        test('only uppercase letters', () => {
            expect(calculatePasswordStrength('ABCDEF')).toBe('Very Weak');
        })

        test('only digits', () => {
            expect(calculatePasswordStrength('1234567890')).toBe('Very Weak');
        })

        test('mix of lowercase letters and digits but short', () => {
            expect(calculatePasswordStrength('abc123')).toBe('Very Weak');
        })
    })

    // WEAK

        test('only long lowercase letters (>=12)', () => {
            expect(calculatePasswordStrength('abcdefghijkl')).toBe('Weak');
        })

        test('letters and digits (>=8)', () => {
            expect(calculatePasswordStrength('abc12345678')).toBe('Weak');
        })



    // MODERATE

        test('letters, digits, and uppercase mix', () => {
            expect(calculatePasswordStrength('ABcd12345')).toBe('Moderate');
        })

        test('long letters and digits (>=12)', () => {
            expect(calculatePasswordStrength('abc123456789')).toBe('Moderate');
        })



    // STRONG

        test('letters, digits, and special characters', () => {
            expect(calculatePasswordStrength('ABC12345#$%^&')).toBe('Strong');
        })

        test('long with letters, digits and special characters', () => {
            expect(calculatePasswordStrength('ABCdefght123456789#$%^&')).toBe('Strong');
        })

        test('complex password with lowercase, uppercase, digits and special characters', () => {
            expect(calculatePasswordStrength('Abc123456!@#$%^&*')).toBe('Strong');
        })

