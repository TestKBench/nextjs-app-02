import { render, screen } from '@testing-library/react'
import Home from '../pages/index'

describe('Home', () => {
  it('renders the homepage', () => {
    render(<Home />)
    expect(screen.getByText(/Welcome to NextJS App/i)).toBeInTheDocument()
  })
})
