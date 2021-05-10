echo "Updates Theme Properties"

tsc listThemeProperties.ts --esModuleInterop --outDir build && node build/listThemeProperties.js