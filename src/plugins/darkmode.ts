import Vue from 'vue'
import * as storage from 'store'

export function genDarkQuery() {
    try {
        return window.matchMedia('(prefers-color-scheme: dark)')
    } catch (error) {
        return null
    }
}

export interface ThemeObserver {
    value: ('light' | 'dark'),
    set: (value: ('light' | 'dark')) => void
}

export const storagValue: ThemeObserver['value'] | undefined = storage.get('theme')

export const theme: ThemeObserver = Vue.observable({
    value: storagValue || (genDarkQuery()?.matches ? 'dark' : 'light'),
    set(value) {
        this.value = value
        storage.set('theme', value)
        document.documentElement.setAttribute('data-theme', this.value)
    }
})