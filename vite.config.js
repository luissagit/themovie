import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@themovie/components': path.resolve(__dirname, './src/base/presentation/components'),
            '@themovie/base': path.resolve(__dirname, './src/base'),
            '@themovie': path.resolve(__dirname, './src/'),
        },
    },
});
