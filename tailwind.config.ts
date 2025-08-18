// import type { Config } from "tailwindcss";

// export default {
//   darkMode: ["class"],
//   content: ["./client/**/*.{ts,tsx}"],
//   prefix: "",
//   theme: {
//     container: {
//       center: true,
//       padding: "2rem",
//       screens: {
//         "2xl": "1400px",
//       },
//     },
//     extend: {
//       colors: {
//         border: "hsl(var(--border))",
//         input: "hsl(var(--input))",
//         ring: "hsl(var(--ring))",
//         background: "hsl(var(--background))",
//         foreground: "hsl(var(--foreground))",
//         primary: {
//           DEFAULT: "hsl(var(--primary))",
//           foreground: "hsl(var(--primary-foreground))",
//         },
//         secondary: {
//           DEFAULT: "hsl(var(--secondary))",
//           foreground: "hsl(var(--secondary-foreground))",
//         },
//         destructive: {
//           DEFAULT: "hsl(var(--destructive))",
//           foreground: "hsl(var(--destructive-foreground))",
//         },
//         muted: {
//           DEFAULT: "hsl(var(--muted))",
//           foreground: "hsl(var(--muted-foreground))",
//         },
//         accent: {
//           DEFAULT: "hsl(var(--accent))",
//           foreground: "hsl(var(--accent-foreground))",
//         },
//         popover: {
//           DEFAULT: "hsl(var(--popover))",
//           foreground: "hsl(var(--popover-foreground))",
//         },
//         card: {
//           DEFAULT: "hsl(var(--card))",
//           foreground: "hsl(var(--card-foreground))",
//         },
//         sidebar: {
//           DEFAULT: "hsl(var(--sidebar-background))",
//           foreground: "hsl(var(--sidebar-foreground))",
//           primary: "hsl(var(--sidebar-primary))",
//           "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
//           accent: "hsl(var(--sidebar-accent))",
//           "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
//           border: "hsl(var(--sidebar-border))",
//           ring: "hsl(var(--sidebar-ring))",
//         },
//       },
//       borderRadius: {
//         lg: "var(--radius)",
//         md: "calc(var(--radius) - 2px)",
//         sm: "calc(var(--radius) - 4px)",
//       },
//       keyframes: {
//         "accordion-down": {
//           from: {
//             height: "0",
//           },
//           to: {
//             height: "var(--radix-accordion-content-height)",
//           },
//         },
//         "accordion-up": {
//           from: {
//             height: "var(--radix-accordion-content-height)",
//           },
//           to: {
//             height: "0",
//           },
//         },
//         "fade-in-up": {
//           "0%": {
//             opacity: "0",
//             transform: "translateY(30px)",
//           },
//           "100%": {
//             opacity: "1",
//             transform: "translateY(0)",
//           },
//         },
//         "move-up-down": {
//           "0%, 100%": {
//             transform: "translateY(0px)",
//           },
//           "50%": {
//             transform: "translateY(-20px)",
//           },
//         },
//         "move-up-down-delayed": {
//           "0%, 100%": {
//             transform: "translateY(0px)",
//           },
//           "50%": {
//             transform: "translateY(-15px)",
//           },
//         },
//         "move-up-down-reverse": {
//           "0%, 100%": {
//             transform: "translateY(-10px)",
//           },
//           "50%": {
//             transform: "translateY(10px)",
//           },
//         },
//         "move-up-down-fast": {
//           "0%, 100%": {
//             transform: "translateY(0px)",
//           },
//           "50%": {
//             transform: "translateY(-25px)",
//           },
//         },
//         "grid-fade": {
//           "0%": {
//             opacity: "0",
//           },
//           "100%": {
//             opacity: "1",
//           },
//         },
//         "float-slow": {
//           "0%, 100%": {
//             transform: "translateY(0px) rotate(0deg)",
//           },
//           "50%": {
//             transform: "translateY(-10px) rotate(3deg)",
//           },
//         },
//         "float-reverse": {
//           "0%, 100%": {
//             transform: "translateY(-5px) rotate(0deg)",
//           },
//           "50%": {
//             transform: "translateY(5px) rotate(-3deg)",
//           },
//         },
//         "float-fast": {
//           "0%, 100%": {
//             transform: "translateY(0px) rotate(0deg)",
//           },
//           "50%": {
//             transform: "translateY(-15px) rotate(6deg)",
//           },
//         },
//       },
//       animation: {
//         "accordion-down": "accordion-down 0.2s ease-out",
//         "accordion-up": "accordion-up 0.2s ease-out",
//         "fade-in-up": "fade-in-up 0.6s ease-out",
//         "move-up-down": "move-up-down 3s ease-in-out infinite",
//         "move-up-down-delayed": "move-up-down-delayed 4s ease-in-out infinite 1s",
//         "move-up-down-reverse": "move-up-down-reverse 3.5s ease-in-out infinite 0.5s",
//         "move-up-down-fast": "move-up-down-fast 2.5s ease-in-out infinite",
//         "grid-fade": "grid-fade 2s ease-in-out",
//         "float-slow": "float-slow 6s ease-in-out infinite",
//         "float-reverse": "float-reverse 5s ease-in-out infinite",
//         "float-fast": "float-fast 4s ease-in-out infinite",
//       },
//     },
//   },
//   plugins: [require("tailwindcss-animate")],
// } satisfies Config;


import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./client/**/*.{ts,tsx}", // keep your client paths
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./hooks/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
    "./*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "move-up-down": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "move-up-down-delayed": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-15px)" },
        },
        "move-up-down-reverse": {
          "0%, 100%": { transform: "translateY(-10px)" },
          "50%": { transform: "translateY(10px)" },
        },
        "move-up-down-fast": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-25px)" },
        },
        "grid-fade": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-10px) rotate(3deg)" },
        },
        "float-reverse": {
          "0%, 100%": { transform: "translateY(-5px) rotate(0deg)" },
          "50%": { transform: "translateY(5px) rotate(-3deg)" },
        },
        "float-fast": {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-15px) rotate(6deg)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in-up": "fade-in-up 0.6s ease-out",
        "move-up-down": "move-up-down 3s ease-in-out infinite",
        "move-up-down-delayed": "move-up-down-delayed 4s ease-in-out infinite 1s",
        "move-up-down-reverse": "move-up-down-reverse 3.5s ease-in-out infinite 0.5s",
        "move-up-down-fast": "move-up-down-fast 2.5s ease-in-out infinite",
        "grid-fade": "grid-fade 2s ease-in-out",
        "float-slow": "float-slow 6s ease-in-out infinite",
        "float-reverse": "float-reverse 5s ease-in-out infinite",
        "float-fast": "float-fast 4s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
