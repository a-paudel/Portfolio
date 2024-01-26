import { defineConfig, presetIcons, presetUno } from "unocss";
import { presetWebFonts } from "unocss";
import transformerVariantGroup from '@unocss/transformer-variant-group'
import extractorSvelte from "@unocss/extractor-svelte"

export default defineConfig({
    presets: [
        presetUno({
            dark: "class",
        }),
        presetWebFonts({ provider: "bunny", fonts: { "sans": "Ubuntu" } }),
        presetIcons({
            collections: {
                carbon: () => import("@iconify-json/carbon/icons.json").then((i) => i.default),
            }
        }),
    ],
    extractors: [
        extractorSvelte(),
    ],
    transformers: [
        transformerVariantGroup(),
    ],
    theme: {
        colors: {
            // base background
            "background": "#f7f7f7",
            "foreground": "#1c1c1c",
            // muted
            "muted": "#bababa",
            "muted-foreground": "#454545",
            // for cards
            "card": "#f7f7f7",
            "card-foreground": "#1c1c1c",
            // dialogs
            "popover": "#f7f7f7",
            "popover-foreground": "#1c1c1c",
            // default border color
            "border": "#bababa",
            // border for inputs
            "input": "#bababa",
            // primary button color
            "primary": "#2844b0",
            "primary-foreground": "#f7f7f7",
            // secondary button color
            "secondary": "#676c82",
            "secondary-foreground": "#f7f7f7",
            // danger button
            "danger": "#992828",
            "danger-foreground": "#f7f7f7",
            // success button
            "success": "#47803d",
            "success-foreground": "#f7f7f7",
            // hover / shadow effects
            "accent": "#61695f",
            "accent-foreground": "#f7f7f7",
        },
    },
    shortcuts: {
        "colbase": "font-sans bg-background text-foreground dark:bg-foreground dark:text-background",
        "colcard": "bg-card text-card-foreground dark:bg-card-foreground dark:text-card-background",
        "colmuted": "bg-muted text-muted-foreground dark:text-muted-foreground dark:bg-muted-foreground",
        "colpopover": "bg-popover text-popover-foreground dark:bg-popover-foreground dark:text-popover-background",
        "colprimary": "bg-primary text-primary-foreground",
        "colsecondary": "bg-secondary text-secondary-foreground",
        "colsuccess": "bg-success text-success-foreground",
        "coldanger": "bg-danger text-danger-foreground",
        "link": "decoration-none text-muted-foreground hover:text-foreground dark:text-muted dark:hover:text-background cursor-pointer",
        "shadow": "shadow shadow-accent shadow-opacity-50",
        "border": "border-1 border-solid border-border rounded",
        "card": "colcard border-border border-solid border rounded p4 shadow",
        "button": "border border-solid border-border rounded p4 shadow cursor-pointer",
    }
})