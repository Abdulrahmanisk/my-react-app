import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/my-react-app/', // Replace 'your-repo-name' with your GitHub repository name
  plugins: [react()],
});
