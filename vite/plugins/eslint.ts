import eslint from "vite-plugin-eslint"

export default function setupEslint() {
    return eslint({ lintOnStart: true, cache: false })
}
