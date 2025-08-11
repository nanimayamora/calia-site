import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}","./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: { sage:"#A8B49A", clay:"#C8A989", sand:"#E7E0D8", ivory:"#FBF9F6", ink:"#1F2328", brass:"#9C7C4F" }
    }
  },
  plugins: []
};
export default config;
