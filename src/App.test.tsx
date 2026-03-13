import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import App from './App'

vi.mock('../Logo.png', () => ({ default: '/mock-logo.png' }))

describe('App', () => {
  it('renderiza o título e o subtítulo', () => {
    render(<App />)

    expect(screen.getByRole('heading', { name: /oliveira wesley/i })).toBeInTheDocument()
    expect(screen.getByText(/coming soon/i)).toBeInTheDocument()
  })

  it('renderiza a logo com alt text acessível', () => {
    render(<App />)

    const img = screen.getByRole('img', { name: /logo - oliveira wesley/i })
    expect(img).toBeInTheDocument()
    expect(img).toHaveAttribute('src', '/mock-logo.png')
  })
})
