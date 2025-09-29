import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				// SkyySkill AI-Ready Brand Colors - Enhanced Futuristic Palette
				navy: 'hsl(var(--navy))',
				'dark-navy': 'hsl(var(--dark-navy))',
				aqua: 'hsl(var(--aqua))',
				cyan: 'hsl(var(--cyan))',
				'electric-blue': 'hsl(var(--electric-blue))',
				green: 'hsl(var(--green))',
				orange: 'hsl(var(--orange))',
				violet: 'hsl(var(--violet))',
				'purple-pink': 'hsl(var(--purple-pink))',
				'glow-purple': 'hsl(var(--glow-purple))',
				'glow-cyan': 'hsl(var(--glow-cyan))',
				'tech-orange': 'hsl(var(--tech-orange))',
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'slide-in': {
					'0%': {
						transform: 'translateX(-100%)'
					},
					'100%': {
						transform: 'translateX(0)'
					}
				},
				'float': {
					'0%, 100%': {
						transform: 'translateY(0)'
					},
					'50%': {
						transform: 'translateY(-10px)'
					}
				},
				'marquee': {
					'0%': {
						transform: 'translateX(0%)'
					},
					'100%': {
						transform: 'translateX(-50%)'
					}
				},
				'neural-pulse': {
					'0%, 100%': {
						boxShadow: '0 0 10px hsl(var(--cyan) / 0.3), 0 0 20px hsl(var(--electric-blue) / 0.2)',
						transform: 'scale(1)'
					},
					'50%': {
						boxShadow: '0 0 30px hsl(var(--cyan) / 0.6), 0 0 60px hsl(var(--electric-blue) / 0.4)',
						transform: 'scale(1.02)'
					}
				},
				'ai-breathe': {
					'0%, 100%': {
						opacity: '0.4',
						transform: 'scale(0.98)'
					},
					'50%': {
						opacity: '0.8',
						transform: 'scale(1.02)'
					}
				},
				'data-flow': {
					'0%': {
						transform: 'translateX(-100%) translateY(0)',
						opacity: '0'
					},
					'10%': {
						opacity: '1'
					},
					'90%': {
						opacity: '1'
					},
					'100%': {
						transform: 'translateX(100%) translateY(0)',
						opacity: '0'
					}
				},
				'hologram': {
					'0%, 100%': {
						textShadow: '0 0 5px hsl(var(--cyan) / 0.5), 0 0 10px hsl(var(--aqua) / 0.3)',
						transform: 'translateY(0)'
					},
					'50%': {
						textShadow: '0 0 10px hsl(var(--cyan) / 0.8), 0 0 20px hsl(var(--aqua) / 0.6), 0 0 30px hsl(var(--electric-blue) / 0.4)',
						transform: 'translateY(-1px)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.6s ease-out',
				'slide-in': 'slide-in 0.5s ease-out',
				'float': 'float 3s ease-in-out infinite',
				'marquee': 'marquee 30s linear infinite',
				'neural-pulse': 'neural-pulse 3s ease-in-out infinite',
				'ai-breathe': 'ai-breathe 4s ease-in-out infinite',
				'data-flow': 'data-flow 3s linear infinite',
				'hologram': 'hologram 2s ease-in-out infinite'
			},
			backgroundImage: {
				'gradient-primary': 'var(--gradient-primary)',
				'gradient-hero': 'var(--gradient-hero)',
				'gradient-ai': 'var(--gradient-ai)',
				'gradient-card': 'var(--gradient-card)',
				'gradient-glow': 'var(--gradient-glow)',
				'gradient-orb-1': 'var(--gradient-orb-1)',
				'gradient-orb-2': 'var(--gradient-orb-2)',
				'gradient-glass': 'var(--gradient-glass)'
			},
			boxShadow: {
				'elegant': 'var(--shadow-elegant)',
				'glow': 'var(--shadow-glow)',
				'ai-glow': 'var(--shadow-ai-glow)',
				'neural': 'var(--shadow-neural)',
				'card': 'var(--shadow-card)',
				'orb': 'var(--shadow-orb)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
