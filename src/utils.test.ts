import { describe, it, expect } from 'vitest'
import { add, multiply, isEven, formatMessage } from './utils'

describe('Utility Functions', () => {
  describe('add function', () => {
    it('should add two positive numbers correctly', () => {
      expect(add(2, 3)).toBe(5)
    })

    it('should add negative numbers correctly', () => {
      expect(add(-2, -3)).toBe(-5)
    })

    it('should handle zero', () => {
      expect(add(0, 5)).toBe(5)
      expect(add(5, 0)).toBe(5)
    })
  })

  describe('multiply function', () => {
    it('should multiply two positive numbers correctly', () => {
      expect(multiply(3, 4)).toBe(12)
    })

    it('should handle multiplication by zero', () => {
      expect(multiply(5, 0)).toBe(0)
    })

    it('should handle negative numbers', () => {
      expect(multiply(-2, 3)).toBe(-6)
    })
  })

  describe('isEven function', () => {
    it('should return true for even numbers', () => {
      expect(isEven(2)).toBe(true)
      expect(isEven(0)).toBe(true)
      expect(isEven(100)).toBe(true)
    })

    it('should return false for odd numbers', () => {
      expect(isEven(1)).toBe(false)
      expect(isEven(3)).toBe(false)
      expect(isEven(99)).toBe(false)
    })
  })

  describe('formatMessage function', () => {
    it('should format message correctly', () => {
      expect(formatMessage('John')).toBe('Hello, John!')
    })

    it('should handle empty string', () => {
      expect(formatMessage('')).toBe('Hello, !')
    })
  })
})
