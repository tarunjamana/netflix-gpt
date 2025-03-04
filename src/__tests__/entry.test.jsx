import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from '../App'

describe('entry test setup', () => { 
    it("Should render the app component", () => {
        render(<App />)
        expect(screen.getByTestId("entryTest")).toBeInTheDocument()
    })
}) 