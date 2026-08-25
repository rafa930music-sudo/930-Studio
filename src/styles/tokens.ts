/**
 * Central Design System Tokens — "Blanco Roto Profesional" & "Neon Dark Architecture"
 */

export const tokens = {
  colors: {
    light: {
      bg: {
        primary: '#FAFAFC', // Blanco roto frío (fondo base app)
        secondary: '#F5F5F7', // Fondo secundario (editor canvas, strips)
        tertiary: '#F0F0F3', // Hover & subtle wells
        card: '#FFFFFF', // Superficies elevadas (tarjetas, modales, paneles)
        cardHover: '#FFFFFF',
        cardBorder: '#E5E7EB',
        cardBorderHover: '#D1D5DB',
        glass: 'rgba(255, 255, 255, 0.92)',
        elevated: '#FFFFFF'
      },
      text: {
        primary: '#0F172A', // Títulos y encabezados
        secondary: '#334155', // Texto normal y subtítulos
        tertiary: '#64748B', // Texto secundario y descriptivo
        muted: '#94A3B8',
        inverse: '#FFFFFF'
      }
    },
    dark: {
      bg: {
        primary: '#0A0A0F',
        secondary: '#12121A',
        tertiary: '#181824',
        card: '#12121A',
        cardHover: '#1A1A24',
        cardBorder: 'rgba(255, 255, 255, 0.08)',
        cardBorderHover: 'rgba(0, 229, 255, 0.6)',
        glass: 'rgba(18, 18, 26, 0.88)',
        elevated: '#1E1E2C'
      },
      text: {
        primary: '#FFFFFF',
        secondary: '#94A3B8',
        tertiary: '#64748B',
        muted: '#475569',
        inverse: '#0F172A'
      }
    },
    neon: {
      cyan: '#00E5FF',
      cyanHover: '#00B8D4',
      magenta: '#FF00E5',
      purple: '#B900FF',
      green: '#00FF88',
      rose: '#FF2E63',
      amber: '#FF9500',
      blue: '#0071E3'
    },
    status: {
      success: '#00FF88',
      warning: '#FF9500',
      error: '#FF2E63',
      info: '#00E5FF'
    }
  },
  typography: {
    fontFamily: {
      sans: "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      mono: "'JetBrains Mono', 'SF Mono', Menlo, Monaco, Consolas, monospace"
    },
    weights: {
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800
    },
    sizes: {
      caption: '12px',
      bodySm: '14px',
      body: '16px',
      h3: '18px',
      h2: '24px',
      h1: '32px',
      display: '44px',
      hero: '56px'
    }
  },
  radii: {
    btn: '8px',
    card: '12px',
    modal: '16px',
    pill: '9999px'
  },
  shadows: {
    soft: '0 1px 3px rgba(0, 0, 0, 0.04), 0 4px 12px rgba(0, 0, 0, 0.04)',
    medium: '0 4px 16px rgba(0, 0, 0, 0.08)',
    modal: '0 20px 40px rgba(0, 0, 0, 0.1)',
    neonCyan: '0 8px 24px rgba(0, 229, 255, 0.12)',
    neonGlow: '0 0 20px rgba(0, 229, 255, 0.35)'
  }
};
