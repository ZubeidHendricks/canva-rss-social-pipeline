// Jest setup file
import '@testing-library/jest-dom';

// Mock Canva APIs for testing
jest.mock('@canva/design', () => ({
  addElementAtPoint: jest.fn().mockResolvedValue({}),
}));

jest.mock('@canva/app-ui-kit', () => ({
  AppUiProvider: ({ children }: { children: React.ReactNode }) => children,
  Rows: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  Text: ({ children }: { children: React.ReactNode }) => <span>{children}</span>,
  Title: ({ children }: { children: React.ReactNode }) => <h1>{children}</h1>,
  Button: ({ children, onClick }: any) => <button onClick={onClick}>{children}</button>,
  FormField: ({ control }: any) => control,
  TextInput: ({ value, onChange, placeholder }: any) => (
    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
    />
  ),
  Select: ({ options, value, onChange }: any) => (
    <select value={value} onChange={(e) => onChange(e.target.value)}>
      {options.map((opt: any) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  ),
  LoadingIndicator: () => <div>Loading...</div>,
  Alert: ({ children }: { children: React.ReactNode }) => <div role="alert">{children}</div>,
  Checkbox: ({ checked, onChange, label }: any) => (
    <label>
      <input
        type="checkbox"
        checked={checked}
        onChange={() => onChange(!checked)}
      />
      {label}
    </label>
  ),
  Grid: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  Box: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  ImageCard: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
}));

// Mock fetch for RSS parsing
global.fetch = jest.fn();

// Mock window.location
Object.defineProperty(window, 'location', {
  value: {
    href: 'http://localhost:3000',
    origin: 'http://localhost:3000',
  },
  writable: true,
});