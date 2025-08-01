import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import App from './App'

describe('App Component', () => {
  it('renders the main heading', () => {
    render(<App />)
    const heading = screen.getByText('Vite + React')
    expect(heading).toBeInTheDocument()
  })

  it('renders the count button with initial value', () => {
    render(<App />)
    const button = screen.getByRole('button', { name: /count is 0/i })
    expect(button).toBeInTheDocument()
  })

  it('increments count when button is clicked', () => {
    render(<App />)
    const button = screen.getByRole('button', { name: /count is 0/i })
    
    fireEvent.click(button)
    
    expect(screen.getByRole('button', { name: /count is 1/i })).toBeInTheDocument()
  })

  it('renders the edit instruction text', () => {
    render(<App />)
  
    const appTsxText = screen.getByText('src/App.tsx')
    expect(appTsxText).toBeInTheDocument()
    
    const hmrText = screen.getByText(/and save to test HMR/i)
    expect(hmrText).toBeInTheDocument()
  })

  it('renders both logo images', () => {
    render(<App />)
    const viteLogo = screen.getByAltText('Vite logo')
    const reactLogo = screen.getByAltText('React logo')
    
    expect(viteLogo).toBeInTheDocument()
    expect(reactLogo).toBeInTheDocument()
  })
})
