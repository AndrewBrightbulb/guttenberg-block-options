import { isString, toLower } from 'lodash'
import { useUserStore } from '../state/User'

/**
 * Will check if the given string contains the search string
 *
 * @param {string} string
 * @param {string} searchString
 */

export function search(string, searchString) {
    // type validation
    if (!isString(string) || !isString(searchString)) {
        return false
    }

    // changing case
    string = toLower(string)
    searchString = toLower(searchString)

    // comparing
    return -1 !== searchString.indexOf(string)
        ? true
        : false
}

export const openModal = (source) => setModalVisibility(source, 'open')
// export const closeModal = () => setModalVisibility('', 'close')
export function setModalVisibility(source = 'broken-event', state = 'open') {
    window.dispatchEvent(new CustomEvent(`extendify-sdk::${state}-library`, {
        detail: source,
        bubbles: true,
    }))
    useUserStore.setState({
        entryPoint: source,
    })
}

export function getPluginDescription(plugin) {
    switch (plugin) {
        case 'editorplus': return 'Editor Plus'
        case 'ml-slider': return 'MetaSlider'
    }
    return plugin
}